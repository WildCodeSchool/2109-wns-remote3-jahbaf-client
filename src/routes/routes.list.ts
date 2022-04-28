import ConfirmAccount from 'components/ConfirmAccount/ConfirmAccount.component';
import Login from 'components/Login/Login.component';
import Signup from 'components/Signup/Signup.component';
import Home from 'pages/Home/Home';
import { Project } from 'pages/Project';
import { Projects } from 'pages/Projects';
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
        path: Routes.HOME,
        component: Home,
        needsAuth: NeedsAuth.YES,
        exact: true
    },
    {
        path: Routes.LOGIN,
        component: Login,
        needsAuth: NeedsAuth.NO
    },
    {
        path: Routes.SIGNUP,
        component: Signup,
        needsAuth: NeedsAuth.NO
    },
    {
        path: Routes.PROJECTS,
        component: Projects,
        needsAuth: NeedsAuth.YES,
        exact: true
    },
    {
        path: Routes.PROJECT,
        component: Project,
        needsAuth: NeedsAuth.YES,
        exact: true
    },
    {
        path: Routes.CONFIRM_ACCOUNT,
        component: ConfirmAccount,
        needsAuth: NeedsAuth.DONT_MATTER,
        exact: true
    }
];
