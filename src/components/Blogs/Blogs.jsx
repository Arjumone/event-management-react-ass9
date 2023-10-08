import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs,setBlogs] =useState([])
    useEffect(()=>{
        fetch("/blog.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            <h2>Blog Details</h2>
            <div className=" gap-5 grid grc1 md:grid-cols-2 lg:grid-cols-3">
                {
                    blogs.map(blg=><Blog key={blg.id} blg={blg}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;