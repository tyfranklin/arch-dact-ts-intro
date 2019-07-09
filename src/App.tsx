import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import './App.css';
import PageHome from './components/PageHome';
import { Menu } from 'semantic-ui-react';

const App = withRouter(props => {
  const {
    location: { pathname }
  } = props;

  return (
    <div className="App">
      <Menu fixed={'top'} pointing={true} secondary={true}>
        <Menu.Item
          active={pathname === '/'}
          name="Home"
          icon="home"
          as={Link}
          to="/"
        />
      </Menu>
      <Switch>
        <Route exact path="/" component={PageHome} />
      </Switch>
    </div>
  );
});

export default App;
