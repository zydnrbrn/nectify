import Navbar from './../../Components/Navbar';
import React from 'react'
import { Head } from '@inertiajs/inertia-react';

export default function Feed(props) {
    return(
        <>
         <Head title={props.title} />
        <Navbar />
         <h1 className="text-center text-6xl pt-[400px]">Coming Soon !</h1>
        </>
    )
}