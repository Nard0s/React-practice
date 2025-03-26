import MainHeader from './components/MainHeader';
import PostList from "./components/PostList";
import { useState } from "react";
function App() {
  const[modalIsVisible,setModalIsVisible]=useState(true);
  function handlerClose(){
    setModalIsVisible(false);
}
function handlerShow(){
  setModalIsVisible(true);
}
  return (
    <>
    <MainHeader coCreatePost={handlerShow}/>
    <div>
     <PostList isPosting={modalIsVisible} onStop={handlerClose}/>
    </div>
    </>
  );
}

export default App;
