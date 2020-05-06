/********************
**** Reducer for authentication related actions ****
*********************/

import { VALIDATE_SESSION } from "../../utils/constants/actionConstants"

export default (state = {}, action) => {
    switch (action.type) {
        case VALIDATE_SESSION.FULFILLED: {
            console.log(action.payload)
            return {
                ...state,
                session: {
                    statusCode: action.payload.statusCode,
                    result: {
                        isValid: action.payload.result.isValid,
                        statusCode: action.payload.result.statusCode
                    },
                    description: action.payload.description,
                },
                isLoggedin: action.payload.result.isValid
            }
        }
        default:
            return state
    }
}