import React from 'react'
import {Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube, AiFillGithub,AiOutlineInstagram} from 'react-icons/ai'
import { IconBase } from 'react-icons/lib'

const SocialLinks = [
  {
    path:"https://www.youtube.com/watch?v=25RM8KdnsKk&pp=ygURbWVkaWNhcmUgaG9zcGl0YWw%3D",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://github.com/senthil-techie",
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"www.linkedin.com/in/senthil-techie",
    icon: <RiLinkedinFill  className='group-hover:text-white w-4 h-5'/>
  },
  {
    path:"https://www.instagram.com/senthil",
    icon: <AiOutlineInstagram className='group-hover:text-white w-4 h-5'/>
  }
  
]


const Footer = () => {
   const year = new Date().getFullYear()
  return (
   <section className='footer__section'>
     <footer>
      <div className="container">
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px leading-7 font-[400] text-textColor myt-4'> Copyright @ {year} developed By SenthilKumar All Right Reserved</p>
            <div className='flex item-center gap-3 mt-4'>
              {SocialLinks.map((link, index)=>(
                <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
   </section>
  )
}

export default Footer
