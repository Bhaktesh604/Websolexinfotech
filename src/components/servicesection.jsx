import React from 'react';
import { FaDisplay } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import webdevlopment from '../Assets/web devlopment.png'
import graphic from '../Assets/grafhics.png'
import uiux from '../Assets/uiux-icon.png'
import wordPress from '../Assets/wordpres.png'

const services = [
    {
        id: 1,
        title: 'Web Development',
        description: 'We build responsive, SEO-friendly websites that engage users and drive conversions for your business.',
        icon: webdevlopment,
        color: '#fa8c16',
    },
    {
        id: 2,
        title: 'UI/UX Design',
        description: 'Crafting intuitive, visually stunning interfaces that provide seamless and engaging user experiences.',
        icon: uiux,
        color: '#229342',
    },
    {
        id: 3,
        title: 'Graphics Design',
        description: 'Creating eye-catching graphics and branding materials that captivate your audience and enhance your brand.',
        icon: graphic,
        color: '#4285f4',
    },
    {
        id: 4,
        title: 'WordPress Development',
        description: 'Developing flexible and scalable WordPress sites tailored to your unique business needs and goals.',
        icon: wordPress,
        color: '#722ed1',
    },
];

const ServiceSection = () => {
    return (
        <section className="service py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap">
                        <div className="col-12 col-xl-4 d-flex align-items-center mb-3 mb-lg-5 mb-xl-0 ">
                            <div className="section_title service_title mb-5 wow fadeInDown animated text-center text-md-start" data-wow-delay="0.3s">
                                <div className="section_main_title text-center text-xl-start">
                                    <h1 className="mb-2">Comprehensive IT Solutions
                                    </h1>
                                    <p className="mb-4">Unlock the potential of your business with our all-encompassing IT services. From consulting to implementation, we have you covered.

                                    </p>
                                    <Link to="/service" className="rounded-1 text-decoration-none">Explore All Services</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-8 d-flex flex-wrap">
                            {services.map(service => (
                                <div key={service.id} className="col-12 col-md-6 mb-5 mb-md-3">
                                    <div className="service_sub_box overflow-hidden  d-lg-flex p-3 me-0 me-lg-3">
                                        <div className="icon col-lg-1 me-0 me-lg-4 mb-4 mb-lg-0 d-flex d-lg-block align-align-items-center justify-content-center">
                                            {/* <FaDisplay className='col-12 text-primary' /> */}
                                            <img src={service.icon} alt="" className='col-1 col-md-12'/>
                                        </div>

                                        <div className="service_content col-12 col-lg-10">
                                            <div className="service_style_eleven_title">
                                                <h4>{service.title}</h4>
                                            </div>
                                            <div className="service_style_eleven_text pt-2">
                                                <p>{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceSection;