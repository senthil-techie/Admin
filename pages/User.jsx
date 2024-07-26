import { NavLink} from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'



const createuserLinks =[
    {
        path:'/edituser',
        display:'Edit User'
    },
]

const edituserLinks =[
  {
      path:'/edituser',
      display:'Edit User'
  },
]

const User = () => {
  const [dataList, setDataList] = useState([])


  const getFetchData = async()=>{
    const data = await axios.get('/createuser')
    console.log(data)
   if(data.data.success){
    setDataList(data.data.data)
   }
}

useEffect(()=>{
    getFetchData()
},[])

const handleDelete = async(id)=>{
  const data = await axios.delete("/createuser/" + id)
  if(data.data.success){
    getFetchData()
    alert(data.data.message)
  }
}




  return (
    <div className=' p-10 h-screen u__section'>
      {createuserLinks.map((index)=><button key={index}  className=" w-60 bg-primaryColor  text-white font-[900] h-[40px] mx-12 my-6 justify-center rounded-[10px]"><NavLink to="/createuser">Create User</NavLink></button>)}
      <div className="overflow-auto rounded-lg shadow-xl">
        <table className='w-full'>
          <thead className='bg-blue-50 text-blue-500 border-b-2 border-blue-500'>
            <tr>
              <th className='p-3 text-xl font-semibold tracking-wide text-left'>Name</th>
              <th className='p-3 text-xl font-semibold tracking-wide text-left'>Email</th>
              <th className='p-3 text-xl font-semibold tracking-wide text-left'>Department</th>
              <th className='p-3 text-xl font-semibold tracking-wide text-left'>Action</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-blue-700'>
            {
              dataList.map((el)=>{
                console.log(el)
                return(
                  <tr className=''>
                    <td className='w-50 p-3 text-md text-gray-700 bg-blue-100 whitespace-nowrap'>{el.name}</td>
                    <td className='w-50 p-3 text-md text-gray-700 bg-blue-100 whitespace-nowrap'>{el.email}</td>
                    <td className='w-50 p-3 text-md text-gray-700 bg-blue-100 whitespace-nowrap'>{el.department}</td>
                    <td px-3>
                      <button className=' w-40 bg-primaryColor text-white font-[300] rounded-[10px]'onClick={()=>handleDelete(el._id)}>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
 </div>
  )
}

export default User
