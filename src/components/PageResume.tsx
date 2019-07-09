import React from 'react';
import './PageResume.css';
import { Header, Container, Divider } from 'semantic-ui-react';

const PageResume: React.FC = () => {
  return (
    <div className="page-resume">
      <Header as="h2" textAlign={'center'}>
        Your Name
      </Header>
      <Container text textAlign={'left'}>
        <Header as="h3">Education</Header>
        <p>
          <strong>Borough of Manhattan Community College</strong>, New York, NY
          <br />
          Associate in Science, Computer Science, 2019, 3.7 GPA
        </p>
      </Container>
      <Divider hidden />
      <Container text>
        <Header as="h3">Skills</Header>
        <p>
          <em>Coding:</em> C/C++, Java, x86 assembly, C#, PHP, Javascript, HTML,
          CSS, SML, Ruby, Perl
          <em>Technologies/Environment:</em> Windows, Win32 API/GUI, Linux,
          MySQL, OpenGL, ASP.NET
        </p>
      </Container>
      <Divider hidden />
      <Container text>
        <Header as="h3">Experience</Header>
        <strong>
          Artemia Health Systems, New York, NY Student Intern (Summer 2018)
        </strong>
        <ul>
          <li>
            Created new functionality for state-level prescription drug
            information system
          </li>
          <li>Worked with end users to determine their information needs</li>
          <li>Wrote application to create custom surveys</li>
          <li>Migrated existing website from SQL Membership to to ASP.NET</li>
        </ul>
        <strong>
          Borough of Manhattan Community College Computing Services Help Center,
          New York, NY Student Consultant (September 2018 – Present)
        </strong>
        <ul>
          <li>
            Resolved issues regarding networking (wired, wireless, and dialup),
            and email problems for Borough of Manhattan Community College users
          </li>
          <li>
            Answered questions about software supported by the university, such
            as MS Office
          </li>
          <li>
            Communicated with customers through email, telephone, and face to
            face
          </li>
        </ul>
      </Container>
      <Divider hidden />
      <Container text>
        <Header as="h3">Projects</Header>
        <strong>
          Vintage Foundation (Fall 2017) – a consulting project in a nonprofit
          organization
        </strong>
        <ul>
          <li>
            Advised on new technologies to help further the organizational
            mission
          </li>
          <li>
            Instructed program director on building a user-friendly website and
            relational database
          </li>
          <li>Assessed systemic problems and suggested possible solutions</li>
        </ul>
        <strong>
          News Delivery System (Spring 2018) - online information
          gathering/presentation system
        </strong>
        <ul>
          <li>
            Integrated old code with new for web application delivering custom
            tailored web news
          </li>
          <li>Coded in Java using Model-View-Controller architecture</li>
        </ul>
        <strong>
          Ebarter (Fall 2017) - an online bartering system running on Apache
          Tomcat
        </strong>
        <ul>
          <li>
            Applied software engineering principles along with J2SE Web
            Development Kit
          </li>
          <li>Led team in coding phase of development</li>
        </ul>
      </Container>
    </div>
  );
};

export default PageResume;
