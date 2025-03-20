import React from 'react'

const Emptyspace = () => {
  return (
    <div className='px-4 py-10 sm:px-6 lg:px-8 h-screen flex justify-center items-center bg-gray-100'>
        <div className='flex flex-col text-center items-center'>
            <h3 className='mt-2 font-semibold text-2xl text-gray-900'>
                Select a Chat or Start a new Conversation
            </h3>
        </div>
    </div>
  )
}

export default Emptyspace