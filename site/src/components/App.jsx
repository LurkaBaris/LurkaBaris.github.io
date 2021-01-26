import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import history from "../url/history";
import Home from "./views/home/Home";
import List from "./list/List";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/common.css";
import "../styles/base.css";

const App = ({ list }) => {
  return (
    <Router history={history}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/queue"
            render={(props) => (
              <List
                {...props}
                type="queue"
                data={list.filter((item) => item.status === 0)}
              />
            )}
          />
          <Route
            path="/passed"
            render={(props) => (
              <List
                {...props}
                type="passed"
                data={list.filter((item) => item.status === 1)}
              />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = ({ list }) => {
  return {
    list,
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
