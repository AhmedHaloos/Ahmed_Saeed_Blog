import { useQuery } from "react-query";

import './mainPageStyle.css'
import { getAllUsers } from "../api/api";
import LoadingComp from "../components/LoadingComponent";
import UserCard from "../components/UserCard"
import UsersPage from "./UsersPage";
import Header from "../components/Header";
import PostCard from "../components/PostCard";

const MainPage = () => {

  
  return (

    <div className="main-page-container">
      <UsersPage />
    </div>

  );
}
export default MainPage;