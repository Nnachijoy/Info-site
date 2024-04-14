
import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import First from '../assets/First.pdf';
import Second from '../assets/Second.pdf';
import Third from '../assets/Third.pdf';
import Fourth from '../assets/Fourth.pdf';
import Five from '../assets/Five.pdf';
import Six from '../assets/Six.pdf';
import Eight from '../assets/Eight.pdf';
import Ten from '../assets/Ten.pdf';
import yumexone from '../assets/yumexone.png';
import yumextwo from '../assets/yumextwo.png';
import yumexthree from '../assets/yumexthree.png';
import yumexfour from '../assets/yumexfour.png';
import yumexfive from '../assets/yumexfive.png';
import yumexsix from '../assets/yumexsix.png';
import yumexeight from '../assets/yumexeight.png';
import yumexeightt from '../assets/yumexeightt.png';


function HeroSection() {

  return (
<div style={{marginTop:'70px'}}>
    
        <Row className=''>
<Col className='mb-5' md={6} xs={6}>
    <div>
        <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} className='d-flex'>
    <img src={yumexone} alt="yumex-pdf" className='mt-1 img-fluid w-100' />
</a>
    </div>
</Col>



            <Col className='mb-5'  md={6} xs={6}>
            <div>
<a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
<div className='d-flex'>
<img src={yumextwo} alt="yumexpdf" className='mt-1 img-fluid w-100'  />
    </div>
    </a>


</div>
            </Col>

            </Row>


            <Row className=''>
<Col className='mb-5' md={6} xs={6}>
    <div>

        <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} className='d-flex'>
    <img src={yumexthree} alt="yumex-pdf" className='mt-1 img-fluid w-100' />
</a>
    </div>
</Col>



            <Col className='mb-5'  md={6} xs={6}>
            <div>
<a href={Fourth} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
<div className='d-flex'>
<img src={yumexfour} alt="yumexpdf" className='mt-1 img-fluid w-100'  />
    </div>
    </a>


</div>
            </Col>

            </Row>

            <Row className=''>
<Col className='mb-5' md={6} xs={6}>
    <div>

        <a href={Five} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} className='d-flex'>
    <img src={yumexfive} alt="yumex-pdf" className='mt-1 img-fluid w-100' />
</a>
    </div>
</Col>



            <Col className='mb-5'  md={6} xs={6}>
            <div>
<a href={Six} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
<div className='d-flex'>
<img src={yumexsix} alt="yumexpdf" className='mt-1 img-fluid w-100'  />
    </div>
    </a>


</div>
            </Col>

            </Row>

            <Row className=''>
<Col className='mb-5 mt-3' md={6} xs={6}>
    <div>

        <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} className='d-flex'>
    <img src={yumexeightt} alt="yumex-pdf" className='mt-1 img-fluid w-100' />
</a>
    </div>
</Col>



            <Col className='mb-5'  md={6} xs={6}>
            <div>
<a href={Ten} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
<div className='d-flex'>
<img src={yumexeight} alt="yumexpdf" className='mt-1 img-fluid w-100'  />
    </div>
    </a>


</div>
            </Col>

            </Row>

    
</div>
  );
}

export default HeroSection;














// import React from 'react';
// import { Container, Row, Col, Navbar } from 'react-bootstrap';
// import bullet from '../assets/bullet.png';
// import yumexone from '../assets/yumexone.png';
// import yumextwo from '../assets/yumextwo.png';
// import yumexthree from '../assets/yumexthree.png';
// import First from '../assets/First.pdf';
// import Second from '../assets/Second.pdf';
// import Third from '../assets/Third.pdf';
// import Fourth from '../assets/Fourth.pdf';
// import Five from '../assets/Five.pdf';
// import Six from '../assets/Six.pdf';
// import Eight from '../assets/Eight.pdf';
// import Ten from '../assets/Ten.pdf';
// import arrownext from '../assets/arrownext.png';

// function HeroSection() {

//   return (
// <div style={{marginTop:'70px'}}>
    
//         <Row className='container'>
        


// <Col className='mb-5' md={4} xs={6}>
//     <div>
//         <div className='yumex'>
//             <a href={First} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
//                 YUMEXZ SOLAR SUN TRACKER <i className="fas fa-download"></i>
//             </a>
//         </div>

//         <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} className='d-flex'>
//     <img src={yumexone} alt="yumex-pdf" className='mt-1 img-fluid w-100' />
// </a>
        
