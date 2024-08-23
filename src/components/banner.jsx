import React from 'react';
import img1 from '../Assets/bootsrap.png'
import img2 from '../Assets/xd.png'
import img3 from '../Assets/figma.png'
import img4 from '../Assets/Illustrator.png'
import img5 from '../Assets/css.png'
import img6 from '../Assets/html.png'
import img7 from '../Assets/react.png'
import img8 from '../Assets/photoshop.png'
import { Link } from 'react-router-dom';
import { IoIosPlay } from "react-icons/io";
import banner_img from "../Assets/banner_section.jpg"
import review_img1 from '../Assets/client-1.jpg'
import review_img2 from '../Assets/client-2.jpg'
import review_img3 from '../Assets/client-3.jpg'
import review_img4 from '../Assets/client-4.jpg'
import { FaStar } from "react-icons/fa";
import report_graf from '../Assets/sale-report-removebg-preview.png'
import graf2 from '../Assets/garf.png'


function Banner() {
    return (
        <>
            {/* <section className="banner position-relative">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="banner_main_menu col-12 col-lg-8 col-xl-6 text-center">
                            <h2 className="mb-4 fw-semibold">Empowering Your Digital Transformation</h2>
                            <h4 className='mb-3'>Comprehensive IT Solutions for Modern Businesses</h4>
                            <p className="mb-5">At WebSolex Infotech, we specialize in delivering cutting-edge technology solutions that drive innovation and efficiency. From website development to application design, UI/UX services, graphics design, and digital marketing, we provide a full suite of IT services tailored to your needs. Let's build your digital future together.</p>
                            <Link to="#" className="border rounded-2 bg-primary text-white">Signup</Link>
                            <div className="banner_image d-none d-lg-block">
                                <img src={img8} alt="" className="banner_img1 position-absolute" />
                                <img src={img4} alt="" className="banner_img2 position-absolute" />
                                <img src={img2} alt="" className="banner_img3 position-absolute" />
                                <img src={img3} alt="" className="banner_img4 position-absolute" />
                                <img src={img5} alt="" className="banner_img5 position-absolute" />
                                <img src={img6} alt="" className="banner_img6 position-absolute" />
                                <img src={img1} alt="" className="banner_img7 position-absolute" />
                                <img src={img7} alt="" className="banner_img8 position-absolute" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='banner'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-5">
                            <div className="banner_sub_box">
                                <p className='text-light'>WELCOME TO SOLVENCY</p>
                                <h2 className='text-light  mb-4'>Empowering Your Digital Transformation</h2>
                                <p className='text-light mb-5'>At WebSolex Infotech, we specialize in delivering cutting-edge technology solutions that drive innovation and efficiency. From website development to application design, UI/UX services, graphics design, and digital marketing, we provide a full suite of IT services tailored to your needs. Let's build your digital future together.</p>
                                <div className="banner_btn">
                                    <Link className='text-black bg-light fw-semibold text-decoration-none'>Get Started</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}


            <section className='banner2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-12 col-lg-7 col-xl-6 mb-5 mb-lg-0">
                                <div className="banner_content2 mt-5  text-center text-lg-start">
                                    <h2 className='text-light fs-1'>Empowering Your Digital Transformation</h2>
                                    <p className='text-light'>At WebSolex Infotech, we specialize in delivering cutting-edge technology solutions that drive innovation and efficiency. From website development to application design, UI/UX services, graphics design, and digital marketing, we provide a full suite of IT services tailored to your needs. Let's build your digital future together.</p>
                                    <div className="banner_button2 d-flex pb-5 border-bottom justify-content-center justify-content-lg-start">
                                        <a href="javascript:void(0);" className='text-decoration-none text-light bg-light text-dark rounded-pill  me-3 border hover_button1'>Get Started</a>
                                        <a href="javascript:void(0);" className='text-decoration-none text-light d-flex align-items-center  border hover_button2 rounded-pill'><IoIosPlay className='me-1' />Watch Video</a>
                                    </div>
                                    <div className="col-12 d-flex flex-wrap justify-content-center justify-content-center  text-center text-sm-start text-md-center text-lg-start mt-3 mt-md-0">
                                        <div className="col-6 col-sm-4">
                                            <div className="banner_number_sub pt-md-3 pt-xxl-4 px-md-3 px-xxl-4 text-light">
                                                <div className="border-right">
                                                    <h2>97.2 %</h2>
                                                    <p>Successful Project</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 col-sm-4">
                                            <div className="banner_number_sub pt-md-3 pt-xxl-4 px-md-3 px-xxl-4 text-light">
                                                <div className="border-right">
                                                    <h2>342 k</h2>
                                                    <p>Joining Comparies</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-7 col-sm-4 mt-3 mt-md-0">
                                            <div className="banner_number_sub pt-md-3 pt-xxl-4 px-md-2 px-xxl-4 text-light">
                                                <h2>13,873 +</h2>
                                                <p>Registered Customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-5 col-xl-6">
                                <div className="image_sub_box d-flex justify-content-center position-relative">
                                    <img src={banner_img} alt="" className='col-12 col-md-9 col-xl-8 rounded-4' />
                                    <div className="review_main_box position-absolute bg-light p-3 d-flex align-items-center justify-content-between rounded-pill col-sm-8 col-md-6 col-lg-10 col-xl-7 col-xxl-6">
                                        <div className="review_image">
                                            <div
                                                class="note-images d-flex position-relative justify-content-center justify-content-md-start me-3">
                                                <div class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light"
                                                    id="review_1">
                                                    <a href="javascript:void(0);"> <img src={review_img1} alt="" className='border-0' /></a>
                                                </div>
                                                <div class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light"
                                                    id="review_2">
                                                    <a href="#review_2"><img src={review_img2} alt="" className='border-0' /></a>
                                                </div>
                                                <div
                                                    class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light">
                                                    <img src={review_img3} alt="" className='border-0' />
                                                </div>
                                                <div
                                                    class="note-img d-flex justify-content-center align-items-center position-relative  overflow-hidden rounded-circle bg-light">
                                                    <img src={review_img4} alt="" className='border-0' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="review_contentt">
                                            <h6 className='mb-0'>10+ Relings</h6>
                                            <ul className='d-flex ps-0 mb-0'>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                                <li className='pe-2'><FaStar className='icon_color' /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="view_sec d-flex flex-wrap align-items-center justify-content-between  col-10 col-md-6 col-lg-9 col-xl-7 col-xxl-6 position-absolute bg-light p-3  rounded-4">
                                        <div className=" col-6 view_content text-center text-md-start">
                                            <span>Total Project</span>
                                            <h2 className='mb-0'>30+</h2>
                                        </div>
                                        <div className=" col-6 ">
                                            <img src={graf2} alt="" className='col-9'/>
                                        </div>
                                        {/* <p className='fw-bold'>Group Memory</p>
                                        <div className="d-flex align-items-center mb-3">
                                            <div className="col-4 pe-3">
                                                <img src={review_img1} alt="" className='col-12 h-100 border-0 rounded-circle'/>
                                            </div>
                                            <div className="">
                                                <h6 className='mb-0'>+918200856187</h6>
                                                <p className='mb-0'>Parth Vaghani</p>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="col-4 pe-3">
                                                <img src={review_img2} alt="" className='col-12 h-100 border-0 rounded-circle'/>
                                            </div>
                                            <div className="">
                                                <h6 className='mb-0'>+918200856187</h6>
                                                <p className='mb-0'>Parth Vaghani</p>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="sale_report  d-sm-flex position-absolute justify-content-between bg-light p-3 rounded-4 col-7 col-md-6  col-lg-10 col-xl-7 col-xxl-6 ">
                                        <div className="me-sm-3 mb-3">
                                            <span className='px-2 py-1 text-light rounded-pill d-flex align-items-center justify-content-center col-5'>New</span>
                                            <h6 className='mb-0 mt-2'>Sale Report</h6>
                                            <p className='mb-0'>Real-Time Sales Analytics</p>
                                        </div>
                                        <div className="col-9 col-sm-5">
                                            <img src={report_graf} alt="" className='col-12 border-0 h-100' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
