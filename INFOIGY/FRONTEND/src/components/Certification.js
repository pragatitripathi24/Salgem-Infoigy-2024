import React from 'react';
import '../css/Certification.css'; // Ensure this path is correct
import cmmi from '../assets/certificationlogo/cmmi.jpg';
import iso from '../assets/certificationlogo/iso-27001-2022.jpg';
import isol from '../assets/certificationlogo/iso-logo.jpg';
import msme from '../assets/certificationlogo/msme-logo.jpg';
import mii from '../assets/certificationlogo/make-in-india-logo.jpg';
import sui from '../assets/certificationlogo/stupi.png';
import bis from '../assets/certificationlogo/BIS.jpg';
import zed from '../assets/certificationlogo/zed-logo.jpg';

const certifications = [
  {
    src: cmmi,
    alt: 'cmmi',
    title: 'CMMI level 3',
    description: 'Capability Maturity Model Integration (CMMI).'
  },
  {
    src: iso,
    alt: 'iso-27001-2022',
    title: 'ISO 27001: 2022',
    description: 'International Organization for Standardization.'
  },
  {
    src: isol,
    alt: 'iso-logo',
    title: 'ISO 9001: 2015',
    description: 'International Organization for Standardization.'
  },
  {
    src: msme,
    alt: 'msme-logo',
    title: 'MSME',
    description: 'Ministry of Micro, Small and Medium Enterprises.'
  },
  {
    src: mii,
    alt: 'make-in-india-logo',
    title: 'Make in India',
    description: 'Make in India is an initiative by the Government of India.'
  },
  {
    src: sui,
    alt: 'start-up-indian-logo',
    title: 'Start up India',
    description: 'Startup India scheme is an important government scheme.'
  },
  {
    src: bis,
    alt: 'bis-logo',
    title: 'BIS',
    description: 'Bureau of Indian Standards.'
  },
  {
    src: zed,
    alt: 'zed-logo',
    title: 'Zed Bronze',
    description: 'Bronze ZED Certificate'
  }
];

function Certification() {
  return (
    <section className="analytices_customers_logo_area pt-30 pb-30 clientlogo bg-black">
      <div className="container mx-auto">
        <div className="text-center">
          <div className="analytices_logo_content">
            <div className="hosting_title analytices_title playfair_font">
              <p className="text-xl font-normal leading-loose" style={{fontSize:'30px'}}>  This is to Certify that</p>
              <h2 className="text-4xl font-bold leading-tight text-teal-400 mb-4">Entrepreneurship Pledge</h2>
            </div>
          </div>
        </div>
        <div className="certificate-box flex flex-wrap justify-around gap-5">
          {certifications.map((cert, index) => (
            <div key={index} className="certificate-box-list bg-white rounded-lg shadow-lg p-5 text-center w-52 h-64 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:w-60 hover:h-72">
              <img src={cert.src} alt={cert.alt} className="w-24 mb-4" />
              <h6 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h6>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certification;
