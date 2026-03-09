import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import Card from './Card'
import Footer from './Footer';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero({darkMood, setdarkMood}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  let toggle = () => {
    setdarkMood((e) => (
      !e
    ))
  }

  return (
    <>
    <div className={darkMood ? "bg-gray-800 h-dvh":"bg-gray-950 h-dvh" }>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 border-b border-white/20 backdrop-blur-md">
          <div className="flex lg:flex-1">
            <a href="https://www.rayeva.com/" className="-m-1.5 ml-6  p-1.5 w-20 text-center  font-bold text-3xl text-purple-100
  active:scale-95 transition">
              Rayeva
            </a>
          </div>
          <div className="flex lg:hidden">
            <button onClick={toggle} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
              {darkMood ? (
                <>
                  <IoIosSunny />
                </>
              ) : (
                <>
                  <FaMoon />
                </>
              )}
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">

            <button onClick={toggle} className={`hidden lg:flex text-white items-center gap-2 px-4 py-2 ${darkMood ?"rounded-lg border bg-linear-to-b from-indigo-700 to-purple-900 border-indigo-800": "rounded-lg border bg-linear-to-b from-[#3b0365] to-[#08000f] border border-[#242424]" } active:scale-95 transition`}>

              {darkMood ? (
                <>
                  <FaMoon /> Dark
                </>
              ):(
                <>    
                  <IoIosSunny /> White
                </>
              ) }
            </button>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto sm:py-28 ">
          <div className="sm:py-1 flex justify-center ">
            <h1 className="text-2xl font-semibold w-fit tracking-tight text-balance border p-4 rounded-4xl text-white whitespace-nowrap sm:text-3xl">
              AI Powered Systems for Sustainable Commerce
            </h1>
          </div>
        </div>
      </div>
      <div className='flex justify-center gap-50'>

        <Link to="/generate-tags" ><Card
          heading="AI Auto-Category & Tag Generator"
          para="Automatically assigns product categories, suggests sub-categories, and generates SEO tags with sustainability filters."
          color="yellow"
          darkMood={darkMood} /></Link>

        <Link to="/b2b-proposal-generator" ><Card
          heading=" AI B2B Proposal Generator"
          para="This AI module suggests sustainable products, allocates budget, and estimates costs to generate structured B2B proposals."
          color="green" 
          darkMood={darkMood}/></Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}