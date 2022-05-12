import React, {useState} from 'react'

export default function Authorization(props) {
    const [emailName,setEmailName] = useState('');
    const [passwordName,setPasswordName] = useState('');

    return (
        <form>
            <input value={emailName} onChange={e => setEmailName(e.target.value)}  name='email'   />
            <input value={passwordName} onChange={e => setPasswordName(e.target.value)} name='password'   />
            <button className="btn">Авторизоваться</button>
        </form>
    )
}
