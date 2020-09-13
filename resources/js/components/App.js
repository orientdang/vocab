import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "../routes";
import Header from "./Header";



function RouteWithSubRoutes(route) {
    return (
        <Route
            path={ route.path }
            exact={ route.exact }
            render={ props => (
                // pass the sub-routes down to keep nesting
                <route.component { ...props } routes={ route.routes } />
            ) }
        />
    );
}

function App() {
    return (
        <Router >
            <div >
                <Header/>
                <Switch >
                    { routes.map((route, i) => (
                        <RouteWithSubRoutes key={ i } { ...route } />
                    )) }
                </Switch >
            </div >
        </Router >
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
