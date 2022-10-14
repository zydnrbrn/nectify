import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard Profile" />

            <div className="py-5">
                <div className="mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden sm:rounded-lg">
                   
                        <div className="p-6 bg-black w-full rounded-md h-[327px]">

                            <h1 className="text-white text-center text-5xl mt-[100px]">This page is under develope,sorry 🙏😣</h1>
                        </div>
                        <div className="bg-slate-300 w-[300px] top-[250px] left-[75px] absolute h-[300px] rounded-full"></div>
                        <div className="account-name text-center"></div>
                        
                        
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
