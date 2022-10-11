import { Link, Head } from '@inertiajs/inertia-react';
import React from 'react';
import Navbar from '../../Components/Navbar'


export default function Post(props) {
    return (
        <>
             <Head title={props.title} />
        <div>
      <Navbar />
  
        </div>
        <h1 className="text-center text-6xl pt-[400px]">Coming Soon !</h1>
        </>
    )

}