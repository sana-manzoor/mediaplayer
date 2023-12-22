import React,{useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addVideos } from '../services/allApis';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({changeResState}) {

  const [show, setShow] = useState(false);
  const [video,setVideo]=useState({
    id:'',caption:'',thumbnail:'',url:''
})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleDetails=(e)=>{
    const {name,value}=e.target
    setVideo({...video,[name]:value})
  }


const handleVideoUrl=(e)=>{
  const {name,value}=e.target
  if(value.includes("v=")){
    let index=value.indexOf("v=")
    let url=value.substring(index+2,index+13)
    let videoUrl=`https://www.youtube.com/embed/${url}`
    setVideo({...video,[name]:videoUrl})
  }
}

const uploadVideos=async()=>{
  const {id,caption,thumbnail,url}=video
  if(!id || !caption || !thumbnail || !url){
    toast.warning("Please fill in the Video Details!!")
  }
  else{
    let response=await addVideos(video)
    console.log(response)
    if(response.status >=200 || response.status<300){
      changeResState()
      setShow(false)
      toast.success("New video uploaded")
    }
    else{
      toast.error("Video Upload failed")
    }
  }
}

   console.log(video)
  return (
    <>
    <div className='btn pt-3 pb-3'style={{backgroundColor:'#293e60'}} onClick={handleShow}>
      <i className="fa-solid fa-square-plus fa-l" style={{color: 'white',fontSize:'30px'}}></i>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title >Upload Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <FloatingLabel controlId="floatingId" label="Video Id" className="mb-3">
        <Form.Control type="text" placeholder="Video Id" name='id' onChange={(e)=>handleDetails(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCaption" label="Caption" className='mb-3'>
        <Form.Control type="text" placeholder="Video Caption" name='caption' onChange={(e)=>handleDetails(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingImageUrl" label="Video Image Url" className='mb-3'>
        <Form.Control type="text" placeholder="Video Image Url" name='thumbnail' onChange={(e)=>handleDetails(e)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingCVideoUrl" label="Video Url" className='mb-3'>
        <Form.Control type="text" placeholder=" YouTube Video Url" name='url' onChange={(e)=>handleVideoUrl(e)} />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#293e60',color:'white',letterSpacing:'2px'}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'#293e60',color:'white',letterSpacing:'2px'}} onClick={uploadVideos} >Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add