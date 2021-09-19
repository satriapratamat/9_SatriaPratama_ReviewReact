import React, { useState } from "react";
import "./css/contact_us.css";
import logoALTA from "./img/logo-ALTA-v2@2x.png";
import sideImg from "./img/charles-rRWiVQzLm7k-unsplash.jpg"
import { validateName, validateEmail, validateNoTelp } from "./printilan/PusatValidasi";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { addFormData } from "../store/formSlice";
import { Link } from "react-router-dom";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    nationality: "",
    message: "",
  });
  const [error, setError] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "fullName") {
      const valFullName = validateName(value);
      if (!valFullName.status) {
        setError((prev) => ({ ...prev, [name]: valFullName.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "email") {
      const valEmail = validateEmail(value);
      if (!valEmail.status) {
        setError((prev) => ({ ...prev, [name]: valEmail.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    if (name === "phoneNumber") {
      const valPhoneNumber = validateNoTelp(value);
      if (!valPhoneNumber.status) {
        setError((prev) => ({ ...prev, [name]: valPhoneNumber.message }));
      } else {
        setError((prev) => ({ ...prev, [name]: "" }));
      }
    }

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    let formIsValid = true;
    const valFullName = validateName(formData.fullName);
    if (!valFullName.status) {
      setError((prev) => ({ ...prev, fullName: valFullName.message }));
      formIsValid = false;
    }

    const valEmail = validateEmail(formData.emailAddress);
    if (!valEmail.status) {
      setError((prev) => ({ ...prev, emailAddress: valEmail.message }));
      formIsValid = false;
    }

    const valPhoneNumber = validateNoTelp(formData.phoneNumber);
    if (!valPhoneNumber.status) {
      setError((prev) => ({ ...prev, phoneNumber: valPhoneNumber.message }));
      formIsValid = false;
    }

    if (formIsValid) {
      dispatch(addFormData(formData));
      history.push("/review");
    }
  }

  return (
      <>
      <div className="row">
        <div className="col-md-4 d-flex flex-wrap align-items-start justify-content-start justify-content-md-between">
            <img className="side-img" src={sideImg} alt=""/>
            <div className="opabg">
            </div>
            <div className="container">
              <Link to="/">
                <img className="alterra-side" src={logoALTA} alt=""/></Link>
            </div>
        </div>
        <div className="col-md-8 ">
            <div className="form-session">
                <h1 className="contact">Contact Us</h1>
                <form onSubmit={handleSubmit} action="" name="contact_us">
                    <div className="form-group">
                        <label for="fullName">Full Name</label><span className="asterisk">*</span>
                        <input onChange={handleChange} value={formData.fullName} type="text" name="fullName" className="form-control" id="fullName" placeholder="Your Full Name Here..." required/>
                        <p className="error-msg">{error.fullName}</p>
                      </div>
                      <div className="form-group">
                        <label for="emailAddress">Email Address</label><span className="asterisk">*</span>
                        <input onChange={handleChange} value={formData.emailAddress} type="email" name="emailAddress" className="form-control" id="emailAddress" placeholder="example@domain.com" required/>
                        <p className="error-msg">{error.emailAddress}</p>
                      </div>
                      <div className="form-group">
                        <label for="phoneNumber">Phone Number</label><span className="asterisk">*</span>
                        <input onChange={handleChange} value={formData.phoneNumber} type="phonenumber" name="phoneNumber" className="form-control" id="phoneNumber" placeholder="08573890xxxxx" required/>
                        <p className="error-msg">{error.phoneNumber}</p>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Nationality</label>
                        <select onChange={handleChange} value={formData.nationality} className="form-control" name="nationality" id="exampleFormControlSelect1" placeholder="Selected">
                          <option>Indonesia</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                          <option>Japan</option>
                        </select>
                        <p></p>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlTextarea1">Message</label>
                        <textarea onChange={handleChange} className="form-control" name="message" id="exampleFormControlTextarea1" rows="4" placeholder="Your Full Name Here..."></textarea>
                        <p></p>
                      </div>
                      <button type="submit" className="btn btn-orange">Submit</button>
              </form>
            </div>
        </div>
    </div>
    </>
            
    );
}

export default ContactUs;

