// import React, { useState } from 'react'
// import { Accordion } from 'react-bootstrap';
// import logo from '../Assets/Logo.png'
// import { IoLogoInstagram } from "react-icons/io5";
// import { LuFacebook } from "react-icons/lu";
// import { FiLinkedin } from "react-icons/fi";
// import { FaBehance } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com';


// const Footer = () => {
//     const [email, setEmail] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Your EmailJS service ID, template ID, and Public Key
//         const serviceId = 'service_csia6iy';
//         const templateId = 'template_3yxpude';
//         const publicKey = 'NuQv9XskxV05oXLmu';

//         // Create a new object that contains dynamic template params

//         // Send the email using EmailJS
//         emailjs.send(service_csia6iy, template_3yxpude, templateParams, NuQv9XskxV05oXLmu)
//             .then((response) => {
//                 console.log('Email sent successfully!', response);
//                 setEmail('');
//             })
//             .catch((error) => {
//                 console.error('Error sending email:', error);
//             });           
//     }
// };

// return (

//     <>
//         <section className="footer-area pt-50 pt-100 d-none d-lg-block">
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12 d-flex flex-wrap">
//                         <div className=" col-lg-4 footer-cms">
//                             <div className="single-footer-widget  text-md-left footer-left wow fadeInLeft animated title">
//                                 <div className="footer-toggle">
//                                     <div className="footer-logo-main-black mb-3">
//                                         <Link to="index.html">
//                                             <img src={logo} />
//                                         </Link>
//                                     </div>
//                                     <p>Your Ideas, Our Innovation</p>
//                                     <ul className="contact-link ps-0">
//                                         <li className='pt-3'>
//                                             <div className="footer-info-contact">
//                                                 <div className="footer-contact-heading">
//                                                     <p className='mb-0 fw-bold'>Phone :-</p>
//                                                 </div>
//                                                 <div>
//                                                     <span>
//                                                         <Link to="tel:+9182008-45977">+91 82008-45977</Link>
//                                                     </span><br />
//                                                 </div>
//                                             </div>
//                                         </li>
//                                         <li className='pt-3'>
//                                             <div className="footer-info-email">
//                                                 <div className="footer-contact-heading">
//                                                     <p className='mb-0 fw-bold'>Email :-</p>
//                                                 </div>
//                                                 <div>
//                                                     <span>
//                                                         <Link
//                                                             to="mailto:websolexinfotech@gmail">websolexinfotech@gmail.com</Link>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                         <li className='pt-3'>
//                                             <div className="footer-info-address">
//                                                 <div className="footer-contact-heading">
//                                                     <p className='mb-0 fw-bold'>Address :-</p>
//                                                 </div>
//                                                 <div>
//                                                     <span> A-103 IT Park Mota Varachha Road Surat Gujarat.</span>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" col-lg-2 footer-cms">
//                             <div className="single-footer-widget  text-md-left wow fadeInDown animated">
//                                 <div className="single-title-wrapper title">
//                                     <div className="title-footer">
//                                         <h3 className="footer-block__heading mb-4">Websolex</h3>
//                                     </div>

