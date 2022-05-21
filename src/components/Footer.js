import React from 'react'
import logo from '../logo.png'
import { Link } from 'react-router-dom'
const navigation = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '/features' },
    { name: 'Services', to: '/services' },
    { name: 'Company', to: '/company' },
  ]
export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow-lg md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="https://flowbite.com" className="flex items-center mb-4 sm:mb-0">
                <img src={logo} className="mr-3 h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FHome</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                {navigation.map(({ name, to }) => (
                    <li>
                        <Link to={to} className="mr-4 hover:underline md:mr-6" aria-current={name}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 FHOME©. All Rights Reserved.
        </span>
    </footer>
  )
}
