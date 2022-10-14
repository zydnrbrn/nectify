import { Head, Link } from '@inertiajs/inertia-react';
import { ThemeProvider } from '@material-tailwind/react';
import React from 'react';
import Navbar from '../../Components/Navbar'
import Footer from '../Components/Footer';
import { Button } from '@material-tailwind/react';

const Post = (props) => {
    const data = props.posts;
    return (
       
        <>
        
             <Head title={props.title} />
        <div>
      <Navbar />
  
        </div>
        
        <ThemeProvider>
       
        <div className="post font-righteous"  >
            
          <div className="post-input w-[415px] sm:w-[530px]  lg:w-[770px] pb-[30px] sm:pb-[40px] flex pt-[100px] sm:pt-[100px] md:pt-[120px]">
          <Link href='posts/create'>
          <Button className='ml-[20px] font-righteous mr-[20px] sm:ml-[30px] h-[40px] sm:h-[50px] mt-[20px] sm:w-[100px] sm:text-base lg:ml-[60px] lg:h-[50px] lg:mt-[25px]' color='green' size="md">POST+</Button>
          </Link>
          
          
          </div>
          
          
      

        {data.map(datas => {
            return(
        <div className="lg:ml-[60px] lg:w-[1200px] sm:w-[520px] sm:mt-[50px] lg:mt-[20px] rounded-lg lg:rounded-lg w-[400px] md:w-[720px] md:mt-[50px] ml-[18px] border border-main-red h-32" key={datas.id}>
            <h1 className="author text-xs mt-1 ml-2">{datas.title}</h1>
            <h1 className="caption ml-3 mt-3 text-xl">{datas.description}</h1>
            <p className="timestamp text-xs float-right mt-[40px] mr-[10px]">{datas.created_at}</p>
        </div>
        );
        })}
       <div className="pt-96 pb-96">
       </div>
        
        </div>
       
        
        </ThemeProvider>
        <Footer />
        
        </>

    );


};

export default Post;