import { useEffect, useState } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/blue-whale-svgrepo-com.svg";
import bgImg1 from "../assets/img/bg-images/design5.svg";
import bgImg2 from "../assets/img/bg-images/design7.svg";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const period = 2000;

  useEffect(() => {
    const toRotate = ["Web Developer", "React Developer", "Software Developer"];

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updatedText);

      if (isDeleting) {
        setDelta(100);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, isDeleting, loopNum, period, setDelta, setLoopNum, setText, text]);

  return (
    <Router>
      <section className="banner" id="home">
        <img src={bgImg1} alt="Background image" className="bgImg-left"></img>
        <img src={bgImg2} alt="Background image" className="bgImg-right"></img>
        <Row className="align-items-center">
          <Col className="custom-padding" xs={12} md={6}>
            <h1>
              {`Hi I'm Elvira - `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Welcome to my personal portfolio! I'm thrilled to have you here.
              Take a moment to explore and discover more about my passion for
              web development. With a diverse background in hospitality and
              sales, I've honed my people skills, resilience, and ability to
              thrive in a busy environment. Yet, its the realm of technology
              that truly ignites my passion - its rapid evolution and
              transformative power captivate me endlessly.
            </p>
            <HashLink className="no-decoration" to="#connect">
              <button>
                Lets connect <ArrowRightCircle />
              </button>
            </HashLink>
          </Col>
          <Col xs={12} md={6}>
            <img className="headerImg" src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </section>
    </Router>
  );
};

export default Banner;
