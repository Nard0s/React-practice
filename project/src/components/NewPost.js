import {useState} from 'react';
import classes from './NewPost.module.css';
function NewPost(props){


   
    return(
        <form className={classes.form}>
            <p>
                <lable htmlFor="body">Text</lable>
                <textarea id="body"  rows={3}  required onChange={props.onBodyChange}></textarea>
            </p>
           
            <p>
                <lable htmlFor="name">Your name</lable>
                <input type="text" id="name"   required onChange={props.onNameChange}/>
            </p>
        </form>
    );
}
export default NewPost;