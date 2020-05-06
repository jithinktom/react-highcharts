export const preloadedState = {
    user: {
        isLoggedin: false,
        details: {
            sub: null,
            name: null
        },
        session: {
            statusCode: null,
            result: {
                isValid: null,
                statusCode: null
            },
            description: ""
        }
    },
    request: {
        pending: false,
        error: null,
        message: null
    },
    chartData: {
        filterData: {},
        initialData: {
            data: []
        }
    }
}