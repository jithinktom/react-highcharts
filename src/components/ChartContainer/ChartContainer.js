import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { fetchInitialData } from './../../store/actions/chartActions';
import Chart from './Chart';

class ChartContainer extends PureComponent {

    renderChart = () => {
        if (this.props.initialData.data.length > 0) {
            return <Chart chartData={this.props.initialData} />
        }
        return null
    }
    componentDidMount(){
        this.props.fetchInitialData();
    }
    render() {
        return (
            <div>
                {this.renderChart()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        initialData: state.chartData.initialData
    }
}

export default connect(mapStateToProps, {
    fetchInitialData
})(ChartContainer)
