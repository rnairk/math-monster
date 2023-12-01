import React from 'react'
import { Problem } from './Question'


const Result = ({ results }: { results: Problem[] }) => {


    return (
        <div className='flex flex-col justify-center items-center h-full  bg-slate-800'>
             <label className='text-3xl text-white mt-2 '>Results</label>
            <div className='h-full flex justify-center items-center text-white '>
                <table className='text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <tbody>
                        {results.map(x => <tr className='p-2 border-b-2 border-slate-600'>
                            <td className='p-4 '>{x.firstNumber}</td>
                            <td className='p-4 '>+</td>
                            <td className='p-4 '>{x.secondNumber}</td>
                            <td className='p-4 '>=</td>
                            <td className='p-4 '>{x.result}</td>
                            <td className='p-4 '>{x.firstNumber + x.secondNumber == x.result ?
                                <span className='p-2 rounded-md text-white bg-green-800'>Right</span> :
                                <span className='p-2 rounded-md text-white bg-red-800' >Wrong</span>}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Result