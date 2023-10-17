import React from 'react';
import '../../App.css';
import BasicSlider from './BasicSlider';
import WhoAreWe from './WhoAreWe';
import OurProducts from './OurProducts';
import OurPartners from './OurPartners';
import Footer from './Footer';
import Footer2 from './Footer2';
import IndexPage from './IndexPage';
import LetsTalk from './LetsTalk';
import VisionMission from './VisionMission';
import WhyChooseUs from './WhyChooseUs';
import Grow from './Grow';
import { Helmet } from 'react-helmet';
export default function Home() {
  return (
    <>
       <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
      <BasicSlider />
     <WhoAreWe /> 
     
     
     <Grow />
       <div style={{marginBottom:'100px'}}></div> 
     
      <VisionMission />
      <div style={{marginBottom:'225px'}}></div>
      <OurProducts />
      <div style={{marginBottom:'225px'}}></div>
      <WhyChooseUs />
      <div style={{marginBottom:'135px'}}></div>
      <OurPartners />
      <div style={{marginBottom:'21px'}}></div>
      
      <div style={{marginBottom:'65px'}}></div>
      <IndexPage /> <br/>
      <div style={{marginBottom:'260px'}}></div>
      <LetsTalk />
      <Footer2 />
     
    </>
  );
}
