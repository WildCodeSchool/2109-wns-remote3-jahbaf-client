import { setContext } from '@apollo/client/link/context';

export function useSetHeaders (token: string) {
    localStorage.setItem('session_id', token);
    setContext(() => ({
        headers: {
            Authorization: localStorage.getItem('session_id')
        }
    }));
}
