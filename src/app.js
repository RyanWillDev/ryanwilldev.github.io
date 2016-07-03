import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import Layout from './components/Layout';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

ReactDOM.render((
  <Router history={appHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
    </Route>
  </Router>
), document.getElementById('root'));