//                                     <ul className="footer-quick-links pt-10 footer-toggle ps-0">
//                                         <li className='mb-3'>
//                                             <Link to="/portfolio" onClick={handleTabClick} className='px-0'>Portfolio</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='px-0'>Career</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='px-0'>Contact</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="/blog" onClick={handleTabClick} className='px-0'>Blog</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='px-0'>Company</Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" col-lg-3">
//                             <div className="single-footer-widget  text-md-left wow fadeInUp animated">
//                                 <div className="single-title-wrapper title">
//                                     <div className="title-footer">
//                                         <h3 className="footer-block__heading mb-4">Services</h3>
//                                     </div>
//                                     <ul className="footer-quick-links pt-10 footer-toggle ps-0">
//                                         <li className='mb-3'>
//                                             <Link to="#" className='px-0'>Web Development</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" className='px-0'>Graphic Design</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" className='px-0'>App Development</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" className='px-0'>Game Development</Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className=" col-lg-3">
//                             <div
//                                 className="single-footer-widget d-flex flex-column text-md-left wow fadeInRight animated">
//                                 <div className="single-title-wrapper  title">
//                                     <div className="title-footer">
//                                         <h3 className="footer-block__heading mb-4">Subscribe</h3>
//                                     </div>
//                                     <div className="footer-toggle">
//                                         <p>Accompany us on our growth journey to glean insights from our experiences </p>
//                                         {/* <form onSubmit={handleSubmit} method="post">
//                                                 <input type="hidden" />
//                                                 <input className="mil-rounded-input mil-text-center mil-mb-5" type="text"
//                                                     placeholder="Your Email Address" name="subscribe_email" />
//                                                 <button className="mil-button mil-accent-bg mil-fw" type="submit"><span
//                                                     className="text-light">Subscribe</span></button>
//                                             </form> */}
//                                         {/* <form onSubmit={handleSubmit}>
//                                                 <input className="mil-rounded-input mil-text-center mil-mb-5"
//                                                     type="text"
//                                                     placeholder="Your Name"
//                                                     name="user_name"
//                                                     required
//                                                 />
//                                                 <input className="mil-rounded-input mil-text-center mil-mb-5"
//                                                     type="email"
//                                                     name="user_email_address"
//                                                     value={email}
//                                                     onChange={(e) => setEmail(e.target.value)}
//                                                     placeholder="Your Email"
//                                                     required
//                                                 />
//                                                 <button className="mil-button mil-accent-bg mil-fw" type="submit"><span
//                                                     className="text-light">Subscribe</span></button>
//                                             </form> */}
//                                         <form onSubmit={handleSubmit} className='emailForm'>
//                                             <input
//                                                 type="email"
//                                                 placeholder="Your Email"
//                                                 value={email}
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                             />
//                                             <button className="mil-button mil-accent-bg mil-fw" type="send"><span
//                                                     className="text-light">Subscribe</span></button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="footer-bottom py-3 border-top">
//                         <div className="containerr">
//                             <div className="row align-items-center">
//                                 <div className="col-lg-6 wow fadeInLeft animated">
//                                     <div className="footer-bottom-content">
//                                         <div className="footer-bottom-content-copy">
//                                             <p className='mb-0'>Copyright © 2025 Websolex infotech. All Rights Reserved. </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-6 wow fadeInRight animated">
//                                     <ul className="footer-social d-flex flex-row justify-content-center p-0 ps-lg-3 justify-content-lg-end align-items-right float-right mb-0">
//                                         <li>
//                                             <Link to="https://www.facebook.com/profile.php?id=61559410317814" target="_new">
//                                                 <LuFacebook />
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link to="https://www.instagram.com/websolex_infotech/" target="_blank">
//                                                 <IoLogoInstagram />
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/"
//                                                 target="_blank">
//                                                 <FiLinkedin />
//                                             </Link>
//                                         </li>
//                                         <li>
//                                             <Link to="https://www.behance.net/unityinfotech" target="_blank">
//                                                 <FaBehance />
//                                             </Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <section className='footer-area d-block d-lg-none'>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <Accordion defaultActiveKey="0" className='mb-5 bg-transparent px-0'>
//                         <Accordion.Item eventKey="0" className='border-0'>
//                             <div className="title-footer">
//                                 <Accordion.Header className="footer-block__heading fw-bold">Contact</Accordion.Header>
//                             </div>
//                             <Accordion.Body>
//                                 <div className="footer-toggle">
//                                     <div className="footer-logo-main-black mb-3">
//                                         <Link to="index.html">
//                                             <img src={logo} alt="Logicgo-Logo" className='img-fluid col-4' />
//                                         </Link>
//                                     </div>
//                                     <p>Your Ideas, Our Innovation</p>
//                                     <ul className="contact-link ps-0">
//                                         <li className='pt-3'>
//                                             <div className="footer-info-contact">
//                                                 <div className="footer-contact-heading">
//                                                     <p className='mb-0 fw-bold'>Phone :-</p>
//                                                 </div>
//                                                 <div>
//                                                     <span>
//                                                         <Link to="tel:+9182008-45977">+91 82008-45977</Link>
//                                                     </span><br />
//                                                 </div>
//                                             </div>
//                                         </li>
//                                         <li className='pt-3'>
//                                             <div className="footer-info-email">
//                                                 <div className="footer-contact-heading">
//                                                     <p className='mb-0 fw-bold'>Email :-</p>
//                                                 </div>
//                                                 <div>
//                                                     <span>
//                                                         <Link
//                                                             to="mailto:websolexinfotech@gmail">websolexinfotech@gmail.com</Link>
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                         <li className='pt-3'>
//                                             <div className="footer-info-address">
//                                                 <div className="footer-contact-heading">
//                                                     <p className='mb-0 fw-bold'>Address :-</p>
//                                                 </div>
//                                                 <div>
//                                                     <span> A-103 IT Park Mota Varachha Road Surat Gujarat</span>
//                                                 </div>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="1" className='border-0'>
//                             <div className="title-footer">
//                                 <Accordion.Header className="footer-block__heading fw-bold">Company</Accordion.Header>
//                             </div>
//                             <Accordion.Body>
//                                 <div className="single-title-wrapper title">
//                                     <ul className="footer-quick-links pt-10 ps-0">
//                                         <li className='mb-3'>
//                                             <Link to="/portfolio" onClick={handleTabClick} className='text-decoration-none text-black'>Portfolio</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Career</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="/company" onClick={handleTabClick} className='text-decoration-none text-black'>Company</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="/blog" onClick={handleTabClick} className='text-decoration-none text-black'>Blog</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="/contact" onClick={handleTabClick} className='text-decoration-none text-black'>Contact</Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="2" className='border-0'>
//                             <Accordion.Header className="footer-block__heading fw-bold">Services</Accordion.Header>
//                             <Accordion.Body>
//                                 <div className="single-title-wrapper title">
//                                     <ul className="footer-quick-links pt-10  ps-0">
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Web Development</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Graphic Design</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>App Development</Link>
//                                         </li>
//                                         <li className='mb-3'>
//                                             <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Game Development</Link>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>
//                         <Accordion.Item eventKey="3" className='border-0'>
//                             <Accordion.Header className="footer-block__heading fw-bold">Subscribe</Accordion.Header>
//                             <Accordion.Body>
//                                 <div className="single-title-wrapper title">
//                                     <div className="footer-toggle">
//                                         <p>Accompany us on our growth journey to glean insights from our experiences </p>
//                                         <form action="https://logicgoinfotech.com/subscribe" method="post" className='single-footer-widget'>
//                                             <input type="hidden" name="_token" value="ELWTHSzqRMgafCiKc3wZuU0f6XVFWA2gJNohZnBJ" />
//                                             <input className="mil-rounded-input mil-text-center mil-mb-5" type="text"
//                                                 placeholder="Your email address" name="subscribe_email" />
//                                             <button className="mil-button mil-accent-bg mil-fw" type="submit"><span
//                                                 className="text-light">Subscribe</span></button>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </Accordion.Body>
//                         </Accordion.Item>
//                     </Accordion>
//                     <div className="col-lg-6 wow fadeInLeft animated">
//                         <div className="footer-bottom-content">
//                             <div className="footer-bottom-content-copy">
//                                 <p>Copyright © 2025 Websolex infotech. All Rights Reserved. </p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 wow fadeInRight animated">
//                         <ul className="footer-social d-flex flex-row justify-content-center p-0 ps-lg-3 justify-content-lg-end align-items-right float-right">
//                             <li>
//                                 <Link to="https://www.facebook.com/profile.php?id=61559410317814" target="_new">
//                                     <LuFacebook />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="https://www.instagram.com/websolex_infotech/" target="_blank">
//                                     <IoLogoInstagram />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/"
//                                     target="_blank">
//                                     <FiLinkedin />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link to="https://www.behance.net/unityinfotech" target="_blank">
//                                     <FaBehance />
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     </>
// );


