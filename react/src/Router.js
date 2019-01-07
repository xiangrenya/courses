import React, { lazy, Suspense } from 'react';
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    withRouter
} from 'react-router-dom';

const Home = loadable('/Home/Index');
const Todo = loadable('/Todo/Index');
const ThemedButton = loadable('/ThemedButton/Index');

function loadable(path) {
    return lazy(() => import(`./modules${path}`));
}

export const routes = [
    {
        key: 'index',
        name: '首页',
        path: '/',
        component: Home,
        exact: true
    },
    {
        key: 'todo',
        name: 'Todo',
        path: '/todo',
        component: Todo,
        exact: true
    },
    {
        key: 'button',
        name: '按钮换肤',
        path: '/button',
        component: ThemedButton,
        exact: true
    }
];
class MainRouter extends React.PureComponent {
    render() {
        return (
            <Router>
                <Suspense fallback={<div>正在加载中...</div>}>
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.key}
                                exact={route.exact}
                                path={route.path}
                                component={route.component}
                            />
                        ))}
                        <Route component={Home} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default MainRouter;
