import React from 'react'
import blog_one from '../Assets/blog_1.jpeg';


const blog = () => {
    return (

        <>
            <section className='blog_section pb-100'>
                <div className="container">
                    <div className="row">
                        <h2 className='mb-5'>Recent blog posts</h2>
                        <div className="col-12">
                            <div className="col-4">
                                <div className="blog_sub">
                                    <div className="blog_image mb-4">
                                        <img src={blog_one} alt="" className='img-fluid rounded-4' />
                                    </div>
                                    <div className="blog_content">
                                        <h2>Lorem ipsum dolor sit amet.</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, deserunt.</p>
                                        <div className="blog_sari d-flex">
                                            <span>Parth bhai</span>
                                            <li className='m-0'>19 Jan 2022</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        {/* <div className="col-12">
                    <div className="col-3">
                        <div className="blog_sub_box">
                            <div className="blog_categories rounded-2">
                                <h3 className='fw-bold mb-3'>Categories</h3>
                                <ul className='ps-0 mb-0'>
                                    <li className='py-2 border-bottom'><a href="javascript:void(0);" className='text-black text-decoration-none fw-semibold '>Culture</a></li>
                                    <li className='py-2 border-bottom'><a href="javascript:void(0);" className='text-black text-decoration-none fw-semibold '>Creativity</a></li>
                                    <li className='py-2 border-bottom'><a href="javascript:void(0);" className='text-black text-decoration-none fw-semibold '>Food</a></li>
                                    <li className='py-2 border-bottom'><a href="javascript:void(0);" className='text-black text-decoration-none fw-semibold '>Travel</a></li>
                                    <li className='py-2 border-bottom'><a href="javascript:void(0);" className='text-black text-decoration-none fw-semibold '>Humor</a></li>
                                    <li className='py-2'><a href="javascript:void(0);" className='text-black text-decoration-none fw-semibold '>Music</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="blog_sub_box">
                            <div className="blog_categories rounded-2">
                                <h3 className='fw-bold mb-3'>Top Posts</h3>
                                <ul className='ps-0 mb-0'>
                                    <li>
                                        <div className="categories_main_sub d-flex">
                                            <div className="sub_box"><h1>1</h1></div>
                                            <div className="sub_content ms-4">
                                                <h6 className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                                <p>Food Travel = NCV 17,2022</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="categories_main_sub d-flex">
                                            <div className="sub_box"><h1>2</h1></div>
                                            <div className="sub_content ms-4">
                                                <h6 className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                                <p>Food Travel = NCV 17,2022</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="categories_main_sub d-flex">
                                            <div className="sub_box"><h1>3</h1></div>
                                            <div className="sub_content ms-4">
                                                <h6 className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                                <p>Food Travel = NCV 17,2022</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="categories_main_sub d-flex">
                                            <div className="sub_box"><h1>4</h1></div>
                                            <div className="sub_content ms-4">
                                                <h6 className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                                <p>Food Travel = NCV 17,2022</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="categories_main_sub d-flex">
                                            <div className="sub_box"><h1>5</h1></div>
                                            <div className="sub_content ms-4">
                                                <h6 className='mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h6>
                                                <p>Food Travel = NCV 17,2022</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default blog
