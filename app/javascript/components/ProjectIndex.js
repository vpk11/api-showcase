import React, { version } from "react"
import PropTypes from "prop-types"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ShowVersionList from "./ShowVersionList"
import ShowcaseNav from "./ShowcaseNav"

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects
    }
  }

  render() {
    const containerMarginStyle = {
      marginTop: '32px'
    };

    const projectsList = this.state.projects.map((project) => <ShowVersionList projectId={project.id} projectDescription={project.description}
      projectName={project.projectName} versions={project.versions} key={project.id} handleChildClick={(projects) => {
        this.setState({ projects: projects })
      }} />);
    return (
      <Container fluid>
        <Row>
          <Col>
            <ShowcaseNav username={'kuttu'}/>
            <Container style={containerMarginStyle}>
              <Row>
                <Col>
                  {projectsList}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

ProjectIndex.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectIndex
