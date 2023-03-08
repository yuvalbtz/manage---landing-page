import React, { useRef } from "react";
import './style.css'
import Slider from "react-slick";
import avatarAli from '../../images/avatar-ali.png';
import avatarAnisha from '../../images/avatar-anisha.png';
import avatarRichard from '../../images/avatar-richard.png';
import avatarShanai from '../../images/avatar-shanai.png';


function Index() {

  const settings = {
    dots: true,
    infinite: false,
    arrows:false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 480,
        
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1, 
        }
      }
    ]
  };
  

  return (
    <section className="carousel padding-block-700 text-center">
      <div>
        <h2 className="fs-secondary-heading">What they've said</h2>
        
        {/* <!-- Carousel here --> */}
        <Slider   className="padding-block-500"  {...settings}>
          
          <div >
          <img className="avatarImage"  src={avatarAli} alt=""/>
          
           <div className="text-slide-ajustment">
           <h3 className="fw-bold">Ali Bravo</h3>
            <p data-width="wide">“We have been able to cancel so many other subscriptions since using Manage. There is
              no
              more cross-channel
              confusion
              and everyone is much more focused.”</p>
           </div>
           
          
         
          </div>
           
           <div >
             
             <img  className="avatarImage" src={avatarAnisha} alt="dsadas"/>
            
              <div className="text-slide-ajustment">
              <h3 className="fw-bold">Anisha Li</h3>
              <p data-width="wide">“Manage has supercharged our team’s workflow. The ability to maintain visibility on
                larger milestones at all times keeps
                everyone motivated.”</p>
              </div>
             
            </div>
                            
              <div >
              <img className="avatarImage" src={avatarRichard} alt=""/>

              <div className="text-slide-ajustment">
              <h3 className="fw-bold">Richard Watts</h3>
              <p data-width="wide">“Manage allows us to provide structure and process. It keeps us organized and focused.
                I
                can’t stop recommending them to
                everyone I talk to!” </p>
              </div>

                </div>
                <div >
                <img className="avatarImage"  src={avatarShanai} alt=""/>
                  
                 <div className="text-slide-ajustment">
                 <h3 className="fw-bold">Shanai Gough</h3>
                <p data-width="wide">“Their software allows us to track, manage and collaborate on our projects from
                  anywhere.
                  It keeps the whole team
                  in-sync without being intrusive.” </p>
                 </div>
                  
                  </div>
                
                </Slider>
                  <button className="button">Get Started</button>
                    </div>
                  </section>
  );
}

export default Index;
