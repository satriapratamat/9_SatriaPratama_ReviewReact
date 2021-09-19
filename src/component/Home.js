import React from "react";
import Header from "./Header";
import "./css/home.css";
import fotoBulat from "./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
      <>
      <Header/>
      <div className="bg">
        <div className="container">
            <content className="main-content row justify-content-start">
                <div className="col-md-4 col-sm-12">
                    <img src={fotoBulat} alt="anne-img" className="profile-img rounded-circle"/>
                </div>
                <div className="col-md-8 col-sm-12">
                    <div className="name-profile">
                        <p className="hi-name">Hi, my name is</p>
                        <p className="title-name">Anne Sullivan</p>
                        <p className="paragraph">I build things for web</p>
                        <Link to="/contact">
                            <a href="/contact" className="btn btn-orange">Get In Touch</a>
                        </Link>
                    </div>
                </div>
            </content>
        </div>
      </div>
      </>
  );
}

export default Home;