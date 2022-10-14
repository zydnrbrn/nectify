import React from "react";
import Navbar from './../../Components/Navbar';
import { useForm } from "@inertiajs/inertia-react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 


const Create = () => {
    const [size, setSize] = useState(null);
 
  const handleOpen = (value) => setSize(value);

    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("posts.store"));
    }

    return (
        <>
        <Navbar />
        <div className="pt-20">
            <div className="container flex flex-col justify-center mx-auto">
               
                  
              
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Who's send this ?</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.title}
                                </span>
                            </div>
                            <div className="mb-0">
                                <label className="">Caption</label>
                                <textarea
                                    type="text"
                                    className="w-full rounded"
                                    label="description"
                                    name="description"
                                    errors={errors.description}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                POST
                            </button>
                        </div>
                    </form>
                </div>
                <Fragment>

                <Button onClick={() => handleOpen("md")} variant="gradient" color="green">
         ?
        </Button>
        <Dialog
        open={
    
          size === "md" 
    
        }
        size={size || "md"}
        handler={handleOpen}
      >
        <DialogHeader>The Post .</DialogHeader>
        <DialogBody divider>
         If you are too shy to make a post, you can give the name of author by Annonymous,That post can't delete. <br />
         Because the feature is under development.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
                </Fragment>
            </div>
        </div>
        </>
    );
};

export default Create;