//         <Container  className='mt-3'>
//         <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }} className='d-flex'>
//     <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     <span style={{ marginLeft: '10px' }}>
//         <h6>
//             Saving Money on Energy Bills is Easy
//         </h6>
//     </span>
// </a>


// <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//             <div className='d-flex'>
//         <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
//         <span> <h6 style={{ marginLeft: '10px' }} className=''>
//             Efficiency and Convenience Go Hand-in-hand
//             </h6></span>
//             </div>
//             </a>

// <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//             <div className='d-flex'>
//         <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
//         <span> <h6 style={{ marginLeft: '10px' }} className=''>
//         Switch to Solar, Save Your Environment
//             </h6></span>
//             </div>
//             </a>

//             <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//             <div className='d-flex'>
//         <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
//         <span> <h6 style={{ marginLeft: '10px' }} className=''>
//         Start Saving on Your Energy
// Bills Today
//             </h6></span>
//             </div>
//             </a>



//         </Container>

//         <div className='explore fw-bolder d-flex mt-3' style={{ alignItems: 'center' }}>
//             <span style={{ marginRight: '5px', marginTop:'1px' }}>
//                 <a href={First} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//             </span>
//             <a href={First} target="_blank" rel="noopener noreferrer">
//                 <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//             </a>
//         </div>
//     </div>
// </Col>



//             <Col className='mb-5'  md={4} xs={6}>
//             <div>
//     <div className='yumex'>
//         <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//             YUMEXZ SOLAR CARPORTS<i className="fas fa-download"></i>
//         </a>
//     </div>
    

// <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
// <div className='d-flex'>
// <img src={yumextwo} alt="yumexpdf" className='mt-1 img-fluid w-100'  />
//     </div>
//     </a>

        
//     <Container  className='mt-3'>
//     <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Introduction to Solar Carports
//     </h6></span>
//     </div>
//     </a>

//     <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Benefits of Solar Carports
//     </h6></span>
//     </div>
//     </a>

//     <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// How Solar Carports Work
//     </h6></span>
//     </div>
//     </a>

//     <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Features of Our Solar Carports
//     </h6></span>
//     </div>
//     </a>

//     <a href={Second} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold '>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Frequently Asked Questions
//     </h6></span>
//     </div>
//     </a>



// </Container>

// <div className='explore fw-bolder mt-2' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Second} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Second} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>

//             <Col className='mb-5'  md={4} xs={4} >
//             <div>


//             <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={yumexthree} alt="bullet"className='mt-1' />
//     </div>
//     </a>


//     <div className='yumex'>
//         <a href={Third} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//             YUMEXZ SOLAR ROOF TILES <i className="fas fa-download"></i>
//         </a>
//     </div>
       
//     <Container className='mt-3'>
//     <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Data Sheet Claims
//     </h6></span>
//     </div>
//     </a>


//     <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
//  Durability,
// Efficiency, and Aesthetics
//     </h6></span>
//     </div>
//     </a>

//     <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Solar Roof and Tiles Product Overview
//     </h6></span>
//     </div>
//     </a>

//     <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Aesthetics and Property Value
//     </h6></span>
//     </div>
//     </a>

//     <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Conclusion and Key Points
//     </h6></span>
//     </div>
//     </a>

  



// </Container>

// <div className='explore fw-bolder mt-1' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Third} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>
//         </Row>

//         <Row className='row-space container'>
//             <Col className='mb-5'  md={4}>
//             <div>
//     <div className='yumex'>
//         <a href={Fourth} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//             YUMEXZ SOLAR IRRIGATION<i className="fas fa-download"></i>
//         </a>
//     </div>


//     <Container className='mt-3'>
//     <a href={Fourth} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Yumexz Power Irrigation Agriculture
//     </h6></span>
//     </div>
//     </a>

//     <a href={Fourth} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Importance of Irrigation in Agriculture
//     </h6></span>
//     </div>
//     </a>


//     <a href={Fourth} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Showcasing Successful Implementation
//     </h6></span>
//     </div>
//     </a>

    
//     <a href={Fourth} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Sustainability and Environmental Impact
//     </h6></span>
//     </div>
//     </a>
    

  



// </Container>

// <div className='explore fw-bolder mt-1' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Third} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Third} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>


//             <Col className='mb-5'  md={4}>
//             <div>
//     <div className='yumex'>
//         <a href={Five} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//             YUMEXZ SOLAR EV CONVERSION <i className="fas fa-download"></i>
//         </a>
//     </div>
//     <Container className='mt-3'>
//     <a href={Five} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// What is EV Conversion?
//     </h6></span>
//     </div>
//     </a>

