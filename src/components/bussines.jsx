import React from 'react'
import blog_one from '../Assets/bolg_image.jpg';
import blog_two from '../Assets/blog_image_2.png';
import blogimg3 from '../Assets/WhatsApp Image 2024-08-23 at 4.25.24 PM 1.png';
import blogimg4 from '../Assets/blogimg4.png';
import blogimg5 from '../Assets/blogimg5.png';
import insta1 from '../Assets/insta1.png';
import insta2 from '../Assets/insta2 1.png';
import insta3 from '../Assets/insta3 1.png';
import insta4 from '../Assets/insta6.6ecf289e27936c6602c9.png';
import insta5 from '../Assets/insta5 1.png';
import insta7 from '../Assets/insta7.jpg';
import { IoSearch } from "react-icons/io5";
import blog_3 from '../Assets/cyberscrutiy.jpeg';
import blog_4 from '../Assets/therole.jpeg';
import blog_5 from '../Assets/customsoftwe.jpeg';
import bussines1 from '../Assets/Artificial Intelligence and Machine Learnin.jpg';
import { MdArrowOutward } from "react-icons/md";
import { Link } from 'react-router-dom';

const bussines = () => {
    return (
        <>
            <section className='bussines_section '>
                <div className="container">
                    <div className="row">
                        <div className="col-12 d-flex flex-wrap">
                            <div className="col-12 col-lg-8 mb-5 mb-lg-0">
                                <div className="bussines_image">
                                    <img src={blog_one} alt="" className='col-12' />
                                </div>
                                <div className="bussines_content mt-4 ">
                                    <div className="bussines_name d-flex align-items-center mb-2">
                                        <span></span>
                                        <p className='ps-2 pe-3 mb-0'>Admin</p>
                                        <li>June 24, 2024</li>
                                    </div>
                                    <h2 className='fw-bold'>Top 5 IT Trends Transforming Businesses in 2024</h2>
                                    <p>Highlight emerging technologies like AI, blockchain, cloud computing, and cybersecurity trends that businesses need to adopt in 2024.
                                        A visually appealing infographic summarizing the key trends.
                                        IT trends 2024, emerging technologies, business technology.</p>
                                    <div className="bussines_sub_box mt-4">
                                        <h3 className='fw-bold'>1. Artificial Intelligence and Machine Learning</h3>
                                        <h6>Businesses are achieving unprecedented levels of accuracy in forecasting, optimizing their operations, and creating more engaging customer interactions.</h6>
                                        <p>Artificial Intelligence (AI) and Machine Learning (ML) continue to revolutionize the business world. These technologies are no longer just buzzwords but essential components of strategic planning and operations.Leveraging historical data to forecast future trends and behaviors, aiding in decision-making.Enhancing customer experiences by providing tailored recommendations and targeted marketing.</p>

                                    </div>
                                    <div className="bussines_sub_box mt-4">
                                        <h3 className='fw-bold'>2. Edge Computing</h3>
                                        <h5>Edge computing enables faster data analysis, improved user experiences, and more reliable operation of connected devices.</h5>
                                        <p>Edge Computing is emerging as a game-changer, especially with the explosion of IoT devices. By processing data closer to its source, edge computing reduces latency and bandwidth use.Enhancing the speed and efficiency of data handling for applications that require immediate responses.Enhancing the speed and efficiency of data handling for applications that require immediate responses.</p>

                                    </div>
                                    <div className="bussines_sub_box mt-4">
                                        <h3 className='fw-bold'>3. 5G Technology</h3>
                                        <h6>5G technology is unlocking new possibilities for businesses, from smarter cities to advanced remote work solutions.</h6>
                                        <p>The rollout of 5G networks is significantly transforming connectivity, offering faster speeds, lower latency, and greater bandwidth compared to previous generations. Improving remote work capabilities and mobile application performance.Supporting a higher density of connected devices and more data-intensive applications.</p>
                                    </div>
                                    <div className="bussines_sub_box mt-4">
                                        <h3 className='fw-bold'>4. Cybersecurity Enhancements</h3>
                                        <h6>Enhanced cybersecurity measures are vital for protecting sensitive information, maintaining regulatory compliance, and ensuring business continuity.</h6>
                                        <p>With the increasing sophistication of cyber threats, businesses are prioritizing advanced cybersecurity measures to safeguard their data and systems.Utilizing artificial intelligence to detect and respond to threats more effectively.Implementing a security model where trust is never assumed, and access is continuously verified.</p>
                                    </div>
                                    <div className="bussines_sub_box mt-4">
                                        <h3 className='fw-bold'>5. Sustainable Technology</h3>
                                        <h6>Sustainable technology practices not only contribute to environmental preservation but also enhance corporate reputation and align with consumer expectations for corporate responsibility.</h6>
                                        <p>Sustainability is becoming a key focus for businesses, driving the adoption of eco-friendly technologies and practices.Reducing energy consumption and lowering carbon footprints.Utilizing solar, wind, and other renewable sources to power IT operations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="bussines_sub_two px-3">
                                    <div className="blog_input position-relative mb-4 ">
                                        <input type="text" className='p-3 col-12 rounded-2 border-0 ' placeholder='Search...' name="" id="" />
                                        <Link className='text-dark'><IoSearch className='position-absolute'/></Link>
                                    </div>
                                    <div className="bolg_new">
                                        <h2 className='mb-4 fw-bold text-center text-xl-start'>Latest New Blog</h2>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12  col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blog_two} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_contentcol-12  col-xl-9 text-center text-xl-start">
                                                    <h6>1. How to Choose the Right IT Service Provider for Your Business</h6>
                                                    <p> Provide tips on selecting an IT service provider based on expertise, experience, support, and cost.</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12 col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blogimg3} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-xl-9 text-center text-xl-start">
                                                    <h6>2.The Importance of Cybersecurity for Small Businesses</h6>
                                                    <p>Discuss why small businesses are at risk, common threats, and effective measures to safeguard their data. A graphic showing common cyber threats and protection measures.</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12 col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blogimg4} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-xl-9 text-center text-xl-start">
                                                    <h6>3.IT’s Key Role in Powering Digital Business Evolution.</h6>
                                                    <p>Explain how IT drives digital transformation in organizations through automation, data analytics, and cloud solutions.A diagram illustrating the digital</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="bolg_sub d-flex ">
                                            <Link className='d-flex text-dark text-decoration-none flex-wrap flex-xl-nowrap'>
                                                <div className="blog_image col-12 col-xl-3 me-2 d-flex justify-content-center mb-3">
                                                    <img src={blogimg5} alt="" className='rounded-2 col-xl-12 ' />
                                                </div>
                                                <div className="sub_blog_content col-xl-9 text-center text-xl-start">
                                                    <h6>4.Why Your Business Needs a Custom Software Solution</h6>
                                                    <p> Discuss the benefits of custom software solutions compared to off-the-shelf products, with examples of tailored IT solutions.Before-and-after scenario comparison</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="blog_post mt-4">
                                        <h2 className='mb-4 fw-bold text-center text-xl-start'>Instagram Post</h2>
                                        <div className="blog_insta_box d-flex flex-wrap col-12">
                                            <div className="blog_img col-4">
                                                <Link><img src={insta1} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta2} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta3} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta4} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta5} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                            <div className="blog_img col-4">
                                                <Link><img src={insta7} alt="" className='p-2 col-12 img-fluid' /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default bussines
