import React from 'react'

const webdevlopment = () => {
    return (
        <>
            <section className='service_page py-100'>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 mb-7 d-flex align-items-stretch mb-5">
                            <div className="position-relative  mg-10 mx-md-3 col-12">
                                <div className="card border-0 mb-0">
                                    <div className="card-body text-center text-lg-start p-4 border-0 ">
                                        <div className="card_body_sub">
                                            <div className="card_icon rounded-1 d-flex align-items-center justify-content-center justify-content-lg-start mb-3 ">
                                                <img src={reactjs} alt="" className='fs-2  img-fluid col-2 col-md-3 col-lg-2' />
                                            </div>
                                            <h5 className="mb-1 fw-bold  text-capitalize mb-2" >React.js Development</h5>
                                            <h6 className='col-xxl-9'>Build Modern Web Applications with React.js</h6>
                                            <p className="mb-1 fs-14">We specialize in crafting dynamic, responsive, and high-performance web applications using React.js. Our solutions are tailored to enhance user experience and ensure seamless scalability.
                                            </p>
                                        </div>
                                        <div className="social d-flex mt-4  justify-content-end">
                                            <a href="javascript:void(0);"><FaArrowRight className="arrow" /></a>
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

export default webdevlopment
