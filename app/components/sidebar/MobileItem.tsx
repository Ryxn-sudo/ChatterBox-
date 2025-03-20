'use client'
import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'

interface MobileItemProps{
    icon:any;
    href:string;
    active:boolean;
    onClick?:()=>void;

}
const MobileItem:React.FC<MobileItemProps> = ({icon:Icon,href,active,onClick}) => {
    const handleClick= ()=>{ 
        if(onClick){
           return  onClick();
        }
    }
    
    return (
       <Link 
            href={href} 
            onClick={handleClick} 
            className={clsx(`
                group
                flex
                gap-x-3
                rounded-md
                p-3
                text-sm
                leading-6
                font-semibold
                cursor-pointer`,
                active ? 'bg-gray-100 text-black' : 'text-gray-500 hover:text-black hover:bg-gray-100'
            )}>
            <Icon className="h-6 w-6 shrink-0" />
        </Link>
    )
}


export default MobileItem