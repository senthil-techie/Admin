import logo from '../assets/images/logo.png'
import { NavLink} from 'react-router-dom'

const homeLinks = [
    {
        path:'/',
        display:'Home'
    },
]
const userLinks =[
    {
        path:'/user',
        display:'User'
    }
]
const departmentLinks =[
    {
        path:'/department',
        display:'Department'
    },
]
const editdepartmentLinks =[
    {
        path:'/editdepartment',
        display:'Edit Department'
    },
]




const Header = () => {


  return(
  <header className='header flex item-center'>
    <div className='container'>
        <div className='flex items-center justify-between'>
            <div>
                <img src={logo} alt="image" />
            </div>
            <div>
              <ul className='menu flex items-center gap-[4.7rem]'>
                    <li className=' relative group cursor-pointer'>
                        {userLinks.map((index)=><a key={index} className="bg-primaryColor py-2 px-6 text-white font-[900] h-[30px]  justify-center rounded-[10px]"><NavLink to="/user">USERS</NavLink></a>)}
                    </li>
                    <li className='relative group cursor-pointer'>
                       { departmentLinks.map((index)=><a key={index} className="bg-primaryColor py-2 px-6 text-white font-[900] justify-center rounded-[10px] text-[16px] leading-7 font-[600]"><NavLink to="/department">DEPARTMENTS</NavLink></a>)}
                    </li>
                </ul> 
            </div>
           
            <div className='flex items-center gap-4 '>
               <div className='navigation'>
               <ul className='menu flex items-center gap-[4.7rem]'>
                {homeLinks.map((index)=><li key={index}>
                                <NavLink to="/" className={navClass=>navClass.isActive ? "text-primaryColor text-[16px] leading-7 font-[600]"
                                    :"text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"}>Home</NavLink>
                            </li>)}
               </ul>
               </div>
            </div>
        </div>
    </div>
  </header>
  )
}

export default Header
