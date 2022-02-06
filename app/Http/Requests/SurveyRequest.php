<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use App\Models\Form;

class SurveyRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        if(!request('form_id'))
        {
            return ["form_id"=>"required"];
        }

        $form = Form::findOrFail(request('form_id'));

        foreach($form->fields as $field)
        {
            $rules[$field->code] = "required";
        }

        return $rules;
    }

    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success'   => 422,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ]));
    }
}
