import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_URL,
    cache: new InMemoryCache(),
    headers: {
        Authorization: localStorage.getItem('session_id') || ''
    }
});
