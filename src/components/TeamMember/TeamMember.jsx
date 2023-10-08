import { useEffect, useState } from "react";
import Team from "../Team/Team";


const TeamMember = () => {
    const [teams,setTeams] =useState([])
    useEffect(()=>{
        fetch("/team.json")
        .then(res=>res.json())
        .then(data=>setTeams(data))
    },[])
    return (
        <div>
            <h2>Team Members Details</h2>
            <div className=" gap-5 grid grc1 md:grid-cols-2 lg:grid-cols-4">
                {
                    teams.map(team=><Team key={team.id} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default TeamMember;