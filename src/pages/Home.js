import React from 'react'
import Welcome from '../components/Welcome'
import Products from '../components/Products'
import Team from '../components/Team'
import Comments from '../components/Comments'

export default function Home() {
  return (
    <div className='home'>
        <Welcome/>
        <div className='flex justify-center'>
            <div className="animate-bounce bg-gradient-to-b from-blue-600 to-blue-900 dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white transition ease-in-out delay-150 hover:scale-110 duration-300" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f6" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,208C384,171,480,117,576,117.3C672,117,768,171,864,186.7C960,203,1056,181,1152,197.3C1248,213,1344,267,1392,293.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        <Products/>
        <Team/>
        <div className="mt-12">
            <Comments />
        </div>
    </div>
  )
}
