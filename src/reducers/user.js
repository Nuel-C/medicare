const user = {
    username:'',
    patients: 0,
    patientsList:[]
}

const userReducer = (state = user, action) => {
    switch(action.type){
        case 'UPDATE_NAME':
            return action.data
        default:
            return state
    }
}

export default userReducer