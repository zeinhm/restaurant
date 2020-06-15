import React from 'react';
import Home from 'pages/Home'
import Order from 'pages/Order'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ViewportRestrict from './components/viewport/index'

function App() {
  return (
    <Router>
      <ViewportRestrict type="landscape" display={true}
        text="Please turn your smartphone to a portrait position for better visuals"
      />
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