//     <a href={Five} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Benefits of EV Conversion
//     </h6></span>
//     </div>
//     </a>


//     <a href={Five} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Power's EV Conversion Process
//     </h6></span>
//     </div>
//     </a>

    
//     <a href={Five} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Introduction to EV Battery Restoration
//     </h6></span>
//     </div>
//     </a>
    

// </Container>

// <div className='explore fw-bolder mt-1' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Five} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Five} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>

//             <Col className='mb-5'  md={4}>
//             <div>
//     <div className='yumex'>
//         <a href={Six} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//             YUMEXZ MASTER SMART METER <i className="fas fa-download"></i>
//         </a>
//     </div>
//     <Container className='mt-3'>
//     <a href={Six} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Smart Master Meter Solution
//     </h6></span>
//     </div>
//     </a>

//     <a href={Six} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Unique Characteristics of Smart Meter
//     </h6></span>
//     </div>
//     </a>


//     <a href={Six} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Showcasing Successful Implementation
//     </h6></span>
//     </div>
//     </a>

    
//     <a href={Six} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Sustainability and Environmental Impact
//     </h6></span>
//     </div>
//     </a>
    

// </Container>

// <div className='explore fw-bolder mt-1' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Six} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Six} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>
//         </Row>

//         <Row className='row-space container'>
//             <Col md={7} className='mb-5'>
//             <div>
//     <div className='yumex'>
//         <a href={Eight} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//             YUMEXZ SOLAR BACK UP STORAGE<i className="fas fa-download"></i>
//         </a>
//     </div>
//     <Container className='mt-3'>
//     <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Introduction to Yumexz
// Solar backup storage
// system
//     </h6></span>
//     </div>
//     </a>

//     <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// How does the Yumexz Solar backup storage system work?
//     </h6></span>
//     </div>
//     </a>

//     <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Key features of the Yumexz Solar
// backup storage system
//     </h6></span>
//     </div>
//     </a>

//     <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Benefits of using the Yumexz Solar backup storage system
//     </h6></span>
//     </div>
//     </a>

//     <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Real-life examples of the Yumexz Solar backup storage system
//     </h6></span>
//     </div>
//     </a>




//     <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Comparison with traditional backup storage systems
//     </h6></span>
//     </div>
//     </a>

    

    
// </Container>

// <div className='explore fw-bolder mt-1' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Eight} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Eight} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>



//             <Col md={5} className='mb-5'>
//             <div>
//     <div className='yumex'>
//         <a href={Ten} download={true} style={{ color: 'black', textDecoration: 'none' }} className='fw-bold m-0 p-0'>
//         YUMEXZ SOLAR ENERGY <i className="fas fa-download"></i>
//         </a>
//     </div>
//     <Container className='mt-3 '>
//     <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
// <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Yumexz Power Solar Irrigation System
//     </h6></span>
//     </div>
//     </a>

//     <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Yumexz Power Solar Street Lights
//     </h6></span>
//     </div>
//     </a>

//     <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>
// Yumexz Power Borehole and Water Storage 
//     </h6></span>
//     </div>
//     </a>

//     <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>Yumexz Power Home Solar Energy Solution
//     </h6></span>
//     </div>
//     </a>

//     <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>Yumexz Power Solar Food Preservation System
//     </h6></span>
//     </div>
//     </a>

//     <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>
//     <div className='d-flex'>
// <img src={bullet} alt="bullet" style={{ width: '20px', height: '20px' }} className='mt-1' />
// <span> <h6 style={{ marginLeft: '10px' }} className=''>Benefits of
// Yumexz Power Conversion Technology
//     </h6></span>
//     </div>
//     </a>

    

    
// </Container>

// <div className='explore fw-bolder mt-1' style={{ margin: '0', padding: '0', display: 'flex', alignItems: 'center' }}>
//     <span style={{ marginRight: '5px', marginTop:'1px' }}>
//         <a href={Ten} target="_blank" rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none' }}>Learn More</a>
//     </span>
//     <a href={Ten} target="_blank" rel="noopener noreferrer">
//         <img src={arrownext} alt="Learn More Image" style={{ width: '20px', height: '20px' }} className='mt-1' />
//     </a>
// </div>
// </div>



//             </Col>
//         </Row>
    
// </div>
//   );
// }

// export default HeroSection;





