import { redirect } from "react-router-dom";

const url = "https://foodiefaves.onrender.com/recipes/"

// Create action
export const createAction = async({request}) => {
    const formData = await request.formData();
    const newRecipe = {
        title: formData.get('title'),
        img: formData.get('img'),
        url: formData.get('url'),
        author: formData.get('author'),
        course: formData.get('course')
    }
    await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
        
    })
    
    return redirect("/")
}

// Update action
export const updateAction = async({request, params}) => {
    const id = params.id
    const formData = await request.formData();
    const updatedRecipe = {
        title: formData.get('title'),
        img: formData.get('img'),
        url: formData.get('url'),
        author: formData.get('author'),
        course: formData.get('course')
    }
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedRecipe)
    })

    return redirect(`/post/${id}`)
}

// Delete action
export const deleteAction = async({params}) => {
    const id = params.id
    await fetch(url + id, {
        method: "delete"
    })

    return redirect("/")
}