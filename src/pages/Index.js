import Post from "../components/Post";
import { Form, useLoaderData } from "react-router-dom";

function Index (props){
    const recipes = useLoaderData()
    return <>
        <div style={{textAlign: 'center'}}>
            <h2>Create a Recipe</h2>
            <Form method="post" action="/create">
            <input type="text" name="title" placeholder="Title"/>
            <input type="text" name="img" placeholder="Img"/>
            <input type="text" name="url" placeholder="Url"/>
            <input type="text" name="author" placeholder="Author"/>
            <input type="text" name="course" placeholder="Course"/>
            <button>Create a new Recipe</button>
        </Form>
        </div>
        {recipes.map((recipe) => <Post key={recipe.id} post={recipe}/>)}
    </>
}

export default Index;