import { useState } from "react";
import Post from "./post";
import'./PostList.module.css';



function PostList(props){
  const[posts,setPosts]=useState([]);

  function addPostHandler(postData){
        setPosts((existingPosts)=>[postData,...existingPosts]);
        props.onStop();
    }
    
    return(
        <>
        {posts.length> 0 &&( 
        <ul >
            {posts.map((post)=><Post key={post.body} name={post.name} body={post.body}/>)}
        </ul>
        )}
        {posts.length===0   &&(
            <p style={{textAlign:"center",color:"black"}}>No posts found.</p>
        )}
        </>
    );
}
export default PostList;