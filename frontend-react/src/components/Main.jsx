import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
       <div className='container'>
           <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Stock Prediction Portal is a full-stack web application designed to analyze market data and generate stock price predictions using machine learning models.
The platform offers real-time stock visualization, historical analysis, and AI-based prediction tools to help users make more informed investment decisions.</p>
                <Button text="Login" className="btn-outline-info" />

           </div>
       </div>
    </>
  )
}

export default Main