import { combineReducers } from 'redux';

import receipeReducer from './recipe/recipe.reducer';
import specialReducer from './special/special.reducer';

export default combineReducers({
    recipes: receipeReducer,
    specials: specialReducer
})