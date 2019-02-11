import {
    createFormValidation,
    ValidationConstraints,
    Validators,
} from 'lc-form-validation';
import { Validator } from 'react';

const loginFormValidationContraints: ValidationConstraints = {
    fields: {
        login:[
            {validator: Validators.required}
        ],
        password: [
            {validator: Validators.required}
        ]
    }
};

export const loginFormValidationComponent = createFormValidation(loginFormValidationContraints);