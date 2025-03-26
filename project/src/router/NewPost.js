import {useState} from 'react';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';
function NewPost(props){
  
    const[enteredBody,setEnteredBody]=useState('');
    const[enteredName,setEnteredName]=useState('');
    function changeHandler(event){
        setEnteredBody(event.target.value);
    }
    function nameChange(event){
        setEnteredName(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();
        const postData={
            body:enteredBody,
            name:enteredName
        };
        console.log(postData);
        props.onCancel();
        props.onAddPost(postData);
    }
    return(
        <Modal>
        <form className={classes.form} onSubmit={submitHandler}>
            <p>
                <lable htmlFor="body">Text</lable>
                <textarea id="body"  rows={3}  required onChange={changeHandler}></textarea>
            </p>
           
            <p>
                <lable htmlFor="name">Your name</lable>
                <input type="text" id="name"   required onChange={nameChange}/>
            </p>
            <p className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit' >Submit</button>
            </p>
        </form>
        </Modal>
    );
}
export default NewPost;