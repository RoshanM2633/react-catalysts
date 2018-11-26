import React from 'react';

import AiBanner from '../../static/images/ai-banner.jpg';
import Aiside from '../../static/images/ai-service-side.jpg';

export default class AiRecruitCompo extends React.Component {
    render() {
        return (
            <section className="info-section single-service">
            <div className="wrapper">
              <div className="banner">
                <img src={AiBanner} alt="Catalyst Ai Banner" />
              </div>
    
              <div className="written-data cf">
                <h2>AI Based Recruitment</h2>
                <p>
                  The world is moving towards new technologies and so are we. Introducing first time in India – Artificial Intelligence based
                  recruitment and in the process we have acquired an Australian company “The TGA Graduate”. The new AI based
                  recruitment engine facilitates corporate both in campus recruitment and also in replacement recruitment across
                  levels. It helps corporate to finding the right match based on their ethos and corporate culture and also helps
                  in finding the right skill sets with proper communication skills. This entire process saves enormous amount
                  of time, effort and money for the corporate.
    
                </p>
    
                <div className="service-img-wrap">
                  <img src={Aiside} alt="Catalysts recruitment service" />
                  <div className="serv-over-img">
                    <h3>Low-Cost and Time-Effective</h3>
                    <p className="serv-sub-line">Reduce your recruitment time and cost with increased efficiency using our unmatched
                      Artificial Intelligence based technology</p>
                  </div>
                </div>
                <ul className="service-keypoint">
                  <li>
                    <p>Right fit candidate</p>
                  </li>
                  <li>
                    <p> Standardized resume</p>
                  </li>
                  <li>
                    <p>  Customised interview</p>
                  </li>
                  <li>
                    <p>Psychometric and skill test with scores</p>
                  </li>
                </ul>
    
              </div>
    
            </div>
          </section>
        );
    }
}