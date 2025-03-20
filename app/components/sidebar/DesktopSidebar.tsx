'use client'
import useRoutes from '@/app/hooks/useRoutes'
import React, { useState } from 'react'
import DesktopItem from './DesktopItem';
import { User } from '@prisma/client';
import Avatar from '@/app/(site)/Components/Avatar';
interface DesktopSidebarProps {
    currentUser: User;
}
const DesktopSidebar:React.FC<DesktopSidebarProps> = ({currentUser}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false);
    console.log('Current User', currentUser)
    return (
        <div className='hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6
                    lg:overflow-y-auto lg:bg-white lg:pb-4 lg:flex lg:flex-col justify-between border-r-2'>
            <nav className='mt-4 flex flex-col justify-between'>
                <ul
                    role='list'
                    className='space-y-1 flex flex-col  items-center'>
                        {routes.map((item) => (
                            <DesktopItem
                                key={item.label}
                                label={item.label}
                                href={item.href}
                                icon={item.icon}
                                active={item.active ?? false}
                                onClick={item.onClick}
                            />
                        ))}
                </ul>
            </nav>
            <nav className='mt-4 flex flex-col justify-between items-center'>
                    <div onClick={() => setIsOpen(true)} className='flex items-center gap-x-3 cursor-pointer'>
                        <Avatar user={currentUser} />
                    </div>
            </nav>
        </div>
    )
}

export default DesktopSidebar