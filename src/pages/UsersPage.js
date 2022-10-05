import React, { useEffect } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import axios from "axios";

import './user-page-style.css'
import Api from "../api/api";
import { getAllUsers } from "../api/api";
import UserCard from "../components/UserCard";
import LoadingComp from "../components/LoadingComponent";

export default function UsersPage() {

    const userQuery = useQuery('get-all-users', getAllUsers)
    if(userQuery.isLoading ) return <LoadingComp />
    if(userQuery.error) return "error";

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

