import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'


const CreateUser = () => {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ")
    const [department, setDepartment] = useState(" ")
    const [dataList, setDataList] = useState([])

    async  function getFetchData(){
        const data = await axios.get('/createdepartment')
        if(data.data.success){
        setDataList(data.data.data)
      }
      }
    
      useEffect(()=>{
      getFetchData()
      },[])



    async function infoUser (ev){
        ev.preventDefault();
        try{
            await axios.post('/createuser',{
                name,
                email,
                password,
                department
            })
            alert("User Created Successfully")
        }catch(e){
            alert("User Not Created. Please Not Again")
        }
      }


    
  return <section className='user__section'>
     <div className='mt-4  grow flex item-center justify-around'>
        <div className='mb-12'>
            <h1 className='text-4xl text-center text-primaryColor font-[600]'>User Creation</h1>
            <form className='max-w-2xl mx-auto' onSubmit={infoUser}>
                <label  className='mx-3'>Full name :</label>
                <input type="text" value={name}  onChange={(e)=>setName(e.target.value)}/><label className='mx-3'>Enter Your Email:</label>
                <input type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} /><label  className='mx-3'>Password :</label>
                <input type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} /><label  className='mx-3'>Select Your Department :</label>
                <input type="text"  value={department} onChange={(e)=>setDepartment(e.target.value)} />
                <select type="Department" value={department} onChange={(e)=>setDepartment(e.target.value)} name="department" className='w-full  px-2 py-2 border border-solid border-[#0066ff61] focus:outline-nonefocus:border-b-primaryColor text-[20px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer'>
                    {
                        dataList.map((el)=>{
                            return(
                                <option>{el.department}</option>
                            )
                        })
                    }
                </select>
                <button className="my-5">Create User</button>
            </form>
        </div>
   </div>
</section>
}

export default CreateUser
