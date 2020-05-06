import React from 'react';
// import Highcharts from 'highcharts';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Client } from '@stomp/stompjs';
import { connect } from 'react-redux';
import { fetchInitialData } from '../../store/actions/chartActions';
import clone from 'clone';

class ChartContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    second: '%e of %b'
                }
            },
            series: [
                {
                    name: "AIG01.CurrentValue",
                    type: "spline",
                    lineColor: '#ff1e00',
                    color: '#f2dcfa',
                    data: []
                }
            ]
        }
    }

    socketConnect = () => {
        this.client = new Client();
        this.client.configure({
            brokerURL: 'ws://stlbiopdv02x145:8080/stomp',
            onConnect: () => {
                console.log('onConnect');
                this.client.subscribe('/queue/schedule', message => {
                    var messageData = JSON.parse(message.body)[0];
                    console.log(messageData)
                    var newState = clone(this.state);
                    newState.series[0].data.push(parseFloat(messageData.y))
                    if (newState.series[0].data.length > 50)
                        newState.series[0].data.shift()
                    this.setState(newState)
                });
                this.client.subscribe('/topic/greetings', message => {
                    console.log("Message received from greetings: ", JSON.parse(message.body))
                });
            }
        });
        this.client.activate();
    }

    componentDidMount() {
        // this.props.fetchInitialData();
        this.socketConnect();
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     let speedData = prevState.series[0];
    //     speedData.data = nextProps.data.data;
    //     return {
    //         series: [speedData]
    //     }
    // }

    render() {
        return (
            <div className="chart-container">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={this.state} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.chartData.initialData
    }
}

export default connect(mapStateToProps, {
    fetchInitialData
})(ChartContainer);
