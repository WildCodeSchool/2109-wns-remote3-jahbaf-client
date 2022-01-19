import { Projects } from 'pages/Projects';
import { Project } from 'pages/Project';

import Login from 'components/Login/Login.component';

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
        path: '/login',
        component: Login,
        needsAuth: NeedsAuth.NO
    }
];
