import React from 'react';

import logo1 from '../Assets/logoimg1.png';
import logo2 from '../Assets/logoimg2.png';
import logo3 from '../Assets/logoimg3.png';
import logo4 from '../Assets/logoimg4.png';
import logo5 from '../Assets/logoimg5.png';
import logo6 from '../Assets/logoimg6.png';
import logo7 from '../Assets/logoimg7.png';
import logo8 from '../Assets/logoimg8.png';
import logo9 from '../Assets/logoimg9.png';
import '../App.css';

function Clientside() {
    return (
        // <div className="container p-5">
        //     <div className="row mb-4 align-align-items-center justify-content-center">
        //         <div className="section_sub_title clienttitle text-center text-uppercase mb-5">
        //             <h6>Our Valued Clients</h6>
        //         </div>
        //         <div className="clients col-12 text-center mb-3">
        //             <div className="d-flex flex-wrap flex-column flex-lg-row col-12 col-lg-12 justify-content-center gap-5">
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo1} className="img-fluid" alt="Dreamliner Logo" />
        //                 </div>
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo2} className="img-fluid" alt="Om Diamond Logo" />
        //                 </div>
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo3} className="img-fluid" alt="Elan Logo" />
        //                 </div>
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo4} className="img-fluid" alt="Elysian Jewels Logo" />
        //                 </div>
        //             </div>
        //         </div><div className="clients col-12 text-center">
        //             <div className="d-flex flex-wrap flex-column flex-lg-row col-12 col-lg-12 justify-content-center gap-5">
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo1} className="img-fluid" alt="Dreamliner Logo" />
        //                 </div>
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo2} className="img-fluid" alt="Om Diamond Logo" />
        //                 </div>
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo3} className="img-fluid" alt="Elan Logo" />
        //                 </div>
        //                 <div className="client_logo col-6 col-sm-4 col-md-3 col-lg-2 rounded-2 shadow d-flex align-items-center justify-content-center border p-3">
        //                     <img src={logo4} className="img-fluid" alt="Elysian Jewels Logo" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="container  px-md-5 py-5">
            <div className="row mb-md-4 align-items-center justify-content-center"> 
                <div className="section_main_title text-center mb-3 mb-md-5">
                    <h1 className='fw-bold wow animate__animated animate__fadeInDown'>Valued Clients</h1>
                </div>
                <div className="clients col-12 text-center  mb-md-3">
                    <div className="col-12 d-flex flex-wrap  col-12 justify-content-center">
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom ">
                                <img src={logo1} className="img-fluid image_shadow wow animate__animated animate__fadeInLeft" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom wow animate__animated animate__fadeInLeft ">
                                <img src={logo2} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom  wow animate__animated animate__fadeInRight">
                                <img src={logo3} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom  wow animate__animated animate__fadeInRight">
                                <img src={logo4} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clients col-12 text-center  mb-md-3">
                    <div className="col-12 d-flex flex-wrap  col-12 justify-content-center">
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom pb-3 wow animate__animated animate__fadeInLeft">
                                <img src={logo5} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom pb-3 wow animate__animated animate__fadeInLeft">
                                <img src={logo6} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom pb-3  wow animate__animated animate__fadeInRight">
                                <img src={logo8} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clients col-12 text-center  mb-md-3">
                    <div className="col-12 d-flex flex-wrap  col-12 justify-content-center">
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom pb-3 wow animate__animated animate__fadeInLeft">
                                <img src={logo7} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1  border-bottom pb-3 wow animate__animated animate__fadeInRight">
                                <img src={logo9} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="clients col-12 text-center mb-3">
                    <div className="col-12 d-flex flex-wrap  col-12 justify-content-center">
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1 border">
                                <img src={logo1} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1 border">
                                <img src={logo2} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1 border">
                                <img src={logo3} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                        <div className="box col-md-6 col-xl-3">
                            <div className="box_body m-2 rounded-1 border">
                                <img src={logo4} className="img-fluid image_shadow" alt="Dreamliner Logo" />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    );
}

export default Clientside;
