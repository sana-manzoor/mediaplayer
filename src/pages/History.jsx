import React,{useState,useEffect} from 'react'
import { getHistory } from '../services/allApis'
import { Table } from 'react-bootstrap'


function History() {

const [history,setHistory]=useState([])

// const [allHistory,setAllHistory]=useState()


const handleHistory=async()=>{
  let res=await getHistory()
   console.log(res.data)
   setHistory(res.data)

}

   
useEffect(()=>{
  handleHistory()
},[])

 console.log(history)

  return (
      <div className='p-5'>
         <Table striped bordered hover>
        <tr>
           <th>Id</th>
           <th>Caption</th>
           <th>URL</th>
           <th>Date</th>
         </tr>
         {
          history?history.map((item,index)=>(
            <tr>
            <td>{index+1}</td>
            <td>{item?.caption}</td>
            <td>{item?.url}</td>
            <td>{item?.date}</td>
          </tr>
 
          )):<div className='text-primary'>No History To Show..</div>
         
        } 
       </Table>
      </div>
  
  )
    }

export default History