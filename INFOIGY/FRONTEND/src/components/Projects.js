import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/projects/myanimal.png";
import projImg2 from "../assets/projects/egale-eye.png";
import pragati from "../assets/projects/pragati.png";
import maac from "../assets/projects/maac.png";
import hrms from "../assets/projects/hrms.png";
import pnm from "../assets/projects/pnm.png";
import farm from "../assets/projects/ftt.png";
import gkm from "../assets/projects/gkm.png";
import fork from "../assets/projects/f2f.png";
import learning from "../assets/projects/e-learning.png";
import goa from "../assets/projects/hello-goa.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const IOT = [
    {
      title: "Myanimal",
      description: "A smart neckband device",
      imgUrl: projImg1,
    },
    {
      title: "Eagle Eye",
      description: "A Digital Eye to Maintain Crop & Plant Health/ produce.",
      imgUrl: projImg2,
    }
  ];

  const WebDevelopment = [
    {
      title: "Maac Solapur",
      description: "MAAC is the media & entertainment education brand of Aptech Ltd",
      imgUrl: maac,
    },
    {
      title: "Pragati Fiber",
      description: "Pragati Steel Fabrication & Fibers is an ISO 9001-2015 certified manufacturer in Solapur, specializing in children playground and open-air gym equipment.",
      imgUrl: pragati,
    },
    ,
    {
      title: "Farm Tech Trade",
      description: "Our team aims to help alleviate farmer distress and bring back confidence in Farming, by working hand-in-hand with farmers using innovative approaches to farming.",
      imgUrl: farm,
    },
    ,
    {
      title: "Farm to Fork",
      description: "Farm to fork is the web application and mobile application used in the B2B e-commerce application for managing the demand and supply chain of farm produce.",
      imgUrl: fork,
    }
  ];

  const AppDevelopment = [
    {
      title: "Hello Goa",
      description: "Application that allow the users to book hotels, villa, casino, clubs and many more all the services in one go in a single ap",
      imgUrl: goa,
    }
  ];


  const EGovernance = [
    {
      title: "HRMS",
      description: "HRMS is a web-based application for resource management that is used to manage the Traveling allowances, service records, grievances, particulars, and other things in the railway's personnel department.",
      imgUrl: hrms,
    },
    {
      title: "PNM",
      description: "This web application is developed for unions in railways. If the unions have some issues regarding HR, hospitality and other things. They can just log in to this portal and add their all grievances in this.",
      imgUrl: pnm,
    }
  ];

  const ELearning = [
    {
      title: "Digital content Transformation",
      description: "Digital content Transformation is the process of sharing knowledge through various electronic channels such as e-books, CDs, webinars, and more. e-learning is defined as “learning that is enabled electronically”",
      imgUrl: learning,
    }
  ];

  const ECommerce = [
    {
      title: "Gaon Ki Mandi",
      description: "Gaon ki mandi is the e-commerce portal used for purchasing and delivering vegetables, veggies and fruits online.",
      imgUrl: gkm,
    }
  ];
  return (<>
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 style={{color:'rgb(0 162 194)'}}>Projects</h2>
                <p>EXPLORE OUR DIVERSE PORTFOLIO SHOWCASING PROJECTS.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">IOT</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web Application</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile Application</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          IOT.map((project, index) => {
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
                      <p></p>
                      <Row>
                        {
                          WebDevelopment.map((project, index) => {
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
                     
                      <p></p>
                      <Row>
                        {
                          AppDevelopment.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
      
      <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                
                <p>DIGITAL TRANSFORMATION INITIATIVES</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">E-Governance</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">E-Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">E-Commerce</Nav.Link>
                    </Nav.Item>
                    
                  </Nav>
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          EGovernance.map((project, index) => {
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
                      <p></p>
                      <Row>
                        {
                          ELearning.map((project, index) => {
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
                     
                      <p></p>
                      <Row>
                        {
                          ECommerce.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
    </>
  )
}

export default Projects;
