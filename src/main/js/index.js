import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import configureStore, {history} from "./store/store.js"
import App from "./components/app.js";

const store = configureStore();

window.render = (containerId, path) => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path={path} component={App}/>
                </Switch>
            </ConnectedRouter>
        </Provider>,
        document.getElementById("root")
    );
};
