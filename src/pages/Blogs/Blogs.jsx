import { useEffect, useState } from "react";
import Blog from "./Blog";
import Navbar from "../../Shared/Navbar/Navbar";



const Blogs = () => {
    const [blogs,setBlogs] =useState([])
    useEffect(()=>{
        fetch("/blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className=" max-w-6xl mx-auto">
            <div className="bg-sky-400">
                <Navbar></Navbar>
            </div>
            <h2 className="text-sky-600 text-center text-4xl font-semibold">Event Related Blogs</h2>
            <div className=" gap-5 grid grc1 md:grid-cols-2 lg:grid-cols-3 bg-sky-300 p-6 mt-3">
                {
                    blogs.map(blg=><Blog key={blg.id} blg={blg}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;