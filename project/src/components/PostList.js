import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./post";
import'./PostList.module.css';
import Modal from './Modal';


function PostList(props){
  const[posts,setPosts]=useState([]);

  function addPostHandler(postData){
        setPosts((existingPosts)=>[postData,...existingPosts]);
        props.onStop();
    }
    
    return(
        <>
        {props.isPosting &&(
        <Modal onClose={props.onStop}>
            <NewPost onCancel={props.onStop} onAddPost={addPostHandler}/>
        </Modal>
        )}
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