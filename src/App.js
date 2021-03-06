import Layout from 'antd/lib/layout/layout';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Main from './components/Layout';
import Courses from './components/Courses';
import Todo from './components/Todo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} exact/>
        <Route path="/dashboard" component={Main} exact/>
        <Route path="/courses" component={Courses} exact/>
        <Route path="/todo" component={Todo} exact/>
        <Route path="/404" component={PageNotFound} exact />
      </Switch>
    </Router>
  );
}

export default App;
