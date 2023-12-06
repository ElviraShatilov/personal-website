import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/1.svg";
import projImg2 from "../assets/img/2.svg";
import projImg3 from "../assets/img/3.svg";
import CertificateCard from "./CertificateCard";
import bgImg from "../assets/img/bg-images/design3.svg";
import bgImg2 from "../assets/img/bg-images/design6.svg";

const Projects = () => {
  const projects = [
    {
      title: "Quick Quiz",
      description:
        "A simple quiz application coded in vanilla JavaScript and styled with basic CSS.",
      imgUrl: projImg1,
      link: "https://github.com/ElviraSidorenko/quiz-app-project",
    },
    {
      title: "Help Desk App ",
      description:
        "My first Python project. It is a robust Help Desk Ticketing System implemented in Python.",
      imgUrl: projImg2,
      link: "https://github.com/ElviraSidorenko/help-desk-tickets-system-python",
    },
    {
      title: "React Calculator",
      description:
        "This is a simple React Calculator project that provides basic mathematical functions in a user-friendly interface.",
      imgUrl: projImg3,
      link: "https://github.com/ElviraSidorenko/React-calculator-project",
    },
  ];

  const certificates = [
    {
      title: "Web Development",
      source: "Mimo",
      skills: [
        "Web Development",
        "Python",
        "SQL",
        "React.js",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      date: "Oct 2023",
    },
    {
      title: "Computer Science Principles: Digital Information",
      source: "LinkedIn",
      skills: [
        "Computer Science",
        "Computer Communication",
        "Number Systems",
        "Encoding",
        "Data Management",
      ],
      date: "Oct 2023",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      source: "freeCodeCamp",
      skills: ["JavaScript", "Data Structures", "Algorithms"],
      date: "Oct 2023",
    },
    {
      title: "Cybersecurity Foundations",
      source: "LinkedIn",
      skills: ["Cybersecurity", "Cyber Diplomacy", "Cybersecurity Frameworks"],
      date: "Oct 2023",
    },
    {
      title: "AWS Cloud Quest: Cloud Practitioner",
      source: "AWS",
      skills: ["AWS", "Cloud Computing", "Databases"],
      date: "Oct 2023",
    },
  ];

  return (
    <section className="project" id="projects">
      <img className="bgImg-left" src={bgImg} alt="Background image"></img>
      <img className="bgImg-right" src={bgImg2} alt="Background image"></img>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Firmly believing that the best way to{" "}
              <strong>master a skill</strong> is by creating something from
              scratch, I present a curated collection of
              <strong>projects</strong> that showcase my{" "}
              <strong>hands-on approach</strong> to learning. These creations
              are not just milestones but reflections of my commitment to <strong>continuous improvement</strong> and{" "}
              <strong>exploration</strong>.
            </p>
            <p>
              In addition to the projects, you&apos;ll find a compilation of <strong>certificates</strong> earned from resources beyond my core
              study. These certificates signify my dedication to staying
              well-versed in the <strong>latest industry standards</strong> and{" "}
              <strong>technologies</strong>. Each project and certificate
              represents a unique chapter in my <strong>learning story</strong>,
              reflecting a journey fueled by <strong>curiosity</strong>,{" "}
              <strong>tenacity</strong>, and a relentless{" "}
              <strong>pursuit of excellence</strong>.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Certificates</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return (
                        <ProjectCard {...project} key={index}></ProjectCard>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  {certificates.map((certificate, index) => {
                    return (
                      <CertificateCard
                        {...certificate}
                        key={index}
                      ></CertificateCard>
                    );
                  })}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
