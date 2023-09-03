//axios is a dependency to handle HTTP req

import axios from "axios"
import React, { useEffect, useState } from 'react'
//func to fetch data
const FetchData = () => {

    const [data,setData] =useState([])
   
   async function getData(){

       await axios.get("http://localhost:3000/data") 
       
                .then(res=>setData(res.data))//setting the data with the response

                .catch(err=>console.log(err))
    }
// to perform side effects like fetching data
    useEffect(()=>{
        getData()
    },[])  //dependency array to avoid multiple rerendering

//    console.log(data)


async function deleteData(id){
  console.log(id)

  await axios.delete(`http://localhost:3000/data/${id}`)
           .then(res=>setData(res.data))
           .catch(err=>console.log(err))
}

const editData = async (id) => {
  const newName = prompt('Enter the new name:');

 
    try {
      // Send the new name to the server to update the data
     const updatedData= await axios.patch(`http://localhost:3000/data/${id}`, {
        name: newName,
      });

      setData(updatedData);
      console.log('Name updated successfully');
    } catch (error) {
      console.error('Error updating name:', error);
    }
  
};




  return (
  
      <>
       <div>
         {
            data.map((item)=>{
            //    console.log(item)
            return(
                < div style={{border:"1px solid black",marginTop:"20px",padding:"30px"}}>
                 <p>{item.name}</p>
                 <p>{item.age}</p>
                 <p>{item.email}</p>
                 <button onClick={(e)=>editData(item.id)}>Edit</button>
                 <button onClick={(e)=>deleteData(item.id)}>delete</button>
                </div>
            )
            })
         }

        <p></p>
        <p></p>
       </div>
      
    </>

    // <div>fetchData</div>
  )
}

export default FetchData

