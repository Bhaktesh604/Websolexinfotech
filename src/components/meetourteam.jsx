import React from 'react'
import parthbhai from '../Assets/parthbhai.png'
import harshbhai from '../Assets/harshvegad.jpg'
import baktesh from '../Assets/Bhaktesh.png'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";



function Meetourteam() {
    return (
        <>
            <section className="meet_our_team pb-100">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-12 text-center py-5">
                            <div className="section_title portfolio_title text-center mt-3 mb-4">
                                <div className="section_main_title wow animate__animated animate__fadeInDown">
                                    <h1 className="text-capitalize" >meet our team</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-7 d-flex align-items-stretch wow animate__animated animate__fadeInLeft">
                            <div className="position-relative card_options mg-10 mx-md-3">
                                <div className="card ">
                                    <div className="card-img-top h-auto">
                                        <img src={harshbhai} alt="" className="img-fluid" />
                                    </div>
                                    <div className="card-body px-lg-0 p-md-4 text-center">
                                        <h4 className="mb-1 " >Harsh Vegad</h4>
                                        <p className="mb-1 fs-14">Founder & CFO</p>
                                        <div className="social d-flex mt-2 justify-content-center gap-1">
                                            <Link to="https://www.linkedin.com/in/harsh-vegad-499166251/" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                                <FaLinkedinIn />
                                            </Link>
                                            <Link to="https://www.instagram.com/vegad_harsh_84/" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                            <PiInstagramLogoFill />
                                            </Link>
                                            <Link to="https://www.facebook.com/harsh.vegad.779" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                                <FaFacebookF />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-7 d-flex align-items-stretch wow animate__animated animate__fadeInUp">
                            <div className="position-relative mg-10 mx-md-3">
                                <div className="card ">
                                    <div className="card-img-top h-auto">
                                        <img src={parthbhai} alt="" className="img-fluid" />
                                    </div>
                                    <div className="card-body px-lg-0 p-md-4 text-center">
                                        <h4 className="mb-1" >Parth Vaghani </h4>
                                        <p className="mb-1 fs-14">Founder & CEO</p>
                                        <div className="social d-flex mt-2 justify-content-center gap-1">
                                            <Link to="https://www.linkedin.com/in/parth-vaghani-ui-ux-graphics-design-websolex-infotech/" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                                <FaLinkedinIn />
                                            </Link>
                                            <Link to="https://www.instagram.com/_parth_vaghani/" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                            <PiInstagramLogoFill />
                                            </Link>
                                            <Link to="https://www.facebook.com/vaghani.parth.129" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                                <FaFacebookF />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-7 d-flex align-items-stretch wow animate__animated animate__fadeInRight">
                            <div className="position-relative card_options mg-10 mx-md-3">
                                <div className="card ">
                                    <div className="card-img-top h-auto">
                                        <img src={baktesh} alt="" className="img-fluid" />
                                    </div>
                                    <div className="card-body px-lg-0 p-md-4 text-center">
                                        <h4 className="mb-1" >Bhaktesh Gadhiya</h4>
                                        <p className="mb-1 fs-14">Founder & CTO</p>
                                        <div className="social d-flex mt-2 justify-content-center gap-1">
                                            <Link to="https://www.linkedin.com/in/bhaktesh-gadhiya-213b28235/" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                                <FaLinkedinIn />
                                            </Link>
                                            <Link to="https://www.instagram.com/bhaktesh_gadhiya_" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                            <PiInstagramLogoFill />
                                            </Link>
                                            <Link to="https://www.facebook.com/bhakatesh.gadhiya" target='_blank' className="icon_links text-bg-light border d-flex align-items-center justify-content-center rounded-2">
                                                <FaFacebookF />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Meetourteam
