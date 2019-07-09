import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import PageHome from './components/PageHome';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PageHome} />
      </Switch>
    </div>
  );
};

export default App;
