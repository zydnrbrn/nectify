import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { useState } from 'react'


export default function Navbar (props) {
    const [navbar,setNavbar] = useState(false);
    return (
        <>
          <nav className="w-full bg-white/30 shadow fixed">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:block">
                        <a className='flex' href="#">
            <h1 className='sm:text-2xl
            text-xl font-bold font-righteous text-transparent bg-clip-text bg-gradient-to-r from-black to-main-red whitespace-nowrap dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-main-red
            '>
                Nectify
                </h1>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-main-red"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-main-red"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block  md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                          <ul className="lg:mt-0
                        items-center space-y-8 md:flex md:space-x-3 md:items-end sm:my-3">
                            <li className="sm:text-lg md:text-base
                            text-main-red hover:text-black  hover:rounded-sm
                            ">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className="sm:text-lg  md:text-base
                           text-main-red hover:text-black hover:rounded-sm
                            ">
                               <Link href='/chatify'>Chats</Link>
                            </li>
                            <li className="sm:text-lg  md:text-base
                           text-main-red hover:text-black hover:rounded-sm
                            ">
                           <Link href='/posts'>Post</Link>
                            </li>
                        </ul>

                        <div className="mt-3  space-y-2 lg:hidden md:inline-block">
                        <div className=" dark:bg-gray-100 sm:items-center sm:pt-0">
               
                </div>
                </div>
                    </div>
                </div>


                {/* button in md+ */}
                <div className=" hidden space-x-2 md:inline-block">
                <div className=" dark:bg-gray-100 sm:items-center ">
              
                </div>
                </div>
            </div>
        </nav></>
    )
}
