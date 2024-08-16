

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../Assets/Rectangle 11.png'
import image2 from '../Assets/Rectangle 12.png'
import image3 from '../Assets/Rectangle 13.png'
import image4 from '../Assets/Rectangle 14.png'
import image5 from '../Assets/Rectangle 15.png'
import image6 from '../Assets/Rectangle 16.png'
import image7 from '../Assets/Rectangle 17 (2).png'
import image8 from '../Assets/Rectangle 18.png'
import image9 from '../Assets/Rectangle 19.png'
import image10 from '../Assets/Rectangle 20.png'
import image11 from '../Assets/Rectangle 21.png'
import image12 from '../Assets/Rectangle 22.png'
import image13 from '../Assets/Rectangle 23.png'
import image14 from '../Assets/Rectangle 24.png'
import image15 from '../Assets/Rectangle 25.png'
import image16 from '../Assets/Rectangle 26.png'
import image17 from '../Assets/Rectangle 27.png'
import image18 from '../Assets/Rectangle 28.png'
import image19 from '../Assets/Rectangle 29.png'
import image20 from '../Assets/Rectangle 30.png'
import { FaSearchPlus } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { Link } from 'react-router-dom';


const portfolios = {
    'Web Design': [
        { id: 1, name: 'web', discri: 'web', src: image1, alt: 'Rectangle 11.png' },
        { id: 2, name: 'web', discri: 'web', src: image2, alt: 'Rectangle 12.png' },
        { id: 3, name: 'web', discri: 'web', src: image3, alt: 'Rectangle 13.png' },
        { id: 4, name: 'web', discri: 'web', src: image4, alt: 'Rectangle 14.png' },
    ],
    'App Design': [
        { id: 1, name: 'game development', discri: 'game development', src: image5, alt: 'Rectangle 15.png' },
        { id: 2, name: 'game development', discri: 'game development', src: image6, alt: 'Rectangle 16.png' },
        { id: 3, name: 'game development', discri: 'game development', src: image7, alt: 'Rectangle 17 (2).png' },
        { id: 4, name: 'game development', discri: 'game development', src: image8, alt: 'Rectangle 18.png' },
    ],
    'Graphic Design': [
        { id: 1, name: 'graphic design', discri: 'graphic design', src: image9, alt: 'Rectangle 19.png' },
        { id: 2, name: 'graphic design', discri: 'graphic design', src: image10, alt: 'Rectangle 20.png' },
        { id: 3, name: 'graphic design', discri: 'graphic design', src: image11, alt: 'Rectangle 21.png' },
        { id: 4, name: 'graphic design', discri: 'graphic design', src: image12, alt: 'Rectangle 22.png' },
    ],
    'Web Development': [
        { id: 1, name: 'app development', discri: 'app development', src: image13, alt: 'Rectangle 23.png' },
        { id: 2, name: 'app development', discri: 'app development', src: image14, alt: 'Rectangle 24.png' },
        { id: 3, name: 'app development', discri: 'app development', src: image15, alt: 'Rectangle 25.png' },
        { id: 4, name: 'app development', discri: 'app development', src: image16, alt: 'Rectangle 26.png' },
    ],
    'App Development': [
        { id: 1, name: 'web development', discri: 'web development', src: image17, alt: 'Rectangle 27.png' },
        { id: 2, name: 'web development', discri: 'web development', src: image18, alt: 'Rectangle 28.png' },
        { id: 3, name: 'web development', discri: 'web development', src: image19, alt: 'Rectangle 29.png' },
        { id: 4, name: 'web development', discri: 'web development', src: image20, alt: 'Rectangle 30.png' },
    ],
};

