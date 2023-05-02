import { FC } from 'react'


interface IProps {
    hello: string
}

/**
* @author
* @function @testComponent
**/

export const TestComponent:FC<IProps> = ({ hello }) => {
    console.log('test');
  return (
    <div className=' text-black p-4 border-2 border-dark-2 rounded-xl bg-accentbg drop-shadow-xl shadow-lg shadow-gray-600'>{hello}</div>
   )
 }
