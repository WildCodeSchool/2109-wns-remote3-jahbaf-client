import { useQuery } from '@apollo/client';
import { SELF_QUERY } from 'services/auth.service';

export function useGetSelf () {
    const { data, ...rest } = useQuery(SELF_QUERY, {
        fetchPolicy: 'network-only'
    });
    const isLoggedIn = Boolean(data?.self.user.email);
    return { isLoggedIn, data, ...rest };
}