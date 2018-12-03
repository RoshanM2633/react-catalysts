import React from 'react';
import Slider from 'react-slick';

import Tanaya from '../../static/images/tanaya.png';
import Shiva from '../../static/images/shiva.png'; 
import Reema from '../../static/images/reema.png';
import Rohit from '../../static/images/rohit.png';



class TestimonialSlider extends React.Component {

    componentDidMount(){

        var a = document.getElementsByClassName('slick-dots');
        var dots=a[0].children;
        for(var j=0;j<=dots.length-1;j++){
            dots[j].children[0].innerHTML="";
        }
    }

    render() {

    const settings = {
        dots: true,
        // infinite: true,
        // centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };

    return (

        <section className="testimonials col-md-12" >
        <div className="wrapper">

            <h2>Testimonials</h2>
                <Slider {...settings}>
                    <div className="testimony-slide">
            
                        <div className="testi-img-wrap">
                            {/* <img src="{% static 'user/img/avatar6.png' %}" alt="Profile image"> */}
                        </div>
                        <span className="name-person">John doe</span>
                        <span className="person-designation">Ceo</span>
                        <p className="testi-para">lorem2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui.</p>
                    
                    </div>

                    <div className="testimony-slide">
                    
                        <div className="testi-img-wrap">
                            {/* <img src="{% static 'user/img/avatar6.png' %}" alt="Profile image"> */}
                        </div>
                        <span className="name-person">John doe</span>
                        <span className="person-designation">Ceo</span>
                        <p className="testi-para">lorem2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui.</p>
                        
                    </div>

                    <div className="testimony-slide">
                    
                        <div className="testi-img-wrap">
                            {/* <img src="{% static 'user/img/avatar6.png' %}" alt="Profile image"> */}
                        </div>
                        <span className="name-person">John doe</span>
                        <span className="person-designation">Ceo</span>
                        <p className="testi-para">lorem2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui.</p>
                    
                    </div>

                    <div className="testimony-slide">
                    
                        <div className="testi-img-wrap">
                            {/* <img src="{% static 'user/img/avatar6.png' %}" alt="Profile image"> */}
                        </div>
                        <span className="name-person">John doe</span>
                        <span className="person-designation">Ceo</span>
                        <p className="testi-para">lorem2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, qui.</p>
                        
                    </div>
            
                </Slider>
            </div>
          </section>

    );
} 

}

export default TestimonialSlider;