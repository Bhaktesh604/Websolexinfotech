

// import React, { useState } from 'react';
// import logo from '../Assets/Logo.png';
// import { Link } from 'react-router-dom';
// import { FaPhone } from "react-icons/fa";
// import { HiMiniComputerDesktop } from "react-icons/hi2";
// import webdevlopment from '../Assets/web devlopment.png'
// import graphic from '../Assets/grafhics.png'
// import uiux from '../Assets/uiux.png'
// import mobile from '../Assets/mobile.png'
// import Digital from '../Assets/digital-marketing (1).png'

// const Header = () => {
//     const [isCollapsed, setIsCollapsed] = useState(true);

//     const toggleNavbar = () => {
//         setIsCollapsed(!isCollapsed);
//     };

//     return (
//         <>
//             <header>
//                 <div className="header d-none  d-lg-block">
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
//                                                 <Link className="nav-link active text-primary fw-bold" aria-current="page" to="/">Home</Link>
//                                             </li>
//                                             <li className="nav-item servicemenu dropdown megamenu-li dmenu d-flex align-items-center">
//                                                 <Link className="nav-link link_hover dropdown-toggle" to="#" id="dropdown01" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
//                                                 <div className="dropdown-menu megamenu sm-menu border-top" aria-labelledby="dropdown01">
//                                                     <div className="container-fluid">
//                                                         <div className="row">
//                                                             <div className="megamenu_width border-right mb-4 px-0 px-xl-2">
//                                                                 <div className="d-flex ms-lg-2 ms-xl-4 align-items-center">
//                                                                     <img src={webdevlopment} alt="" className='megamenu_icon'/>
//                                                                     <h6 className="d-flex align-items-center ms-2 mb-0">Web Development</h6>
//                                                                 </div>
//                                                                 <Link className="dropdown-item" to="/service">React js Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">Node js Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">PHP Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">Laravel Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">WordPress Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">Shopify Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">Angular Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">Wix Development</Link>
//                                                                 <Link className="dropdown-item" to="/service">Webflow Development</Link>
//                                                             </div>

//                                                             <div className="megamenu_width border-right mb-4 px-0 px-xl-2">
//                                                                 <div className="d-flex ms-2 align-items-center">
//                                                                     <img src={graphic} alt="" className='megamenu_icon'/>
//                                                                     <h6 className="d-flex align-items-center ms-2 mb-0">Graphic Design</h6>
//                                                                 </div>
//                                                                 <Link className="dropdown-item" to="/service">Packaging Design</Link>
//                                                                 <Link className="dropdown-item" to="/service">Info Graphic Design</Link>
//                                                                 <Link className="dropdown-item" to="/service">Logo Design</Link>
//                                                                 <Link className="dropdown-item" to="/service">Branding Identity</Link>
//                                                                 <Link className="dropdown-item" to="/service">Print Design</Link>
//                                                             </div>
//                                                             <div className="megamenu_width border-right mb-4 px-0 px-xl-2">
//                                                                 <div className="d-flex ms-2 align-items-center">
//                                                                     <img src={uiux} alt="" className='megamenu_icon'/>
//                                                                     <h6 className="d-flex align-items-center ms-2 mb-0">UI/UX Design</h6>
//                                                                 </div>
//                                                                 <Link className="dropdown-item" to="/service">App Design</Link>
//                                                                 <Link className="dropdown-item" to="/service">UI/UX Design</Link>
//                                                                 <Link className="dropdown-item" to="/service">Web Design</Link>
//                                                             </div>

