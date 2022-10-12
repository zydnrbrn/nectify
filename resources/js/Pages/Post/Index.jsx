import { Head } from '@inertiajs/inertia-react';
import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../Components/Footer';
import { Textarea } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

export default function Post(props) {
    return (
        <>
             <Head title={props.title} />
        <div>
      <Navbar />
  
        </div>
        <ThemeProvider>
        <div className="post font-righteous">
          <div className="post-input w-[415px] sm:w-[530px]  lg:w-[770px] pb-[30px] sm:pb-[40px] flex pt-[100px] sm:pt-[100px] md:pt-[120px]">
          <Button className='ml-[20px] font-righteous mr-[20px] sm:ml-[30px] h-[40px] sm:h-[50px] mt-[20px] sm:w-[100px] sm:text-base lg:ml-[60px] lg:h-[50px] lg:mt-[25px]' color='green' size="md">POST</Button>
          <Textarea className='w-[300px] border border-main-red sm:w-[400px] sm:mt-[40px] md:w-[600px] ' variant="outlined" color='teal' label="Hows your days ?" />
          </div>
          <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32">
      <h1 className="author text-xs mt-1 ml-2">Zidan Khulul Sazid</h1>
      <h1 className="caption ml-3 mt-3 text-xl">Today is rainy day 🌧 ☔</h1>
      <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">Today 13:45</p>

          </div>
          <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32">
      <h1 className="author text-xs mt-1 ml-2">Zidan Khulul Sazid</h1>
      <h1 className="caption ml-3 mt-3 text-xl">Today is rainy day 🌧 ☔</h1>
      <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">Today 13:45</p>

          </div>
          <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32">
      <h1 className="author text-xs mt-1 ml-2">Zidan Khulul Sazid</h1>
      <h1 className="caption ml-3 mt-3 text-xl">Today is rainy day 🌧 ☔</h1>
      <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">Today 13:45</p>

          </div>
          <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32">
      <h1 className="author text-xs mt-1 ml-2">Zidan Khulul Sazid</h1>
      <h1 className="caption ml-3 mt-3 text-xl">Today is rainy day 🌧 ☔</h1>
      <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">Today 13:45</p>

          </div>
          <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32">
      <h1 className="author text-xs mt-1 ml-2">Zidan Khulul Sazid</h1>
      <h1 className="caption ml-3 mt-3 text-xl">Today is rainy day 🌧 ☔</h1>
      <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">Today 13:45</p>

          </div>
          <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32">
      <h1 className="author text-xs mt-1 ml-2">Zidan Khulul Sazid</h1>
      <h1 className="caption ml-3 mt-3 text-xl">Today is rainy day 🌧 ☔</h1>
      <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">Today 13:45</p>

          </div>
       <div className="pt-96 pb-96">
       </div>
        
        </div>
        </ThemeProvider>
        <Footer />
        </>
    )

}