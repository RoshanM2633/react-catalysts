import React from 'react';

import ScholarShipBanner from '../../static/images/scholarship-banner.jpg'
import ScholarshipSide from '../../static/images/scholarship-service-side.jpg';

export default class ScholershipCompo extends React.Component {
    render() {
        return (
            <section className="info-section single-service">
            <div className="wrapper">
              <div className="banner">
                <img src={ ScholarShipBanner} alt="Catalyst Recruitment Banner" />
              </div>
    
              <div className="written-data cf">
                <h2>Scholership</h2>
                <p>
                  We have created a unique market place for the Indian Youths to facilitate the wide range of Scholarship programs available
                  in India and Abroad.
                </p>
                <p>Our platform helps to find the wide range of scholarships offered to various segments, genders, categories
                  to the YOUTHS and also offers on the other hand ample number of best-fit match of students who can be offered
                  scholarships programs by the corporate and other entities.</p>
                <p>Choosing the right scholarship is a daunting task. Pick relevant scholarships from our site and stand a chance
                  to win. We provide Means based scholarship, Merit based scholarship, Need based scholarship and school scholarships.
                  We don’t just stop at listing scholarship but also support in filling application and preparing for same and
                  making the same reaching to the right set of scholarship providers.</p>
                <div className="service-img-wrap">
                  <img src={ScholarshipSide} alt="Catalysts recruitment service" />
                  <div className="serv-over-img">
                    <h3>Fulfill your dreams</h3>
                    <p className="serv-sub-line">A unified platform that brings all range and types of scholarship available to different
                      category of students and also helps you to find a right match, so that money is never a challenge between
                      you and your dreams…</p>
                  </div>
                </div>
                <ul className="service-keypoint">
                  <li>
                    <p> Scholarship listing across all criteria’s</p>
                  </li>
                  <li>
                    <p>Scholarship listing across all criteria’s</p>
                  </li>
                  <li>
                    <p>Finding the right match</p>
                  </li>
                  <li>
                    <p>Helping the Scholarship sponsor to find a right students</p>
                  </li>
                  <li>
                    <p>Application support</p>
                  </li>
                  <li>
                    <p>Email & SMS alerts</p>
                  </li>
                </ul>
               
              </div>
    
            </div>
          </section>
        );  
    }
}