import React from 'react'
import Bill from '../../images/billgatesnew.png';
import ifc from '../../images/ifcnew.png';
import finnfund from '../../images/Logo_finnfund.jpg';
import Hendrix from '../../images/HenNew.png';
import nutreco from '../../images/NutrecoNew.png';
import zoetis from '../../images/ZoetisNew.png';
import './OurPartners.css';
function OurPartners() {
  return (
    <>
  
    <div className='main-partners'>
      <h1 className='our-partners-title'>OUR PARTNERS</h1>
      <div className='partner-images'>
         <div className='img-container imc1'>
            <img className='our-partner-images'  src={Bill} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images' src={ifc} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={finnfund} alt='dayoldchick'  />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={Hendrix} alt='dayoldchick' />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={nutreco} alt='dayoldchick' />
        </div>
        <div className='img-container'>
            <img className='our-partner-images'  src={zoetis} alt='dayoldchick' />
        </div>
      </div>
    </div>
   
    </>
  )
}

export default OurPartners
