import React from 'react';
import Banner from '../Component/banner';
import Clientside from '../Component/ClientSlider';
import ServiceSection from '../Component/servicesection';
import PortfolioSection from '../Component/portfoliosection';
import ChooseSection from '../Component/ChooseSection';
import TechnologiesSection from '../Component/technologies';
import ReviewSection from '../Component/Review';
import Process from '../Component/process';
import Get from '../Component/get';

function home() {
  return (
    <>
    <Banner />
    <Clientside />
    <ServiceSection />
    <PortfolioSection />
    <ChooseSection />
    <TechnologiesSection />
    <ReviewSection />
    <Process />
    <Get />
    </>
  )
}

export default home
