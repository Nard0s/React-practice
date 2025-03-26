import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./post";
import'./PostList.module.css';
import Modal from './Modal';


function PostList(props){
    
    const[enteredBody,setEnteredBody]=useState('');
    const[enteredName,setEnteredName]=useState('');
    function changeHandler(event){
        setEnteredBody(event.target.value);
    }
    function nameChange(event){
        setEnteredName(event.target.value);
    }
  
    
    return(
        <>
        {props.isPosting &&(
        <Modal onClose={props.onStop}>
            <NewPost 
                onBodyChange={changeHandler} 
                onNameChange={nameChange}
                onCancel={props.onStop}
            />
        </Modal>
        )}
        <ul>
            <Post name={enteredName} body={enteredBody}/>
            <Post/>
            <Post/>
        </ul>
        
        </>
    );
}
export default PostList;