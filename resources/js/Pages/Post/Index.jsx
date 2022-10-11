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
        </>
    )

}