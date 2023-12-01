'use client'
import React, { useState, useEffect } from 'react'
import Question, { Problem } from './Question'
import Result from './Result'

const MathManager = () => {

    const [questions, setQuestions] = useState<Problem[]>()
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [showResult, setShowResult] = useState<boolean>(false)

    useEffect(() => {

        let q: Problem[] = []
        for (let i = 0; i < 10; i++) {
            const firstNumber = Math.ceil(Math.random() * 100)
            const secondNumber = Math.ceil(Math.random() * 100)

            q.push({ id: i, firstNumber, secondNumber, operation: "+", result: 0 })
        }

        setQuestions([...q])

    }, [])

    const updateQuestions = (id: number, result: number) => {
        if (!questions) return

        let q = questions.find(x => x.id == id)

        if (q) {
            q.result = result
            setQuestions([...questions])
        }
    }

    return <>
        {!showResult && questions &&
            <div className='bg-slate-800 h-full flex flex-col justify-center items-center gap-3'>
                {questions.map(x => <>
                        {currentIndex === x.id &&
                            <Question
                                {...x}
                                updateQuestions={updateQuestions}
                            />}
                    </>
                )
                }

                <div>
                    {currentIndex < questions.length - 1 ?
                        <button className='rounded-md text-xl p-2 px-2  text-white bg-blue-800'
                            onClick={() => setCurrentIndex(currentIndex + 1)}>Next</button> :
                        <button className='rounded-md text-xl p-2 px-2 text-white bg-blue-800'
                            onClick={() => setShowResult(!showResult)} >Submit</button>
                    }
                </div>
            </div>
        }

        {showResult && questions && <Result results={questions}   />}
    </>
}

export default MathManager