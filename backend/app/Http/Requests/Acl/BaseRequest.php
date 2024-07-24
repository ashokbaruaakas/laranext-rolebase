<?php

namespace App\Http\Requests\Acl;

use App\Utils\ApiHttpCode;
use App\Utils\ApiStatusCode;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\ValidationException;

class BaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }

    protected function passedValidation(): void
    {
        $request = $this->all();
        $rules = array_keys($this->rules());
        $final_data = [];
        if (!empty($rules)) {
            foreach ($rules as $rule) {
                if (isset($request[$rule])) {
                    $final_data[$rule] = $request[$rule];
                }
            }
        }

        $this->replace($final_data);
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = (new ValidationException($validator))->errors();

        $result = [];
        foreach ($errors as $key => $error){
            $result[$key] = current($error);
        }

        throw new HttpResponseException(sendErrorResponse(ApiStatusCode::VALIDATION_ERROR, __('Validation Error'), $result, ApiHttpCode::validationError));
    }
}
