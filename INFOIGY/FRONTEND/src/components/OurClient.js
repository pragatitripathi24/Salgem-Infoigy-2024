import React from 'react';
import '../css/OurClient.css'
import hrms from '../assets/clientlogo/hrms.jpg'; 
import aptara from '../assets/clientlogo/aptata.jpg';
import ftii from '../assets/clientlogo/ftii.jpg';
import ceryx from '../assets/clientlogo/ceryx.jpg';
import yashodhara from '../assets/clientlogo/yashodhara.jpg';
import pearlgarden from '../assets/clientlogo/pearl-garden.jpg';
import fbl from '../assets/clientlogo/fbl.jpg';
import umed from '../assets/clientlogo/umed.jpg';
import mahalaxmisaras from '../assets/clientlogo/mahalaxmi-saras.jpg';
import pragati from '../assets/clientlogo/pragati.jpg';
import ftt from '../assets/clientlogo/ftt.jpg';
import gaonkimandi from '../assets/clientlogo/gaonkimandi.jpg';
import ftf from '../assets/clientlogo/ftf.jpg';
import iecart from '../assets/clientlogo/iecart.jpg';


const clientLogos = [
  hrms,
  aptara,
  ftii,
  ceryx,
  yashodhara,
  pearlgarden,
 fbl,
 umed,
  mahalaxmisaras,
  pragati,
  ftt,
  gaonkimandi,
  iecart,
  ftf
];

function OurClient() {
  return (
    <section className="analytices_customers_logo_area pt-50 pb-50 clientlogo bg-grey">
      <div className="container custom_container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="analytices_logo_content">
              <div className="hosting_title analytices_title playfair_font">
                <p className="f_400 f_size_16 l_height30 subtitle" style={{fontSize:'23px' , color:'white'}}>They Trust Us</p>
                <h2 className="f_p f_size_35 l_height50 f_700 t_color3 titleborder">Our Clients</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="client_logo_slider">
          <div className="logo-list">
            {clientLogos.map((logo, index) => (
              <img key={index} src={logo} alt={`client-logo-${index}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClient;
