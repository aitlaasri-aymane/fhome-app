import React from 'react'
import Plans from '../components/Plans'

export default function Services() {
  return (
    <div className='mt-10'>
        <h1 className='text-center text-5xl font-bold text-gray-900 dark:text-white'>Our <span className='text-blue-700'>Services</span></h1>
        <Plans/>
        <div className='m-12 bg-slate-100 rounded p-10'>
            <h1 className='text-center text-2xl font-bold text-gray-900 dark:text-white'>Your <span className='text-blue-700'>specific needs</span></h1>
            <p className='text-center text-gray-700 dark:text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="py-12">
          <div className="mt-8 mx-auto max-w-3xl">
            <div className="grid grid-cols-2 gap-6">
              <label className="block">
                <span className="text-gray-700">Full name</span>
                <input type="text" className="
                    p-2
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder=""/>
              </label>
              <label className="block">
                <span className="text-gray-700">Email address</span>
                <input type="email" className="
                    p-2
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="john@example.com"/>
              </label>
              <label className="block">
                <span className="text-gray-700">What type of case is it?</span>
                <select className="
                    p-2
                    block
                    w-full
                    mt-1
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  ">
                  <option>Personal</option>
                  <option>Business</option>
                  <option>Hotel</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="block">
                <span className="text-gray-700">Additional details</span>
                <textarea className="
                    mt-1
                    p-2
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " rows="3"></textarea>
              </label>
              
              <button className='bg-blue-700 text-white p-2 mt-6 rounded-md shadow-lg hover:bg-blue-800'>Apply for Devis</button>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
