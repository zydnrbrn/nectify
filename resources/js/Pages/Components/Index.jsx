import React from "react";
import { Link } from '@inertiajs/inertia-react';
import '../../../css/app.css';
import Fiture from './Fiture';
import Slogan from './Slogan';
import Footer from './Footer';
import Description from "./Description";


export default function Index() {
    return (
        <>
        <div className="w-full ">
      <div className="hero-primary">
        <h1 className="font-righteous text-4xl sm:text-5xl md:text-6xl top-[200px] mx-16 absolute text-white">Connect People,More People... <br /> In The World.</h1>
      <button className="hover:bg-white hover:text-main-red hover:border-main-red hover:border
      border bg-main-red text-white rounded-md absolute top-[450px] sm:top-[450px] sm:w-[200px] sm:h-[50px] sm:text-2xl 
      md:top-[480px] lg:top-[400px] mx-16 w-[150px] h-[30px] font-bold">
        <Link href="/register">Join Now !</Link>
        </button>
      </div>
        <Slogan />
        <Fiture />
        <Description />
      <Footer />
        </div>
        
        </>
    )
}