// import { Connexion } from 'pages/Connexion';

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
    // {
    //     path: '/connexion',
    //     component: Connexion,
    //     needsAuth: false
    // }
];
