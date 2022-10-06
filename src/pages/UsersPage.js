import React, { useEffect } from "react";
import { useQuery } from "react-query";

import './user-page-style.css'
import { getAllUsers } from "../api/api";
import UserCard from "../components/UserCard";
import LoadingComp from "../components/LoadingComponent";

export default function UsersPage(props) {

    const userQuery = useQuery('get-all-users', getAllUsers)

    useEffect(()=>{
        // console.log(props.setCurrentPage);
         if(props.setCurrentPage != undefined){

             props.setCurrentPage({title : "Users Page", index : 1});
         }   
    }, [])

    if(userQuery.isLoading ) {return <LoadingComp />}
    if(userQuery.error){ return "error";}
        
   
    return (
        <div className="user-container">
            {
                    userQuery.data.data.map((myUser)=>
                   {
                    
                    return  <UserCard key={myUser.id} user={myUser}/>
                    }
                    )

            }
        </div>
    );

}

