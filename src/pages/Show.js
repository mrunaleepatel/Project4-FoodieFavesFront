import {Link, useLoaderData} from 'react-router-dom';

function Show (props){
    const post = useLoaderData()
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }
    return <div style={div}>
            <h1>{post.title}</h1>
            <h2>{post.img}</h2>
            <h2>{post.url}</h2>
            <h2>{post.author}</h2>
            <h2>{post.course}</h2>
            <Link to="/">Back to Index</Link>
    </div>
}

export default Show;