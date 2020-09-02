export const initialState = {
    user : null
}

// everytime we login we will set user.
export const actionTypes = {
    SET_USER: "SETUSER",
}

// state is how data layer looks like and action is what we are trying to do i.e set user etc.
const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default reducer;