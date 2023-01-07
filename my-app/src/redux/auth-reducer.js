const SET_USER_DATA = 'SET-USER-DATA';

let initialReducer = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialReducer, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserDataActionCreator = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login}
    }
}

export default authReducer;