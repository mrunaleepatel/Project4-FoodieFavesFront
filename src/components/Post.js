import {Link} from 'react-router-dom';
import "../styles.css";

function Post ({post}){
    const div = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%"
    }
    return <div style={div}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.title}</h1>
            <h2>{post.img}</h2>
            <h2>{post.url}</h2>
            <h2>{post.author}</h2>
            <h2>{post.course}</h2>
        </Link>
    </div>
}

export default Post;