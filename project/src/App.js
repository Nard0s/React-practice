import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostList from './components/PostList';
function App() {
  const[modalIsVisible,setModalIsVisible]=useState(false);
  function handlerClose(){
    setModalIsVisible(false);
}
function handlerShow(){
  setModalIsVisible(true);
}
  return (
    <>
      <MainHeader onCreatePost={handlerShow}/>
      <div>
      <PostList isPosting={modalIsVisible} 
                  onStop={handlerClose}/>
      </div>
    </>
  );
}

export default App;
