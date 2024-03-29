import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import About from './pages/About';
import Root from './pages/Root';
import Router from './router/Router';
import Route from './router/Route';

const container = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
