import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';

import { Button } from 'components';
import Form from 'components/Form/Form.component';
import InputForm from 'components/Form/InputForm/InputForm.component';
import { ISignupProps, ISignupValidationProps } from './Signup.props';
import waves from 'assets/images/waves.svg';
import beaver from 'assets/images/beaver.png';
import { useMutation } from '@apollo/client';
import { SIGNUP_MUTATION } from 'services/auth.service';
import { emailRegexp, passwordRegexp } from 'helpers/loginValidationPolicy';
import './Signup.style.scss';
import { onInputChange } from 'helpers/auth.helpers';
import { useSetHeaders } from 'hooks/useSetHeaders.hook';
import { Routes } from 'routes/Routes.enum';

const Signup = () => {
    const history = useHistory();
    const [formValidation, setFormValidation] = useState<ISignupValidationProps>({
        nicknameValidation: '',
        emailValidation: '',
        passwordValidation: '',
        confirmPasswordValidation: ''
    });
    const { nicknameValidation, emailValidation, passwordValidation, confirmPasswordValidation } = formValidation;
    const [triggerValidation, setTriggerValidation] = useState(false);
    const [userInput, setUserInput] = useState<ISignupProps>({
        nickname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [signupSubmit] = useMutation(SIGNUP_MUTATION, {
        onCompleted: ({ signUp: token }) => {
            useSetHeaders(token); // Set session_id in local storage and update context headers then redirect to '/'
            history.push(Routes.HOME);
        }
    });

    const { nickname, email, password, confirmPassword } = userInput;

    /**
     *  Check if the user input is valid
     * @returns boolean
     */
    function isFormValid () {
        return nickname.length > 4 && email.match(emailRegexp) && password.match(passwordRegexp) && confirmPassword && (password === confirmPassword);
    }

    useEffect(() => {
        setFormValidation({
            nicknameValidation: nickname.length < 4
                ? 'Votre pseudo doit contenir au moins 4 caractères'
                : '',
            emailValidation: !email.match(emailRegexp)
                ? 'Votre email doit être au format suivant: john@mail.com'
                : '',
            passwordValidation: !password.match(passwordRegexp)
                ? 'Votre mot de passe doit contenir minimum 8 caractères, un symbol, un chiffre et une majuscule'
                : '',
            confirmPasswordValidation: password !== confirmPassword
                ? 'Vos deux mots de passe doivent être identiques'
                : ''
        });
    }, [userInput]);

    function onSignupSubmit (): void {
        if (isFormValid()) {
            signupSubmit({
                variables: {
                    email,
                    password
                }
            });
        }
        setTriggerValidation(true);
    }

    return (
        <>
            <div className="login">
                <div className="login__card">
                    <img className="beaver-logo" src={beaver} alt="" />
                    <Form classname="signup__form">
                        <h1 className='signup__title'>S&apos;inscrire</h1>
                        <InputForm
                            name="nickname"
                            value={nickname}
                            placeholder="nickname"
                            isRequired
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                            type='text'
                        />
                        {triggerValidation && nicknameValidation && <p className="form-error">{nicknameValidation}</p>}
                        <InputForm
                            name="email"
                            value={email}
                            placeholder="Email"
                            isRequired
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                            type='email'
                        />
                        {triggerValidation && emailValidation && <p className="form-error">{emailValidation}</p>}
                        <InputForm
                            name="password"
                            value={password}
                            placeholder="Mot de passe"
                            isRequired
                            type="password"
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                        />
                        {triggerValidation && passwordValidation && <p className="form-error">{passwordValidation}</p>}
                        <InputForm
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirmation de mot de passe"
                            isRequired
                            type="password"
                            onChange={(event) => onInputChange(event, setUserInput, userInput)}
                        />
                        {triggerValidation && confirmPasswordValidation && <p className="form-error">{confirmPasswordValidation}</p>}
                        <Button
                            width="100%"
                            content="S'inscrire"
                            onClickAction={onSignupSubmit}
                            submit
                        />
                    </Form>
                </div>
            </div>
            <img className="login-page--waves" src={waves} alt="Wavy background" />
        </>
    );
};

export default Signup;
