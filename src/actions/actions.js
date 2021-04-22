import * as actions from './actionTypes';

export const addWork = ({person, description, distance, price}) => ({
    type: actions.ADD_WORK,
    payload: {
        person,
        description,
        distance,
        price
    }
});

export const deleteWork = id => ({
    type: actions.DELETE_WORK,
    payload: {
        id
    }
})

export const editWork = ({person, description, distance, price, id}) => ({
    type: actions.EDIT_WORK,
})