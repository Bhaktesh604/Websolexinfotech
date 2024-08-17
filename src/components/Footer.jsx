import React from 'react'
import { Accordion } from 'react-bootstrap';
import logo from '../Assets/Logo.png'
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <section className="footer-area pt-50 pt-100 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 footer-cms">
                            <div className="single-footer-widget  text-md-left footer-left wow fadeInLeft animated title">
                                <div className="footer-toggle">
                                    <div className="footer-logo-main-black mb-3">
                                        <Link to="index.html">
                                            <img src={logo} alt="Logicgo-Logo" />
                                        </Link>
                                    </div>
                                    <p>Your Ideas, Our Innovation</p>
                                    <ul className="contact-link ps-0">
                                        <li className='pt-3'>
                                            <div className="footer-info-contact">
                                                <div className="footer-contact-heading">
                                                    <p className='mb-0 fw-bold'>Phone :-</p>
                                                </div>
                                                <div>
                                                    <span>
                                                        <Link to="tel:+9182008-45977">+91 82008-45977</Link>
                                                    </span><br />
                                                </div>
                                            </div>
                                        </li>
                                        <li className='pt-3'>
                                            <div className="footer-info-email">
                                                <div className="footer-contact-heading">
                                                    <p className='mb-0 fw-bold'>Email :-</p>
                                                </div>
                                                <div>
                                                    <span>
                                                        <Link
                                                            to="mailto:websolexinfotech@gmail">websolexinfotech@gmail.com</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='pt-3'>
                                            <div className="footer-info-address">
                                                <div className="footer-contact-heading">
                                                    <p className='mb-0 fw-bold'>Address :-</p>
                                                </div>
                                                <div>
                                                    <span> A-103 IT Park Mota Varachha Road Surat Gujarat.</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 footer-cms">
                            <div className="single-footer-widget  text-md-left wow fadeInDown animated">
                                <div className="single-title-wrapper title">
                                    <div className="title-footer">
                                        <h3 className="footer-block__heading mb-4">Websolex</h3>
                                    </div>

                                    <ul className="footer-quick-links pt-10 footer-toggle ps-0">
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Portfolio</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Career</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Contact</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Blog</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Company</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget  text-md-left wow fadeInUp animated">
                                <div className="single-title-wrapper title">
                                    <div className="title-footer">
                                        <h3 className="footer-block__heading mb-4">Services</h3>
                                    </div>
                                    <ul className="footer-quick-links pt-10 footer-toggle ps-0">
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Web Development</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Graphic Design</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>App Development</Link>
                                        </li>
                                        <li className='mb-3'>
                                            <Link to="#" className='px-0'>Game Development</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div
                                className="single-footer-widget d-flex flex-column text-md-left wow fadeInRight animated">
                                <div className="single-title-wrapper  title">
                                    <div className="title-footer">
                                        <h3 className="footer-block__heading mb-4">Subscribe</h3>
                                    </div>
                                    <div className="footer-toggle">
                                        <p>Accompany us on our growth journey to glean insights from our experiences </p>
                                        <form action="https://www.websolexinfotech.com/subscribe" method="post">
                                            <input type="hidden"  />
                                            <input className="mil-rounded-input mil-text-center mil-mb-5" type="text"
                                                placeholder="Your Email Address" name="subscribe_email" />
                                            <button className="mil-button mil-accent-bg mil-fw" type="submit"><span
                                                className="text-light">Subscribe</span></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom py-3 border-top">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 wow fadeInLeft animated">
                                        <div className="footer-bottom-content">
                                            <div className="footer-bottom-content-copy">
                                                <p>Copyright © 2024 Websolex infotech. All Rights Reserved. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInRight animated">
                                        <ul className="footer-social d-flex flex-row justify-content-center p-0 ps-lg-3 justify-content-lg-end align-items-right float-right">
                                            <li>
                                                <Link to="https://www.facebook.com/profile.php?id=61559410317814" target="_new">
                                                    <LuFacebook />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.instagram.com/websolex_infotech/" target="_blank">
                                                    <IoLogoInstagram />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/"
                                                    target="_blank">
                                                    <FiLinkedin />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.behance.net/unityinfotech" target="_blank">
                                                    <FaBehance />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer-area d-block d-lg-none'>
                <div className="container">
                    <div className="row justify-content-center">
                        <Accordion defaultActiveKey="0" className='mb-5 bg-transparent px-0'>
                            <Accordion.Item eventKey="0" className='border-0'>
                                <div className="title-footer">
                                    <Accordion.Header className="footer-block__heading fw-bold">Contact</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                <div className="footer-toggle">
                                    <div className="footer-logo-main-black mb-3">
                                        <Link to="index.html">
                                            <img src={logo} alt="Logicgo-Logo" className='img-fluid col-4' />
                                        </Link>
                                    </div>
                                    <p>Your Ideas, Our Innovation</p>
                                    <ul className="contact-link ps-0">
                                        <li className='pt-3'>
                                            <div className="footer-info-contact">
                                                <div className="footer-contact-heading">
                                                    <p className='mb-0 fw-bold'>Phone :-</p>
                                                </div>
                                                <div>
                                                    <span>
                                                        <Link to="tel:+9182008-45977">+91 82008-45977</Link>
                                                    </span><br />
                                                </div>
                                            </div>
                                        </li>
                                        <li className='pt-3'>
                                            <div className="footer-info-email">
                                                <div className="footer-contact-heading">
                                                    <p className='mb-0 fw-bold'>Email :-</p>
                                                </div>
                                                <div>
                                                    <span>
                                                        <Link
                                                            to="mailto:websolexinfotech@gmail">websolexinfotech@gmail.com</Link>
                                                    </span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className='pt-3'>
                                            <div className="footer-info-address">
                                                <div className="footer-contact-heading">
                                                    <p className='mb-0 fw-bold'>Address :-</p>
                                                </div>
                                                <div>
                                                    <span> A-103 IT Park Mota Varachha Road Surat Gujarat</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className='border-0'>
                                <div className="title-footer">
                                    <Accordion.Header className="footer-block__heading fw-bold">Company</Accordion.Header>
                                </div>
                                <Accordion.Body>
                                    <div className="single-title-wrapper title">
                                        <ul className="footer-quick-links pt-10 ps-0">
                                            <li className='mb-3'>
                                                <Link to="/portfolio" className='text-decoration-none text-black'>Portfolio</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='text-decoration-none text-black'>Career</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/company" className='text-decoration-none text-black'>Company</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/contact" className='text-decoration-none text-black'>Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className='border-0'>
                                <Accordion.Header className="footer-block__heading fw-bold">Services</Accordion.Header>
                                <Accordion.Body>
                                    <div className="single-title-wrapper title">
                                        <ul className="footer-quick-links pt-10  ps-0">
                                            <li className='mb-3'>
                                                <Link to="#" className='text-decoration-none text-black'>Web Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='text-decoration-none text-black'>Graphic Design</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='text-decoration-none text-black'>App Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" className='text-decoration-none text-black'>Game Development</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className='border-0'>
                                <Accordion.Header className="footer-block__heading fw-bold">Subscribe</Accordion.Header>
                                <Accordion.Body>
                                    <div className="single-title-wrapper title">
                                        <div className="footer-toggle">
                                            <p>Accompany us on our growth journey to glean insights from our experiences </p>
                                            <form action="https://logicgoinfotech.com/subscribe" method="post" className='single-footer-widget'>
                                                <input type="hidden" name="_token" value="ELWTHSzqRMgafCiKc3wZuU0f6XVFWA2gJNohZnBJ" />
                                                <input className="mil-rounded-input mil-text-center mil-mb-5" type="text"
                                                    placeholder="Your email address" name="subscribe_email" />
                                                <button className="mil-button mil-accent-bg mil-fw" type="submit"><span
                                                    className="text-light">Subscribe</span></button>
                                            </form>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="col-lg-6 wow fadeInLeft animated">
                            <div className="footer-bottom-content">
                                <div className="footer-bottom-content-copy">
                                    <p>Copyright © 2024 Websolex infotech. All Rights Reserved. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight animated">
                            <ul className="footer-social d-flex flex-row justify-content-center p-0 ps-lg-3 justify-content-lg-end align-items-right float-right">
                                <li>
                                    <Link to="https://www.facebook.com/profile.php?id=61559410317814" target="_new">
                                        <LuFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.instagram.com/websolex_infotech/" target="_blank">
                                        <IoLogoInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/"
                                        target="_blank">
                                        <FiLinkedin />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.behance.net/unityinfotech" target="_blank">
                                        <FaBehance />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
