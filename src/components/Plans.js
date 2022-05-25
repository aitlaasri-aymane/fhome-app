import React from 'react'

const plans = [
  {name: 'Small Enterprise', price: '10.500,20', description: 'For everyone else who needs a simple solution',
    availabilities:[
      {name : '4 x Cameras', available : true},
      {name : '1 x Smart Doors', available : true},
      {name : 'Installation Service', available : true},
      {name : 'Smart Epson Lights', available : false},
      {name : 'Robot Vacuum', available : false},
      {name : 'Server', available : false},
      {name : 'Maintnance Service', available : false},
    ]
  },
  {name: 'Home Solution', price: '15.000,20', description: 'For those who need a complete solution for there home',
    availabilities:[
      {name : '4 x Cameras', available : true},
      {name : '1 x Smart Doors', available : true},
      {name : '1 x Smart Epson Light', available : true},
      {name : '1 x Robot Vacuum', available : true},
      {name : 'Installation Service', available : true},
      {name : 'Server', available : false},
      {name : 'Maintnance Service', available : false},
    ]
  },
  {name: 'FULL Business', price: '+16.000,20', description: 'For businesses with more than 10 IOT equipments',
    availabilities:[
      {name : '+4 x Cameras', available : true},
      {name : '1 x Smart Doors', available : true},
      {name : '1 x Smart Epson Lights', available : true},
      {name : 'Capters & sensors', available : true},
      {name : '1 year AWS server subscription', available : true},
      {name : 'Installation Service', available : true},
      {name : 'Maintnance Service', available : true},
      {name : 'EXTRAS', available : true},
    ]
  },
  {name: 'Hotel', price: '1.003. 000,20', description: 'For businesses with more than 10 IOT equipments',
    availabilities:[
      {name : '± 100 x Cameras', available : true},
      {name : '± 100 x Smart Doors', available : true},
      {name : '± 200 x Smart Epson Lights', available : true},
      {name : '1year AWS server subscription', available : true},
      {name : 'Installation Service', available : true},
      {name : 'Maintnance Service', available : true},
      {name : 'EXTRAS', available : true},
    ]
  }

]
export default function Plans() {
  return (

    <div className='w-4/5 flex mx-auto flex-wrap justify-between mt-10'>
      {
        plans.map((plan,index) => (
          <div className={"p-4 max-w-sm mb-4 rounded-lg hover:shadow-2xl hover:scale-110 transition-all delay-150 duration-500 sm:p-8 dark:bg-gray-800 hover:z-40 dark:border-gray-700 "+ ((index %2 !== 0) ? "bg-gray-100":"bg-white")}>
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{plan.name} plan</h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="text-xl font-semibold">DH</span>
                <span className="ml-1 text-sm font-normal text-gray-500 dark:text-gray-400">(starting from)</span>
            </div>
            <ul data-role="list" className="my-7 space-y-5">
              { plan.availabilities.map((availability) => (
                <li className={(availability.available)=== true ? "flex space-x-3" : "flex space-x-3 line-through decoration-gray-500"}>
                   { availability.available ? <svg className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> : <svg className="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> }
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{availability.name}</span>
                </li>
              ))}
            </ul>
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
        </div>
         ))
        }
    </div>
  )
}
