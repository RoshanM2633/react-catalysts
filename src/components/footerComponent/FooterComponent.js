import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="wrapper">
                    <ul class="footer-nav">
                        <li class="foot-list">
                            <h3>Quick Links</h3>

                            <ul class="foot-small-link">
                            <li>
                                <a href="template/recruitment.html" title="Recruitment">Recruitment</a>
                            </li>
                            <li>
                                <a href="template/rpo.html" title="RPO">RPO</a>
                            </li>
                            <li>
                                <a href="template/temp-staffing.html" title="Temporary Staffing">Temporary Staffing</a>
                            </li>
                            <li>
                                <a href="template/ai_recruit.html" title="AI based Recruitment">AI based Recruitment</a>
                            </li>
                            <li>
                                <a href="template/scholarship.html" title="Scholership">Scholarship</a>
                            </li>
                            </ul> 

                        </li>

                        <li class="foot-list">
                            <h3>Quick contacts</h3>

                            <ul class="foot-small-link">
                            <li>
                                <a class="phone-sym" href="tel:+919920836559" title="+91-9920836559">+91-9920836559</a>  
                            </li>

                            <li>
                                <a class="mail-sym" href="mailto:info@catalystedu.com" title="info@catalystedu.com">info@catalystedu.com</a>  
                            </li>

                            <li>
                                <address>
                                    <p class="foot-addr" >806, Real Tech Park,39/2,Bhagwan mahaveer Road,Sector 30A,Vashi,Navi Mumbai,400703,India</p>
                                </address>
                            </li>
                            </ul> 

                        </li>
                    </ul>
                    <div class="half-foot">
                        <p>Copyright &copy; 2018 <a href="#" title="Catalyst Edutech Pvt Ltd">Catalyst Edutech Pvt Ltd.</a> All right reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }

}
export default Footer;