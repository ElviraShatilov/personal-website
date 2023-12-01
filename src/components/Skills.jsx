import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter96 from "../assets/img/skill-bar-96.svg";
import meter91 from "../assets/img/skill-bar-91.svg";
import meter85 from "../assets/img/skill-bar-85.svg";
import bgImg from "../assets/img/bg-img.svg";
import SkillCard from "./SkillCard";

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

  const skills = [
    {
      imgURL: meter96,
      name: "Web Development",
      techItems: ["CSS", "HTML", "JavaScript"],
    },
    {
      imgURL: meter96,
      name: "Front-End Frameworks",
      techItems: ["React"],
    },
    {
      imgURL: meter91,
      name: "Styling Libraries",
      techItems: ["Tailwind CSS", "Bootstrap"],
    },
    {
      imgURL: meter85,
      name: "Back-End Development",
      techItems: ["Node.js", "Express.js"],
    },
    {
      imgURL: meter91,
      name: "Full-Stack Frameworks",
      techItems: ["MERN"],
    },
    {
      imgURL: meter96,
      name: "Version Control",
      techItems: ["Git", "GitHub"],
    },
    {
      imgURL: meter85,
      name: "Database Management",
      techItems: ["MySQL", "SQLite"],
    },
    {
      imgURL: meter91,
      name: "Deployment",
      techItems: ["AWS", "Render"],
    },
    {
      imgURL: meter96,
      name: "Responsive Design",
      techItems: ["Media Queries", "Flexbox", "CSS Grid"],
    },
    {
      imgURL: meter91,
      name: "Testing and Debugging",
      techItems: ["Jest", "Lighthouse", "React Testing Library"],
    },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <img className="bgImg-left" src={bgImg} alt="Background image"></img>
        <img className="bgImg-right" src={bgImg} alt="Background image"></img>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Delve into my evolving skill set. Constantly refining and
                expanding, these skills form a versatile toolkit, allowing me to
                adapt seamlessly to diverse challenges and contribute
                effectively to collaborative projects. Explore the dynamic
                interplay of technical expertise and interpersonal finesse that
                defines my approach to innovation and problem-solving.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill, index) => {
                  return <SkillCard {...skill} key={index} />;
                })}
                {/* 
                
                
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
                </div> */}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
