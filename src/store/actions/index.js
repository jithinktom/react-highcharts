import axios from "axios";

export const userClient = axios.create({
    baseURL: `${process.env.REACT_APP_USER_API}`,
    headers: {
        "Content-Type": "application/json"
    }
})

export const chartClient = axios.create({
    baseURL: `https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/activity.json`,
    headers: {
        "Content-Type": "application/json"
    }
})

