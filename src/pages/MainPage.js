import React, {useEffect} from "react";
import { useQuery } from "react-query";

import './mainPageStyle.css'
import { getAllUsers } from "../api/api";
import LoadingComp from "../components/LoadingComponent";
import UserCard from "../components/UserCard"
import UsersPage from "./UsersPage";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

const MainPage = (props) => {

  useEffect(()=>{
    
     if(props.setCurrentPage != undefined){

         props.setCurrentPage({title : "Main Page", index : 0});
     }   
}, [])
  
  return (
 

    <div className="main-page-container">
      <UsersPage />
    </div>

  );
}
export default MainPage;