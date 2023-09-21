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
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated todo
    const updatedRecipe = {
        title: formData.get('title'),
        img: formData.get('img'),
        url: formData.get('url'),
        author: formData.get('author'),
        course: formData.get('course')
    }

    // make a request to update a todo
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedRecipe)
    })

    // redirect to the show page
    return redirect(`/post/${id}`)
}