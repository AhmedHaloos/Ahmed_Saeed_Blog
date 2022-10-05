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

const queryClient  = new QueryClient();
function App() {

  // useQuery('get-all-posts', () => {

  //   return axios.get("https://jsonplaceholder.typicode.com/users");
  // });
  // useQuery('get-user-posts', () => {
  //   return axios.get("https://jsonplaceholder.typicode.com/posts");
  // });


  return (
    <QueryClientProvider client={queryClient}>
     <Router>
      <Header/>
    <Routes>
      <Route path={'/users/:userId/posts'} element={ <PostsPage/>}/>
      <Route path={'/users'} element={<UsersPage/>}/>
      <Route path={'/posts'} element={<PostsPage/>}/>
      <Route path={'/loading'} element={<LoadingComp/>}/>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path="/*" element={<NotFoundPage/>}/>
    </Routes>

     </Router>
    </QueryClientProvider>

  );
}



export default App;