const PortfolioSection = () => {
    const [activeTab, setActiveTab] = useState('Web Design');

    return (

    // <section className="portfolio-section pt-100 py-50">
    //     <div className="container">
    //         <div className="row">
    //             <div className="col-lg-12 text-center">
    //                 <div className="section_title portfolio_title text-center mt-3 mb-4">
    //                     <div className="section_main_title">
    //                         <h1 className='fw-bold'>Our Latest Works For Your Business</h1>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <ul className="nav nav-tabs justify-content-xl-center pt-3 pt-lg-4 border-0">
    //             {Object.keys(portfolios).map(tab => (
    //                 <li className="nav-item px-1 px-lg-3 mb-1 mb-lg-0 " key={tab} >
    //                     <button
    //                         className={`nav-link ${activeTab === tab ? 'active' : ''}`}
    //                         onClick={() => setActiveTab(tab)}
    //                     >
    //                         {tab}
    //                     </button>
    //                 </li>
    //             ))}
    //         </ul>
    //         <div className="tab-content">
    //             <div className="portfolio-tab-content">
    //                 <div className="row">
    //                     <div className=" col-12 d-flex flex-wrap flex-md-row">
    //                         {portfolios[activeTab].map(image => (
    //                             <div className=" col-6  col-md-3 mb-4 d-flex justify-content-center justify-content-md-start" key={image.id}>
    //                                 <div className="card position-relative border-0 m-2">
    //                                     <Link to="#" className="card_img overflow-hidden z-1 rounded-3 position-relative">
    //                                         <img
    //                                             src={image.src}
    //                                             alt={image.alt}
    //                                             className="img-fluid portfolio-image"
    //                                         />
    //                                         <div className="overlay position-absolute col-12 d-flex justify-content-center align-items-center  h-100 bg-primary rounded-3">
    //                                             <div className="overlay_content text-center text-light">
    //                                                 <span>{image.name}</span>
    //                                                 <h2 className="pt-lg-3 pt-xxl-5">{image.discri}</h2>
    //                                             </div>
    //                                         </div>
    //                                         <div className="all_icon position-absolute d-flex align-items-center justify-content-center gap-3">
    //                                             <Link to={image.src} className="text-bg-light rounded-5 d-flex align-items-center justify-content-center">
    //                                                 <FaSearchPlus />
    //                                             </Link>
    //                                             <Link to="#" className="text-bg-light rounded-5 d-flex align-items-center justify-content-center">
    //                                                 <CiLink />
    //                                             </Link>
    //                                         </div>
    //                                     </Link>
    //                                 </div>
    //                             </div>
    //                         ))}
    //                     </div>
    //                 </div>
    //                 {/* <div className="link col-12 text-center">
    //                     <Link to="/portfolio" className="p-3 text-center text-capitalize border text-decoration-none rounded-2 bg-primary text-white">
    //                         View More
    //                     </Link>
    //                 </div> */}
    //             </div>
    //         </div>
    //     </div>
    // </section>

    <section className="portfolio-section pt-100 py-50">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <div className="section_title portfolio_title text-center mt-3 mb-4">
                    <div className="section_main_title">
                        <h1 className='fw-bold'>Our Latest Works For Your Business</h1>
                    </div>
                </div>
            </div>
        </div>
        <ul className="nav nav-tabs justify-content-xl-center pt-3 pt-lg-4 border-0 ">
            {Object.keys(portfolios).map(tab => (
                <li className="nav-item px-1 px-lg-3 mb-1 mb-lg-0" key={tab}>
                    <button
                        className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                </li>
            ))}
        </ul>
        <div className="tab-content">
            <div className="portfolio-tab-content">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap flex-md-row">
                        {portfolios[activeTab].map(image => (
                            <div className="col-6 col-md-3 mb-4 d-flex justify-content-center justify-content-md-start" key={image.id}>
                                <div className="card position-relative border-0 m-2">
                                    <Link to="#" className="card_img overflow-hidden z-1 rounded-3 position-relative">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="img-fluid portfolio-image"
                                        />
                                        <div className="overlay position-absolute col-12 d-flex justify-content-center align-items-center h-100 bg-primary rounded-3">
                                            <div className="overlay_content text-center text-light">
                                                <span>{image.name}</span>
                                                <h2 className="pt-lg-3 pt-xxl-5">{image.discri}</h2>
                                            </div>
                                        </div>
                                        <div className="all_icon position-absolute d-flex align-items-center justify-content-center gap-3">
                                            <Link to={image.src} className="text-bg-light rounded-5 d-flex align-items-center justify-content-center">
                                                <FaSearchPlus />
                                            </Link>
                                            <Link to="#" className="text-bg-light rounded-5 d-flex align-items-center justify-content-center">
                                                <CiLink />
                                            </Link>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    );
};

export default PortfolioSection;
