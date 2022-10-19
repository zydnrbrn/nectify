import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const data = props.auth.user;
    console.log(data);
    console.log(props);
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard Profile" />

            <div className="py-5">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                   
                        <div className="p-6 bg-black w-full rounded-md h-[327px] cover-profile">

                          
                        </div>
                        <div className="bg-slate-300 top-[300px] w-[200px] h-[200px] md:w-[300px] md:top-[250px] left-[75px] absolute md:h-[300px] rounded-full img-profile"></div>
                        <div className="account-name text-center">
                        <h1 className="font-extrabold text-white text-3xl text-center sm:text-4xl md:text-5xl mt-[100px] md:mt-[150px] lg:mt-[50px] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-main-red">{data.name}</h1>
                        </div>
                        <div className="bio-hobby flex mt-24 mx-8 gap-3">
                            <div className="bio w-[600px] h-[150px] bg-purple-200 rounded-md">
                                <p className='text-white mx-1'>My Bio's</p>
                                <p className='text-white mx-1'>{data.bio}</p>
                            </div>
                            <div className="hobby w-[300px] h-[150px] bg-main-red rounded-md">
                            <p className='text-white mx-1'>My Hobby's</p>
                            
                            <p className='text-white mx-1'>{data.hobby  }</p>

                            </div>

                        </div>
                        <div className="pb-96"></div>
                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
