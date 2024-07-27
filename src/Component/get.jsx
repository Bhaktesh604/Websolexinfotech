import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'; // Import Link for internal routing

const Get = () => {
  return (
    <>
      <section className="get position-relative py-5">
        <div className="container">
          <div className="row">
            <div className="get-menu col-12 d-flex justify-content-center justify-content-lg-between flex-wrap rounded-5">
              <div
                className="get-box col-md-12 col-lg-4 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-start mb-3 mb-lg-0"
              >
                <div className="get-icon me-0 me-lg-3">
                  <Link to="tel:+918200845977" className="d-flex justify-content-center align-items-center">
                    <FaPhoneAlt className='text-light' />
                  </Link>
                </div>
                <div className="get-icon-center text-center text-lg-start">
                  <Link to="tel:+918200845977" className="text-white text-decoration-none">
                    GET A FREE CONSULTATION
                  </Link>
                  <p className="mb-0 text-white">82008 45977</p>
                </div>
              </div>
              <div className="get-icon col-md-12 col-lg-4 text-center mb-4 mb-lg-0">
                <p className="m-0">
                  Vero id posuere tempus aspernatur quaerat mollis voluptatum eveniet porro viverra libero habitasse
                  Aut ab nibh aliqua optio veniet porro viverr.
                </p>
              </div>
              <div
                className="get-button col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end align-items-center"
              >
                <div className="get_encar">
                  <Link to="/appointment" className="btn text-decoration-none">Make Appointment</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get;
