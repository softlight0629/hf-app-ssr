import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import 'antd/dist/antd.css';
import { bundles } from './view/bundle';
import './App.css';


class App extends Component {


  render() {
    const routes = [];
    bundles.forEach(bundle => {
      const r = bundle.router;
      r.forEach(route => routes.push(<Route key={route.path} exact={route.exact} path={route.path} component={route.component} />))
    });

    return (
      <div className="app">
        <Switch>
          {
            routes
          }
        </Switch>
      </div>
    );
  }

}

export default App;
