import { useQueryClient, useQuery } from "react-query"

import './postsPageStyle.css'
import {getAllPosts, getUserPosts} from "../api/api";
import { useLocation, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import LoadingComp from "../components/LoadingComponent";
import { useState } from "react";


const getPosts = (query)=>{
    // console.log(query.queryKey[1]["userId"]);
    if(query.queryKey[1]["userId"] != undefined){

        return getUserPosts(query.queryKey[1]["userId"]);
    }
    else return getAllPosts();
}

export default function PostsPage(){
  
    const[expansion, setExpand] = useState(false)
    const userId = useParams();
  
    const postQuery = useQuery(['query-user-posts', userId],getPosts);
    if(postQuery.isLoading ) return <LoadingComp />
    if(postQuery.error) return "error";
    return (
        <div className="posts-page-container">
        {
                postQuery.data.data.map((myPost)=>{
                    return <PostCard key={myPost.id} post={myPost} expansion={expansion}/>
                })         

        }
        </div>
    )

}