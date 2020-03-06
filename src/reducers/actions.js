
const actionsReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_CONTACT':
            return [
                ...state,
                action.data
            ]
        case 'REMOVE_CONTACT':
            return state.filter(contact => contact.id !== action.id);
        case 'EDIT_CONTACT':
            return state.map(contact => {
                if ( contact.id === action.id ){
                    return {
                        ...contact,
                        ...action.data
                    }
                }else {
                    return contact;
                }
            });
        default:
            return state;
    }

}

export default actionsReducer;