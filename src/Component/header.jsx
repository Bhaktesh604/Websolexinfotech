// import React, { useState } from 'react';
// import logo from '../Assets/Logo.png'
// import { Link } from 'react-router-dom'; // Ensure you have this image in the appropriate folder folder

// const Header = () => {
//     const [isCollapsed, setIsCollapsed] = useState(true);

//     const toggleNavbar = () => {
//         setIsCollapsed(!isCollapsed);
//     };
//     return (
//         <>
//             <header>
//                 <div className="header d-none d-lg-block"
//                     <div className="container">
//                         <div className="row">
//                             <nav className="navbar navbar-expand-lg">
//                                 <div className="container-fluid">
//                                     <Link className="navbar-brand col-2" to="#"><img src={logo} alt="Logo" /></Link>
//                                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                                         <span className="navbar-toggler-icon"></span>
//                                     </button>
//                                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                             <li className="nav-item p-3 text-center">
//                                                 <Link className="nav-link active text-primary fw-bold" aria-current="page" to="index.html">Home</Link>
//                                             </li>
//                                             <li className="nav-item servicemenu dropdown megamenu-li dmenu d-flex align-items-center">
//                                                 <Link className="nav-link link_hover dropdown-toggle" to="#" id="dropdown01" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
//                                                 <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
//                                                     <div className="container-fluid">
//                                                         <div className="row">
//                                                             <div className="col-sm-6 col-lg-3 border-right mb-4">
//                                                                 <h6 className="d-flex align-items-center">
//                                                                     Web Development
//                                                                 </h6>
//                                                                 <Link className="dropdown-item" to="#">React js Development</Link>
//                                                                 <Link className="dropdown-item" to="#">Node js Development</Link>
//                                                                 <Link className="dropdown-item" to="#">PHP Development</Link>
//                                                                 <Link className="dropdown-item" to="#">Laravel Development</Link>
//                                                                 <Link className="dropdown-item" to="#">WordPress Development</Link>
//                                                                 <Link className="dropdown-item" to="#">Shopify Development</Link>
//                                                                 <Link className="dropdown-item" to="#">Angular Development</Link>
//                                                                 <Link className="dropdown-item" to="#">Wix Development</Link>
//                                                                 <Link className="dropdown-item" to="#">Webflow Development</Link>
//                                                             </div>

//                                                             <div className="col-sm-6 col-lg-3 border-right mb-4">
//                                                                 <h6 className="d-flex align-items-center">
//                                                                     Graphic Design
//                                                                 </h6>
//                                                                 <Link className="dropdown-item" to="#">Packaging Design</Link>
//                                                                 <Link className="dropdown-item" to="#">Info Graphic Design</Link>
//                                                                 <Link className="dropdown-item" to="#">Logo Design</Link>
//                                                                 <Link className="dropdown-item" to="#">Branding Identity</Link>
//                                                                 <Link className="dropdown-item" to="#">Print Design</Link>
//                                                             </div>

//                                                             <div className="col-sm-6 col-lg-3 border-right mb-4">
//                                                                 <h6 className="d-flex align-items-center">
//                                                                     UI/UX Design
//                                                                 </h6>
//                                                                 <Link className="dropdown-item" to="#">App Design</Link>
//                                                                 <Link className="dropdown-item" to="#">UI/UX Design</Link>
//                                                                 <Link className="dropdown-item" to="#">Web Design</Link>
//                                                             </div>

//                                                             <div className="col-sm-6 col-lg-3 border-right mb-4">
//                                                                 <h6 className="d-flex align-items-center">
//                                                                     Mobile Apps
//                                                                 </h6>
//                                                                 <Link className="dropdown-item" to="#">iOS</Link>
//                                                                 <Link className="dropdown-item" to="#">Android</Link>
//                                                                 <Link className="dropdown-item" to="#">Cross Platform</Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                             <li className="nav-item p-3 text-center">
//                                                 <Link className="nav-link link_hover" aria-disabled="true" to="#">Portfolio</Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3 text-center">
//                                                 <Link className="nav-link link_hover" aria-disabled="true" to="#">Company</Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3 text-center">
//                                                 <Link className="nav-link link_hover" to="contact.html">Contact</Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <form className="d-none d-lg-flex justify-content-center" role="search">
//                                         <Link to="tel:+918200845977" className="nav-link bg-primary text-light fw-normal border-0 rounded-2">
//                                             <i className="bi-solid bi-phone-flip pe-2 bell"></i>+91 8200845977
//                                         </Link>
//                                     </form>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             <header>
//                 <div className="header d-block d-lg-none">
//                     <div className="container">
//                         <div className="row">

