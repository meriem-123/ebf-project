import React from 'react'


// import kid from './images/kid.png'
// import arrow from './images/arrow.png'
// import arrow1 from './images/arrow1.svg'
// import arrow2 from './images/arrow2.svg'
// import arrow3 from './images/arrow3.svg'
// import event1 from './images/event1.jpg'
// import event2 from './images/event2.jpg'
// import logoB from './images/logoB.png'
// import logoW from './images/logoW.png'
import Header from './Header';
import Footer from './Footer';
import Map from './Map'

import Aos from "aos";
import {useEffect,useState} from 'react';
// import {ReactComponent as Map} from '../../static/images/map.svg'



function HomePage() {
  const [background,setBackground] = useState("bg-color-black")


  useEffect(() => {
    Aos.init({duration:3000})
    
  }, []);

  const changeBackground = () =>{
    console.log(window.scrollY)
    
    if((window.scrollY >= 340 && window.scrollY <1000) || (window.scrollY >= 1500)){
       setBackground("bg-color-white");
        }else if(window.scrollY >= 1000 && window.scrollY <1500){
            setBackground("bg-color-blue");
        }else{setBackground("bg-color-black")} 
    
    }

  
      
  
  window.addEventListener('scroll', changeBackground)
  return (
    <div className={background}>
      <Header logo={"static/images/logoW.png"} class1="nav-item colorW" class2="nav-item colorY" />

      <section className="hero " id="hero" >
      
              <div className="container">
              <div  className="kid">
                  <Map className="kid"/></div>
              <div className="heroHeadline">
                <h2 className="sub-headline ">
                  
                  Hunting talents</h2>
                  <h2 className="sub-headline ">
                  
                  is</h2>
                  <h2 className="sub-headline ">
                  
                  our <span className="letter-color"> job</span> </h2>
                  </div>
                  
                  
                    <div className="single-animation">
                      <h6 className="desc1">We seek profiles related to the Computer Science field, That are issued from schools in our region Marrakech-Safi. </h6>
                      {/* <a href="#" className="btn cta-btn">Check It Out </a> */}
                    </div>
                    <div className="down">
                      <a href="#part2"><img src={"static/images/arrow.png"} /></a>
                  </div>
              

                  </div>
                  
            </section>
            <section className="part2" id="part2">
      
      <div  className="container container1">
      
      <div data-aos="slide-up">
        <h2 className=" headline1 addPadding">
          
          Making connections</h2>
          </div>
          <h2 className=" headline1">
          
          is</h2>
          <div data-aos="slide-down">
          <h2 className=" headline1">
          
          our<span   className="letter-color1"> goal</span> </h2></div>
          
          <div data-aos="fade-down" className="no-animation">
                      <h6  className="desc2">Our purpose is to connect These talents with great opportinuties. Enim commodo dolor laborum dolor exercitation eiusmod minim ullamco officia sit officia. </h6>
                      <a  href="#" className="btn1">Be part of This<img data-aos="slide-left"  className="arrow1" src={"static/images/arrow1.svg"} /></a>
                      
                    </div>
          
          
          
      

          </div>
          
    </section>
    <section className="part3">
    <div className="container">
      <div className="container2">
        <div className="containerrr">
      <div >
        <h6 className="desc1 descPart">What Else ?</h6>
        <h2 data-aos="slide-right" className="headline2">
          
          Our Events</h2>
          </div>
          
          
          <div  className="part3Desc">
                      <h6 data-aos="fade-down"  className="desc22">You can also benefit from our Events that targets people like you. Enim commodo dolor laborum dolor exercitation eiusmod minim ullamco officia sit officia. </h6>
                      <a  href="#" className="btn1 more">Discover More<img data-aos="slide-left"  className="arrow1" src={"static/images/arrow2.svg"} /></a>
                      
                    </div>
          

      </div>
      <div className="containerr">
       <img data-aos="slide-left" className="event event1" src={"static/images/event1.jpg"} />
          <img data-aos="slide-up" className="event event2" src={"static/images/event2.jpg"} /> 
      </div>
      </div>
      </div>
    </section>
    <section className="part4">
      <div className="container4">
        <div className="part4headline">
          <div data-aos="slide-up">
        <h2  className="headline1">Ready to join </h2></div>
        <h2 className="headline1">your new community</h2>
        <div data-aos="slide-down">
        <h2  className="headline1">yet?</h2></div>
        </div>
        <a  href="#" className="btn1 badge">Get Your Badge<img data-aos="slide-left"  className="arrow1" src={"static/images/arrow3.svg"} /></a>
      </div>
      <Footer />
    </section>
    
    
    </div>
  )
}

export default HomePage
