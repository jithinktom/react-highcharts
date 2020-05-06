import { CHART, REQUEST } from "../../utils/constants/actionConstants";
// import axios from "axios";
// import Base64 from 'base-64';
// import httpntlm from 'httpntlm';
// import async from 'async';
// import httpreq from 'httpreq';
// import HttpsAgent from 'agentkeepalive';
import { historianData } from './historianData';

// var keepaliveAgent = new HttpsAgent();

export const addFilterData = (data, section) => ({
    type: CHART.ADD_FILTER,
    payload: { data, section },
    error: { status: false }
})

// export const fetchInitialData = () => dispatch => {
//     const tok = 'Localwwadmin:Admin00!';
//     const hash = Base64.encode(tok);
//     const Basic = 'Basic ' + hash;
//     return axios.get('http://10.2.233.17:32569/Historian/v2/ProcessValues?$filter=FQN%20eq%20%27MIX_TI01.Obj.Out_rCurrentValue%27%20and%20DateTime%20ge%202017-06-29T00:00:00Z&Resolution=600000', { headers: { 'Authorization': Basic } })
//         .then(response => {
//             console.log("response============>", response)
//             dispatch({ type: CHART.FETCH_INITIAL_DATA_FULFILLED, payload: response.value, error: { status: false } });
//         }).catch(error => {
//             dispatch({ type: REQUEST.FAILED, error: { status: true, message: error.message } });
//         });
// }


export const fetchInitialData = () => dispatch => {
    return setTimeout(() => {
        dispatch({ type: CHART.FETCH_INITIAL_DATA_FULFILLED, payload: historianData, error: { status: false } });
    })
}

// export const fetchInitialData = () => dispatch => {
//     var options = {
//         url: "http://10.2.233.17:32569/Historian/v2/ProcessValues?$filter=FQN%20eq%20%27MIX_TI01.Obj.Out_rCurrentValue%27%20and%20DateTime%20ge%202017-06-29T00:00:00Z&Resolution=600000",
//         username: 'Localwwadmin',
//         password: 'Admin00!',
//         workstation: '',
//         domain: ''
//     };

//     var type1msg = httpntlm.ntlm.createType1Message(options);
//     console.log("---------------", type1msg)

//     const url = "http://10.2.233.17:32569/Historian/v2/ProcessValues?$filter=FQN%20eq%20%27MIX_TI01.Obj.Out_rCurrentValue%27%20and%20DateTime%20ge%202017-06-29T00:00:00Z&Resolution=600000";

//     return fetch(url, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Access-Control-Allow-Origin': 'http://localhost:3000',
//             'Access-Control-Allow-Credentials': 'true',
//             'Connection': 'keep-alive',
//             'Authorization': "NTLM TlRMTVNTUAACAAAADAAMADgAAAAFgomi+LiAbSIrMeEAAAAAAAAAALoAugBEAAAACgA5OAAAAA9HAEwATwBCAEEATAACAAwARwBMAE8AQgBBAEwAAQAeAFMAVABMAEIASQBPAFAARABWADAAMQBYADAAMgAwAAQAHgBnAGwAbwBiAGEAbAAuAHMAaQBhAGwALgBjAG8AbQADAD4AUwBUAEwAQgBJAE8AUABEAFYAMAAxAFgAMAAyADAALgBnAGwAbwBiAGEAbAAuAHMAaQBhAGwALgBjAG8AbQAFABAAcwBpAGEAbAAuAGMAbwBtAAcACACh/a17qyPWAQAAAAA=",
//             'Cookie': 'io=bu8opToK6se-vlbtAAAt'
//         }
//     }).then(response => response.text())
//     .then(contents => console.log(contents))
// }