//                             <nav className="navbar navbar-expand-lg">

//                                 <div className="container-fluid d-flex">
//                                     <Link className="navbar-brand col-2" to="#"><img src={logo} alt="Logo" /></Link>
//                                     <button
//                                         className={`navbar-toggler ${isCollapsed ? '' : 'collapsed'}`}
//                                         type="button"
//                                         data-bs-toggle="collapse"
//                                         data-bs-target="#navbarSupportedContent"
//                                         aria-controls="navbarSupportedContent"
//                                         aria-expanded={!isCollapsed ? 'true' : 'false'}
//                                         aria-label="Toggle navigation"
//                                         onClick={toggleNavbar}
//                                     >
//                                         <span className="navbar-toggler-icon"></span>
//                                     </button>
//                                     <div
//                                         className="collapse navbar-collapse"
//                                         id="navbarSupportedContent"
//                                     >
//                                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                                             <li className="nav-item p-3 text-center">
//                                                 <Link className="nav-link active" aria-current="page" to="#">
//                                                     Home
//                                                 </Link>
//                                             </li>
//                                             <li className="nav-item dropdown text-center">
//                                                 <Link
//                                                     className="nav-link dropdown-toggle"
//                                                     to="#"
//                                                     role="button"
//                                                     data-bs-toggle="dropdown"
//                                                     aria-expanded="false"
//                                                 >
//                                                     Services
//                                                 </Link>
//                                                 <ul className="dropdown-menu">
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             Mobile Apps
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             Web Development
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             {" "}
//                                                             Graphic Design
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             {" "}
//                                                             Game Development
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             UI/UX Design
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             3D Modeling
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                             </li>
//                                             <li className="nav-item dropdown p-3 text-center">
//                                                 <Link
//                                                     className="nav-link dropdown-toggle"
//                                                     to="#"
//                                                     role="button"
//                                                     data-bs-toggle="dropdown"
//                                                     aria-expanded="false"
//                                                 >
//                                                     Technologies
//                                                 </Link>
//                                                 <ul className="dropdown-menu">
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             Action
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             Another action
//                                                         </Link>
//                                                     </li>
//                                                     <li>
//                                                         <hr className="dropdown-divider" />
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">
//                                                             Something else here
//                                                         </Link>
//                                                     </li>
//                                                 </ul>
//                                             </li>
//                                             <li className="nav-item p-3 text-center">
//                                                 <Link className="nav-link disabled" aria-disabled="true">
//                                                     Portfolio
//                                                 </Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3  text-center">
//                                                 <Link className="nav-link disabled" aria-disabled="true">
//                                                     Company
//                                                 </Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3  text-center">
//                                                 <Link
//                                                     className="nav-link disabled"
//                                                     aria-disabled="true"
//                                                     to="contact.html"
//                                                 >
//                                                     Contact
//                                                 </Link>
//                                             </li>
//                                         </ul>
//                                         <form className="d-flex justify-content-center" role="search">
//                                             <Link
//                                                 to="tel:8200845977"
//                                                 className="bg-primary text-light fw-normal border-0 rounded-2"
//                                             >
//                                                 <i className="fa-solid fa-phone-flip pe-2 bell " />
//                                                 +91 8200845977
//                                             </Link>
//                                         </form>
//                                     </div>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </>

//     );
// }

// export default Header;


