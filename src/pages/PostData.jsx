import axios from 'axios'
import React, { useState } from 'react'

const PostData = () => {
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")



  
   
    async function addData(e) {
        e.preventDefault();
      
        const datas = {
          name: name,
          age: age,
          email: email,
        };
      
        console.log('Data to be sent:', datas);
      
        try {
          const response = await axios.post('http://localhost:3000/data', datas);

          console.log('Post created:', response.data);
        } catch (error) {
          console.error('Error creating post:', error);
        }
      }
      

  return (

    <form onSubmit={(e)=>addData(e)}>
        <input type="text" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='age' value={age}  onChange={(e)=>setAge(e.target.value)}/>
        <input type="text" placeholder='email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'>
            Post
        </button>

        
    </form>
  )
}

export default PostData