import React, { PureComponent } from 'react';
import ChartFilterMenuBar from '../MenuBar/ChartFilterMenuBar/ChartFilterMenuBar';
import ChartContainer from '../ChartContainer/ChartContainer';
import './TrendsAppContainer.scss';

class TrendsAppContainer extends PureComponent {
    render() {
        return (
            <div className="trends-container">
                <ChartFilterMenuBar />
                <ChartContainer />
            </div>
        )
    }
}

export default TrendsAppContainer;