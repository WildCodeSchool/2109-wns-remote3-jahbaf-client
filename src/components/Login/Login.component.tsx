import { Button } from 'components';
import Form from 'components/Form/Form.component';
import InputForm from 'components/Form/InputForm/InputForm.component';
import React, { useState } from 'react';
import waves from 'assets/images/waves.svg';
import beaver from 'assets/images/beaver.png';
import { ILoginProps } from './Login.props';
import './Login.style.scss';
import { emailRegexp, passwordRegexp } from 'helpers/loginValidationPolicy';

//

const Login = () => {
    const [error, setError] = useState({
        email: '',
        password: ''
    });
    const [userInput, setUserInput] = useState<ILoginProps>({
        email: '',
        password: '',
        shouldRemember: false
    });
    // Créer enum avec message d'erreur
    // function isValid (value: string, regexp: RegExp): void {
    //     if (!value.match(regexp)) {
    //         setError({ ...error, [value]: 'Invalid email address' });
    //     } else {
    //         setError({ ...error, [value]: '' });
    //     }
    // }

    /**
     * To use this function, you need to pass the name of the input through. It allows us to
     * know which key needs to be filled in.
     * @param e
     */
    function onInputChange (e: React.ChangeEvent<HTMLInputElement>): void {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value });
    }

    function onLoginSubmit (): void {
        const { email, password } = userInput;
        if (!email.match(emailRegexp)) {
            setError({ ...error, email: 'Invalid email address' });
        }
        if (!password.match(passwordRegexp)) {
            setError({ ...error, password: 'Votre mot de passe doit contenir au moins 8 caractères, 1 majuscule et un caractère spécial' });
        }
    }

    const { email, password } = userInput;
    return (
        <>
            <div className="login">
                <div className="login__card">
                    <img className="beaver-logo" src={beaver} alt="" />
                    <Form>
                        <InputForm
                            name="email"
                            value={email}
                            placeholder="Email"
                            isRequired
                            onChange={onInputChange}
                        />
                        {error.email && <p className="error">{error.email}</p>}
                        <InputForm
                            name="password"
                            value={password}
                            placeholder="Mot de passe"
                            isRequired
                            type="password"
                            onChange={onInputChange}
                        />
                        {error.password && <p className="error">{error.password}</p>}
                        <InputForm
                            isRequired
                            type="checkbox"
                            onChange={onInputChange}
                        />
                        <Button
                            width="100%"
                            content="Login"
                            onClickAction={onLoginSubmit}
                        />
                    </Form>
                </div>
            </div>
            <img className="login-page--waves" src={waves} alt="Wavy background" />
        </>
    );
};

export default Login;
