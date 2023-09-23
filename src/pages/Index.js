// import Post from "../components/Post";
import { Form, useLoaderData, Link } from "react-router-dom";
import "../styles.css";

function Index (props){
    const recipes = useLoaderData()
    console.log(recipes)
    return <>
        <div style={{ textAlign: 'center' }}>
            {/* Navigation Bar */}
            <div className="navigation">
        <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/">Create Recipe</Link>
        </nav>
        </div>
    <h2>Create a Recipe</h2>
    <Form method="post" action="/create">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="img" placeholder="Img" />
        <input type="text" name="url" placeholder="Url" />
        <input type="text" name="author" placeholder="Author" />
        <label htmlFor="courseDropdown">Select a course:</label>
        <select name="course" id="courseDropdown" className="custom-dropdown">
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
        </select>
        <div className="show-button">
        <button style={{ display: 'block', margin: '0 auto' }}>Create a new Recipe</button>
        </div>
    </Form>
    </div>
        {/* {recipes.map((recipe) => <Post key={recipe.id} post={recipe}/>)} */}
        
        <div className="image-grid">
        {recipes.map((recipe) => (
            <div className="grid-item" key={recipe.id}>
            <div className="grid-item-content">
                <img src={recipe.img} alt={recipe.title} />
                <h3>{recipe.title}</h3>
            </div>
            <Link to={`post/${recipe.id}`}>
            <div className="show-button">
                <button>Update Recipe</button>
                </div>
            </Link>
            </div>
    ))}
        </div>
    </>
}

export default Index;