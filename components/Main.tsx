import Link from 'next/link'
import React from 'react'

const Main = () => {
  return (
   <div className='h-full flex justify-center items-center '>
    <div className='flex flex-col bg-slate-900 text-white items-center border-2 border-slate-900 p-10 rounded-lg w-3/4 text-center space-y-6'>
        <div>
            <h1 className='text-2xl'>Welcome to Math Monster</h1>
           
        </div>
        <div>
        <Link className='rounded-md text-xl p-2 px-2 text-white bg-blue-800' href={"/math"}>Begin</Link>
        </div>
    </div>
    </div>
  )
}

export default Main