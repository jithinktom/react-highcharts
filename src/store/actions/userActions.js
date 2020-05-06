import { userClient } from './';
import { REQUEST, VALIDATE_SESSION } from '../../utils/constants/actionConstants';
import { user } from '../../utils/constants/endPointConstants';

export const validateSession = () => {
    return async dispatch => {
        dispatch({ type: REQUEST.PENDING });
        return userClient.post(user.validateSession, {}).then(sessionValidation => {
            sessionValidation.data = {
                statusCode: 0,
                result: {
                    isValid: true,
                    statusCode: 2000
                },
                description: "ValidSession"
            }
            dispatch({ type: VALIDATE_SESSION.FULFILLED, payload: sessionValidation.data, error: { status: false } });
        }).catch(error => {
            dispatch({ type: REQUEST.FAILED, error: { status: true, message: error.message } });
        });
    }
}