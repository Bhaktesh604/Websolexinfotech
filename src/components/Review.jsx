// import React from 'react'
// import Slider from 'react-slick';
// import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// import { FaStar } from "react-icons/fa";

// const Testimonials = ({ Testimonials }) => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         prevArrow: <BsChevronLeft size="30px" style={{ marginRight: '10px', cursor: 'pointer' }} />,
//         nextArrow: <BsChevronRight size="30px" style={{ cursor: 'pointer' }} />,
//     };

//     const testimonials = [
//         {
//             text: "Awesome service of web development. Thanks to Parth vaghani and Bhaktesh for their consultation. They guys made an amazing product for my business which helps me to automate my work easily.",
//             author: "Pramay Usadadiya",
//         },
//         {
//             text: "Work with WebSolex infotech is pure amount of trust & reliability! They believe in quality in most cost effective way , we have gave them work for our website & that work is as perfect as our vision! Thanks for such great service you have provided to your customers! Give you 5 star rating with all my heart!",
//             author: "Dr Rahul Gelani",
//         },
//         {
//             text: "The design process was seamless and collaborative. They took the time to listen to my ideas, preferences, and even my concerns. What impressed me the most was their ability to translate abstract concepts into a stunning and memorable logo. It's as if they took the essence of my business and transformed it into a work of art.",
//             author: "Mayur Sheliya",
//         },
//         {
//             text: "Working with WebSolex Infotech was a pleasure! They had a clear vision for their video project and provided detailed feedback throughout the process. Their communication was excellent, and they were responsive to my suggestions. I'm thrilled with the final result and would highly recommend Naimish Kanani as a client.",
//             author: "Naimish Kanani",
//         }
//     ];

//     return (
//         <section className="review_section py-100 py-50">
//             <div className="container">
//                 <div className="row">
//                     <div className="review_heading d-flex justify-content-center align-items-center mb-4">
//                         <h3 className="text-center">Clients Testimonial</h3>
//                     </div>
//                     <Slider {...settings}>
//                         {testimonials?.map((item, index) => (
//                             <div key={index} className="item">
//                                 <div className="review_sub_box d-block d-md-flex rounded-2 m-2">
//                                     <div className="review_content_2 rounded-2">
//                                         <ul className="d-flex mb-3">
//                                             <li className='me-2'><FaStar className='icon_color'/></li>
//                                             <li className='me-2'><FaStar className='icon_color'/></li>
//                                             <li className='me-2'><FaStar className='icon_color'/></li>
//                                             <li className='me-2'><FaStar className='icon_color'/></li>
//                                             <li className='me-2'><FaStar className='icon_color'/></li>
//                                         </ul>
//                                         <p className="mb-3">{item.text}</p>
//                                         <h5 className="mb-0 fw-bold">{item.author}</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials


import React from 'react';
import Slider from 'react-slick';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { FaStar } from "react-icons/fa";
import img1 from '../Assets/rahul.png'
import img2 from '../Assets/namish.png'
import img3 from '../Assets/mayur.png'
import img5 from '../Assets/paresh.png'
import img6 from '../Assets/mayur2.png'
import img4 from '../Assets/quotation-mark.png'

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <BsChevronLeft size="30px" style={{ marginRight: '10px', cursor: 'pointer' }} />,
        nextArrow: <BsChevronRight size="30px" style={{ cursor: 'pointer' }} />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    const testimonials = [
        {
            text: "Work with WebSolex infotech is pure amount of trust & reliability! They believe in quality in most cost effective way , we have gave them work for our website & that work is as perfect as our vision! Thanks for such great service you have provided to your customers! Give you 5 star rating with all my heart!",
            img: img2,
            author: "Dr Rahul Gelani",
            category: "Website Devlopment",
            question: img4,
        },
        {
            text: "The design process was seamless and collaborative. They took the time to listen to my ideas, preferences, and even my concerns. What impressed me the most was their ability to translate abstract concepts into a stunning and memorable logo. It's as if they took the essence of my business and transformed it into a work of art.",
            img: img3,
            author: "Mayur Sheliya",
            category: "Ui UX Desginer",
            question: img4,
        },
        {
            text: "unity infotech immediately grasped our ideas and brought them to life, exceeding our expectations across the board. He is very professional and very efficient. Will be using on future projects. Excellent work",
            img: img5,
            author: "Paresh Vegad",
            category: "Website Devlopment",
            question: img4,
        },
        {
            text: "Parth is a total package! He has done Graphics, UI and UX for our business. Everything worked out just perfect, wherever there was any modification required.. he did it without a question. Highly Recommended A++++++ !!!!!",
            img: img6,
            author: "Mayur Lakhani",
            category: "Website Desginer",
            question: img4,
        },
    ];

    return (
        <section className="review_section pb-100 py-50">
            <div className="container">
                <div className="row">
                    <div className="section_main_title text-center mb-3 mb-md-5">
                        <h1 className='fw-bold'>Clients Testimonial</h1>
                    </div>
                   
                    <Slider {...settings}>
                        {testimonials.map((item, index) => (
                            <div key={index} className="item">
                                <div className="review_sub_box d-block d-md-flex rounded-2 m-2">
                                    <div className="review_content_2 rounded-2 bg-light p-4">
                                        <ul className="d-flex mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <li key={i} className='me-2'><FaStar className='icon_color' /></li>
                                            ))}
                                        </ul>
                                        <p className="mb-3">{item.text}</p>
                                        <div className="d-flex align-items-center mt-5 justify-content-between">
                                            <div className="testiomonials_sub_box1 d-flex align-items-center">
                                                <div className="image col-3">
                                                    <img src={item.img} alt={item.author} className='testimoinal_img col-12' />
                                                </div>
                                                <div className="content ps-2">
                                                    <h5 className='mb-2'>{item.author}</h5>
                                                    <p className='p-0'>{item.category}</p>
                                                </div>
                                            </div>
                                            <div className="testiomonials_sub_box2">
                                                <img src={img4} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;