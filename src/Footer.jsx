import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './Footer.css'
import flag from './flag.jpeg'
import insta from './inst.jpeg'
import linkedin from './linkedin.png'
import pay from './gpay.png'
import maestro from './maestro.jpeg'
import paypal from './paypal.png'

const Footer = () => {
  return (
    <>
    <br /> 
    <Row className='foot'>
    <Col className='col-1-part'>
    <div className='footers'>
        <p style={{fontWeight:'700', fontSize:'25px'}}>BE THE FIRST TO KNOW</p>

        <small>Sign up for updates from mettam use.</small>
        <br />
        <br />

        <input type='text' placeholder='Enter your e-mail...' className='text'/>
        <button className='button'>SUBSCRIBE</button>
    </div>
    </Col>
    
    <Col className='col-2-part'>
    <p style={{fontWeight:'700', fontSize:'25px'}}>CONTACT US</p>
    <p>+44 221 133 5360</p>
    <p>customercare@mattamuse.com</p>
    <p>CURRENCY</p>
    <img src={flag} style={{ width:'30px', borderRadius:'50%' }}/> USD
    <br/>
    <small>Transactions will be completed in Euros and a currency reference is available on hover.</small>
    <br/>
    </Col>

    </Row>
    <Row className='foot-2'>
<hr />
        <Col className='links'>
        <p style={{fontWeight:'700', fontSize:'30px'}}>metta muse</p>
        <a href="#" style={{ textDecoration:'none', color:'inherit'}} >About Us</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Stories</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Artisans</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Boutiques</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Contact Us</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >EU Compliances Docs</a>
        
        
        </Col>

        <Col className='links' style={{ marginBottom:'10px' }}>
        <p style={{fontWeight:'700', fontSize:'30px'}}>QUICK LINKS</p>
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Orders & Shipping</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Join/Login as a Seller</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Payment & Pricing</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Return & Refunds</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >FAQs</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Privacy Policy</a>
        <br />
        <a href="#" style={{ textDecoration:'none', color:'inherit' }} >Terms & Conditions</a>
        
        
        </Col>

        <Col className='links'>
        <p style={{fontWeight:'700', fontSize:'30px'}}>FOLLOW US</p>
        <img src={insta} style={{ width:'40px', borderRadius:'50%'}}/>
        <img src={linkedin} style={{ width:'35px', borderRadius:'50%', marginLeft:'5px' }} />

        <p>metta muse ACCEPTS</p>
        <img src={pay} style={{ height:'40px',width:'50px', borderRadius:'4px'}} />
        <img src="" alt="" />
        <img src={maestro} style={{ width:'50px', height:'40px', borderRadius:'4px', marginLeft:'5px' }} />
        <img src={paypal} style={{ width:'50px', height:'40px', borderRadius:'4px', marginLeft:'5px'}} />
        <img src="" alt="" />
        <img src="" alt="" />
        </Col>
    </Row>
    </>

  )
}

export default Footer