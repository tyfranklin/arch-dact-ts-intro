import React from 'react';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import './App.css';
import PageHome from './components/PageHome';
import PageResume from './components/PageResume';
import PageProjects from './components/PageProjects';

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
          name="Resume"
          icon="file alternate"
          as={Link}
          to="/about"
        />
        <Menu.Item
          active={pathname === '/projects'}
          name="Projects"
          icon="lab"
          as={Link}
          to="/projects"
        />
        <Menu.Item
          active={pathname === '/contact'}
          name="Contact"
          icon="chat"
          as={Link}
          to="/contact"
        />
      </Menu>
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route exact path="/about" component={PageResume} />
        <Route exact path="/projects" component={PageProjects} />
      </Switch>
    </div>
  );
});

export default App;
