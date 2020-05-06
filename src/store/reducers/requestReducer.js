import { ERRORS } from './../../utils/constants/messageConstants';
import { REQUEST } from '../../utils/constants/actionConstants';

/********************
**** Reducer for catching errors while calling an API ****
*********************/

export default (state = {}, action) => {
    if (action.type === REQUEST.PENDING)
        return {
            ...state,
            pending: true,
            error: false,
            message: null
        }

    else if (action.error) {
        if (action.error.status)
            return {
                ...state,
                pending: false,
                error: action.error.status,
                message: action.error.message || ERRORS.GENERAL
            }
        else
            return {
                ...state,
                pending: false,
                error: false,
                message: null
            }
    }
    return state;
}

