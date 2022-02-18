import Login from 'components/Login/Login.component';
import Signup from 'components/Signup/Signup.component';
import { Routes } from './Routes.enum';

/* eslint no-unused-vars: 0 */
export enum NeedsAuth {
    YES,
    NO,
    DONT_MATTER,
}

export type RouteType = {
    path: string;
    component: (props: any) => JSX.Element;
    needsAuth: NeedsAuth;
    props?: any;
    exact?: boolean;
};

export const routes: RouteType[] = [
    {
        path: Routes.LOGIN,
        component: Login,
        needsAuth: NeedsAuth.NO
    },
    {
        path: Routes.SIGNUP,
        component: Signup,
        needsAuth: NeedsAuth.NO
    }
];
