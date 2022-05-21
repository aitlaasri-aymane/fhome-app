import React from 'react'

export default function Comment(props) {
  return (
    <div className="flex flex-col items-center pb-10">
        <div className="mb-3 w-24 h-24 bg-gray-200 rounded-full shadow-lg" ></div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Owner of Software firm</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
            <span className="inline-flex text-center px-3 py-1 rounded-3xl text-sm font-medium text-gray-500 bg-gray-100 dark:bg-gray-800 dark:text-white">
                {props.message}
            </span>

        </div>
    </div>
  )
}
