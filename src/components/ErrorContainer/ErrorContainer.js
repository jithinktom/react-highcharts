import React from 'react';

class ErrorContainer extends React.Component {
    render() {
        return (
            <div className="error-container">
                {this.props.text}
            </div>
        );
    }
}

export default ErrorContainer;
