import React from 'react';
import { Header, Container, Button, Divider, Image } from 'semantic-ui-react';
import './PageHome.css';
import yourProfilePhoto from '../images/your_pic.jpg';

const PageHome: React.FC = () => {
  return (
    <div className="page-home">
      <div className="centering-container">
        <Header as="h2" icon textAlign="center">
          <Image
            src={yourProfilePhoto}
            circular={true}
            style={{ height: 150, width: 150 }}
          />
          <Divider hidden={true} />
          <Header.Content>Your Name</Header.Content>
        </Header>
        <Container>
          Hi, I'm so-and-so. I'm a student at Borough of Manhattan Community
          College and a web app developer.
        </Container>
        <Divider />
        <Container>
          <Button circular color="black" icon="github" />
          <Button circular color="facebook" icon="facebook" />
          <Button circular color="twitter" icon="twitter" />
          <Button circular color="linkedin" icon="linkedin" />
          <Button circular color="instagram" icon="instagram" />
          <Button circular color="purple" icon="twitch" />
        </Container>
      </div>
    </div>
  );
};

export default PageHome;
