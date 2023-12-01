'use client'
import React, { useEffect, useRef, useState } from 'react'

export type Problem = {
    id: number
    firstNumber: number
    secondNumber: number
    operation: string
    result?: number
}

type Action = {
    updateQuestions: (id: number, result: number) => void
}

const Question = ({ id, firstNumber, secondNumber, operation, updateQuestions }: Problem & Action) => {

    console.log(id, firstNumber, secondNumber, operation)

    const [result, setResult] = useState<number>()
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
ref.current?.focus()
    },[])

    return (
        <>
        <label className='text-3xl text-white mb-10'>Question: {id+1}</label>
        <div className='flex flex-col bg-slate-900 p-5 rounded-lg'>
            <div className='flex justify-center items-center'>
                <label className=' text-2xl text-slate-900 font-bold'>+</label>
                <h1 className=' text-3xl text-white font-bold'>{firstNumber}</h1>
            </div>
            <div className='flex items-center justify-center text-white'>
                <label className='text-2xl font-bold'>{operation}</label>
                <h1 className='text-3xl font-bold'>{secondNumber}</h1>
            </div>
            <div className='flex justify-center items-center mt-5'>
                <input ref={ref} type='number' className='border-2 w-1/3 border-slate-300 p-2 text-center '
                    onChange={e => setResult(Number(e.target.value))}
                    onBlur={e => {
                        updateQuestions(id, result as number)
                    }

                    } value={result} />
            </div>

        </div>
        </>
    )
}

export default Question