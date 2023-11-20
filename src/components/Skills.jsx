import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/splash.svg";

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
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
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
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill image" />
                  <h3>Databases</h3>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill image" />
                  <h3>Python</h3>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill image" />
                  <h3>Cloud Computing</h3>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      ></img>
    </section>
  );
};

export default Skills;
