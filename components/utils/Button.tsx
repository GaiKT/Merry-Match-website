import React from 'react'

interface ButtonProps {
    label : string
    disable : boolean
}

 const Button : React.FC<ButtonProps> = ({label ,disable}) => {
  return (
    <button className={disable ? 'bg-gray-300 text-gray-600 py-3 px-6 font-bold rounded-full cursor-default' : 'bg-red-500 hover:bg-red-400 active:bg-red-600 text-white py-3 px-6 font-bold rounded-full'} >
        {label}
    </button>
  )
}

export default Button