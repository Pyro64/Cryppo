import React from 'react'

export default function Authorization(props) {
    debugger;
    function Login(){
        let password = document.querySelector("#password-input").value;
        let email = document.querySelector("#email-input").value;
        props.authorizationPostThunkCreator(email, password);
    }
    return (
        <div>
            <div>Authorization</div>
            <input id='email-input'/>
            <input id='password-input'/>
            <button id='submit-button' onClick={Login}>Авторизоваться</button>
        </div>
    )
}
