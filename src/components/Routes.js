import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import Work from './Work'
import About from './About'

export default function Routes(props) {
    return (
        <Switch>
          <Route exact path="/">
            <About
              firebase={props.firebase}
            />
          </Route>
          <Route exact path="/work">
            <Work />
          </Route>
        </Switch>
    )
}