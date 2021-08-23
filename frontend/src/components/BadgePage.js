import React, { useState } from "react";
import Modal from 'react-modal'
import Footer from "./Footer";

import Header from "./Header";

function BadgePage() {
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [school, setSchool] = useState("");
  const [city_of_origin, setCityOfOrigin] = useState("");
  const [current_city, setCurrentCity] = useState("");
  const [modalIsOpen,setModalIsOpen] = useState(false)

  async function register() {
    let item = {
      first_name,last_name,phone,school,city_of_origin,current_city,
      email,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name:first_name,
        last_name:last_name,
        phone:phone,
        school:school,
        city_of_origin:city_of_origin,
        current_city:current_city,
        email:email,
      }),
    };
    fetch("/api/create-user", requestOptions)
      .then((response) => {
        if (response.ok) {

          return response.json();
          
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) =>  {setModalIsOpen(true)
        console.log(data)})
      .catch((error) => {
        console.log(error)
      });
    
    console.log(item);
  }

  return (
    <div>
      <Modal   isOpen={modalIsOpen} style={{
        overlay : {
          position: 'fixed',
          
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          justifyContent: 'center',
          textAlign : 'center',
          alignItems : 'center'
        },
        content :{
          height : '50vh',
          width : '60vw',
          position: 'absolute',
          top : '25vh',
      left: '20vw',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
          justifyContent: 'center',
          textAlign : 'center',
          alignItems : 'center',
          display: 'flex'
        }
      }} >
        <h2 className="modal-headline">that is it, you are<span className="letter-color1 "> in</span></h2>
        <div>
        <p className="modal-info">You will find your badge waiting for you in your email.
          Go check it, it's really pretty and shiny ! 
        </p>

        <a  href="/" className="btn1">Go Back<img data-aos="slide-left"  className="arrow1" src={"static/images/arrow1.svg"} /></a></div>
        
      </Modal>
      <Header
        logo={"static/images/logoB.png"}
        class1="nav-item colorB"
        class2="nav-item colorB"
      />
      <section className="part2 addMargin" id="part2">
        <div className="container container1">
          <div>
            <h2 className=" headline1">You made the right</h2>
          </div>

          <div>
            <h2 className=" headline1">decision</h2>
          </div>

          <div className="no-animation ">
            <h6 className="desc2">
              Now we are just gonna fill some forms, simple step, don't back
              down!<p> </p>
              (Bonus : You gonna get a badge of belongning after this yeey)
            </h6>
          </div>
          <div className="arrowAnimation">
            <a href="#form">
              <img
                className="arrow1 arrow90"
                src={"static/images/arrow1.svg"}
              />
            </a>
          </div>

          <div>
            <form action="" className="badgeForm" id="form">
              <div className="formInfo">
                <div className="form-elemnts">
                  <h6 className="formLabel">First Name</h6>
                  <input
                    type="text"
                    className="newsletter-input"
                    placeholder=""
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                 required></input>
                </div>
                <div className="form-elemnts">
                  <h6 className="formLabel">Last Name</h6>
                  <input value={last_name} onChange={(e) => setLastName(e.target.value)}className="newsletter-input" required></input>
                </div>
                <div className="form-elemnts">
                  <h6 className="formLabel">Email</h6>
                  <input
                    className="newsletter-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  required></input>
                </div>
                <div className="form-elemnts">
                  <h6 className="formLabel">Phone Number</h6>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="newsletter-input" required></input>
                </div>

                <div className="form-elemnts">
                  <h6 className="formLabel">School/Faculty Name</h6>
                  <input value={school} onChange={(e) => setSchool(e.target.value)} className="newsletter-input" required></input>
                </div>
                <div className="form-elemnts ">
                  <h6 className="formLabel">Are you a Graduate?</h6>
                  <div className="checkboxContainer">
                    <input type="checkbox" className="checkbox" />
                    <h6 className="checkbox-label">Yes</h6>
                    <input type="checkbox" className="checkbox" />
                    <h6 className="checkbox-label">No</h6>
                  </div>
                </div>

                <div className="form-elemnts">
                  <h6 className="formLabel">City of Origin</h6>
                  <input value={city_of_origin} onChange={(e) => setCityOfOrigin(e.target.value)} className="newsletter-input" required></input>
                </div>
                <div className="form-elemnts">
                  <h6 className="formLabel">Current City</h6>
                  <input value={current_city} onChange={(e) => setCurrentCity(e.target.value)} className="newsletter-input" required></input>
                </div>
              </div>
              <div className="form-elemnts ">
                <button type="button" onClick={register} className="btn2">
                  Let's goo
                  <img
                    data-aos="slide-left"
                    className="arrow1"
                    src={"static/images/arrow1.svg"}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default BadgePage;
