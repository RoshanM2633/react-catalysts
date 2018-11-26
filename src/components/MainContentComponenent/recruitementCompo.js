import React from 'react';

import RecruitmentBanner from '../../static/images/recruitment-banner.jpg'
import RecruitmentSide from  '../../static/images/recruitment-service-side.jpg'

export default class RecruitmentCompo extends React.Component {
    render() {
        return (
                <section className="info-section single-service">
                    <div className="wrapper">
                        <div className="banner">
                            <img src={RecruitmentBanner} alt="Catalyst Recruitment Banner" />
                        </div>

                            <div className="written-data cf">
                                <h2>Recruitment</h2>
                                <p>
                                    This was our first stepping stone product introduced in Catalysts in the year 2011. We believe in a simple philosophy of
                                    considering ourselves in the shoes of the client and making our searches. Our senior team are a set of talented
                                    individuals from various segments of corporate world which help us to understand the corporates requirement
                                    better and in finding right talent and corporate fit. We strive to deliver with excellence and we focus on
                                    relevant talent acquisition with right skill sets and cultural fitment. We match people to roles at an unmatched
                                    speed.
                      
                                </p>

                                <div className="service-img-wrap">
                                    <img src={ RecruitmentSide} alt="Catalysts recruitment service"/>
                                    <div className="serv-over-img">
                                        <h3>Lowest turnaround time</h3>
                                        <p className="serv-sub-line">We recruit right match of candidates at an unmatched speed…</p>
                                    </div>
                                </div>
                                <ul className="service-keypoint">
                                    <li>
                                        <p>Best TAT provider in the industry</p>
                                    </li>
                                    <li>
                                        <p>Finding right cultural fit candidates</p>
                                    </li>
                                    <li>
                                        <p> Individuals with past experience with different industry sectors</p>
                                    </li>
                                    <li>
                                        <p>Experienced recruiters</p>
                                    </li>
                                    <li>
                                        <p>Reference checks</p>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </section>

                );  
            }
        }
