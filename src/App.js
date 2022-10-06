import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import { getAllPosts, getAllUsers, getUserPosts } from "./api/api";
import UserCard from "./components/UserCard";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import LoadingComp from "./components/LoadingComponent";
import NotFoundPage from "./pages/NotFoundPage";
import SideNavBar from "./components/SideNav";
import "./App.css"

const queryClient  = new QueryClient();
function App() {


  const [isSideNavDisp, setNavDisp] = useState(false);
  const [currenPage, setCurrentPage] = useState({title:"Main Page", index:0});

  const handleDispSideNav = (dispState)=>{
    console.log(dispState);
    setNavDisp(dispState);
  }
  const handleCloseSideNav = ()=>{
    setNavDisp(false);
  }
  return (
    <QueryClientProvider client={queryClient}>
     <Router>
      <Header isSideNavDisp = {isSideNavDisp} setNavDisp={handleDispSideNav} currenPage = {currenPage}/>
      <SideNavBar isSideNavDisp={isSideNavDisp} handleCloseSideNav={handleCloseSideNav} currenPage = {currenPage}/>
    <Routes>
      <Route path={'/users/:userId/posts'} element={ <PostsPage setCurrentPage = {setCurrentPage} currenPage = {currenPage}/>}/>
      <Route path={'/users'} element={<UsersPage setCurrentPage = {setCurrentPage} currenPage = {currenPage}/>}/>
      <Route path={'/posts'} element={<PostsPage setCurrentPage = {setCurrentPage} currenPage = {currenPage}/>}/>
      <Route path={'/loading'} element={<LoadingComp/>}/>
      <Route path={'/'} element={<MainPage setCurrentPage = {setCurrentPage} currenPage = {currenPage}/>}/>
      <Route path="/*" element={<NotFoundPage setCurrentPage = {setCurrentPage} currenPage = {currenPage}/>}/>
    </Routes>

     </Router>
    </QueryClientProvider>

  );
}



export default App;
