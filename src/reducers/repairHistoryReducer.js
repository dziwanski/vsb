import * as actions from '../actions/actionTypes';

let indexOfWork = 0;

const initialValues = [
    {
        workshop: 'Andrzej',
        date: '22/22/2222',
        description: 'Wymiana rozrządu, świec, oleju, klocków przednich',
        distance: 245500,
        price: 2000,
        id: 100
    },
    {
        workshop: 'Andrzej',
        date: '11/11/1111',
        description: 'Naprawa przepustnicy',
        distance: 245600,
        price: 10,
        id: 101
    },
    {
        workshop: 'Andrzej',
        date: '23/56/2222',
        description: 'Naprawa 3',
        distance: 245500,
        price: 2000,
        id: 102
    },
    {
        workshop: 'Andrzej',
        date: '15/15/2004',
        description: 'Naprawa 4',
        distance: 245600,
        price: 10,
        id: 103
    }
]

const repairHistoryReducer = (state = initialValues, action) => {
    console.log(action);
    switch (action.type) {
        case actions.ADD_WORK:
            const {date, workshop, description, distance, price} = action.payload;
            return [
                ...state,
                {
                    id: indexOfWork++,
                    date: date,
                    workshop: workshop,
                    description: description,
                    distance: distance,
                    price: price,
                }
            ];
        case actions.DELETE_WORK:
            return state.filter(element => element.id !== action.payload.id);
        case actions.EDIT_WORK:
        default:
            return state;
    }
}

export default repairHistoryReducer;