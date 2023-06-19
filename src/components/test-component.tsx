import { FC } from 'react'
import picture from '../assets/my-picture.jpg'




// interface IProps {
//     hello: string
// }

/**
* @author
* @function @testComponent
**/

export const TestComponent:FC = () => {
    
  return (
    <section className=' flex gap-2 justify-center items-center text-black p-4 w-8/12 h-[85%] ml-20 border-2 border-dark-2 rounded-xl bg-accentbg drop-shadow-xl shadow-lg shadow-gray-600'>
      {/* <div className='p-4 border-2 border-dark-2'> */}
        <img className='w-[30%] object-contain rounded' src={picture} alt="headshot" />
      {/* </div> */}
      <div className='p-4 border-2 border-dark-2'>content</div>
    </section>
   )
 }
