import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"



const CreateDepartment = () => {
    const [department, setDepartment] = useState("");
    const [description, setDescription] = useState("");

    
    async function infoDepartment (ev){
      ev.preventDefault();
     try{
      await axios.post('/createdepartment',{
        department,
        description
      })
      alert("Department Created Sucessfully")
     }catch(e){
      alert("Department Not Deaprtment. Please Try Again")
     }
    }
    
  return <section className='department__section '>
    <div className='mt-4  grow flex item-center justify-around'>
      <div className='mb-16'>
        <h1 className='text-4xl text-center text-primaryColor font-[600]'>Department Creation</h1>
        <form className='max-w-2xl mx-auto' onSubmit={infoDepartment}>
        <label  className='mx-3 my-4'>Enter Department :</label>
          <input type="text" value={department} onChange={(e)=>setDepartment(e.target.value)}/><label className='mx-4 my-4'>Description :</label>
          <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)}/>
          <button>Submit</button>
        </form>
      </div>
    </div>
  

</section>

}

export default CreateDepartment
