import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { Client } from '@stomp/stompjs';

import HC_more from "highcharts/highcharts-more"; //module
HC_more(Highcharts); //init module

class Chart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.chartData)

        this.state = {
            options: {
                chart: {
                    events: {
                        load: function () {

                            // set up the updating of the chart each second
                            var series = this.series[0];

                            setInterval(function () {
                                var x = (new Date()).getTime(), // current time
                                    y = Math.round(Math.random() * 100);
                                series.addPoint([x, y], true, true);
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
                    text: props.chartData.name
                },

                exporting: {
                    enabled: true
                },

                series: [{
                    name: props.chartData.name,
                    data: props.chartData.data,
                    type: "spline",
                    lineColor: '#ff1e00',
                    color: '#f2dcfa'
                }]
            }
        };
    }

    render() {
        return (
            <HighchartsReact
                constructorType={"stockChart"}
                ref={this.chartComponent}
                highcharts={Highcharts}
                options={this.state.options}
            />
        );
    }
}

export default Chart;
