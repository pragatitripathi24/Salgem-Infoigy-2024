import React from 'react';
import '../css/pillars.css'; // Import the CSS for styling

// Import images for team members
import Img1 from '../assets/pillars/AbhaySwami.png'; 
import Img2 from '../assets/pillars/PriyankaSwami.png'; 
import Img3 from '../assets/pillars/SandeepDutta.png'; 
import Img4 from '../assets/pillars/AbhashSingh.png'; 
import Img5 from '../assets/pillars/GauravTibe.png'; 

// Array of team members with their details
const teamMembers = [
  { name: 'Abhay Swami', title: 'Chief Executive Officer', imgSrc: Img1, description: 'Explain what they do for the business. How much experience do they have? Where did they study? What are their achievements? You may also add a fun fact about them.' },
  { name: 'Priyanka Swami', title: 'Director', imgSrc: Img2, description: 'Explain what they do for the business. How much experience do they have? Where did they study? What are their achievements? You may also add a fun fact about them.' },
  { name: 'Sandeep Dutta', title: 'Director', imgSrc: Img3, description: 'Explain what they do for the business. How much experience do they have? Where did they study? What are their achievements? You may also add a fun fact about them.' },
  { name: 'Abhash Singh', title: 'E-GOVERNANCE BUSINESS HEAD', imgSrc: Img4, description: 'Explain what they do for the business. How much experience do they have? Where did they study? What are their achievements? You may also add a fun fact about them.' },
  { name: 'Gaurav Tibe', title: 'Senior Business Development Manager', imgSrc: Img5, description: 'Explain what they do for the business. How much experience do they have? Where did they study? What are their achievements? You may also add a fun fact about them.' }
];

// Main Pillars component
const Pillars = () => {
  return (
    <div className="Pillars">
      <div className="content-column">
        <h1>Our Pillars..!!</h1>
        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img src={member.imgSrc} alt={member.name} />
              <div className="info-container">
                <h2>{member.name}</h2>
                <p>{member.title}</p>
                <p>{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="horizontal-line"></div> {/* Decorative horizontal line */}
      </div>
      <div className="right-column"></div> {/* Background image on the right */}
    </div>
  );
};

export default Pillars;
