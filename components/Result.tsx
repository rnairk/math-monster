import React from 'react'
import { Problem } from './Question'
import Link from 'next/link'


const Result = ({ results }: { results: Problem[] }) => {

    return (
        <div className='flex flex-col justify-around  items-center h-full  bg-slate-800'>
             <label className='text-3xl text-white mt-2 '>Results</label>
            <div className=' flex justify-center items-center text-white '>
                <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <tbody>
                        {results.map(x => <tr className=' border-b-2 border-slate-600'>
                            <td className='p-3 '>{x.firstNumber}</td>
                            <td className='p-3 '>+</td>
                            <td className='p-3 '>{x.secondNumber}</td>
                            <td className='p-3 '>=</td>
                            <td className='p-3 '>{x.result}</td>
                            <td className='p-3 '>{x.firstNumber + x.secondNumber == x.result ?
                                <span className='p-2 rounded-md text-white bg-green-800'>Right</span> :
                                <span className='p-2 rounded-md text-white bg-red-800' >Wrong</span>}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Link className='rounded-md text-xl p-2 px-2 text-white bg-blue-800' href={'/'} >Try Again</Link>
        </div>
    )
}

export default Result