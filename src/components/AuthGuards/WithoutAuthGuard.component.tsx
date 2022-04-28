import { Loader } from 'components';
import { useGetSelf } from 'hooks/useGetSelf.hook';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { Routes } from 'routes/Routes.enum';

const WithoutAuthGuard = ({ children }: any) => {
    const { isLoggedIn, loading } = useGetSelf();
    const history = useHistory();
    useEffect(() => {
        if (!loading) {
            isLoggedIn && history.push(Routes.PROJECTS);
        }
    }, [loading]);
    return (
        <>
            {loading ? <Loader /> : <>{children}</>}
        </>
    );
};

export default WithoutAuthGuard;
