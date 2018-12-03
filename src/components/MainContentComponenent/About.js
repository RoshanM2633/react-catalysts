import React from 'react';

import Arijit from '../../static/images/arijit.jpg';
import Umesh from '../../static/images/umesh.jpg';
import SanjeevD from '../../static/images/sanjeev-duggal.jpg';
import Mohit from '../../static/images/mohit.jpg';
import Laxmi from '../../static/images/lakshmi.jpg';
import Sachit from '../../static/images/sachit-sarkar.jpg';
import Pankhuri from '../../static/images/pankhuri.jpg';
import Yogesh from '../../static/images/yogesh.jpg';
import Ashok from '../../static/images/ashok-saini.jpg';
import Swati from '../../static/images/swati.jpg';
import Vikas from '../../static/images/vikas.jpg';
import ITTeam from '../../static/images/te.png'

class About extends React.Component{
    render() {
        return (
            <section className="about-persons">
        <div className="wrapper">
          <h2 className="section-head">About Us</h2>

          <p>2016 onwards we started lateral expansion by acquiring various companies or by creating synergies with various companies and started our foot print in Artificial Intelligence based recruitment business, Security Staffing Business, Healthcare Staffing business, Scholarship and Skilling business.    </p>
          <p>Our strength is our advisory members and our people who have helped us to achieve many fold growth at an unmatchable speed. We have been the first among the few to bring the right AI based recruitment solutions to India. We provide technology based 360 degree HR Solutions and Scholarship services…</p>
          <h3>Founder</h3>
          <ul className="person-list">
            <li className="list-about">
              <div className="profile-img-wrap">  
                <img src={Arijit} alt="Arijit Saha" />
              </div>

              <div className="pro-content">
                <h4>Mr. Arijit Saha</h4>
                <span className="work-prof">Founder</span>

                <p>He is a MBA in finance with a 14+ years of
                  experience in corporate strategy, marketing,
                    SME & MSME Joint Ventures & mergers with
                    excellent corporate connects across India 
                    and abroad. He had successfully funded more 
                    than 5 start-ups.</p>

                    <span className="connect-site">Connect:</span>
                    <ul className="social-connect">
                        <li>
                          <a href="https://www.linkedin.com/in/arijitsaha86/" title="LinkedIn" target="_blank">
                            <i className="fa fa-linkedin"></i>
                          </a>
                        </li>
                    </ul>
                </div>

              </li>

            </ul>

            <h3>Senior Advisory</h3>
            <ul className="person-list">
              <li className="list-about">
                <div className="profile-img-wrap">  
                  <img src={Umesh} alt="Umesh Dwivedi" />
                </div>
  
                <div className="pro-content">
                  <h4>Mr. Umesh Dwivedi</h4>
                  <p>He is a Post Graduated from IIT Delhi having 20+ 
                    years of experience in corporate strategy and management
                    consulting. He is having an entrepreneurial visions and high
                     emphasis on start-ups, Innovation and Public-relations. He 
                     had successfully
                     funded more than 10 start-ups till date.</p>
                  </div>
  
                </li>
                 
                <li className="list-about">
                  <div className="profile-img-wrap">  
                    <img src={SanjeevD} alt="Sanjeev Duggal" />
                  </div>
    
                  <div className="pro-content">
                    <h4>Mr. Sanjeev Duggal</h4>
                    {/* <!-- <span>Founder</span> --> */}
                    <p>He is a first generation entrepreneur in training and 
                      development. Chairman of Skill Development Committee and PHD 
                      Chamber of Commerce & Industry. Founder of NIS Sparta, Former 
                      Director of Lemon Tree hotels. Successfully developed modern
                        corporate training
                        centers and sold it to different corporates</p>
                  </div>
    
                </li>
                <li className="list-about">
                  <div className="profile-img-wrap">  
                    <img src={Mohit} alt="Mohit Bhambri" />
                  </div>
    
                  <div className="pro-content">
                    <h4>Mr. Mohit Bhambri</h4>
                    {/* <!-- <span>Founder</span> --> */}
                    <p>He has completed his BE from BITS Pilani and MBA from IMT Ghaziabad. He had worked in HDFC Bank but was always interested to build his own start-up. Currently he is Co-founder and CMO of Buddy4Study, a unique platform with vision to make “Quality education accessible to all students”</p>
                  </div>
    
                </li>

                <li className="list-about">
                  <div className="profile-img-wrap">  
                    <img src={Laxmi} alt="Lakshmi Nadkarni" />
                  </div>
    
                  <div className="pro-content">
                    <h4>Ms. Lakshmi Nadkarni</h4>
                    {/* <!-- <span>Founder</span> --> */}
                    <p>She has done her PHD from Pune University on Industrial Sociology and having more than 16 years of experience as a human resource professional. Currently she is Director HR – BASF South Asia. She has previous experience of working as Senior Director, HR for Pfizer and also as HR Country Leader for Dow Chemical International Pvt Ltd.</p>
                  </div>
    
                </li>

                <li className="list-about">
                    <div className="profile-img-wrap">  
                      <img src= {Sachit} alt=" S.B Sarkar" />
                    </div>
      
                    <div className="pro-content">
                      <h4>Mr. S.B Sarkar</h4>
                      {/* <!-- <span>Founder</span> --> */}
                      <p>He is a Graduated Civil Engineer having 35+ years of experience in civil engineering, corporate strategy and management consulting. He is currently working as Management Consultant and Director at Enkbee Infrastructure. He was formerly working as Managing Director of Gannon Dunkerley & Co. Ltd.
                        </p>
                    </div>
                  </li>
              </ul>

              <h3>Management Team</h3>

              <ul className="person-list">
                <li className="list-about">
                  <div className="profile-img-wrap">  
                    <img src={Pankhuri} alt="Pankhuri Kumari" />
                  </div>
    
                  <div className="pro-content">
                    <h4>Ms. Pankhuri Kumari</h4>
                    <span className="work-prof">Chief Marketing & Business Officer</span>
                    <p>MBA Marketing & HR from IIM Kashipur and PGP Brand Management from MICA. She was formerly working with RBL Bank and was initial member of the RBL startup club.</p>
                  </div>
    
                  </li>

                  <li className="list-about">
                    <div className="profile-img-wrap">  
                      <img src={Yogesh} alt="Yogesh Singh"/>
                    </div>
      
                    <div className="pro-content">
                      <h4>Mr. Yogesh Singh</h4>
                      <span className="work-prof">Compliance Officer</span>
                      <p>A qualified Company Secretary and have been a consultant with JMD corporate services. He is an expert on compliance and statuary compliance and risk.</p>
                    </div>
      
                  </li>

                  <li className="list-about">
                    <div className="profile-img-wrap">  
                      <img src={Ashok} alt="Askoke Saini" />
                    </div>
      
                    <div className="pro-content">
                      <h4>Mr. Askoke Saini</h4>
                      <span className="work-prof">Finance Controller</span>
                      <p>He is qualified Chartered Accountant with 20+ years of experience in consulting on financial management, financial accounting, statutory auditing and compliance.</p>
                    </div>
      
                  </li>
                  
                  <li className="list-about">
                    <div className="profile-img-wrap">  
                      <img src={Swati} alt="Swati Sarkar" />
                    </div>
      
                    <div className="pro-content">
                      <h4>Swati Sarkar</h4>
                      <span className="work-prof">Human Resource</span>
                      <p>She has done MBA from IIPM in Human Resource and has 6+ years of experience in recruitment and HR operations. She has a great knowledge of finding & retaining high potentials and organizational learning. She was a partner in Career launch training and placement consultancy.</p>
                    </div>
      
                  </li>

                  <li className="list-about">
                    <div className="profile-img-wrap">  
                      <img src={Vikas} alt="Vikas Chadra" />
                    </div>
      
                    <div className="pro-content">
                      <h4>Vikas Chandra</h4>
                      <span className="work-prof">Operations</span>
                      <p>A graduate having 11+ years of experience in operation management. He was instrumental in making few start-ups successful like Fire & Safety Management Institute and Swashtik Primary Healthcare NGO. He was also the editor at Tasveer Aapki magazine a national level magazine.</p>
                    </div>
      
                  </li>
      
    
                </ul>

                <h3>IT team</h3>

                <ul className="person-list">
                  <li className="list-about">
                    <div className="profile-img-wrap">  
                      <img src={ITTeam} alt="IT team" />
                    </div>
      
                    <div className="pro-content">
                      <h4>IT Team</h4>
                      {/* <!-- <span>Founder</span> --> */}
                      <p>Being a technology focused team we have an in-house IT 
                        team comprising of our internal team members as well as 
                        External consultants which is not limited to India but 
                        includes consultants working from abroad and having more
                        than 200+ years of experience. Our team have expertise
                        AI, Java, Java Script,Python Android, web development, HTML,
                        SQL, ASC.NET, MVC and other languages as well as in Testing.
                      </p>
                    </div>
      
                  </li>
      
                </ul>

        </div>
      </section>
    );

    }
}
export default About;
