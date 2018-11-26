import React from 'react';

import {Link} from 'react-router-dom';

import CataLogo from '../../static/images/catalyst-logo.png';

class Header extends React.Component{
    render() {
        return (
            <header>

            <div className="wrapper cf">
                <div className="half-head cf">
                <div className="wrapper">
                    

                    <div className="follow cf"> 
                    {/* <!--<span class="follow-us-name">Follow Us</span>
                    <ul class="social-head">
                        <li>
                        <a href="#FIXME" title="Instagram" target="_blank">
                            <i class="fa fa-instagram"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#FIXME" title="LinkedIn" target="_blank">
                            <i class="fa fa-linkedin"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#FIXME" title="Tweeter" target="_blank">
                            <i class="fa fa-twitter"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#FIXME" t/services/scholarshipitle="Youtube" target="_blank">
                            <i class="fa f/services/scholarshipa-youtube"></i>
                        </a>/services/scholarship
                        </li>/services/scholarship
                        <li>/services/scholarship
                        <a href="#FIXME" t/services/scholarshipitle="Facebook" target="_blank">
                            <i class="fa f/services/scholarshipa-facebook-f"></i>
                        </a>
                        </li>
                    </ul> --> */}

                    <ul className="head-option">
                        <li>
                        <span className="head-phone-link">Phone</span>
                        <a href="tel:+919920836559" title="+91-9920836559">+91-9920836559</a>  
                        </li>
                        <li>
                            <a href="mailto:info@catalystedu.com" title="info@catalystedu.com">info@catalystedu.com</a>  
                        </li>
                    </ul>
                    </div>
                </div>    
                </div>

            <div className="down-head">
                <div className="wrapper">
                    <h1>
                        <a href="/" title="Catalysts Edutech Pvt Ltd">
                            <img src={CataLogo} alt="Catalysts-Logo" />Catalysts Edutech Pvt ltd
                        </a>
                    </h1>

                    <nav>
                        <div className="ham">
                            <span className="cross1"></span>
                            <span className="cross2"></span>
                            <span className="cross3"></span>
                        </div>
                       <ul className="nav-menu"> 
                            <li>
                                <Link to= "/home/"  label="Home" >Home</Link>
                            </li>
                            <li>
                                <Link to="/about/"   label="About" >About</Link>
                            </li>
                            <li className="drop-service">
                                <a className="service-drop" role="button" href="#FIXME" title="Service">Service</a> 
                                
                                <ul className="drop-down-content">
                                    <li>
                                        <Link to="/services/recruitment" title="Recruitment">Recruitment</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/rpo" title="RPO">RPO</Link> 
                                    </li>
                                    <li>
                                        <Link to="/services/temp-staffing" title="Temporary Staffing">Temporary Staffing</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/ai_recruit" title="AI based recruitment">AI based recruitment</Link>
                                    </li>
                                    <li>
                                        <Link to="/services/scholarship" title="Scholarship">Scholarship</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/contact/" >Contact</Link>
                            </li>
                            
                        </ul>

                      
                    </nav>

                </div>
            </div>  
            </div>  


        </header>
        );
    }
}

export default Header;  