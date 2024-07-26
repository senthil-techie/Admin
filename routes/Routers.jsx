import React from 'react'
import Home from '../pages/Home'
import User from '../pages/User'
import Department from '../pages/Department'
import EditDepartment from '../pages/EditDepartment'
import EditUser from '../pages/EditUser'
import CreateUser from '../pages/CreateUser'
import CreateDepartment from '../pages/CreateDepartment'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000' 

import { Routes, Route} from 'react-router-dom'



const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/user' element={<User />}/>
    <Route path='/department' element={<Department />}/>
    <Route path='/editdepartment' element={<EditDepartment/>}/>
    <Route path='/edituser' element={<EditUser/>}/>
    <Route path='/createuser' element={<CreateUser/>}/>
    <Route path='/createdepartment' element={<CreateDepartment/>}/>
  </Routes>
}

export default Routers
