import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/logo/loader.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["( Solapur )", "( Noida )" ];
  const period = 500;

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
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline">Who we are</span>
                    <h1>
                      {`Salgem Infoigy Tech Pvt. Ltd`}{" "}
                      <span
                        className="txt-rotate"
                        data-period="500"
                        data-rotate='[ "( Solapur )", "( Noida )" ]'
                      >
                        <span className="wrap">{text}</span>
                      </span>
                    </h1>
                    <p>
                      Salgem Infoigy Tech Pvt. Ltd. is a recognized start-up
                      specializing in dynamic IT services and technology
                      solutions. We deliver innovative, cost-effective digital
                      content technologies tailored to scale and complexity. Our
                      experienced team excels in solution development and
                      implementation, ensuring efficient, next-gen digital
                      content and product creation. We are dedicated to customer
                      focus, building effective IoT, e-learning, and
                      e-governance solutions to transform businesses and
                      increase market share. We foster a lively, flexible, and
                      vibrant environment, enabling our team to enjoy and excel
                      in their work.
                    </p>
                    <button onClick={() => console.log("connect")}>
                      Read More<ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            {/* <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                  >
                    <img src={headerImg} alt="Header Img" />
                  </div>
                )}
              </TrackVisibility>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner; // Exporting Banner as default
