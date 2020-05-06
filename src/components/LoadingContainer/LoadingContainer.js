import React from 'react';

class Loading extends React.Component {
    render() {
        return (
            <div className="loading-container">
                {this.props.text}
            </div>
        );
    }
}

export default Loading;
