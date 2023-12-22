import React,{useState,useEffect} from 'react'
import VideoCard from './VideoCard'
import { getCateg, getVideos } from '../services/allApis'
import { Row,Col } from 'react-bootstrap'

function View({resState}) {

  const [allVideos,setAllVideos]=useState([])
  const [delRes,setDelRes]=useState(false)

  const delResUpdate=()=>{
    setDelRes(true)
  }

  const getVideo=async()=>{
  let res=await getVideos()
  setAllVideos(res.data)
  setDelRes(false)
  // console.log(res.data)
  }

  

  useEffect(()=>{
    getVideo()
  },[resState,delRes])

 
  
  return (
    <div className='p-3 border shadow rounded' style={{backgroundColor:'rgb(129, 185, 227)'}}>
      <Row>
    
      {
        allVideos?allVideos.map(item =>(
          <Col sm={12} md={6}>
          
          <VideoCard video={item} delResUpdate={delResUpdate} />

          </Col>


        )): <div className='text-primary'>No data to show!!</div>
      }
      </Row>
    </div>
  )
}

export default View