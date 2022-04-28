import { useLazyQuery } from '@apollo/client';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import InputForm from 'components/Form/InputForm/InputForm.component';
import { emailRegexp } from 'helpers/loginValidationPolicy';
import React, { useEffect, useState } from 'react';
import { SEND_USER_EMAIL_QUERY } from 'services/auth.service';
import './ForgotPassword.style.scss';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [formValidation, setFormValidation] = useState<boolean>();
    const [sendUserEmail] = useLazyQuery(SEND_USER_EMAIL_QUERY, {
        onCompleted: () => setEmail('')
    });

    useEffect(() => {
        setFormValidation(Boolean(email.match(emailRegexp)));
    }, [email]);

    function emailSubmit () {
        if (formValidation) {
            sendUserEmail({
                variables: {
                    email
                }
            });
        }
    }

    return (
        <div className='forgot-password--wrapper'>
            <Card isClosable={false}>
                <>
                    <h2 className='forgot-password--title'>Mot de passe oublié</h2>
                    <br />
                    <p>Entrez votre adresse e-mail, et nous vous enverrons un lien pour récupérer votre compte.</p>
                    <InputForm onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    {!formValidation && email.length >= 4 && <span className='form-validation--error'>Veuillez entrer un e-mail valable</span>}
                    <Button content='ENVOYER' onClickAction={emailSubmit} />
                </>
            </Card>
        </div>
    );
};

export default ForgotPassword;
