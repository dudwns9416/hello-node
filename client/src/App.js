import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LangdingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr/>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/about" component={LoginPage}/>
                    <Route path="/dashboard" component={RegisterPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
