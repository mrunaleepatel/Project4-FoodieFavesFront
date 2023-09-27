import {Link, useLoaderData, Form} from 'react-router-dom';
import "../styles.css";


function Show (props){
    const post = useLoaderData()
    const div = {
        // textAlign: "center",
        // border: "3px solid green",
        // width: "80%",
        // margin: "30px auto"
    }
    
    return (
            <div style={div}>
            <div style={{textAlign: "center"}}>
                <h2>Update {post.title}</h2>
                <Form method="post" action={`/update/${post.id}`}>
                <input type="text" name="title" placeholder="Title" defaultValue={post.title}/>
                <input type="text" name="img" placeholder="Img" defaultValue={post.img}/>
                <input type="text" name="url" placeholder="Url" defaultValue={post.url}/>
                <input type="text" name="author" placeholder="Author" defaultValue={post.author}/>
                <label htmlFor="courseDropdown" >Select a course:</label>
                <select defaultValue={post.course} name="course" id="courseDropdown" className="custom-dropdown">
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                </select>
                <div className="show-button">
                <button>Update Recipe</button>
                </div>
                </Form>
                <div className="show-button">
                <Form method="post" action={`/delete/${post.id}`}>
                    <button>Delete Recipe</button>
                </Form>
                <Link to="/">
                    <button>Back to Index</button>
                </Link>
                </div>

            </div>
            
            </div>
        
    );
}

export default Show;