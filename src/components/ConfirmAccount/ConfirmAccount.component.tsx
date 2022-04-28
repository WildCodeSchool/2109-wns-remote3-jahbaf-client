import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router';
import { CONFIRM_ACCOUNT_MUTATION } from 'services/auth.service';
import { useSetHeaders } from 'hooks/useSetHeaders.hook';
import { Routes } from 'routes/Routes.enum';
import { Loader } from 'components/Loader';

const ConfirmAccount = () => {
    const history = useHistory();
    const { token } = useParams<{token: string}>();
    const [sendConfirmationToken] = useMutation(CONFIRM_ACCOUNT_MUTATION, {
        onCompleted: ({ confirmAccount: token }) => {
            useSetHeaders(token, 'session_id'); // Set session_id in local storage and update context headers then redirect to '/'
            history.push(Routes.PROJECTS);
            window.location.reload(); // Force self to refetch to access protected routes
        },
        onError: (error) => console.error('An error occured while confirming account', error)
    });
    useEffect(() => {
        sendConfirmationToken({ variables: { token } });
    }, []);
    return (
        <Loader />
    );
};

export default ConfirmAccount;
