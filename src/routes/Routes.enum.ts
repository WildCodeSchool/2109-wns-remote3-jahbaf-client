/* eslint-disable no-unused-vars */
export enum Routes {
    HOME = '/',
    LOGIN = '/login',
    SIGNUP = '/signup',
    FORGOT_PASSWORD = '/forgot_password',
    PROJECTS = '/projects',
    PROJECT = '/project/:id',
    CONFIRM_ACCOUNT = '/confirm_account&token=:token',
    RESET_PASSWORD = '/reset_password&token=:token',
}
