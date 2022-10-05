import axios from "axios";
import React from "react";
import {useQuery} from 'react-query'
/** this file contins all api related code*/


    
    /**
 * this function retrieve a promise for getting all users from the api
     */
 function getAllUsers(){
    
    return  axios.get("https://jsonplaceholder.typicode.com/users");
    
}
/**
 * this function retrieve a promise for getting all posts from the api
 */
  function getAllPosts(){
     
    return  axios.get("https://jsonplaceholder.typicode.com/posts");
        
    }
/**
 * this function retriev a promise for getting all user posts from the api 
 * @param {string} userId id of the user
 */
 function getUserPosts(userId){
    
    return  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

}
/**
 * this function retrieve a prmise for getting a single user using its id 
 * @param {string} userId id  to query a user
 */
 function getUser(userId){

    return  axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

}
/**
 * this function retrieve a prmise for getting a single post using its id 
 * @param {*} postId post id to query a post
 */
 function getPost(postId){

    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
}

export {getAllUsers, getAllPosts, getUser, getPost, getUserPosts};

// class Api extends React.Component{

//     constructor(queryName, queryUrl){
//         this.queryName = queryName;
//         this.queryUrl = queryUrl;
//     }

// }