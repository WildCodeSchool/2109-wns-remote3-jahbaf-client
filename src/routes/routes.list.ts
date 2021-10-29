// import { Connexion } from 'pages/Connexion';

export type RouteType = {
    path: string,
    component: () => JSX.Element,
    needsAuth: boolean
}

export const routes: RouteType[] = [
    // {
    //     path: '/connexion',
    //     component: Connexion,
    //     needsAuth: false
    // }
];
