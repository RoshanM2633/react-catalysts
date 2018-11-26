import React from 'react';

import Ai from '../../static/images/Aiimg.jpg';
import Recruit from '../../static/images/recruitment.jpg';
import TempStaff from '../../static/images/temp-staff.jpg';
import Scholar from '../../static/images/Scholarship.jpg';

class ServiceComponent extends React.Component {
    render() {
        return(
          
      <section className="cat-services cata-home">

      <div className="wrapper">
        <h2>Services</h2>

        <ul className="service-list">

          <li className="my-service">
            <div className="serv-img-wrap">
              <img src={Recruit} alt="Recrutment and RPO"/>
            </div>
            <h3>Recruitment &amp; RPO</h3>

            <p className="hidden-modal-data" style={{display:'none'}}>
                This was our first stepping stone product introduced in Catalysts in the year 2011. 
                We believe in a simple philosophy of considering ourselves in the shoes of the client
                 and making our searches. Our senior team are a set of talented individuals from various segments 
                 of corporate world which help us to understand the corporates
                  requirement better and in finding right talent and corporate fit. We strive to deliver 
                 with excellence and we focus on relevant talent 
                acquisition with right skill sets and cultural fitment. 
            </p>

            <p className="data-rpo" style={{display:'none'}}>
                Our RPO service caters to candidate research, compliance tracking, audit, process mapping, training, technology consulting, third party vendor management and end to end candidate screening with video interview. 
              </p>
          </li>

          <li className="my-service">
              <div className="serv-img-wrap">
                <img src={TempStaff} alt="Temporary staffing" />
              </div>
              <h3>Temporary Staffing</h3>
            <p className="hidden-modal-data" style={{display:'none'}}>
                Our approach in temporary staffing has always been 360-degree and ensures full-proof compliance. Our services 
                in this includes Salary disbursement, benefits, facilities, service access, training and redeployment for the candidates.
                 Our staffing solution includes IT,
                 Non-IT and also grade 4 staffs. Our strong team of recruiters and our process
                 management makes us stand out from the others.
            </p>
          </li>

          <li className="my-service">
              <div className="serv-img-wrap">
                  <img src={Ai} alt="AI based recruitment" />
              </div>
              <h3>AI based recruitment</h3>
              <p className="hidden-modal-data" style={{display:'none'}}>
                  The world is moving towards new technologies and so are we. Introducing first time in India – Artificial Intelligence based recruitment. The new AI based recruitment engine facilitates corporate both in campus recruitment and also in replacement recruitment across levels. It helps corporate to finding the right match based on their ethos and corporate culture and also helps in finding the right skill sets with proper communication skills. This entire process saves enormous amount of time, effort and money for the corporate.  
              </p>
          </li>

          <li className="my-service">
              <div className="serv-img-wrap">
                  <img src={Scholar} alt="Scholarship" />
              </div>
              <h3>Scholarship</h3>
              <p className="hidden-modal-data" style={{display:'none'}}>
                  We understand student’s requirements and expectations; hence coming up with student friendly techniques to get the desired scholarship package to fulfil every student’s dream education. We list scholarships programs offered by various institutions viz Government, Corporate, Institutes and Universities in India and abroad. We have customized our offerings to fit all desired need levels. 
              </p>
          </li>
        </ul>
      </div>
    </section>  
    );
    }
}

export default ServiceComponent