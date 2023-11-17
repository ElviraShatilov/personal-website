import { useEffect, useState } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/blue-whale-svgrepo-com.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "React Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(600);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} lg={7} xl={7}>
            {/* <span className="tagline">Welcome to my Portfolio</span> */}
            <h1>
              {`Hi I'm Elvira - `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Welcome to my page! It's so nice to have you. Feel free to browse
              around to learn more about my passion for web development. I come
              with a rich background in hospitality and sales, where I've finely
              tuned my people skills and customer focus. Yet, it's the realm of
              technology that truly ignites my passion - its rapid evolution and
              transformative power captivate me endlessly. I'm on the lookout
              for my next dream team - a group that shares my fervor for
              technology and innovation. Together, we can weave ideas, drive
              change, and achieve greatness. If you're seeking a dedicated,
              adaptable, and collaborative individual to join your ranks, let's
              connect and explore the remarkable journey ahead.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={5} lg={5} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