import React, { useState } from 'react';
import logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
// import webdevlopment from '../Assets/web.svg'
// import graphic from '../Assets/graphics.svg'
// import uiux from '../Assets/Uiux.svg'
// import mobile from '../Assets/mobile.svg'

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <header>
                <div className="header d-none d-lg-block position-fixed ">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link className="navbar-brand col-2" to="#"><img src={logo} alt="Logo" /></Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <Link className="nav-link active text-primary fw-bold" aria-current="page" to="/">Home</Link>
                                            </li>
                                            <li className="nav-item servicemenu dropdown megamenu-li dmenu d-flex align-items-center">
                                                <Link className="nav-link link_hover dropdown-toggle" to="#" id="dropdown01" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
                                                <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <div className="d-flex ms-4">
                                                                    <HiMiniComputerDesktop />
                                                                    <h6 className="d-flex align-items-center ms-0">Web Development</h6>
                                                                </div>
                                                                <Link className="dropdown-item" to="/service">React js Development</Link>
                                                                <Link className="dropdown-item" to="/service">Node js Development</Link>
                                                                <Link className="dropdown-item" to="/service">PHP Development</Link>
                                                                <Link className="dropdown-item" to="/service">Laravel Development</Link>
                                                                <Link className="dropdown-item" to="/service">WordPress Development</Link>
                                                                <Link className="dropdown-item" to="/service">Shopify Development</Link>
                                                                <Link className="dropdown-item" to="/service">Angular Development</Link>
                                                                <Link className="dropdown-item" to="/service">Wix Development</Link>
                                                                <Link className="dropdown-item" to="/service">Webflow Development</Link>
                                                            </div>

                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">Graphic Design</h6>
                                                                <Link className="dropdown-item" to="/service">Packaging Design</Link>
                                                                <Link className="dropdown-item" to="/service">Info Graphic Design</Link>
                                                                <Link className="dropdown-item" to="/service">Logo Design</Link>
                                                                <Link className="dropdown-item" to="/service">Branding Identity</Link>
                                                                <Link className="dropdown-item" to="/service">Print Design</Link>
                                                            </div>

                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">UI/UX Design</h6>
                                                                <Link className="dropdown-item" to="/service">App Design</Link>
                                                                <Link className="dropdown-item" to="/service">UI/UX Design</Link>
                                                                <Link className="dropdown-item" to="/service">Web Design</Link>
                                                            </div>

                                                            <div className="col-sm-6 col-lg-3 border-right mb-4">
                                                                <h6 className="d-flex align-items-center">Mobile Apps</h6>
                                                                <Link className="dropdown-item" to="/service">iOS</Link>
                                                                <Link className="dropdown-item" to="/service">Android</Link>
                                                                <Link className="dropdown-item" to="/service">Cross Platform</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="nav-item p-3 text-center">
                                                <Link className="nav-link link_hover" aria-disabled="true" to="/portfolio">Portfolio</Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <Link className="nav-link link_hover" aria-disabled="true" to="/company">Company</Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <Link className="nav-link link_hover" to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <form className="d-none d-lg-flex justify-content-center" role="search">
                                        <Link to="tel:+918200845977" className="nav-link bg-primary text-light fw-normal border-0 rounded-2">
                                            <FaPhone className='pe-2 bell' />+91 8200845977
                                        </Link>
                                    </form>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <header>
                <div className="header d-block d-lg-none sticky-top">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid d-flex">
                                    <Link className="navbar-brand col-2" to="#"><img src={logo} alt="Logo" /></Link>
                                    <button
                                        className={`navbar-toggler ${isCollapsed ? '' : 'collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded={!isCollapsed ? 'true' : 'false'}
                                        aria-label="Toggle navigation"
                                        onClick={toggleNavbar}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                                            </li>
                                            <li className="nav-item dropdown text-center">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Services
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Mobile Apps</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Web Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Graphic Design</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Game Development</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">UI/UX Design</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">3D Modeling</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown p-3 text-center">
                                                <Link
                                                    className="nav-link dropdown-toggle"
                                                    to="#"
                                                    role="button"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    Technologies
                                                </Link>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Action</Link>
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Another action</Link>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <Link className="dropdown-item" to="#">Something else here</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="nav-item p-3 text-center">
                                                <Link className="nav-link disabled" aria-disabled="true">Portfolio</Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <Link className="nav-link disabled" aria-disabled="true">Company</Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <Link className="nav-link disabled" aria-disabled="true" to="contact.html">Contact</Link>
                                            </li>
                                        </ul>
                                        <form className="d-flex justify-content-center" role="search">
                                            <Link
                                                to="tel:8200845977"
                                                className="bg-primary text-light fw-normal border-0 rounded-2"
                                            >
                                                <i className="bi-solid bi-phone-flip pe-2 bell"></i>+91 8200845977
                                            </Link>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
