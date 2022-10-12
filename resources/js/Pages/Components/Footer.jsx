import { Link } from "@inertiajs/inertia-react"

export default function Footer() {
    return (
        <>
        <div className="flex text-white
        w-full bg-main-red">  
       
                © 2022 Nectify.All Rights Reserved.

                <ul className="lg:mt-0 mx-[300px]
                        items-center space-y-8 md:flex md:space-x-3 md:items-end sm:my-3">
                            <li className="sm:text-lg md:text-base
                            text-white hover:text-black  hover:rounded-sm
                            ">
                                <Link href='/'>Home</Link>
                            </li>
                            <li className="sm:text-lg  md:text-base
                           text-white hover:text-black hover:rounded-sm
                            ">
                               <Link href='/chatify'>Chats</Link>
                            </li>
                            <li className="sm:text-lg  md:text-base
                           text-white hover:text-black hover:rounded-sm
                            ">
                           <Link href='/post'>Post</Link>
                            </li>
                        </ul>
                </div>
        </>
    )
}