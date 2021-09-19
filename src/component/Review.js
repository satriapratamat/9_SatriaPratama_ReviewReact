import React from "react";
import "./css/review.css";
import dotDot from "./img/img-dot@2x.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Review() {
  const formData = useSelector((state) => state.formData.formData);
  return (
      <>
      <div className="container">
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 kotak">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">Full name</div>
                    <div className="col-md-5">: {formData.fullName}</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">Email</div>
                    <div className="col-md-5">: {formData.emailAddress}</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">Phone Number</div>
                    <div className="col-md-5">: {formData.phoneNumber}</div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-3">Nationality</div>
                    <div className="col-md-5">: {formData.nationality}</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row message-show">
                    <div className="col-md-2"></div>
                    <div className="col-md-5">{formData.message}</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="ujung-kotak">
                    <div className="row">
                        <div className= 'col-md-2'></div>
                        <div className= 'col-md-8 pembatas'><p></p></div>
                        <div className= 'col-md-2'></div>
                    </div>
                    <div className='keep-in-touch'>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">Thanks for contacting us!</div>
                            <div className="col-md-2"></div>
                        </div>
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8">We will be touch with you shortly</div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <Link to="/">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8"><button className="btn btn-orange">Home</button></div>
                            <div className="col-md-2"></div>
                        </div>
                    </Link>
                </div>
            </div>
            <div class="col-2"></div>
        </div>
    </div>
    <footer>
        <div class="row">
            <div class= 'col-md-2'></div>
            <div class= 'col-md-2 dot-blue'><img src={dotDot} alt=""/></div>
            <div class= 'col-md-2'></div>
            <div class= 'col-md-2'></div>
            <div class= 'col-md-2'></div>
            <div class= 'col-md-2'></div>
        </div>
    </footer>
    </>
  );
}

export default Review;