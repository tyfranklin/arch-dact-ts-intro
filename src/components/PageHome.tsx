import React from 'react';
import { Header, Icon, Container } from 'semantic-ui-react';
import './PageHome.css';

const PageHome: React.FC = () => {
  return (
    <div className="page-home">
      <div className="centering-container">
        <Header as="h2" icon textAlign="center">
          <Icon name="user" circular />
          <Header.Content>Your Name</Header.Content>
        </Header>
        <Container>
          Hi, I'm so-and-so. I'm a student at Borough of Manhattan Community
          College and a web app developer.
        </Container>
      </div>
    </div>
  );
};

export default PageHome;
