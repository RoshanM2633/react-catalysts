import React from 'react';

class Contact extends React.Component{
    render() {
        return (
            <section className="catalyst-contact cf">
            <div className="wrapper">
              <div className="location-map">
                <div className="mapouter">
                  <div className="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=real%20techpark%20&t=&z=19&ie=UTF8&iwloc=&output=embed"
                       ></iframe><a href="https://www.crocothemes.net"></a></div>
                </div>
              </div>
    
              <div className="contact-us cf">
                <div className="conact-info cf">
                  <h2>Contact us</h2>
                  <ul className="cata-link">
                    <li>
                      <a className="phone-sym" href="tel:+919920836559" title="+91-9920836559">+91-9920836559</a>
                    </li>
    
                    <li>
                      <a className="mail-sym" href="mailto:info@catalystedu.com" title="info@catalystedu.com">info@catalystedu.com</a>
                    </li>
                    <li>
                      <a className="globe-sym" href="www.catalystsedu.com" title="www.catalystsedu.com">www.catalystsedu.com</a>
                    </li>
    
                    <li>
                      <address>
                        <p className="foot-addr">806, Real Tech Park,39/2,Bhagwan mahaveer Road,Sector 30A,Vashi,Navi Mumbai,400703,India</p>
                      </address>
                    </li>
                  </ul>
    
                  <form className="contact-form">
    
                    <div className="enter-form">
                      <input type="text" placeholder="Name" />
                    </div>
    
                    <div className="enter-form">
                      <input type="tel" placeholder="phone" />
                    </div>
    
                    <div className="enter-form">
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="enter-form">
                      <textarea placeholder="Comments"></textarea>
                    </div>
                  </form>
                </div>
    
              </div>
            </div>
          </section>
        );
    }
}

export default Contact;
