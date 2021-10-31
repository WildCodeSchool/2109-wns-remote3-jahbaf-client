import { Route, Switch } from 'react-router-dom';
import { RouteType, routes } from './routes.list';

export const Routes = () => {
    return (
        <Switch>
            {
                routes.map((route: RouteType) => (
                    <Route path={route.path} key={route.path} exact={route.exact || false}>
                        <route.component {...route.props}/>
                    </Route>
                ))
            }
        </Switch>
    );
};