//                                                             <div className="megamenu_width border-right mb-4 px-0 px-xl-2">
//                                                                 <div className="d-flex ms-2 align-items-center">
//                                                                     <img src={mobile} alt="" className='megamenu_icon'/>
//                                                                     <h6 className="d-flex align-items-center ms-2 mb-0">Mobile Apps</h6>
//                                                                 </div>
//                                                                 <Link className="dropdown-item" to="/service">iOS</Link>
//                                                                 <Link className="dropdown-item" to="/service">Android</Link>
//                                                                 <Link className="dropdown-item" to="/service">Cross Platform</Link>
//                                                             </div>
//                                                             <div className="megamenu_width  mb-4 px-0 px-xl-2">
//                                                                 <div className="d-flex ms-2 align-items-center">
//                                                                     <img src={Digital} alt="" className='megamenu_icon'/>
//                                                                     <h6 className="d-flex align-items-center ms-2 mb-0">Degital Marketing</h6>
//                                                                 </div>
//                                                                 <Link className="dropdown-item" to="/service">Search Engine Optimization</Link>
//                                                                 <Link className="dropdown-item" to="/service">Pay-Per-Click Advertising</Link>
//                                                                 <Link className="dropdown-item" to="/service">Social Media Marketing</Link>
//                                                                 <Link className="dropdown-item" to="/service">Email Marketing</Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </li>
//                                             <li className="nav-item p-3 text-center">
//                                                 <Link className="nav-link link_hover" aria-disabled="true" to="/portfolio">Portfolio</Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3 text-center">
//                                                 <Link className="nav-link link_hover" aria-disabled="true" to="/company">Company</Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3 text-center">
//                                                 <Link className="nav-link link_hover" to="/contact">Contact</Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                     <form className="d-none d-lg-flex justify-content-center" role="search">
//                                         <Link to="tel:+918200845977" className="nav-link bg-primary text-light fw-normal border-0 rounded-2">
//                                             <FaPhone className='pe-2 bell' />+91 8200845977
//                                         </Link>
//                                     </form>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//             <header>
//                 <div className="header d-block d-lg-none sticky-top">
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
//                                                 <Link className="nav-link active" aria-current="page" to="#">Home</Link>
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
//                                                         <Link className="dropdown-item" to="#">Mobile Apps</Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">Web Development</Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">Graphic Design</Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">Game Development</Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">UI/UX Design</Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">3D Modeling</Link>
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
//                                                         <Link className="dropdown-item" to="#">Action</Link>
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">Another action</Link>
//                                                     </li>
//                                                     <li>
//                                                         <hr className="dropdown-divider" />
//                                                     </li>
//                                                     <li>
//                                                         <Link className="dropdown-item" to="#">Something else here</Link>
//                                                     </li>
//                                                 </ul>
//                                             </li>
//                                             <li className="nav-item p-3 text-center">
//                                                 <Link className="nav-link disabled" aria-disabled="true">Portfolio</Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3 text-center">
//                                                 <Link className="nav-link disabled" aria-disabled="true">Company</Link>
//                                             </li>
//                                             <li className="nav-item py-3 ps-0 pe-3 text-center">
//                                                 <Link className="nav-link disabled" aria-disabled="true" to="contact.html">Contact</Link>
//                                             </li>
//                                         </ul>
//                                         <form className="d-flex justify-content-center" role="search">
//                                             <Link
//                                                 to="tel:8200845977"
//                                                 className="bg-primary text-light fw-normal border-0 rounded-2"
//                                             >
//                                                 <i className="bi-solid bi-phone-flip pe-2 bell"></i>+91 8200845977
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
// };

// export default Header;

import React, { useState } from 'react';
import logo from '../Assets/Logo.png';
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import webdevlopment from '../Assets/web devlopment.png'
import graphic from '../Assets/grafhics.png'
import UIUX from '../Assets/uiux-icon.png'
import mobile from '../Assets/mobile.png'
import Digital from '../Assets/digital-marketing (1).png'

