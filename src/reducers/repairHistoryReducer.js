import * as actions from '../actions/RepairHistory/actionTypes';

let indexOfWork = 0;

const initialValues = [
    {
        workshop: 'Andrzej',
        date: '2021-04-15',
        description: 'Wymiana rozrządu, świec, oleju, klocków przednich',
        distance: 245500,
        price: 2000,
        id: 100
    },
    {
        workshop: 'Andrzej',
        date: '2051-04-18',
        description: 'Naprawa przepustnicy',
        distance: 245600,
        price: 10,
        id: 101
    },
    {
        workshop: 'Andrzej',
        date: '2071-04-34',
        description: 'Naprawa 3',
        distance: 245500,
        price: 2000,
        id: 102
    },
    {
        workshop: 'Andrzej',
        date: '2011-04-34',
        description: 'Naprawa 4',
        distance: 245600,
        price: 10,
        id: 103
    }
]

const repairHistoryReducer = (state = initialValues, action) => {
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
            // TODO: Implement EDIT_WORK
        default:
            return state;
    }
}

export default repairHistoryReducer;