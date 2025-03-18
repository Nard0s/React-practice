import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./post";
import'./PostList.module.css';
import Modal from './Modal';


function PostList(){
    const[modalIsVisible,setModalIsVisible]=useState(true);
    const[enteredBody,setEnteredBody]=useState('');
    const[enteredName,setEnteredName]=useState('');
    function changeHandler(event){
        setEnteredBody(event.target.value);
    }
    function nameChange(event){
        setEnteredName(event.target.value);
    }
    function close(){
        setModalIsVisible(false);
    }
    
    return(
        <>
        
        {modalIsVisible ?
        <Modal onClose={close}>
            <NewPost 
                onBodyChange={changeHandler} 
                onNameChange={nameChange}
            />
        </Modal>:null}
        <ul>
            <Post name={enteredName} body={enteredBody}/>
            <Post/>
            <Post/>
        </ul>
        
        </>
    );
}
export default PostList;