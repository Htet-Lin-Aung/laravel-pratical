<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use App\Models\Survey;
use App\Http\Requests\SurveyRequest;
use Notification;
use App\Notifications\EmailNotification;

class SurveyController extends Controller
{
    public function list()
    {
        $forms = Form::get();

        $data = collect();
        foreach ($forms as $form) {
            $data->add([
                'id'          => $form->id,
                'name'        => $form->name,
                'fields'      => $form->fields,
            ]);
        }
        return response()->json([
            'data' => $data,
        ]);
    }

    public function survey(SurveyRequest $request)
    {   
        $response = $this->checkAlreadyExist($request);

        if($response)
        {
            return response()->json([
                'status' => 500,
                'message' => 'You already answer this survey'
            ]);
        }             

        $responseCreate = $this->createSurvey($request);
        return response()->json($responseCreate);
    }

    public function checkAlreadyExist($request)
    {
        $survey = Survey::where('user_id',auth()->id())->where('form_id',$request->form_id)->first();
        
        return $survey;
    }

    public function createSurvey($request)
    {
        $form = Form::findOrFail($request->form_id);

        foreach($form->fields as $field)
        {
            $data['user_id'] = auth()->id();
            $data['form_id'] = $request->form_id;
            $data['code'] = $field->code;
            $data['answer'] = request($field->code);
            
            Survey::create($data);
        }

        $user = auth()->user();

        $details = [
            'greeting' => 'Dear '.$user->name,
            'body' => 'This is Survey.',
            'thanks' => 'Thank you for your answer!',
            'actionText' => 'View My Site',
            'actionURL' => url('/'),
        ];
  
        Notification::send($user, new EmailNotification($details));
        
        return [
            'status' => 200,
            'message' => 'Thank you for your answer.'
        ];
    }
}
