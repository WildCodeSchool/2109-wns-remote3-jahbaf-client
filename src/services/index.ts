import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: localStorage.getItem('session_id') || ''
    }
});
