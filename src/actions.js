// Create action
export const createAction = async({request}) => {
    const formData = await request.formData();
    const newRecipe = {
        title: formData.get('title'),
        img: formData.get('img'),
        url: formData.get('url'),
        author: formData.get('author'),
        course: formData.get('course'),
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