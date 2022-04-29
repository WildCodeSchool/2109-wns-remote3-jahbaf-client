import { setContext } from '@apollo/client/link/context';

/**
 *  Set headers in Apollo client context and store them in local storage
 * @param token string - Generated token from login or Signup mutation
 * @param key string - Key to set in local storage
 */
export function useSetHeaders (token: string, key?: string) {
    if (key) localStorage.setItem(key, token);
    setContext(() => ({
        headers: {
            Authorization: localStorage.getItem('session_id')
        }
    }));
}
