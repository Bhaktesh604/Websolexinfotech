import React from 'react'
import { FiUserPlus } from "react-icons/fi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";

const Jobwork = () => {
    return (
        <>
            {/* <section className='jobwork py-50 '>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1>How Project Work</h1>
                        </div>
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-12 col-lg-3 hover d-flex justify-content-center flex-column text-center arrorw_1 position-relative">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FiUserPlus className='icons_job' />
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h2>Create account</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eaque.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 hover d-flex justify-content-center flex-column text-center arrorw position-relative">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FaCloudUploadAlt className='icons_job'/>
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h2>Create account</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eaque.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 hover d-flex justify-content-center flex-column text-center arrorw_2 position-relative">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FaSearchPlus  className='icons_job'/>
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h2>Create account</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eaque.</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-3 hover d-flex justify-content-center flex-column text-center">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FcApproval className='icons_job'/>
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h2>Create account</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, eaque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}



            <section className='jobwork py-50'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            <h1 className='fw-bold'>How Project Work</h1>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                            <div className="col-12 col-md-6 col-xl-3 hover d-flex justify-content-center flex-column text-center arrorw_1 position-relative mb-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FiUserPlus className='icons_job' />
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h4>Design & Development</h4>
                                    <p>We begin with a detailed consultation to understand your business goals and technical requirements. Our team collaborates with you to create a tailored project plan, ensuring all aspects are aligned with your vision.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 hover d-flex justify-content-center flex-column text-center arrorw position-relative mb-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FaCloudUploadAlt className='icons_job' />
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h4>Testing & Quality Assurance</h4>
                                    <p>Our expert designers and developers bring your project to life, focusing on creating a user-friendly and visually appealing interface. We ensure that the design is responsive and optimized for all devices, while the development adheres to the latest standards.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 hover d-flex justify-content-center flex-column text-center arrorw_2 position-relative mb-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FaSearchPlus className='icons_job' />
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h4>Launch & Support</h4>
                                    <p>Before launch, we conduct rigorous testing to identify and resolve any issues. Our quality assurance process ensures that the final product is bug-free, secure, and performs seamlessly across different platforms and browsers.</p>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-xl-3 hover d-flex justify-content-center flex-column text-center mb-4">
                                <div className="d-flex justify-content-center mb-3">
                                    <div className="jobicon d-flex justify-content-center align-items-center">
                                        <FcApproval className='icons_job' />
                                    </div>
                                </div>
                                <div className="job_content">
                                    <h4>Launch & Support</h4>
                                    <p>Once the project meets our quality standards, we proceed with a smooth launch. Our commitment doesn’t end there; we offer ongoing support and maintenance to ensure your digital solution continues to perform optimally and adapt to any new needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Jobwork