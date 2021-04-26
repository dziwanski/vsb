import * as actions from '../actions/ScheduledWorks/actionTypes';

const initialValues = [
    {
        id: 101,
        description: 'Opłacić ubezpieczenie',
    }
];

// @ts-ignore
const scheduledWorksReducer = (state = initialValues, action) => {
    switch (action.type) {
        case actions.ADD_SCHEDULED_WORK:
            // TODO: Implement ADD_SCHEDULED_WORK
        case actions.DELETE_SCHEDULED_WORK:
            // TODO: Implement DELETE_SCHEDULED_WORK
        default:
            return state;
    }
}

export default scheduledWorksReducer;