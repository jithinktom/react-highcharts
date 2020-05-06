/********************
**** Reducer for chart related actions ****
*********************/

import { CHART } from "../../utils/constants/actionConstants"
import moment from 'moment';

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
            var initialData = {};
            // console.log(moment(action.payload.value[0].DateTime, moment.ISO_8601).valueOf())
            initialData.data = action.payload.value.map(data => {
                let time = new Date(data.DateTime)
                return [time.getTime(), data.Value]
            })
            initialData.name = action.payload.value[0].FQN
            return {
                ...state,
                initialData: initialData
            }
        }
        default:
            return state
    }
}