import SpecialActionTypes from './special.types';

export const fetchSpecialsPending = () => ({
    type: SpecialActionTypes.FETCH_SPECIAL_PENDING
})

export const fetchSpecialsError = error => ({
    type: SpecialActionTypes.FETCH_SPECIAL_ERROR,
    payload: error
})

export const fetchSpecialsSuccess = data => ({
    type: SpecialActionTypes.FETCH_SPECIAL_SUCCESS,
    payload: data
})

export const addSpecial = item => ({
    type: SpecialActionTypes.ADD_ITEM,
    payload: item
})

export const fetchSpecialsApi = () => {
    return dispatch => {
        dispatch(fetchSpecialsPending());
        fetch('http://localhost:3001/specials')
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchSpecialsSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(fetchSpecialsError(error));
            })
    }
}

export const addSpecialApi = item => {
    return dispatch => {
        fetch('http://localhost:3001/specials', {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(fetchSpecialsApi());
            })
    }
}