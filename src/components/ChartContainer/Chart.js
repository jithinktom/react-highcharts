import React from "react";
// import Highcharts from "highcharts";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Client } from '@stomp/stompjs';

import HC_more from "highcharts/highcharts-more"; //module
import accessibility from "highcharts/modules/accessibility"; //module
HC_more(Highcharts); //init module

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.chartComponent = React.createRef();
        var classComponent = this;

        this.state = {
            options: {
                chart: {
                    events: {
                        load: function () {

                            var xAxis = this.xAxis[0]
                            var chart = this;
                            const seriesArr = ["Temperature", "pH", "Pressure"];
                            var series0 = this.series[0]
                            var series1 = this.series[1]
                            
                            setInterval(function () {
                                // console.log(this)
                                var x = (new Date()).getTime(), // current time
                                    y = Math.floor(Math.random() * 50);

                                    var a = (new Date()).getTime(), // current time
                                    b = Math.floor(Math.random() * 50);
                                // classComponent.appendData({
                                //     "name": seriesArr[Math.floor(Math.random() * seriesArr.length)],
                                //     data: [x, y]
                                // })

                                // var setExtremes = xAxis.max == xAxis.dataMax && this.fixedRange;
                                // series0.addPoint([x, y], true, false);
                                series1.addPoint([a, b], true, false);

                                // if (setExtremes) {
                                //     xAxis.setExtremes(x - this.fixedRange, x);
                                // }
                                // chart.redraw();

                                xAxis.setExtremes(x - 1000 * 60, x)
                            }, 1000);



                            // this.client = new Client();
                            // this.client.configure({
                            //     brokerURL: 'ws://stlbiopdv02x145:8080/stomp',
                            //     onConnect: () => {
                            //         console.log('onConnect');
                            //         this.client.subscribe('/queue/schedule', message => {
                            //             var messageData = JSON.parse(message.body)[0];
                            //             series.addPoint([x, y], true, true);
                            //         });
                            //     }
                            // });
                            // this.client.activate();


                        }
                    }
                },

                time: {
                    useUTC: false
                },

                rangeSelector: {
                    buttons: [{
                        count: 1,
                        type: 'minute',
                        text: '1M'
                    }, {
                        count: 5,
                        type: 'minute',
                        text: '5M'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    inputEnabled: false,
                    selected: 0
                },

                title: {
                    text: "OPC UA Data"
                },

                exporting: {
                    enabled: false

                },
                xAxis: {
                    type: "datetime"
                },

                legend: {
                    layout: 'vertical',
                    verticalAlign: 'middle',
                    align: 'left',
                    showCheckbox: true,
                    enabled: true,
                    itemCheckboxStyle: { "width": "13px", "height": "13px", "position": "absolute" },
                    title: {
                        style: { "fontWeight": 100, "fontFamily": '"verdana", Arial, sans-serif' }
                    }
                },

                series: [
                        {
                        name: props.chartData.name,
                        data: props.chartData.data,
                        type: "spline",
                        lineColor: '#ff1e00',
                        color: '#ff1e00'
                    },
                    {
                        name: props.chartData.name + "_copy",
                        data: props.chartData.data,
                        type: "spline",
                        lineColor: 'green',
                        color: 'green'
                    }
                    // {
                    //     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                    // },
                    // {
                    //     data: [59.9, 71.5, 6.4, 129.2, 64.0, 176.0, 75.6, 148.5, 286.4, 64.1, 6.6, 34.4]
                    // }
                ]
            }
        };
    }
    appendData = (data) => {
        let chart = this.chartComponent.current.chart;
        // var series = false;
        // console.log(chart.series[0])
        chart.series[1].addPoint(Math.floor(Math.random() * 40), true);
        // chart.redraw()
        // for (var i = 0; i < chart.series.length; i++) {
        //     if (chart.series[i].name === data.name) {
        //         series = chart.series[i];
        //     }
        // }


        // // console.log(series.addPoint)
        // if (series) {
        //     console.log(series.name, series.index)
        //     series.addPoint(data.data, true, true);
        // }
        // else {
        //     chart.addSeries({
        //         name: data.name,
        //         data: [data.data]
        //     });
        // }

    }
    handleClick = () => {
        console.log("button clicked");
        console.log(this.chartComponent.current.chart)
        this.chartComponent.current.chart.addSeries({
            name: "pH",
            data: (function () {
                var arr = []
                for (let i = 0; i < 30; i++) {
                    arr.push([Date.now() + Math.floor(Math.random() * Math.floor(4000)), Math.floor(Math.random() * Math.floor(40))])
                }
                return arr
            }())
        });
    }

    render() {
        return (
            <div>
                <HighchartsReact
                    constructorType={"stockChart"}
                    ref={this.chartComponent}
                    highcharts={Highcharts}
                    options={this.state.options}
                />
                <button onClick={this.handleClick}>Add series</button>
            </div>
        );
    }
}

export default Chart;
