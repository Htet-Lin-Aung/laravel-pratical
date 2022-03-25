<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Form;
use App\Models\Survey;
use App\Http\Requests\SurveyRequest;
use Notification;
use App\Notifications\EmailNotification;

class HomeController extends Controller
{
    

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $forms = Form::paginate(25);
        
        return view('home',compact('forms'));
    }

    public function survey(SurveyRequest $request)
    {   
        $response = $this->checkAlreadyExist($request);

        if($response)
        {
            return redirect()->route('home')->with('error','You have already answered this survey.');
        }             

        $responseCreate = $this->createSurvey($request);
        return redirect()->route('home')->with('success','Thank you for your survey');
    }

    public function checkAlreadyExist($request)
    {
        $survey = Survey::where('user_id',auth()->id())->where('form_id',$request->form_id)->first();
        return $survey;
    }

    public function createSurvey($request)
    {
        $form = Form::findOrFail($request->form_id);

        $form->surveys()->createMany($request);

        $user = auth()->user();

        $details = [
            'greeting' => 'Dear '.$user->name,
            'body' => 'This is Survey.',
            'thanks' => 'Thank you for your answer!',
            'actionText' => 'View My Site',
            'actionURL' => url('/'),
        ];
  
        Notification::send($user, new EmailNotification($details));
    }
}
