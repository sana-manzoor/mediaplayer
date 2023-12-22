import React,{useState} from 'react'
import { Card,Modal,Button } from 'react-bootstrap'
import { deleteVideo } from '../services/allApis';
import { ToastContainer,toast } from 'react-toastify';
import { addHistory } from '../services/allApis';
import { v4 as uuidv4 } from 'uuid';

function VideoCard({video,delResUpdate,isCategory}) {

  const [show,setShow]=useState (false)

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let date=new Date()
    let id=uuidv4()
    const {caption,url}=video
     console.log(id,caption,url,date)
     let body={id,caption,url,date}
     const res=await addHistory(body)
     console.log(res)


  }

  const ondrag=(e,id)=>{
    // e.preventDefault()
    console.log("Target Video Id:",id)
    e.dataTransfer.setData("videoid",id)
  }

  const removeVideo=async(id)=>{
   console.log(id)
   let res=await deleteVideo(id)
   console.log(res)
   if(res.status>=200 || res.status<300){
    toast.success("Video deleted successfully!!")
    delResUpdate()
   }
   else{
    toast.error("Deletion Failed!!")
   }

  }
  
  return (
    <div>
      <Card style={{ width: '18rem' }} className='border shadow mb-4'>
      <Card.Img  style={{height:'200px'}} variant="top"  src={video?.thumbnail} onClick={handleShow} draggable onDragStart={(e)=>ondrag(e,video?.id)}/>
      <Card.Body>
        {
          isCategory?"":
          <Card.Title className='text-center'>{video?.caption} <span className='btn' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash" style={{color:' #213659',float:'right'}}></i></span></Card.Title>

        }
        </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="415" src={`${video?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default VideoCard