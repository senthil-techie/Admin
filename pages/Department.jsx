import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'


const createdepartmentLinks =[
  {
      path:'/edituser',
      display:'Edit User'
  },
]

const editdepartmentLinks =[
  {
      path:'/editdepartment',
      display:'Edit Department'
  },
]

const Department = () => {
  const [dataList, setDataList] = useState([])

  async  function getFetchData(){
    const data = await axios.get('/createdepartment')
    console.log(data)
  if(data.data.success){
    setDataList(data.data.data)
  }
  }

  useEffect(()=>{
  getFetchData()
  },[])

  const handleDelete = async(id)=>{
    const data = await axios.delete("/createdepartment/" + id)
    if(data.data.success){
      getFetchData()
      alert(data.data.message)
    }
  }

  return (
      <div className='p-10 h-screen u__section'>
        {createdepartmentLinks.map((index)=><button key={index}  className=" w-40 bg-primaryColor  text-white font-[900]    my-12 justify-center rounded-[10px]"><NavLink to="/createdepartment">Create Department</NavLink></button>)}
         <div className='overflow-auto rounded-lg shadow-xl'>
          <table className='w-full'>
           <thead className='bg-blue-50 text-blue-500 border-b-2 border-blue-500 '>
             <tr>
               <th className='p-3 text-xl font-semibold tracking-wide text-left'>Department</th>
               <th className='p-3 text-xl font-semibold tracking-wide text-left'>Description</th>
               <th className='p-3 text-xl font-semibold tracking-wide text-left'>Action</th>
             </tr>
           </thead>
          <tbody className='divide-y divide-blue-700'>
            { dataList[0] ? (
              dataList.map((el)=>{
                return(
                  <tr>
                    <td className='w-50 p-3 text-md text-gray-700 bg-blue-100 whitespace-nowrap '>{el.department}</td>
                    <td className='w-50 p-3 text-md text-gray-700 bg-blue-50 whitespace-nowrap '>{el.description}</td>
                    <td px-3>
                      <button className=' w-40 bg-primaryColor text-white font-[300] rounded-[10px]'onClick={()=>handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                )
              }))
              :(
                <p className="text-center">No Data Has Entered</p>
              )
            }
          </tbody>
          </table>
        </div>
     </div>
  )
          
}


export default Department



 


