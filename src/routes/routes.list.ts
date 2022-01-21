import { Projects } from 'pages/Projects';
import { Project } from 'pages/Project';

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
        path: '/projets',
        component: Projects,
        needsAuth: NeedsAuth.YES,
        exact: true
    },
    {
        path: '/projet/:id',
        component: Project,
        needsAuth: NeedsAuth.YES,
        exact: true
    }
];
