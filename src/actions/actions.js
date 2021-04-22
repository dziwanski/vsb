import * as actions from './actionTypes';

export const addRepair = ({date, workshop, description, distance, price}) => ({
    type: actions.ADD_WORK,
    payload: {
        date,
        distance,
        description,
        workshop,
        price
    }
});

export const deleteRepair = id => ({
    type: actions.DELETE_WORK,
    payload: {
        id
    }
})

export const editRepair = ({person, description, distance, price, id}) => ({
    type: actions.EDIT_WORK,
})