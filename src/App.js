import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ShowList from './components/showList';
import ShowSummary from './components/showSummary';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <ShowList />
        </Route>
        <Route path="/shows/:id" exact>
          <ShowSummary/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
