import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './router.css'

import Home from '../views/home'
import Check from '../views/check'
import Story from '../views/story'
import NotFound from '../views/notFound'

export default () => {
  return (
    <Router>
      {/* <ul className="tab">
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/check">check</Link>
        </li>
        <li>
          <Link to="/story">story</Link>
        </li>
      </ul> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home} />
        <Route path="/check" component={Check} />
        <Route path="/story" component={Story} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}