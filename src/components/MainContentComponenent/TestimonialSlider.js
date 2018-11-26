import React from 'react';
import Slider from 'react-slick';

import Tanaya from '../../static/images/tanaya.png';
import Shiva from '../../static/images/shiva.png'; 
import Reema from '../../static/images/reema.png';
import Rohit from '../../static/images/rohit.png';

class TestimonialSlider extends React.Component {

    render(){

        const settings = {
            dots: true,
            infinite: true,
            centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 3000,
        };



        return (
        // <!--testimonial section starts here-->
        <section className="testimonials cata-home">
        <div className="wrapper">
          <h2>testimonials</h2>
          <Slider  {...settings}>  
            <div className="cf myslide ">
              <div className="testi-img-wrap  ">
                <img src={Tanaya} alt="Tanaya Mishra"/>
              </div>
              <div className="testi-data cf">
                  <h3>
                      Mrs.Tanaya Mishra
                    </h3>
                    <span className="testi-position">(MD-HR,Accenture)</span>
              </div> 
                <div className="testi-content">    
                  <p>
                  <strong>  Ms. Tanaya Mishra</strong> that Catalysts Edutech Pvt. Ltd. is among those HR service provider company that has high service quality and turn-around-time. 
                    
                  </p>
                  <p><strong>Rating:</strong>  4.5 stars out of 5 stars for the Human Resource service provided and Turnaround time.</p>
                </div>
              
            </div>

            <div className="myslide">
              <div className="testi-img-wrap">
                <img src= {Shiva} alt="Mr.Shiva" />
              </div>
              <div className="testi-data">
                <h3>
                    Mr.Shiva
                </h3>
                <span className="testi-position">(Student,MPSTME)</span>
              </div>  
              <div className="testi-content">    
                <p>
                  <strong>Mr. Shiva Kumar</strong> says that Catalysts Edutech has highly energetic and enthusiastic team where he loved to worked during his Internship. It shaped
                  him and helped him further in college and getting placed later. 
                </p>
                <p><strong> Rating:</strong>  5 star out of 5 stars as a best workplace to work.</p>
              </div>
                
              </div>

            <div className="myslide">
              <div className="testi-img-wrap">
                <img src={Reema} alt="Ms.Reema Remy" />
              </div>
              <div className="testi-data">
                <h3>
                    Ms.Reema Remy
                </h3>
                  <span className="testi-position">(Manager-HR at NITCO Ltd.)</span>
              </div>  

              <div className="testi-content">    
                <p>
                  <strong>  Ms. Reema Remy</strong> says that Catalysts Edutech Pvt. Ltd is an extremely professional company, who know how to establish and maintain long term relationship with clients. 
                </p>
                <p><strong>Rating:</strong> 4.5 star out of 5 star for Professionalism, Presentability and Team effort & efficiency. </p>
              </div>  
              
            </div>


            <div className="myslide ">
                <div className="testi-img-wrap">
                  <img src={Rohit} alt="Mr.Rohit Kumar" />
                </div>
                <div className="testi-data">
                  <h3>
                      Mr.Rohit Kumar
                  </h3>
                  <span className="testi-position">(HR at JSW Steel Ltd.)</span>
                </div>  
                <div className="testi-content">

                  <p>
                    <strong>Mr. Rohit Kumar </strong> says that overall it has been a good experience. However, there is scope at improving
                    the turnaround time and handling multiple positions at the same time. 
                  </p>
                  <p><strong> Rating:</strong> 4.5 star out of 5 star for best for its 
                    Quality of service, professionalism and Team effort & efficiency.</p>
              </div>  
                
            </div>
        </Slider>
      </div>
    </section>
    );
} 

}

export default TestimonialSlider;