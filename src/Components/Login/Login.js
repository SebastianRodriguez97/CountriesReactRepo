import { useState, useEffect } from 'react';
import { Button, Checkbox, Form, Message } from 'semantic-ui-react'
import { Navigate } from "react-router-dom";
import { AddCurrentUser } from '../../Services/Service';

const userObj = {
    user: "superadministrador",
    password: "12345"
}

export default function Login() {
    const [user, setUser] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoggedin, setIsLoggedin] = useState(null);

    useEffect(() => {
        if (isLoggedin)
            AddCurrentUser(userObj);
    }, [isLoggedin]);

    const loginHandler = () => {
        setIsLoggedin(user === userObj.user && password === userObj.password);
    }

    const userHandler = (event) => {
        setUser(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const responseRender = () => {
        if (isLoggedin === null)
            return;

        else if (isLoggedin)
            return <Navigate to="/countries" replace />;

        else
            return (
                <Message color="red">
                    <b>Enter the right credential data, please</b>
                </Message>
            );
    }

    return (
        <>
            <Form>
                <Form.Field>
                    <label>User</label>
                    <input onChange={ userHandler } placeholder={ userObj.user } />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input type='password' onChange={ passwordHandler } placeholder={ userObj.password } />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <Button type='submit' color='blue' onClick={ loginHandler }>Login</Button>
            </Form>

            { responseRender() }
        </>
    );
}