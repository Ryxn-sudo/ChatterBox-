import React from 'react'
import {IconType} from 'react-icons'

interface AuthSocialButtonProps {
    icon: IconType;
    onClick?: () => void;
    }
const AuthSocialButton:React.FC<AuthSocialButtonProps> = (
    {
    icon:Icon, 
    onClick
}
     
) => {
  return (
    <button
    type='button'
    onClick={onClick}
    className='flex justify-center rounded-md px-4 py-2 items-center mx-auto w-full
    font-semibold text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    bg-white hover:bg-gray-100 focus-visible:outline-gray-100 border-gray-300 border opacity-70'
    >
      <Icon size={20} />
    </button>
  )
}

export default AuthSocialButton