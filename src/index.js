import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/index.css';
import { Home } from './home';
import { iLike } from "./iLike";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path='/ilike'    component={iLike} />
            <Route path='/'         component={Home} />
        </Switch>
    </Router>, document.getElementById('root'));
registerServiceWorker();
