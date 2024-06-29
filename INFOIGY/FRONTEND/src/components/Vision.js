import React from 'react';
import '../css/VisionMission.css';
import Mission from '../assets/logo/mission-img.png';
import Vis from '../assets/logo/vision-img.png';
import Values from '../assets/logo/value.png';

function Vision() {
  return (
    <div className="VM">
      <div className="circles-container">
        <div className="circle-wrapper">
          <div className="outer-circle"></div>
          <div className="circle inner-circle circle-mission">
            <div className="circle-content">
              <img src={Mission} alt="Mission Icon" />
              <h3>MISSION</h3>
              <p>Infoigy strives to achieve a level of expertise and build long lasting relationships with its clients.</p>
            </div>
          </div>
        </div>
        <div className="circle-wrapper">
          <div className="outer-circle"></div>
          <div className="circle circle-vision">
            <div className="circle-content">
              <img src={Vis} alt="Vision Icon" />
              <h3>VISION</h3>
              <p>Our vision is to establish ourselves as the leader in the field of IT services and Software development.</p>
            </div>
          </div>
        </div>
        <div className="circle-wrapper">
          <div className="outer-circle"></div>
          <div className="circle circle-values">
            <div className="circle-content">
              <img src={Values} alt="Values Icon" />
              <h3>VALUES</h3>
              <p>Our vision is to lead the IT services and software development industry with innovation and excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
