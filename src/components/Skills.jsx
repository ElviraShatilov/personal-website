import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/skill-bar-95.svg";
import meter2 from "../assets/img/skill-bar-95.svg";
import meter3 from "../assets/img/skill-bar-95.svg";
import bgImg from "../assets/img/bg-img.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <img className="bg-img" src={bgImg} alt="Background image"></img>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                porta pretium arcu, ut gravida dolor ultrices sed. Donec sed
                vehicula magna. Nulla sed gravida diam. Morbi et orci volutpat
                odio mattis tincidunt a eu erat. Vestibulum vel commodo magna.
                Suspendisse sit amet tincidunt lacus. Nulla tempus nibh
                scelerisque fermentum luctus.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Web Development</h3>
                  <ul className="tech-stack">
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill image" />
                  <h3>Front-End Frameworks</h3>
                  <ul className="tech-stack">
                    <li>React</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill image" />
                  <h3>Styling Libraries</h3>
                  <ul className="tech-stack">
                    <li>Tailwind CSS</li>
                    <li>Bootstrap</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Back-End Development</h3>
                  <ul className="tech-stack">
                    <li>Node.js</li>
                    <li>Express.js</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Full-Stack Frameworks</h3>
                  <ul className="tech-stack">
                    <li>MERN</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Version Control</h3>
                  <ul className="tech-stack">
                    <li>Git</li>
                    <li>GitHub</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Database Management</h3>
                  <ul className="tech-stack">
                    <li>MySQL</li>
                    <li>SQLite</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Deployment</h3>
                  <ul className="tech-stack">
                    <li>AWS</li>
                    <li>Render</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Responsive Design</h3>
                  <ul className="tech-stack">
                    <li>Media Queries</li>
                    <li>Flexbox</li>
                    <li>Grid</li>
                  </ul>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Testing and Debugging</h3>
                  <ul className="tech-stack">
                    <li>Jest</li>
                    <li>Lighthouse</li>
                    <li>React Testing Library</li>
                  </ul>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
