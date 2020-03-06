import { v1 as uuid } from 'uuid'; 

export const add = ({name} = {name: 'Aviv'}) => ({
    type: 'ADD_CONTACT',
    data: {
        id: uuid(),
        name
    }
});

export const remove = (id) => ({
    type: 'REMOVE_CONTACT',
    id
});

export const edit = (id, data) => ({
    type: 'EDIT_CONTACT',
    id,
    data
});