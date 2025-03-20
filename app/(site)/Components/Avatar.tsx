'use client'
import React from 'react'
import { User } from '@prisma/client'
import Image from 'next/image';
import AltUser from '@/public/images/userplaceholder.png'
interface Avatarprops {
    user?:User;
}
const Avatar:React.FC<Avatarprops> = ({user}) => {
  return (
   <div className='relative'>
        <div className='relative inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100'>
             <Image 
                alt='Avatar'
                src={user?.image || AltUser} 
                fill
             />
        </div>
        <span className='absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white' />
   </div>
  )
}

export default Avatar