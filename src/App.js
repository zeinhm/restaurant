import React from 'react';
import Home from 'pages/Home'
import Order from 'pages/Order'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Order} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
