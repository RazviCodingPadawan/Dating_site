import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import '../styles/LoginForm.css'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const {store} = useContext(Context);

    return (
        <form>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="current-password"
                placeholder='Password'
            />
            <button onClick={() => store.login(email, password)}>
                Login
            </button>
            <button onClick={() => store.registration(email, password)}>
                Registration
            </button>
        </form>
    );
};

export default observer(LoginForm);
