import { useEffect, useState } from "react";

import { ArrowRightCircle } from "react-bootstrap-icons";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/blue-whale-svgrepo-com.svg";

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
    <section className="banner" id="home">
      <Row className="align-items-center">
        <Col className="custom-padding" xs={12} md={6}>
          <h1>
            {`Hi I'm Elvira - `}
            <span className="wrap">{text}</span>
          </h1>
          <p>
            Welcome to my page! It is so nice to have you. Feel free to browse
            around to learn more about my passion for web development. I come
            with a rich background in hospitality and sales, where I have finely
            tuned my people skills and customer focus. Yet, its the realm of
            technology that truly ignites my passion - its rapid evolution and
            transformative power captivate me endlessly. I am on the lookout for
            my next dream team - a group that shares my fervor for technology
            and innovation. Together, we can weave ideas, drive change, and
            achieve greatness. If you are seeking a dedicated, adaptable, and
            collaborative individual to join your ranks, lets connect and
            explore the remarkable journey ahead.
          </p>
          <button onClick={() => console.log("connect")}>
            Lets connect <ArrowRightCircle />
          </button>
        </Col>
        <Col xs={12} md={6}>
          <img src={headerImg} alt="Header image" />
        </Col>
      </Row>
    </section>
  );
};

export default Banner;
