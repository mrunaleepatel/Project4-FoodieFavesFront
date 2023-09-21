import url from "./url"

// Index loader
export const indexLoader = async () => {
    const response = await fetch(url)
    const recipes = await response.json()
   
    return recipes
}

// Show loader
export const showLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(url + id)
    const recipe = await response.json()

    return recipe
}