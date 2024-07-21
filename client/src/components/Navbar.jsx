import React from 'react'

import logo from '../images/Logo.jpg'
import { Link } from 'react-router-dom'

const Navibar = ({user}) => {
  return (
    <div>
      <header className="bg-gray-900">
        <nav className="mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <img className="h-14 w-auto rounded-full" src={logo} alt="" />
                <Link to="/" className="rounded-md mx-10 bg-gray-900 px-3 py-1 text-4xl font-bold text-white" aria-current="page">We Connect</Link>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Home</Link>
                <Link href="/" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</Link>
                <Link href="/" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</Link>
                <Link to="/farms" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Farms</Link>
            </div>
            {user?
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <p className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">{user}</p>
              </div>
            :
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Link to="/login" className="rounded-md px-3 py-2 text-lg font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Log in <span aria-hidden="true">&rarr;</span></Link>
            </div>
            }
        </nav>
  {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
  <div className="lg:hidden" role="dialog" aria-modal="true">
    {/* Background backdrop, show/hide based on slide-over state. */}
    <div className="fixed inset-0 z-10"></div>
    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div className="flex items-center justify-between">
          <img className="h-8 w-auto" src={logo} alt="" />
            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
      </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y bg-gray-900">
          <div className="space-y-2 py-6">
            <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50">About Us</Link>
            <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50">Contact Us</Link>
            <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50">Farms</Link>
          </div>
          <div className="py-6">
            <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-50">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Navibar