// export default Footer


import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import logo from '../Assets/Logo.png';
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { SlSocialBehance } from "react-icons/sl";
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate()
    const [data, setdata] = useState({ email: "" });
    const handleTabClick = (tab) => {
        window.scrollTo(0, 0);

    };

    const onhange = (e) => {
        const { name, value } = e.target;
        setdata(prevdata => ({
            ...prevdata,
            [name]: value
        }));
    }

    const onubmit = (e) => {
        e.preventDefault();
        const emailParams = {
            email: data.email,
        }
        emailjs.send('service_csia6iy', 'template_confirmation', emailParams, 'NuQv9XskxV05oXLmu')
            .then((response) => {
                navigate('/thankyou');
            }, (error) => {
                alert(`FAILD... ${error}`);
            });
        setdata({ email: "" })
    }

    

    return (
        <>
            <section className="footer-area pt-50 pt-100 d-none d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap ">
                            <div className="col-lg-4 footer-cms wow animate__animated animate__fadeInUp">
                                <div className="single-footer-widget text-md-left footer-left wow fadeInLeft animated title">
                                    <div className="footer-toggle">
                                        <div className="footer-logo-main-black mb-3">
                                            <Link to="/" onClick={handleTabClick}>
                                                <img src={logo} alt="Logo" />
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
                                                            <Link to="tel:+9182008-45977" alt="">+91 82008-45977</Link>
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
                                                            <Link to="mailto:websolexinfotech@gmail.com">websolexinfotech@gmail.com</Link>
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
                            <div className="col-lg-2 footer-cms wow animate__animated animate__fadeInUp">
                                <div className="single-footer-widget text-md-left wow fadeInDown animated">
                                    <div className="single-title-wrapper title">
                                        <div className="title-footer">
                                            <h3 className="footer-block__heading mb-4">Websolex</h3>
                                        </div>
                                        <ul className="footer-quick-links pt-10 footer-toggle ps-0">
                                            <li className='mb-3'>
                                                <Link to="/portfolio" onClick={handleTabClick} className='px-0'>Portfolio</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/Career" onClick={handleTabClick} className='px-0'>Career</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='px-0'>Contact</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/blog" onClick={handleTabClick} className='px-0'>Blog</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='px-0'>Company</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 wow animate__animated animate__fadeInUp">
                                <div className="single-footer-widget text-md-left wow fadeInUp animated">
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
                            <div className="col-lg-3 wow animate__animated animate__fadeInUp">
                                <div className="single-footer-widget d-flex flex-column text-md-left wow fadeInRight animated">
                                    <div className="single-title-wrapper title">
                                        <div className="title-footer">
                                            <h3 className="footer-block__heading mb-4">Subscribe</h3>
                                        </div>
                                        <div className="footer-toggle">
                                            <p>Accompany us on our growth journey to glean insights from our experiences</p>
                                            <form onSubmit={onubmit} className='emailForm'>
                                                <input
                                                    type="email"
                                                    id='email'
                                                    name='email'
                                                    placeholder="Enter Your Email"
                                                    value={data.email}
                                                    onChange={onhange}
                                                    required
                                                />
                                                <button className="mil-button mil-accent-bg mil-fw" type="submit">
                                                    <span className="text-light fw-normal">Subscribe</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom py-3 border-top">
                            <div className="containerr">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 wow animate__animated animate__fadeInLeft">
                                        <div className="footer-bottom-content">
                                            <div className="footer-bottom-content-copy">
                                                <p className='mb-0'>Copyright © 2025 Websolex Infotech. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                                        <ul className="footer-social d-flex flex-row justify-content-center p-0 ps-lg-3 justify-content-lg-end align-items-right float-right mb-0">
                                            <li>
                                                <Link to="https://www.facebook.com/profile.php?id=61559410317814" target="_blank">
                                                    <LuFacebook />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.instagram.com/websolex_infotech/" target="_blank">
                                                    <IoLogoInstagram />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/" target="_blank">
                                                    <FiLinkedin />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="https://www.behance.net/unityinfotech" target="_blank">
                                                    <SlSocialBehance />
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
                                                            <Link to="tel:+9182008-45977">+91 82008-45977</Link></span><br />
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
                                                <Link to="/portfolio" onClick={handleTabClick} className='text-decoration-none text-black'>Portfolio</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/Career" onClick={handleTabClick} className='text-decoration-none text-black'>Career</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/company" onClick={handleTabClick} className='text-decoration-none text-black'>Company</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/blog" onClick={handleTabClick} className='text-decoration-none text-black'>Blog</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="/contact" onClick={handleTabClick} className='text-decoration-none text-black'>Contact</Link>
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
                                                <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Web Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Graphic Design</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>App Development</Link>
                                            </li>
                                            <li className='mb-3'>
                                                <Link to="#" onClick={handleTabClick} className='text-decoration-none text-black'>Game Development</Link>
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
                                            <form onSubmit={onsubmit} className='single-footer-widget'>
                                                <input className="mil-rounded-input mil-text-center mil-mb-5" type="email"
                                                    id='email'
                                                    name='email'
                                                    placeholder="Enter Your Email"
                                                    value={data.email}
                                                    onChange={onhange}
                                                    required />
                                                <button className="mil-button mil-accent-bg mil-fw" type="submit">
                                                    <span className="text-light">Subscribe</span></button>
                                            </form>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <div className="col-lg-6 wow fadeInLeft animated">
                            <div className="footer-bottom-content">
                                <div className="footer-bottom-content-copy">
                                    <p className='text-center '>Copyright © 2025 Websolex infotech. All Rights Reserved. </p>
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
                                        <SlSocialBehance />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;


