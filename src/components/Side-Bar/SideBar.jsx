import React from 'react'
import "./side_bar.css"
import { NavLink } from 'react-router-dom';


const listItems = [
  {
    icon: 'fa-solid fa-house',
    text: 'Home'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    text: 'Explore'
  },
  {
    icon: 'fa-regular fa-bell',
    text: 'Notifications'
  },
  {
    icon: 'fa-regular fa-envelope',
    text: 'Messages'
  },
  {
    icon: 'fa-solid fa-cloud',
    text: 'Grok'
  },
  {
    icon: 'fa-solid fa-user-group',
    text: 'Communities'
  },
  {
    icon: 'fa-brands fa-x-twitter',
    text: 'Premium'
  },
  {
    icon: 'fa-solid fa-user',
    text: 'Profile'
  }
];

function Header() {



  return (
    <>
    <span className=' fixed text-white w-[20%] h-full  p-3 left-[8svw]  flex flex-col justify-between '>
      
      <div>
        {/* side icons */}
          <ul className='flex-col flex '>
              <li className='list'> <i className='fa-brands fa-x-twitter text-3xl hover:bg-gray-700 rounded-xl py-1 px-2 mb-1 ml-1'></i>
              </li>

                    { listItems.map((item , index) => (
              <li className='list' key={index}>
                  <NavLink to={`/${item.text.toLowerCase()}`}>
                    <span  className='sideBar_icon'><i className={`${item.icon} icon`}
                      />{item.text}
                    </span>
                  </NavLink>    
              </li>
                     ))}

              <li className='list mt-[10px]'>
                <span className='sideBar_icon '>
                  <span><i className='fa-solid fa-ellipsis text-xs hover:bg-gray-700 rounded-full m-1 mr-4 py-[1.5px] px-[4px]  border-[3px]  '/></span> 
                    More
                </span>
              </li>

              {/* button */}
              <li className="list"><button className='bg-[#3887ee] text-center font-bold w-[80%] p-2 rounded-full mt-4'>Post</button>
              </li>   
          </ul>
      </div>    

      <div className=' w-full py-2 flex rounded-full hover:bg-[#181717]'>
            <div className='m-1 border  rounded-full w-10 h-10'>
               </div>
            <div className='flex flex-col
             w-32 '>
                <p><b>ABC Xyz </b></p>
                <p className=' font-sans text-gray-400'>@NPM_run_Dev</p>
               </div>
            <div className='m-auto'>
              <i className='fa-solid fa-ellipsis '/>
            </div>
      </div> 

    </span>
    </>
  )
}

export default Header