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

import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const From = () => {
    return (
        <>
            <section className="contact_form py-50 py-100 ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="contact_heading text-center col-12 col-xl-6 mb-4 mb-xxl-5">
                            <h3 className="fw-semibold mb-4"><u>Connect</u> with Our Team</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam obcaecati maiores.
                                Laborum minus neque eius nisi voluptatum aperiam corrupti.</p>
                        </div>
                        <div className="col-12 d-flex flex-wrap align-items-center">
                            <div className="col-12 col-xl-6 mb-5 mb-xl-0">
                                <div className="contact_form_sub rounded-3 m-xl-3">
                                    <h2 className="mb-4 text-center">Get in Touch with Us</h2>
                                    <div className="input_main_menu d-flex flex-wrap">
                                        <div className="input_sub_box col-12 col-md-6 ps-0">
                                            <div className="m-2">
                                                <input type="text" placeholder="Enter Your Name"
                                                    className="p-2 border-0 rounded-2 mb-3 col-12" />
                                            </div>
                                        </div>
                                        <div className="input_sub_box col-12 col-md-6 ps-0">
                                            <div className="m-2">
                                                <input type="text" placeholder="Enter Your Email"
                                                    className="p-2 border-0 rounded-2 mb-3 col-12" />
                                            </div>
                                        </div>
                                        <div className="input_sub_box col-12 ps-0">
                                            <div className="m-2">
                                                <input type="text" placeholder="Subject"
                                                    className="p-2 border-0 rounded-2 mb-3 col-12" />
                                            </div>
                                        </div>
                                        <div className="input_sub_box col-12 ps-0">
                                            <div className="m-2">
                                                <textarea name="" placeholder="Submit your message request"
                                                    className="p-2 border-0 rounded-2  col-12" id=""></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact_btn mt-4">
                                        <Link to="#" className=" text-light rounded-3 m-2 fw-semibold">Send message</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 pe-0 ">
                                <div className="contact_company_details_box">
                                    <h2 className="fw-bold text-center mb-5">Contact Details</h2>
                                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, ipsum officia.
                                    Tempore maxime eum at!</p> */}
                                </div>
                                <div className="col-12 d-flex flex-wrap px-0 pb-2 pb-md-5 border-bottom">
                                    <div className="col-12 col-md-6 ps-0 ">
                                        <div className="me-0 me-md-3 me-xl-2 me-xxl-3">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-3">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    {/* <i
                                                className="fa-solid fa-location-dot d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
                                                    <MdLocationPin className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Address</h4>
                                                    <p title='A-103 IT Park Mota Varachha Road Surat Gujarat' className="mb-0">A-103 IT Park Mota Varachha Road Surat Gujarat</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0  ">
                                        <div className="me-0 me-xl-2 me-xxl-3">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-3">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    {/* <i
                                                className="fa-solid fa-phone d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
                                                    <FaPhone className=' d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Mobile</h4>
                                                    <Link to="#" className='text-dark'>+91 82008-45977</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0 ">
                                        <div className="me-0 me-md-3 me-xl-2 me-xxl-3">
                                            <div className="contact_sub_boxx  d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-3 mb-md-0">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    {/* <i
                                                className="fa-solid fa-clock d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
                                                    <FaClock className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Availability</h4>
                                                    <p className="mb-0">Daily 09 am - 05 pm</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 ps-0  ">
                                        <div className="me-0 me-xl-2 me-xxl-3">
                                            <div className="contact_sub_boxx d-xxl-flex col-12 text-center text-xxl-start border rounded-2 mb-3 mb-md-0">
                                                <div className="contact_icons_bg me-xxl-3 d-flex justify-content-center mb-3 mb-xxl-0">
                                                    {/* <i
                                                className="fa-solid fa-envelope d-flex text-light bg-black justify-content-center align-items-center rounded-3"></i> */}
                                                    <MdEmail className='d-flex text-light  justify-content-center align-items-center rounded-3 p-2' />
                                                </div>
                                                <div className="contact_details">
                                                    <h4>Email</h4>
                                                    <Link to="#" className='text-dark'>websolexinfotech@gmail.com</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex flex-column flex-lg-row justify-content-between py-5 ps-3 py-sm-4   ps-sm-4 pe-0 align-items-center">
                                    <h6 className="fw-bold">Social Media:</h6>
                                    <ul className="social_main_menu d-flex">
                                        <li className="me-3">
                                            <Link to="https://www.facebook.com/profile.php?id=61559410317814" className="border rounded-3 d-flex align-items-center">
                                                <FaFacebookF className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="#" className="border rounded-3 d-flex align-items-center">
                                                <FaTwitter className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="https://www.linkedin.com/company/unity-infotechs/mycompany/verification/" className="border rounded-3 d-flex align-items-center">
                                                <FaLinkedinIn className='text-black fs-5' />
                                            </Link>
                                        </li>
                                        <li className="me-3">
                                            <Link to="#" className="border rounded-3 d-flex align-items-center">
                                                <IoLogoWhatsapp className='text-black fs-5' />
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