import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Books from './pages/Books';
import Categories from './pages/Categories';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="container d-flex justify-center align-center border-box">
          <Navbar />
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route exact path="/">
              <Books />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
