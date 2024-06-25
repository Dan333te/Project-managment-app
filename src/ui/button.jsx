import React from 'react'

const Button = ({children,clickEvent}) => {
  return  <button onClick={clickEvent} className='text-2xl text-stone-200 opacity-95 text-start p-4 mt-8 w-fit rounded-md bg-gray-600'>{children}</button>

}

export default Button