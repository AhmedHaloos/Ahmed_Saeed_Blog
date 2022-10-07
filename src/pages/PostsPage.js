import { useQueryClient, useQuery } from "react-query"

import './postsPageStyle.css'
import {getAllPosts, getAllUsers, getUser, getUserPosts} from "../api/api";
import { useLocation, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import LoadingComp from "../components/LoadingComponent";
import { useEffect, useState } from "react";


const getPosts = (query)=>{
    // console.log(query.queryKey[1]["userId"]);
    if(query.queryKey[1]["userId"] != undefined){

        return getUserPosts(query.queryKey[1]["userId"]);
    }
    else return getAllPosts();
}

export default function PostsPage(props){
  
    const userId = useParams();
    const[userPosts, setUserPosts] = useState([]);

    const postQuery = useQuery(['query-user-posts', userId],getPosts); 
    const userQuery = useQuery('get-all-users', getAllUsers)

    useEffect(()=>{
       
         if(props.setCurrentPage != undefined){

             props.setCurrentPage({title : "Posts Page", index : 2});
         }   
    }, [])
       
    useEffect(()=>{
        let _userPosts = [];
        if(postQuery.data != undefined && userQuery.data != undefined)
        {
            let posts = postQuery.data.data;
            let users = userQuery.data.data;
            for(let j = 0 ; j < posts.length; j++){

                for(let i = 0 ; i< users.length;i++){
                    if(posts[j].userId == users[i].id){
                        _userPosts.push({...postQuery.data.data[j], username : users[i].name})
                    }
                }
            }
            setUserPosts(_userPosts);
        }

        else {console.log(postQuery.data);} 
    }, [postQuery.data, userQuery.data])

    if(postQuery.isLoading || userQuery.isLoading) return <LoadingComp />
    if(postQuery.error) return `posts error : ${postQuery.error}`;
    if(userQuery.error) return `user error : ${userQuery.error}`;
    return (
        <div className="posts-page-container">
        {
                userPosts.map((myPost)=>{
                    return <PostCard key={`${myPost.id}.${myPost.userId}`} post={myPost} />
                })         

        }
        </div>
    )


}