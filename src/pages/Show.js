import {Link, useLoaderData, Form} from 'react-router-dom';

function Show (props){
    const post = useLoaderData()
    const div = {
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto"
    }
    return (

         <div style={div}>
            <h1>{post.title}</h1>
            <h2>{post.img}</h2>
            <h2>{post.url}</h2>
            <h2>{post.author}</h2>
            <h2>{post.course}</h2>
            <div style={{textAlign: "center"}}>
                <h2>Update Recipe</h2>
                <Form method="post" action={`/update/${post.id}`}>
                <input type="text" name="title" placeholder="Title" defaultValue={post.title}/>
                <input type="text" name="img" placeholder="Img" defaultValue={post.img}/>
                <input type="text" name="url" placeholder="Url" defaultValue={post.url}/>
                <input type="text" name="author" placeholder="Author" defaultValue={post.author}/>
                <input type="text" name="course" placeholder="Course" defaultValue={post.course}/>
                <button>Update Recipe</button>
                </Form>
                <Form method="post" action={`/delete/${post.id}`}>
                    <button>Delete Todo</button>
                </Form>
            </div>
            <Link to="/">Back to Index</Link>
            </div>
    );
}

export default Show;