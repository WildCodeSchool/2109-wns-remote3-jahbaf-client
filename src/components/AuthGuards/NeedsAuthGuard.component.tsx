import { Loader } from 'components';
import { useGetSelf } from 'hooks/useGetSelf.hook';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Routes } from 'routes/Routes.enum';

const NeedsAuthGuard = ({ children }: any) => {
    const history = useHistory();
    const { isLoggedIn, loading } = useGetSelf();
    useEffect(() => {
        if (!loading) {
            !isLoggedIn && history.push(Routes.LOGIN);
        }
    }, [loading]);

    return (
        <>
            {loading ? <Loader /> : <>{children}</>}
        </>
    );
};

export default NeedsAuthGuard;
