import React, { useState } from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ShowVersionList from "./ShowVersionList";
import ShowcaseNav from "./ShowcaseNav";

const ProjectIndex = ({ projects }) => {
  const [userProjects, setUserProjects] = useState(projects);

  const containerMarginStyle = {
    marginTop: "32px",
  };

  const newProjectButtonStyle = {
    float: "right",
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <ShowcaseNav username={"kuttu"} />
          <Container style={containerMarginStyle}>
            <Row>
              <Col>
                <Button
                  variant="outline-primary"
                  style={newProjectButtonStyle}
                  href="/projects/new"
                >
                  New Project
                </Button>
              </Col>
            </Row>
            <Row>
              <Col>
                {userProjects.map((project) => (
                  <ShowVersionList
                    projectId={project.id}
                    projectDescription={project.description}
                    projectName={project.projectName}
                    versions={project.versions}
                    key={project.id}
                    handleChildClick={setUserProjects}
                  />
                ))}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

ProjectIndex.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default ProjectIndex;