const Header = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [activeTab, setActiveTab] = useState('Home');

    const [mouseEnter, setMouseEnter] = useState(false)

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    }

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };


    const ServiceTab = [
        {
            name: "Web Development",
            img: webdevlopment,
            path:'/service/webdevelopment',
            sub: [
                {
                    subName: "React js Development",
                },
                {
                    subName: "Node js Development",
                },
                {
                    subName: "PHP Development",
                },
                {
                    subName: "Laravel Development",
                },
                {
                    subName: "WordPress Development",
                },
                {
                    subName: "Shopify Development",
                },
                {
                    subName: "Angular Development",
                },
                {
                    subName: "Wix Development",
                },
                {
                    subName: "Webflow Development",
                },
            ]
        },
        {
            name: "Graphic Design",
            img: graphic,
            path:'/service/graphic',
            sub: [
                {
                    subName: "Packaging Design",
                },
                {
                    subName: "Info Graphic Design",
                },
                {
                    subName: "Logo Design",
                },
                {
                    subName: "Branding Identity",
                },
                {
                    subName: "Print Design",
                },
            ]
        },
        {
            name: "UI/UX Design",
            img: UIUX,
            path:'/service/uiux',
            sub: [
                {
                    subName: "App Design",
                },
                {
                    subName: "UI/UX Design",
                },
                {
                    subName: "Web Design",
                },
            ]
        },
        {
            name: "Mobile Apps",
            img: mobile,
            path:'/service/mobileapps',
            sub: [
                {
                    subName: "IOS",
                },
                {
                    subName: "Android",
                },
                {
                    subName: "Cross Platform",
                },
            ]
        },
        {
            name: "Digital Marketing",
            img: Digital,
            path:'/service/digital',
            sub: [
                {
                    subName: "Search Engine Optimization",
                },
                {
                    subName: "Pay-Per-Click Advertising",
                },
                {
                    subName: "Social Media Marketing",
                },
                {
                    subName: "Email Marketing",
                },
            ]
        },
    ]


    return (
        <>
            <header>
                <div className="header d-none d-lg-block position-fixed ">
                    <div className="container">
                        <div className="row">
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid">
                                    <Link className="navbar-brand col-2" to="/"><img src={logo} alt="Logo" /></Link>
                                    <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={!isCollapsed}>
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link ${activeTab === 'Home' ? 'active text-primary fw-bold' : ''}`} to="/"
                                                    onClick={() => handleTabClick('Home')}
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item servicemenu dropdown megamenu-li dmenu d-flex align-items-center">
                                                <Link className={`nav-link link_hover dropdown-toggle ${activeTab === 'Services' ? 'active text-primary fw-bold' : ''}`} to="#"
                                                    onClick={() => handleTabClick('Services')} onMouseEnter={() => setMouseEnter(true)} >
                                                    Services
                                                </Link>
                                                {
                                                    mouseEnter && <div className="dropdown-menu megamenu sm-menu border-top">
                                                        <div className="container-fluid">
                                                            <div className="row">
                                                                {
                                                                    ServiceTab.map((v, i) => <div key={i} className="megamenu_width border-right mb-4 px-0 px-xl-2">
                                                                        <div className="d-flex ms-lg-2 ms-xl-4 align-items-center">
                                                                            <img src={v.img} alt="" className='megamenu_icon' />
                                                                            <Link className='text-black text-decoration-none ms-2' onClick={() => setMouseEnter(false)} 
                                                                            to={v.path}>{v.name}</Link>
                                                                        </div>
                                                                        {
                                                                            v.sub.map(s => <Link className="dropdown-item">{s.subName}</Link>)
                                                                        }
                                                                    </div>)
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </li>
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Portfolio' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Portfolio')} to="/portfolio">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Company' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Company')} to="/company">
                                                    Company
                                                </Link>
                                            </li>
                                            <li className="nav-item py-3 ps-0 pe-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'contact' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('contact')} to="/contact">
                                                    Contact
                                                </Link>
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
                            <nav className="navbar navbar-expand-lg px-2">
                                <div className="container-fluid d-flex">
                                    <Link className="navbar-brand col-2" to="#"><img src={logo} alt="Logo" /></Link>
                                    <button
                                        className={`navbar-toggler ${isCollapsed ? '' : 'collapsed'}`}
                                        type="button"
                                        aria-expanded={!isCollapsed}
                                        aria-label="Toggle navigation"
                                        onClick={toggleNavbar}
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link ${activeTab === 'Home' ? 'active text-primary fw-bold' : ''}`} to="/"
                                                    onClick={() => handleTabClick('Home')}
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li className="nav-item dropdown p-3 text-center">
                                                <Link className={`nav-link link_hover dropdown-toggle ${activeTab === 'Services' ? 'active text-primary fw-bold' : ''}`} to="/service" id="dropdown01" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                    onClick={() => handleTabClick('Services')} >
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
                                            <li className="nav-item p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Portfolio' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Portfolio')} to="/portfolio">
                                                    Portfolio
                                                </Link>
                                            </li>
                                            <li className="nav-item  p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'Company' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('Company')} to="/company">
                                                    Company
                                                </Link>
                                            </li>
                                            <li className="nav-item  p-3 text-center">
                                                <Link className={`nav-link link_hover ${activeTab === 'contact' ? 'active text-primary fw-bold' : ''}`}
                                                    onClick={() => handleTabClick('contact')} to="/contact">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                        <form className="d-flex justify-content-center" role="search">
                                            <Link
                                                to="tel:8200845977"
                                                className="bg-primary text-light fw-normal border-0 rounded-2  text-decoration-none"
                                            ><FaPhone className=' bell me-2' />+91 8200845977
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





