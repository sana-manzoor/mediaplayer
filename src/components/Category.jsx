import React,{useState,useEffect} from 'react'
import { addCat,getCateg,getSpecificVideo,updatecategory } from '../services/allApis';
import { Modal,FloatingLabel,Form,Button } from 'react-bootstrap'
import { ToastContainer,toast } from 'react-toastify';
import { deleteCateg } from '../services/allApis';
import VideoCard from './VideoCard';

function Category() {

  const [show, setShow] = useState(false);

  const [categ,setCateg]=useState({
    id:'',categoryName:'',allVideos:[]
  })

  const [allCateg,setAllCateg]=useState([])

  // const [allVideos,setAllVideos]=useState([])


  const handleCategList=async()=>{
    let res=await getCateg()
     console.log(res.data)
     setAllCateg(res.data)

  }


  const removeCateg=async(id)=>{
    console.log(id)
    let res=await deleteCateg(id)
    if(res.status>=200 || res.status<300){
      handleCategList()
      setShow(false)
       toast.success("Video deleted successfully!!")
    }
    else{
     toast.error("Deletion Failed!!")
    }
 
   }



  const handleCategdetails=(e)=>{
    const {name,value}=e.target
    // console.log(name,value)
    setCateg({...categ,[name]:value})
  }
console.log(categ)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const addCategory=async()=>{
    const {id,categoryName}=categ
    
      let response=await addCat(categ)
      console.log(response)
      if(response.status>=200 && response.status<300)
      {
        setShow(false)
        handleCategList()
        toast.success("Category Added!!")
      }
      else{
        toast.error("Failed!!")
      }
      
    
  }

  

  const dragOver=(e)=>{
    e.preventDefault()
    console.log("Dragging over category board!!")

  }

  const onDrophandle=async(e,id)=>{
    console.log("drop target category id:",id)
    let videoid=e.dataTransfer.getData("videoid")
    console.log("video ID",videoid)
    const video=await getSpecificVideo(videoid)
    console.log(video.data)

    let selectedCategory=allCateg?.find(item=>item?.id===id)
    // console.log(selectedCategory)
    selectedCategory.allVideos.push(video.data)
    console.log(selectedCategory)
    const res=await updatecategory(id,selectedCategory)
    console.log(res)
    if(res.status>=200 && res.status<300){
      toast.success("Video added to category!!")
      handleCategList()
    }


  }

  
  
  
  
  
    console.log(categ)


   
useEffect(()=>{
  handleCategList()
},[])


  return (
    <>
    <div className='d-grid'>
      <button className='btn btn-block' style={{backgroundColor:'#293e60',color:'white'}} onClick={handleShow}>Add Category</button>
    </div>
    {
      allCateg?allCateg.map(item=>(
        <div className='border shadow p-3 mt-3'droppable onDragOver={(e)=>(dragOver(e))} onDrop={(e)=>(onDrophandle(e,item?.id))} >
          <div>
          <span>{item?.categoryName}</span>
          <span style={{float:'right'}} className='btn btn-sm'   onClick={()=>removeCateg(item?.id)}><i className="fa-solid fa-trash" style={{color:' #213659'}}></i></span>
          </div>

        <div>
          {
        item?.allVideos.map(video=>(
          <VideoCard video={video} isCategory={true} />
        )) 
        }
        </div>
       </div>

      )): <div className='text-primary'>No Category Available</div>
    }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       className='border shadow'>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <FloatingLabel controlId="floatingId" label="Id">
        <Form.Control type="text" placeholder="Enter unique ID" name='id' onChange={(e)=>handleCategdetails(e)} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingCategory" label="Category Name">
        <Form.Control type="text" placeholder="Category Name" name='categoryName' onChange={(e)=>handleCategdetails(e)} />
      </FloatingLabel>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor:'#293e60',color:'white',letterSpacing:'2px'}} onClick={handleClose}>
            Close
          </Button>
          <Button style={{backgroundColor:'#293e60',color:'white',letterSpacing:'2px'}} onClick={addCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category