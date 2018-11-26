import React from 'react';
import TempStaffBanner from '../../static/images/temp-staffing-banner.jpg';
import TempServiceSide from '../../static/images/temp-staffing-service-side.jpg'

export default  class TempStaffCompo extends React.Component {
    render() {
        return (
            <section className="info-section single-service">
        <div className="wrapper">
          <div className="banner">
            <img src={TempStaffBanner} alt="Catalyst Temp staffing Banner" />
          </div>

          <div className="written-data cf">
            <h2>Temporary Staffing</h2>
            <p>
              Our approach in temporary staffing has always been 360-degree and ensures full-proof compliance. In our recent achievement
              we also acquired INVICTUS Facility Management Services LLP, a temporary staffing company and TR7 Healthcare
              India Pvt Ltd, a company specialised in health training and staffing. Our staffing solution includes IT, Non-IT
              and also grade 4 staffs.
            </p>
            <p>
              Our strong team of recruiters and our process management makes us stand out from the others.
            </p>

            <div className="service-img-wrap">
              <img src={ TempServiceSide } alt="Catalysts recruitment service" />
              <div className="serv-over-img">
                <h3>On-board employees hassle-free</h3>
                <p className="serv-sub-line">Be burden free of searching, recruiting, training, payroll & compliance, to focus
                  more on your core competencies & increase your ROI…</p>
              </div>
            </div>
            <ul className="service-keypoint">
              <li>
                <p>Strong application of IT systems like</p>
                <ul className="sub-list">
                  <li>
                    <span>HRMS</span>
                  </li>
                  <li>
                    <span>ESS</span>
                  </li>
                  <li>
                    <span>Leave Management system</span>
                  </li>
                  <li>
                    <span>Attendance Management System</span>
                  </li>
                </ul>
              </li>
              <li>
                <p> HR Business Partner</p>
              </li>
              <li>
                <p> Continuous and rotational jobs for candidates</p>
              </li>
              <li>
                <p>Strong compliance</p>
              </li>

            </ul>

          </div>

        </div>
      </section>
        );
    }
}