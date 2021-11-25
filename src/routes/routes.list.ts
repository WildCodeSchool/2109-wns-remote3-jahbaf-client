// import { Connexion } from 'pages/Connexion';

import Login from 'components/Login/Login.component';

/* eslint no-unused-vars: 0 */
export enum NeedsAuth {
    YES,
    NO,
    DONT_MATTER
}

export type RouteType = {
    path: string,
    component: () => JSX.Element,
    needsAuth: boolean,
    props?: any,
    exact?: boolean
}

export const routes: RouteType[] = [
    {
        path: '/login',
        component: Login,
        needsAuth: false
    }
];
