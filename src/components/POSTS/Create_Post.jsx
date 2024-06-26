import React from 'react'
import "./Post_Box.css"

function Create_Post() {
  return (
    <>
    <div className='flex  border pt-2 text-white '>
        <div className=' w-16 p-2 pt-1 pb-3  '>
            <img className='border rounded-full w-[40px] h-[40px] '></img>
        </div>

        <div className='w-full'>
            <div className='text-white py-3'>
                <input className='bg-black w-full focus:outline-none'
                placeholder='What is happening?!'/>
            </div>
            <div className='border-y border-gray-500 flex justify-between py-2 text-blue-500 '>
                <div>
                    <button class="fa-regular fa-image post_box_icons"></button>
                    <button class="fa-solid fa-bars-progress post_box_icons"></button>
                    <button class="fa-regular fa-face-smile post_box_icons"></button>
                    <button class="fa-solid fa-calendar-week post_box_icons"></button>
                    <button class="fa-solid fa-location-dot post_box_icons"></button>
                </div>
               <button className='bg-[#3887ee] text-center text-white font-bold rounded-full px-3 mx-2'
                >Post
               </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Create_Post