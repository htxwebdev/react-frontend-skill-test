import SpecialActionTypes from './special.types';

const INITIAL_STATE = {
    specialsData: [],
    isFetching: false,
    error: null
}

const specialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SpecialActionTypes.FETCH_SPECIAL_PENDING:
            return {
                ...state,
                isFetching: true
            }
        case SpecialActionTypes.FETCH_SPECIAL_SUCCESS:
            return {
                ...state,
                isFetching: false,
                specialsData: action.payload,
                error: null
            }
        case SpecialActionTypes.FETCH_SPECIAL_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default specialReducer;