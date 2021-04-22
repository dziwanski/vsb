import * as actions from '../actions/actionTypes';

let indexOfWork = 0;

const initilaValues = [
    {
        person: 'Andrzej',
        description: 'Wymiana rozrządu, świec, oleju, klocków przednich',
        distance: 245500,
        price: 2000,
        id: 0
    },
    {
        person: 'Andrzej',
        description: 'Naprawa przepustnicy',
        distance: 245600,
        price: 10,
        id: 1
    }
]

const worksReducer = (state = initilaValues, action) => {
    switch (action.type) {
        case actions.ADD_WORK:
            return [
                ...state,
                {
                    person: action.payload.person,
                    description: action.payload.description,
                    distance: action.payload.distance,
                    price: action.payload.price,
                    id: indexOfWork++
                }
            ];
        case actions.DELETE_WORK:
        case actions.EDIT_WORK:
        default:
            return state;
    }
}

export default worksReducer;