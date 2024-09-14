// import React from 'react'
// import { MdLocationPin } from "react-icons/md";
// import { FaPhone } from "react-icons/fa6";
// import { FaClock } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";
// import { FaFacebookF } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io5";

// const From = () => {
//     return (
//         <>
//             <section className="contact_form">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="contact_heading text-center col-6 mb-5">
//                             <h3 className="fw-semibold mb-4"><u>Connect</u> with Our Team</h3>
//                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam obcaecati maiores.
//                                 Laborum minus neque eius nisi voluptatum aperiam corrupti.</p>
//                         </div>
//                         <div className="col-12 d-flex">
//                             <div className="col-6">
//                                 <div className="contact_form_sub rounded-3 m-3">
//                                     {/* <h2 className="mb-4">Get in Touch with Us</h2> */}
//                                     <div className="input_main_menu d-flex flex-wrap">
//                                         <div className="input_sub_box col-6 ps-0">
//                                             <div className="m-2">
//                                                 <input type="text" placeholder="Enter Your Name"
//                                                     className="p-2 border-0 rounded-2 mb-3 col-12" />
//                                             </div>
//                                         </div>
//                                         <div className="input_sub_box col-6 ps-0">
//                                             <div className="m-2">
//                                                 <input type="text" placeholder="Enter Your Email"
//                                                     className="p-2 border-0 rounded-2 mb-3 col-12" />
//                                             </div>
//                                         </div>
//                                         <div className="input_sub_box col-12 ps-0">
//                                             <div className="m-2">
//                                                 <input type="text" placeholder="Subject"
//                                                     className="p-2 border-0 rounded-2 mb-3 col-12" />
//                                             </div>
//                                         </div>
//                                         <div className="input_sub_box col-12 ps-0">
//                                             <div className="m-2">
//                                                 <textarea name="" cols='69' rows='5' placeholder="Submit your message request"
//                                                     className="p-2 border-0 rounded-2  h-100" id=""></textarea>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="contact_btn mt-4">
//                                         <a href="javascript:void(0);" className=" text-light rounded-3 m-2 fw-semibold">Send message</a>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-6 pe-0 m-3">
//                                 <div className="contact_company_details_box">
//                                     <h2 className="fw-bold text-center">Contact Details</h2>
//                                     {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsum officia.
//                                     Tempore maxime eum at!</p> */}
//                                 </div>
//                                 <div className="col-12 d-flex flex-wrap px-0 pb-5 border-bottom">
//                                     <div className="col-6 ps-0 ">
//                                         <div className="me-3">
//                                             <div className="contact_sub_boxx d-flex col-12 border rounded-2 mb-3">
//                                                 <div className="contact_icons_bg me-3">
//                                                     {/* <i
//                                                 className="fa-solid fa-location-dot d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
//                                                     <MdLocationPin className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
//                                                 </div>
//                                                 <div className="contact_details">
//                                                     <h4>Address</h4>
//                                                     <p className="mb-0">A-103 IT Park Mota Varachha Road Surat Gujarat</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-6 ps-0  ">
//                                         <div className="me-3">
//                                             <div className="contact_sub_boxx d-flex col-12 border rounded-2 mb-3">
//                                                 <div className="contact_icons_bg me-3">
//                                                     {/* <i
//                                                 className="fa-solid fa-phone d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
//                                                     <FaPhone className=' d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
//                                                 </div>
//                                                 <div className="contact_details">
//                                                     <h4>Mobile</h4>
//                                                     <a href="javascript:void(0);" className='text-dark'>+91 82008-45977</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-6 ps-0 ">
//                                         <div className="me-3">
//                                             <div className="contact_sub_boxx d-flex col-12 border rounded-2">
//                                                 <div className="contact_icons_bg me-3">
//                                                     {/* <i
//                                                 className="fa-solid fa-clock d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
//                                                     <FaClock className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
//                                                 </div>
//                                                 <div className="contact_details">
//                                                     <h4>Availability</h4>
//                                                     <p className="mb-0">Daily 09 am - 05 pm</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="col-6 ps-0  ">
//                                         <div className="me-3">
//                                             <div className="contact_sub_boxx d-flex col-12 border rounded-2">
//                                                 <div className="contact_icons_bg me-3">
//                                                     {/* <i
//                                                 className="fa-solid fa-envelope d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
//                                                     <MdEmail className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
//                                                 </div>
//                                                 <div className="contact_details">
//                                                     <h4>Email</h4>
//                                                     <a href="javascript:void(0);" className='text-dark'>websolexinfotech@gmail</a>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-12 d-flex justify-content-between py-4 ps-4 pe-0">
//                                     <h6 className="fw-bold">Social Media:</h6>
//                                     <ul className="social_main_menu d-flex">
//                                         <li className="me-3">
//                                             <a href="javascript:void(0);" className="border rounded-3 d-flex align-items-center"><FaFacebookF className='text-black fs-5' /></a>
//                                         </li>
//                                         <li className="me-3">
//                                             <a href="javascript:void(0);" className="border rounded-3 d-flex align-items-center"><FaTwitter className='text-black fs-5' /></a>
//                                         </li>
//                                         <li className="me-3">
//                                             <a href="javascript:void(0);" className="border rounded-3 d-flex align-items-center"><FaLinkedinIn className='text-black fs-5' /></a>
//                                         </li>
//                                         <li className="me-3">
//                                             <a href="javascript:void(0);" className="border rounded-3 d-flex align-items-center"><IoLogoWhatsapp className='text-black fs-5' /></a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default From

