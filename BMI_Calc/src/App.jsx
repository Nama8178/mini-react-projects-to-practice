import React, { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  let calc = (e) => {
    e.preventDefault();
    if(weight ===0 || height === 0){
      alert("Enter a valid height and weight");
    }else {
      let w = weight * 2.204623
      let bmi = (w/(height*height)*703);
      setResult(bmi);
      if(bmi < 18.5){
        setMessage("You are under weight");
      }else if(bmi >= 18.5 || bmi <= 25){
        setMessage("You have a healthy body")
      }else{
        setMessage("You are over weight")
      }
    }
  }
  let reload = () => {
    window.location.reload
  }

  return (
    <><div className='flex items-center justify-center'>
      <div className="flex min-h-full flex-2 flex-col justify-center px-6 py-12 lg:px-8 border border-gray-200 rounded-md w-1/3 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            BMI Calculator
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={calc}>
            <div>
              <div className='flex items-center justify-start'>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                Weight (kg)
              </label>
              </div>
              <div className="mt-2">
                <input
                placeholder='Enter your Weight'
                  value={weight}
                  onChange={(e) => {setWeight(e.target.value)}}
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-start">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Height (in)
                </label>
                
              </div>
              <div className="mt-2">
                <input
                placeholder='Enter your Height'
                  value={height}
                  onChange={(e) => {setHeight(e.target.value)}}
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onSubmit={reload}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {`Your BMI is ${message}`}
          </p>
          <p className="mt-10 text-center text-sm text-gray-500">
            {`${result}`}
          </p>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
