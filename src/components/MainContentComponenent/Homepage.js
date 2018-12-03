import React from 'react';
import banner from '../../static/images/catalysts-banner.png'
import ServiceComponent from './serviceComponent';

import Analyze from '../../static/images/analyze.png';
import Team from '../../static/images/team.png';
import Allround from '../../static/images/allround.jpg';
import Globe from '../../static/images/global.png';
import RnD from '../../static/images/rnd-tech.png';
import TestimonialSlider from './TestimonialSlider';

import '../../assets/css/slider.css';



class HomeComponent extends React.Component {
    render() {
        return (
            <main>
                <section className="info-section cata-home">
                    <div className="wrapper">
                        <div className="banner">
                            <img src={banner} alt="Catalyst Banner" />
                        </div>

                        <div className="written-data">
                            <h2>Who we are ?</h2>
                            <p>
                                We believe in a simple philosophy based from the client prospective which is the foundation of our search. Our senior team consist of a set of talented, experienced professionals from various segments of the corporate world. The varied experiences help us to understand the corporates requirement better and in finding the right talent fit. A combination of people, process & technology focus enables us to enhance the business productivity of our clients. We provide our clients the right talent and allow our clients to focus on operating and growing their businesses. We believe that our unique proposition and offer of talent acquisition with right skill sets and cultural fitment both for permanent and temporary staffs.
                            </p>

                            <p>Our RPO solution provides client’s with an entire recruiting solution. We also offer customized services that are designed to improve the client efficiency.  </p>

                            <p>Our team is in the process of introducing an automated artificial intelligence system, based on providing recruitment solutions, matching the right fitment, skills, background, culture at speed. By using innovation and technology we are able to provide efficiency, quick turnaround time, cost effectiveness by using AI in human resources.
                            </p>

                            <p>We are introducing a unique end to end platform for automated interview with a self-screening process.</p>

                            <p>Our newly launched product is “Scholarship”. Our scholarship platform is built with one single purpose: “an equal chance for everyone to prove themselves”. We understand that every student is different and therefore requires different treatment which is unique, considering requirements and expectations. We have therefore addressed this with student friendly techniques to get the desired scholarship package to fulfil each student’s dream education.
                            </p>
                        </div>
                    </div>
                </section>

                {/* service section */}

                <ServiceComponent />

                <section className="why-catalyst cata-home">
                    <div className="wrapper">
                        <h2>why catalysts</h2>
                        <p>We provide technology based 360 degree HR Solutions and Scholarship services. Our strength is our team members and our clients who have helped us to achieve many fold growth at an unmatchable speed. </p>

                        <p>
                            We have highly qualified board members, senior advisory panel and management team who are from reputed institutions like IIT and IIM background with a 500+ years of experience across various sectors and industries. This helps us to be strategic, nimble, flexible and grounded offering quality services.
                        </p>
                        <ul className="why-list">
                            <li>
                                <div className="why-img-wrap team">
                                    <img src={Team} alt="team" /> 
                                </div>
                                <p>
                                    Our team & Board Members are from various Industries with more than 500+ years of experience.
                                </p>
                            </li>

                            <li>
                                <div className="why-img-wrap across-glob">
                                    <img src={Globe} alt="acfross-glob"/> 

                                </div>
                                <p>
                                    Our presence and reach is across all Indian Territory.
                                </p>
                            </li>
                            <li>
                                <div className="why-img-wrap customize">
                                    <img src={Allround} alt="customize"/> 
                                </div>
                                <p>We offer 360-degree customized solution like recruitment, RPO, temporary staffing, video interview and Scholarship. </p>
                            </li>

                            <li>
                                <div className="why-img-wrap analyze">
                                    <img src={ Analyze} alt="analyze"/> 
                                </div>
                                <p>We analyze candidates, do market research, negotiation & conduct reference check . </p>
                            </li>

                            <li>
                                <div className="why-img-wrap analyze">
                                    <img src={RnD} alt="Research and Developement" /> 
                                </div>

                                <p>We have a separate  Research &amp; Development
                                    and Technology team working 24*7 for process improvement 
                                    and technological  up-gradation.
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <!--why catalysts section ends --> */}

                <section className="cata-clientele cata-home">
                    <div className="wrapper cf">
                    <h2>Clientele</h2>
                    <p>We constantly interact with our clients, understanding 
                        their goals, philosophy, organization and requirements to ensure 
                        that we make the best match.
                    </p>
                    <p>We partner with a broad spectrum of domestic and international organizations
                        in following industries:</p>
                        <ul className="clientele-list list-cl-left">
                        <li>
                            <p>IT-Software / Software Services</p>
                        </li>
                        <li>
                            <p>IT-Hardware &amp; Networking</p>
                        </li>
                            <li>
                            <p> BPO / ITES</p>
                            </li>
                            <li>
                            <p>KPO / Research / Analytics</p>
                            </li>
                            <li>
                            <p>BFSI</p>
                            </li>
                            <li>
                            <p>Semiconductors / Electronics</p>
                            </li>     
                            <li>
                            <p>FMCG / Consumer Durables</p>
                        </li>
                        </ul>
                        
                        <ul className="clientele-list list-cl-right">
                        <li>
                            <p>Steel / Power / Mining</p>
                        </li>
                        <li>
                            <p>Chemicals / Petro Chemical / Plastic / Rubber</p>
                        </li>
                        <li>
                            <p>Construction / Engineering / Cement / Metals</p>
                        </li>
                        <li>
                            <p>Engineering</p>
                        </li>
                        <li>
                            <p>Telecom</p>
                        </li> 
                        <li>
                            <p>Hotels / Restaurants / Airlines / Travel</p>
                        </li>     
                        <li>
                            <p>Pharma / Biotech / Clinical Research</p>
                        </li>
                        </ul>
                    </div>
                </section>

                {/* <!--clientele section ends--> */}
                {/* testimonial section */}
                <TestimonialSlider />

            </main>


            );
        }
    }
                        
export default HomeComponent;