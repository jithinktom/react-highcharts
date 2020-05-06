/********************
**** Reducer for chart related actions ****
*********************/

import { CHART } from "../../utils/constants/actionConstants"

export default (state = {}, action) => {
    switch (action.type) {
        case CHART.ADD_FILTER: {
            console.log("called in chartReducer")
            return {
                ...state,
                filterData: {
                    ...state.filterData,
                    [action.payload.section]: action.payload.data
                }
            }
        }
        case CHART.FETCH_INITIAL_DATA_FULFILLED: {
            console.log("called in chartReducer")
            return {
                ...state,
                initialData : action.payload
            }
        }
        default:
            return state
    }
}