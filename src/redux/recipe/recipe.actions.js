import RecipeActionTypes from './recipe.types';

export const fetchRecipesPending = () => ({
    type: RecipeActionTypes.FETCH_PENDING
})

export const fetchRecipesError = error => ({
    type: RecipeActionTypes.FETCH_ERROR,
    payload: error
})

export const fetchRecipesSuccess = data => ({
    type: RecipeActionTypes.FETCH_SUCCESS,
    payload: data
})

export const addRecipe = item => ({
    type: RecipeActionTypes.ADD_ITEM,
    payload: item
})

export const fetchRecipesApi = () => {
    return dispatch => {
        dispatch(fetchRecipesPending());
        fetch('http://localhost:3001/recipes')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchRecipesSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchRecipesError(error));
            })
    }
}