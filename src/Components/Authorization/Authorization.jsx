import React from 'react'
import { Field, reduxForm } from "redux-form";
import { email, required, password } from "../../Utils/validators";
import Input from "../Input/Input";

export default function Authorization(props) {
    const AuthorizationForm = (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                <Field component={Input} name='email' validate={[required, email]} />
                <Field component={Input} name='password' validate={[required, password]} />
                <button className="btn">Авторизоваться</button>
            </form>
        )
    }
    const AuthorizationReduxForm = reduxForm({ form: 'authorization' })(AuthorizationForm);
    const onSubmit = (formData) => {
        console.log(formData)
        let password = document.querySelector("#password-input").value;
        let email = document.querySelector("#email-input").value;
        props.authorizationPostThunkCreator(email, password);
    }

    return (
        <AuthorizationReduxForm onSubmit={onSubmit}/>
    )
}
