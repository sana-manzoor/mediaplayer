import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div style={{height:'400px',width:'100%',backgroundColor:'rgb(129, 185, 227)', overflowY:'hidden'}}>
      <Row className='p-5'>
        <Col md='4'>
        <h4 className='text-center'  style={{overflowY:'hidden'}}><i className="fa-solid fa-upload  fa-l me-3" style={{color:'#223659;'}}></i>HExMedia</h4><br />
        <p style={{textAlign:'justify',color:'#223659'}}>HExMedia is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.Plays everything - Files, Discs, Webcams, Devices and Streams.Plays most codecs with no codec packs needed - MPEG-2, MPEG-4, H.264, MKV, WebM, WMV, MP3.Runs on all platforms - Windows, Linux, Mac OS X, Unix, iOS, Android. Completely Free - no spyware, no ads and no user tracking.</p>

        </Col>
        <Col md='4' className='d-flex flex-column text-center'>
          <h3  style={{overflowY:'hidden'}}>Links</h3>
          <Link to={'./'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Landing Page</Link>
          <Link to={'./home'} style={{textDecoration:'none',color:'#223659'}}className='pt-3 pb-2'>Home Page</Link>
          <Link to={'./watch-history'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Watch History</Link>

        </Col>
        <Col md='4' className='d-flex flex-column text-center'>
          <h3  style={{overflowY:'hidden'}}>Guides</h3>
          <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'> React</Link>
          <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'#223659'}}className='pt-3 pb-2'>React-Bootstrap</Link>
          <Link to={'https://fontawesome.com/'} style={{textDecoration:'none',color:'#223659'}} className='pt-3 pb-2'>Fontawesome</Link>

        </Col>
      <div>
        <br /><br />
       <p className='text-center' style={{color:'#223659'}}>Copyright © 2023 React Bootstrap. Built with Docusaurus.</p> 
    </div>
      </Row>
      </div>
    </div>
  )
}

export default Footer