import Post from "../components/Post";
import { useLoaderData } from "react-router-dom";

function Index (props){
    const recipes = useLoaderData()
    return recipes.map((recipe) => <Post key={recipe.id}
    post={recipe}/>)
}

export default Index;