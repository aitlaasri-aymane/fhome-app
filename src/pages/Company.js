import React from 'react'
import logo from '../logo.png'

export default function Company() {
  return (
    <div>
        <h1 className='text-center mt-10 text-5xl font-bold text-gray-900 dark:text-white'>Our <span className='text-blue-700'>Company</span></h1>
        <div class="p-12 md:flex justify-between items-center" href='#team'>
            <div className="basis-1/2" align="right">
                <img className='w-1/4' src={logo} alt=""/>
            </div>
            <div className='basis-1/2 p-6 m-6 md:border-l-2 border-blue-800'>
                <h2 className='text-3xl font-semibold '><span className='text-blue-800 border-b-4 border-blue-800 font-extrabold'>F </span> - Home</h2>
                <p className='mt-4 text-sm'>
                    <span className='text-blue-800 font-extrabold'>Future</span> Home a solution for your iot transition. <br/>
                    <span className='text-blue-800 font-extrabold'>MAKE</span> a change. <br/>
                    <span className='text-blue-800 font-extrabold'>UPDATE</span> your way to a <span className='text-blue-800 font-extrabold'>BETTER</span> future.
                </p>
            </div>
        </div>
        
        <div className='p-12 md:w-2/3 md:mx-auto md:flex justify-between items-center'>
            <div className='md:basis-1/2 p-6 m-6 md:border-r-2 border-blue-800'>
                <p className='mt-4 text-sm'>
                    L’Ecole Normale Supérieure de l’Enseignement Technique de Mohammedia <span className='font-extrabold text-blue-800'>(ENSET)</span> est un établissement de formation des cadres destinés à l’enseignement et au marché du travail.
                    Les formations assurées couvrent <span className='font-extrabold text-blue-800'>les techniques industrielles et les techniques commerciales</span>. L’ENSET Mohammedia assure également des cycles de formation continue pour les jeunes diplômés, les enseignants et les entreprises.
                </p>
            </div>
            <div className="basis-1/2">
                <h2 className='text-3xl font-semibold '><span className='text-blue-800 border-b-4 border-blue-800 font-extrabold'>EN</span>SET</h2>
            </div>
        </div>
    </div>
  )
}
