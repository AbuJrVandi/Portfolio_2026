import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import korlieImg from "../assets/img/Korlie.png";
import tenkipayImg from "../assets/img/tenkipay.png";
import wangovImg from "../assets/img/WanGov.png";
import logImg from "../assets/img/LOG.png";
import fitTrackImg from "../assets/img/Fitness.png";
import mlAlgorithmImg from "../assets/img/ML.png";
import amiImg from "../assets/img/AMI.png";
import onlineImg from "../assets/img/Online.png";
import lmImg from "../assets/img/LM.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Korlie",
      description: "Design & Development",
      imgUrl: korlieImg,
    },
    {
      title: "TenkiPay",
      description: "Fintech Solution",
      imgUrl: tenkipayImg,
    },
    {
      title: "WanGov",
      description: "Government Portal",
      imgUrl: wangovImg,
    },
  ];

  const projectsTab2 = [
    {
      title: "LOG",
      description: "Logistics & Management",
      imgUrl: logImg,
    },
    {
      title: "FitTrack",
      description: "Fitness Tracking App",
      imgUrl: fitTrackImg,
    },
    {
      title: "ML Algorithm",
      description: "Machine Learning Solution",
      imgUrl: mlAlgorithmImg,
    },
  ];

  const projectsTab3 = [
    {
      title: "AMI",
      description: "Advanced Metering Infrastructure",
      imgUrl: amiImg,
    },
    {
      title: "Online",
      description: "Online Platform Services",
      imgUrl: onlineImg,
    },
    {
      title: "LM",
      description: "Learning Management System",
      imgUrl: lmImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My portfolio showcases a diverse range of projects that highlight my expertise in full-stack development, UI/UX design, and problem-solving. From fintech solutions like TenkiPay to government portals like WanGov, each project represents a unique challenge where I applied modern technologies to deliver impactful results. Here are some of the key initiatives I've brought to life.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {
                            projectsTab2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {
                            projectsTab3.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
