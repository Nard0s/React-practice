import'./post.css'
const names =['max', 'min']
function Post(props){
    const choices= Math.random()>0.5?names[0] :names[1];
    return(
    <div className='post'>
       <li>
            <p>{props.name}</p>
            <p>{props.body}</p>
        </li>
    </div>
    ) ;
   
}

export default Post;