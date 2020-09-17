import RecipeActionTypes from './recipe.types';

const INITIAL_STATE = {
    recipeData: [],
    isFetching: false,
    error: null
}

const recipeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RecipeActionTypes.FETCH_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case RecipeActionTypes.FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                recipeData: action.payload,
                error: null
            }
        case RecipeActionTypes.FETCH_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default recipeReducer;