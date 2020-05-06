export const filterMenuItems = [
    {
        name: "configuration",
        label: "Configuration",
        children: [
            {
                name: "chartType",
                label: "Chart Type",
                type: "radio",
                children: [
                    {
                        value: "line",
                        label: "Line"
                    },
                    {
                        value: "area",
                        label: "Area"
                    },
                    {
                        value: "scatter",
                        label: "Scatter"
                    }
                ]
            },
            {
                name: "displayStyle",
                label: "Display Style",
                type: "checkbox",
                children: [
                    {
                        value: "overlay",
                        label: "Overlay"
                    },
                    {
                        value: "stacked",
                        label: "Stacked"
                    }
                ]
            },
            {
                name: "parameterSelection",
                label: "Parameter Selection",
                type: "checkbox",
                children: [
                    {
                        value: "parameter",
                        label: "Parameter"
                    },
                    {
                        value: "group",
                        label: "Group"
                    },
                    {
                        value: "batch/run",
                        label: "Batch/Run"
                    }
                ]
            },
            {
                name: "timeDisplay",
                label: "Time Display",
                type: "checkbox",
                children: [
                    {
                        value: "absolute",
                        label: "Absolute"
                    },
                    {
                        value: "relative",
                        label: "Relative"
                    }
                ]
            },
            {
                name: "trendsFileFormat",
                label: "Trends File Format",
                type: "checkbox",
                children: [
                    {
                        value: "png",
                        label: "PNG"
                    },
                    {
                        value: "jpg",
                        label: "JPG"
                    },
                    {
                        value: "pdf",
                        label: "PDF"
                    }
                ]
            },
            {
                name: "dataFileFormat",
                label: "Data File Format",
                type: "checkbox",
                children: [
                    {
                        value: "csv",
                        label: "CSV"
                    },
                    {
                        value: "excel",
                        label: "Excel"
                    },
                    {
                        value: "pdf",
                        label: "PDF"
                    }
                ]
            }
        ]
    },
    {
        name: "view",
        label: "View",
        children: [
            {
                name: "navigator",
                label: "Navigator",
                type: "checkbox",
                children: [
                    {
                        value: "parameterNavigator",
                        label: "Parameter Navigator",

                    },
                    {
                        value: "timeNavigator",
                        label: "Time Navigator"
                    }
                ]
            }
        ]
    }
]