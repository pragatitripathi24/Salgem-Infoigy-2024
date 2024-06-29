import React from 'react';
import '../css/Testimonial.css';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

function Testimonial() {
  const testimonials = [
    {
      content: `On behalf of all the Infoigy team, please accept my appreciation for the excellent job you and your team have done over the past 2 years in various tools and technology projects like Adobe After effect, Adobe Animate CC, Adobe illustrator and JavaScript. It was an enormous undertaking but went smoothly and efficiently! Thanks to your leadership and dedication combined with your staff's teamwork and energy. You and your team should take great pride in this accomplishment. During the next few days I hope to personally thank each member of your team worked on projects allocated by Ceryx.`,
      author: 'Ceryx Digital'
    },
    {
      content: `We’ve worked with infoigy on a number of projects over the past couple of years. We’ve always been extremely impressed with the quality of service and delighted with the end results. The team are obviously very knowledgeable and experienced in what they do and this is reflected in the work they have produced for us. Great customer service means following best practices like valuing customer’s time, having a pleasant attitude, and providing knowledgeable and resourceful resources while taking ownership all along the project journey till the final delivery is done. Infoigy ticked all the boxes!`,
      author: 'Gaon Ki Mandi'
    },
    {
      content: `FYI, really great feedback from the teams reviewing the latest batch. Hopefully this will mean the rework will drop off! Thanks for all your great work, I know this has been a very difficult project and we greatly appreciate your hard work.`,
      author: 'Pearson'
    },
    {
        content: `SM9 & ET1: It was great working with your team for over a year on these projects. Your team is flexible and worked with us hand in hand to meet tight deliverables on time. This project required a high level of technical skills with a super tight deadline. We are extremely happy to have partnered with you on these project. You guys ensured our success on this project with success.`,
        author: 'Shibu, Aptara'
    },
    {
        content: `Infoigy created a unique, informative, and useful website. Their workflow was streamlined, and they communicated well by providing regular updates. Infoigy makes a perfect partner who is always approachable & flexible. It can be difficult to find teams that communicate so effectively and work efficiently. Thanks to the real Infoigy talents because of whom we never had to worry about the constraints & challenges in the project.`,
        author: 'Maac Solapur'
    },
    {
        content: `The experience we had with Infoigy was quite beyond our expectations. They made Everything looks so easy. The customer care representative was impressive & very approachable. In terms of home loans, etc. we were provided with all the options in one place, so we knew exactly what we were doing. A consultant from Infoigy walked us through all of the standard features and possible upgrades. Overall very satisfied with the support.`,
        author: 'Laxmi Developer'
    },
    {
        content: `In order to create student records and develop software, we went ahead & hired Infoigy. It is worth mentioning that Infoigy was responsive, professional, creative, and accommodating to the highest standards. The only way this project could have improved was if we could have sufficient funds to move faster!`,
        author: 'Credit'
    },
    {
        content: `Some great news from the vendor who is reviewing the Storyboard NE LOs that have come in from Aptara--compared to the STBD NE LOs that were created by the gadgets team, these are looking good!`,
        author: 'Vicky Shen (Manager, Pearson)'
    },
    {
        content: `Congratulations Team! All of you are rockstars!! `,
        author: 'Anwar Ebrahim'
    },
    {
        content: `Good work team!! “All roads that lead to SUCCESS, have to pass through HARD WORK boulevard.”`,
        author: 'Amit Jain (Sr. Manager, Ceryx)'
    }
  ];

  return (
    <section className="testimonials_main">
      <div className="container custom_container">
        <div className="sec_title text-center playfair_font">
          <p className="f_400 f_size_16 l_height30 subtitle">Testimonials</p>
          <h2 className="f_p f_size_35 l_height50 f_700 t_color3" style={{color: "#04bcb4"}}>What Client Says About Us</h2>
        </div>
        <div className="marquee">
          <div className="marquee-content">
            {testimonials.map((testimonial, index) => (
              <div className="erp_testimonial_item" key={index}>
                <div className="content">
                  <p className='text-black'><RiDoubleQuotesL style={{color: "#63E6BE", fontWeight: "bolder", fontSize: "30px"}} /> {testimonial.content} <RiDoubleQuotesR style={{color: "#63E6BE", fontWeight: "bolder", fontSize: "30px"}} /> </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h6 className="pt-3 f_700" style={{color: '#04bcb4', fontSize: "20px"}}>{testimonial.author}</h6>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for continuous loop */}
            {testimonials.map((testimonial, index) => (
              <div className="erp_testimonial_item" key={index + testimonials.length}>
                <div className="content">
                  <p><RiDoubleQuotesL style={{color: "#63E6BE", fontWeight: "bolder", fontSize: "30px"}} /> {testimonial.content} <RiDoubleQuotesR style={{color: "#63E6BE", fontWeight: "bolder", fontSize: "30px"}} /> </p>
                </div>
                <div className="media">
                  <div className="media-body">
                    <h6 className="pt-3 f_700 t_color5" style={{fontStyle: 'italic' }}>{testimonial.author}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
