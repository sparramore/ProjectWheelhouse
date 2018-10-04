import React, { Component } from 'react';
import './App.css';
import Index from "./pages/Default/default";
import Knowledge from "./pages/Knowledge/knowledge";
import Wheelhouse from "./pages/Wheelhouse/wheelhouse";
import NoMatch from "./pages/NoMatch";


import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
         <div>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/knowledge" component={Knowledge} />
            <Route exact path="/wheelhouse" component={Wheelhouse} />
            <Route component={NoMatch} />
          </Switch>
    </div>
      </BrowserRouter>

    );
  }
}

export default App;
