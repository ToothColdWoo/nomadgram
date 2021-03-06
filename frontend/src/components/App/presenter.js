import React from 'react';
import propTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import './styles.scss';
import Footer from "components/Footer"
import Auth from "components/Auth"

const App = props => [
    // Return Nav,
    props.isLoggedIn ? <PrivateRoutes key = {2} /> : <PublicRoutes key = {2} />, // Return Routes,
    <Footer key={3} />// Return Footer
];

App.propTypes = {
    isLoggedIn: propTypes.bool.isRequired
};

const PrivateRoutes = props =>(
    <Switch>
        <Route exact path = "/" render={() => "feed"} />
        <Route exact path = "/explore" render={() => "explore"} />
    </Switch>
)

const PublicRoutes = props => (
    <Switch>
    <Route exact path = "/" component={Auth} />
    <Route exact path = "/forgot" render={() => "password"} />
</Switch>
)


export default App;