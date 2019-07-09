import React, { Component, MouseEvent } from 'react';
import './PageProjects.css';
import {
  Container,
  Card,
  Divider,
  Modal,
  Header,
  Button,
  CardProps,
  Image
} from 'semantic-ui-react';

interface PageProjectsProps {
  // tslint:disable-line
}

interface PageProjectsState {
  activeModal: number;
}

class PageProjects extends Component<PageProjectsProps, PageProjectsState> {
  public constructor(props: PageProjectsProps, context: object) {
    super(props, context);

    this.state = {
      activeModal: -1
    };
  }

  protected handleModalClose = () => this.setState({ activeModal: -1 });

  protected handleModalOpen = (
    _: MouseEvent,
    { index: activeModal }: CardProps
  ) => this.setState({ activeModal });

  private get modals() {
    const modalConfigs = [
      [
        'sun',
        'Drone-based anti-mosquito air superiority',
        'https://i.ytimg.com/vi/91gnkZGKGEY/maxresdefault.jpg'
      ],
      [
        'superpowers',
        'Climate crisis solved using legos',
        'https://cms.qz.com/wp-content/uploads/2017/07/lego-wind-turbines_landscape_high-e1501029441183.jpg'
      ],
      [
        'user secret',
        'Super secret classified project with pictures',
        'https://static.tvtropes.org/pmwiki/pub/images/secret_squirrel_1965_shush_3766.jpg'
      ]
    ];

    return modalConfigs.map(([icon, title, imgSrc], idx) => (
      <Modal
        key={`modal_${idx}`}
        open={this.state.activeModal === idx}
        onClose={this.handleModalClose}
        size="small"
      >
        <Header icon={icon} content={`Project #${idx + 1}`} />
        <Modal.Content>
          <h3>{title}</h3>
          <Image src={imgSrc} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button
            color="green"
            onClick={this.handleModalClose}
            icon="checkmark"
            content="Got it"
            inverted
          />
        </Modal.Actions>
      </Modal>
    ));
  }

  public render() {
    return (
      <div className="page-projects">
        <Divider hidden />
        <Container>
          <Card.Group centered>
            <Card
              header="Project #1"
              meta="February 2019 - May 2019"
              index={0}
              onClick={this.handleModalOpen}
              description="Drone-based anti-mosquito air superiority"
              image={
                'https://cdn2.iconfinder.com/data/icons/gears-wheels-blades/512/gears-512.png'
              }
            />
            <Card
              header="Project #2"
              meta="August 2018 - January 2019"
              index={1}
              onClick={this.handleModalOpen}
              description="Climate crisis solved using legos"
              image={
                'https://cdn2.iconfinder.com/data/icons/gears-wheels-blades/512/gears-512.png'
              }
            />
            <Card
              header="Project #3"
              meta="March 2018 - July 2018"
              index={2}
              onClick={this.handleModalOpen}
              description="Super secret classified project with pictures"
              image={
                'https://cdn2.iconfinder.com/data/icons/gears-wheels-blades/512/gears-512.png'
              }
            />
          </Card.Group>
        </Container>
        {this.modals}
      </div>
    );
  }
}

export default PageProjects;