import React, { useState } from 'react'
import { MdLocationPin, MdSubject } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link,useNavigate } from 'react-router-dom'
import EmailJS from 'emailjs-com';
import '../forms.css';
import { AiFillInstagram } from "react-icons/ai";



const From = () => {
    const navigate = useNavigate()

    const [data, setdata] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [showtextbox, setotherinput] = useState(false);
    const [successMessage, setSuccessMessage] = useState(''); 
    const [dangerMessage, setsdangerMessage] = useState('');
    const [email, setEmail] = useState('');
    const [contactnumber, setContactNumber] = useState('');
    const [errors, seterror] = useState({
        email: "",
        contactnumber: "",
    })

    const validateemail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    const validatenumber = () => {
        const regex = /^[6-9]\d{9}$/;
        return regex.test(contactnumber);
    }

    const onChange = (e) => {
        const { name, value } = e.target;
        setdata(prevdata => ({
            ...prevdata,
            [name]: value
        }));

        
        if (name === 'email') {
            if (validateemail(value)) {
                seterror(preverror => ({
                    ...preverror,
                    email: "please enter a valid email address"
                }))
            } else {
                seterror(preverror => ({
                    ...preverror,
                    email: "",
                }))
            }
        }
        if (name === 'contactnumber') {
            if (validatenumber(value)) {
                seterror(preverror => ({
                    ...preverror,
                    contactnumber: "please enter a valid email address"
                }))
            } else {
                seterror(preverror => ({
                    ...preverror,
                    contactnumber: "",
                }))
            }
        }
        if (name === 'name') {
            seterror(preverror => ({
                ...preverror,
                name: ""
            }))
        }
        if (name === "subject" && value === "Other") {
            setotherinput(true);
        }
        else if (name === "subject") {
            setotherinput(false);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (errors.email || errors.contactnumber) {
            alert("please correct email and contactnumber ")
            return;
        }

        const emailParams = {
            name: data.name,
            email: data.email,
            contactnumber: data.contactnumber,
            subject: data.subject,
            message: data.message
        }

        EmailJS.send('service_soybehv', 'template_73gw0e4', emailParams, 'yC07B7kWN5O46D558')
            .then((response) => {
                // setSuccessMessage(`SUCCESS! ${response.status} - ${response.text}`);
                navigate('/thankyou');
                
            }, (error) => {
                setsdangerMessage(`FAILED... ${error}`)
            });
            setdata({
                name: "",
                email: "",
                contactnumber: "",
                subject: "",
                message: ""
            })

    }


    const phoneNumber = "8200845977";

    const url = `https://wa.me/${phoneNumber}?`;

    const handleClick = () => {
        window.open(url, '_blank');
    };


    return (
        <>
            <section className="contact_form  ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="contact_heading text-center col-12 col-xl-6 mb-4 mb-xxl-5">
                            <h3 className="fw-semibold mb-4">Let’s Connect and Create Something Amazing!</h3>
                            <p>We’re here to answer your questions, discuss your ideas, and help your business grow. Reach out to us anytime we’d love to hear from you!</p>
                        </div>
                        {successMessage && (
                            <div className="alert alert-success mt-4" role="alert">
                                {successMessage}
                            </div>
                        )}
                        {dangerMessage && (
                            <div className="alert alert-danger mt-4" role="danger">
                                {dangerMessage}
                            </div>
                        )}
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div className="col-12 col-xl-6 mb-5 mb-xl-0">
                                <div className="contact_form_sub rounded-3 m-xl-3">
                                    <h2 className="mb-4 text-center">Get in Touch with Us</h2>
                                    <form onSubmit={onSubmit}>
                                        <div className="input_main_menu d-flex flex-wrap">
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2">
                                                    <input
                                                        type="text"
                                                        id='name'
                                                        name='name'
                                                        placeholder="Enter Your Name"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12"
                                                        value={data.name}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2">
                                                    <input
                                                        type="email"
                                                        id='email'
                                                        name='email'
                                                        placeholder="Enter Your Email"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12"
                                                        value={data.email}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {errors.email && (
                                                <small className='text-danger'> {errors.email} </small>
                                            )}
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2">
                                                    <input
                                                        type="tel"
                                                        id='contactnumber'
                                                        name='contactnumber'
                                                        placeholder="Contact Number"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12"
                                                        value={data.contactnumber}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            {errors.contactnumber && (
                                                <small className='text-danger'> {errors.contactnumber} </small>
                                            )}
                                            <div className="input_sub_box col-12 col-md-6 ps-0">
                                                <div className="m-2">
                                                    <select
                                                        id="subject"
                                                        name="subject"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3 col-12 bg-white"
                                                        value={data.subject}
                                                        onChange={onChange}
                                                        required
                                                    >
                                                        <option value="" disabled>Select a Subject</option>
                                                        <option value="React js Development">Web Development</option>
                                                        <option value="Node js Development">Graphic Design</option>
                                                        <option value="PHP Development">UI/UX Design</option>
                                                        <option value="Laravel Development">Mobile Apps</option>
                                                        <option value="WordPress Development">Digital Marketing</option>
                                                        <option value="Other" onChange={onselect} >Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                            {showtextbox && (
                                                <div className="m-2 other_input col-12 input_sub_box">
                                                    <input
                                                        type="text"
                                                        id="otherTextInput"
                                                        name="otherText"
                                                        placeholder="Please Specify"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 mb-3"
                                                        value={data.otherText || ""}
                                                        onChange={onChange}
                                                        required
                                                    />
                                                </div>
                                            )}
                                            <div className="input_sub_box col-12 ps-0">
                                                <div className="m-2">
                                                    <textarea
                                                        id='message'
                                                        name='message'
                                                        placeholder="Submit Your Message Request"
                                                        className="py-2 ps-3 pe-2 border-0 rounded-2 col-12"
                                                        value={data.message}
                                                        onChange={onChange}
                                                        required
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact_btn mt-4 d-flex justify-content-center">
                                            <button
                                                type="submit"
                                                className="home_btn border text-light rounded-3 m-2 fw-semibold"
                                                title="Send Your Message!">
                                                Send Message
                                            </button>

                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div className="col-12 col-xl-6 pe-0  ">
                                <div className="contact_company_details_box">
                                    <h2 className="fw-bold text-center mb-0">Contact Details</h2>
                                </div>
                                <div className="col-12 d-flex flex-wrap px-0 pt-5 ">
                                    <div className="col-12 col-md-6 ps-0 ">
                                        <div className="me-0 me-md-3 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-4">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <MdLocationPin className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Address</h4>
                                                    <p title='A-103 IT Park Mota Varachha Road Surat Gujarat' className="mb-0">A-103 IT Park Mota Varachha Road Surat Gujarat.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0  ">
                                        <div className="me-0 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-4 mb-md-0">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <FaPhone className=' d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Mobile</h4>
                                                    <a href="tel:8200845977" >+91 82008-45977</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0 ">
                                        <div className="me-0 me-md-3 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx  d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-4 mb-md-0">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <FaClock className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Availability</h4>
                                                    <p className="mb-0">Daily 09:00 am - 6:30 pm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0  ">
                                        <div className="me-0 me-xl-2 me-xxl-4">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2  ">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    <MdEmail className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Email</h4>
                                                    <a href="mailto:websolexinfotech@gmail.com">websolexinfotech@gmail.com</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex flex-column flex-lg-row  mt-5 mt-xl-3 justify-content-between py-5 ps-3 py-sm-4  ps-sm-4 pe-0 align-items-center border-top">
                                    <h6 className="fw-bold mb-4 mb-md-0 font_size">Social Media:</h6>
                                    <ul className="social_main_menu d-flex ps-0 mb-0 ">
                                        <li className="me-3">
                                            <Link to="https://www.facebook.com/profile.php?id=61559410317814" target='_blank' className="border rounded-3 d-flex align-items-center">
                                                <FaFacebookF className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="#" onClick={handleClick} className="border rounded-3 d-flex align-items-center">
                                                <IoLogoWhatsapp className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="https://www.instagram.com/websolex_infotech/" target='_blank' className="border rounded-3 d-flex align-items-center">
                                                <AiFillInstagram  className='text-black fs-5'/>
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/" target='_blank' className="border rounded-3 d-flex align-items-center">
                                                <FaLinkedinIn className='text-black fs-5' />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default From