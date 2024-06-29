import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from './Banner'; // Importing Banner correctly as default export
import backgroundImage1 from '../assets/bg/corousel/iot.jpeg';
import backgroundImage2 from '../assets/bg/corousel/webdev.jpeg';
import backgroundImage3 from '../assets/bg/corousel/appdev.jpeg';
import backgroundImage4 from '../assets/bg/corousel/grades.jpeg';
import backgroundImage5 from '../assets/bg/corousel/uiux.jpeg';
import backgroundImage6 from '../assets/bg/corousel/ecom.jpeg';
import backgroundImage7 from '../assets/bg/corousel/elearn.jpeg';
import backgroundImage8 from '../assets/bg/corousel/egov.jpeg';
import 'animate.css';
import '../css/Home.css'; // Create a separate CSS file for additional styling
import Vision from './Vision';
import Certification from './Certification';
import Testimonial from './Testimonial';
import OurClients from './OurClient';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll('.carousel-content h1, .carousel-content p, .carousel-content button');
    elements.forEach((element) => {
      element.classList.remove('animate__fadeInDown', 'animate__fadeInUp', 'animate__delay-1s', 'animate__delay-2s');
      void element.offsetWidth; // Trigger reflow
      if (element.tagName === 'H1') {
        element.classList.add('animate__fadeInDown');
      } else if (element.tagName === 'P') {
        element.classList.add('animate__fadeInUp', 'animate__delay-1s');
      } else if (element.tagName === 'BUTTON') {
        element.classList.add('animate__fadeInUp', 'animate__delay-2s');
      }
    });
  }, [currentSlide]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div
        id="home"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh', // Adjust the height as needed
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <Carousel
          autoPlay
          interval={4000}
          transitionTime={1000}
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={true}
          swipeable
          onChange={handleSlideChange}
        >
          <div className="carousel-slide">
            <img src={backgroundImage1} alt="Background 1" />
            <div className="carousel-content">
              <h1 className="animate__animated">INTERNET OF THINGS (IOT)</h1>
              <p className="animate__animated">The key to unlock a smarter world</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage2} alt="Background 2" />
            <div className="carousel-content">
              <h1 className="animate__animated">WEB DEVELOPMENT</h1>
              <p className="animate__animated">Building the future of the web</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage3} alt="Background 3" />
            <div className="carousel-content">
              <h1 className="animate__animated">APP DEVELOPMENT</h1>
              <p className="animate__animated">Creating apps for all platforms</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage4} alt="Background 4" />
            <div className="carousel-content">
              <h1 className="animate__animated">GRAPHIC DESIGN</h1>
              <p className="animate__animated">Design is ‘thinking’ made ‘visual’</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage5} alt="Background 5" />
            <div className="carousel-content">
              <h1 className="animate__animated">UI/UX DESIGN</h1>
              <p className="animate__animated">Designing user-friendly interfaces</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage6} alt="Background 6" />
            <div className="carousel-content">
              <h1 className="animate__animated">E-COMMERCE</h1>
              <p className="animate__animated">Innovating online shopping experiences</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage7} alt="Background 7" />
            <div className="carousel-content">
              <h1 className="animate__animated">E-LEARNING</h1>
              <p className="animate__animated">Empowering education through technology</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
          <div className="carousel-slide">
            <img src={backgroundImage8} alt="Background 8" />
            <div className="carousel-content">
              <h1 className="animate__animated">E-GOVERNANCE</h1>
              <p className="animate__animated">Digitizing government services</p>
              <button className="learn-more-button animate__animated">L E A R N M O R E</button>
            </div>
          </div>
        </Carousel>
      </div>
      <Banner />
      <Vision />
      <Testimonial />
      <Certification />
      <OurClients />
    </>
  );
};

export default Home;
