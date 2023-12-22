import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'


function Home() {

  const [resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }
  return (
    <div>
      <h2>
        All Videos
        <Link to={'/watch-history'} style={{textDecoration:'none',float:'right',fontSize:'23px',overflowY:'hidden',marginRight:'4px'}}>Watch History</Link>
        </h2>
      <Row className='mx-5 mt-5 mb-5 p-5'>
        <Col md='2'>
         <Add  changeResState={changeResState}  />
        </Col>
        <Col md='6'>
         <View resState={resState}/>
        </Col>
        <Col md='4'>
         <Category />
        </Col>
      </Row>
      <ToastContainer/>

    </div>
  )
}

export default Home