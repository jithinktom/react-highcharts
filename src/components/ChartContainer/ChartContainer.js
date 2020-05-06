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
        }
    }

    socketConnect = () => {
        console.log("called socket connet")
        this.client = new Client();
        this.client.configure({
            brokerURL: 'ws://stlbiopdv02x145:8080/stomp',
            onConnect: () => {
                console.log('onConnect');
                this.client.subscribe('/queue/schedule', message => {
                    var messageData = JSON.parse(message.body)[0];
                    // console.log(messageData)
                    this.appendRealTimeData(messageData)
                });
            }
        });
        this.client.activate();
    }

    appendRealTimeData = (messageData) => {
        var newState = clone(this.state);
        if (!newState[messageData.name]) {
            this.setState({
                [messageData.name]: {
                    name: messageData.name,
                    data: [[Date.now(), parseFloat(messageData.y)]],
                    x: {
                        title: "",
                        type: 'datetime'
                    }
                }
            })
        }
        else {
            newState[messageData.name].data.push([Date.now(), parseFloat(messageData.y)])
            if (newState[messageData.name].data.length > 50)
                newState[messageData.name].data.shift()
            this.setState(newState)
        }

    }

    componentDidMount() {
        this.props.fetchInitialData();
        this.socketConnect();
    }

    mapStateToOptions = () => {
        // console.log(this.state)
        var keys = Object.keys(this.state)
        // console.log(keys)
        let options = {
            series: []
        }
        if (keys.length > 0)
            for (let i = 0; i < keys.length; i++) {
                options.series.push({
                    name: keys[i],
                    type: "spline",
                    lineColor: '#ff1e00',
                    color: '#f2dcfa',
                    data: this.state[keys[i]].data
                })
            }
        return options;
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data.length > 0)
            return {
                [nextProps.data[0].FQN]: {
                    name: nextProps.data[0].FQN,
                    type: "spline",
                    lineColor: '#ff1e00',
                    color: '#f2dcfa',
                    data: nextProps.data.map(val => {
                        return [val.DateTime, val.Value]
                    }),
                    x: {
                        title: nextProps.data[0].FQN,
                        type: 'datetime'
                    },
                    y: {
                        title: ""
                    }
                }
            }
        return null
    }

    render() {
        return (
            <div className="chart-container">
                <HighchartsReact
                    highcharts={Highcharts}
                    constructorType={'stockChart'}
                    options={this.mapStateToOptions()} />
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
