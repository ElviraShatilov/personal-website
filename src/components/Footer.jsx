import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/ES-logo-white.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col>
            <img src={logo} alt="Logo"></img>
          </Col>

          <Col className="text-right">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/elvira-sidorenko/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1}></img>
              </a>
              <a
                href="https://github.com/ElviraSidorenko"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2}></img>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
