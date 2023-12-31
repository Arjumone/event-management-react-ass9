import { useEffect, useState } from "react";
import Team from "./Team";
import Navbar from "../../Shared/Navbar/Navbar";



const TeamMember = () => {
    const [teams,setTeams] =useState([])
    useEffect(()=>{
        fetch("/team.json")
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div className="max-w-6xl mx-auto">
            <div className="bg-sky-500 ">
      <Navbar></Navbar>
      </div>
            <h2 className=" text-sky-600 font-semibold text-4xl text-center my-3 ">Team Members Details</h2>
            <div className=" gap-5 grid grc1 md:grid-cols-2 lg:grid-cols-3">
                {
                    teams.map(team=><Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default TeamMember;