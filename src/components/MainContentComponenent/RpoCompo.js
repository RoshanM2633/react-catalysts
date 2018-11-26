import React from "react";

import RpoBanner from '../../static/images/rpo-banner.jpg'
import RpoSide from '../../static/images/rpo-service-side.jpg'

export default class RpoCompo extends React.Component {
    render() {
        return(

            <section className="info-section single-service">
            <div className="wrapper">
              <div className="banner">
                <img src={RpoBanner} alt="Catalyst RPO Banner" />
              </div>
    
              <div className="written-data cf">
                <h2>RPO</h2>
                <p>
                  Our RPO solution provider’s client’s with entire recruiting function as well as we offer specific services that are designed
                  to improve what the client is already doing for recruiting, or work with a company’s recruiters to do more
                  and to do better.
    
                </p>
                <div className="cf">
                  <div className="service-img-wrap">
                    <img src={RpoSide} alt="Catalysts recruitment service"/>
                    <div className="serv-over-img">
                      <h3>Lowest turnaround time</h3>
                      <p className="serv-sub-line">We recruit right match of candidates at an unmatched speed…</p>
                    </div>
                  </div>
                  <ul className="service-keypoint">
                    <li>
                      <p>Candidate research</p>
                    </li>
                    <li>
                      <p>Compliance tracking</p>
                    </li>
                    <li>
                      <p>Reporting and Audit</p>
                    </li>
                    <li>
                      <p>Hiring Manager Training</p>
                    </li>
                    <li>
                      <p>Process Mapping</p>
                    </li>
                    <li>
                      <p>Technology Consulting</p>
                    </li>
                    <li>
                      <p>Third Party Vendor Management</p>
                    </li>
                    <li>
                      <p>End to end candidate screening and video interview (Our new process)</p>
                    </li>
                  </ul>
                </div>
                <h4>How are we differant...</h4>
                <p>We don’t end with filling a position that's gone unfilled, 
                  rather our research and development team works 24*7 for process
                   improvements and process redesign. We while working with an
                    organization's recruiting process as a whole and doing more 
                    than just filling a position. Ideally we look into analytic
                     factors that such as turnover rates, technology,
                   scalability, and time taken to fill a position, etc.
                </p>
                <p>
                  Recruitment process outsourcing is never one and done. Currently to deal with the mass recruitment problem we have come up with a solution for our clients - an end to end automated candidate screening and video interviewing process.
    
                </p>
              </div>
    
            </div>
          </section>
        );
    }
}