import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './App.css';
import PageHome from './components/PageHome';
import PageResume from './components/PageResume';

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
        <Menu.Item
          active={pathname === '/about'}
          name="About Me"
          icon="file alternate"
          as={Link}
          to="/about"
        />
      </Menu>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/about" component={PageResume} />
      </Switch>
    </div>
  );
});

export default App;
