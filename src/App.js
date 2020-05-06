import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { SESSION_VALIDATE } from './utils/constants/messageConstants';
import Loading from "./components/LoadingContainer/LoadingContainer";
import TrendsContainer from './components/TrendsAppContainer/TrendsAppContainer';
import ErrorContainer from './components/ErrorContainer/ErrorContainer';
import { validateSession } from './store/actions/userActions';

class App extends React.Component {

  componentDidMount() {
    this.props.validateSession();
  }

  handleRender = () => {
    const { loading, requestError, isValidSession } = this.props;
    const { LOADING, REQUEST_FAILED, INVALID_SESSION } = SESSION_VALIDATE;
    if (loading)
      return <Loading text={LOADING} />
    else if (requestError) {
      return <ErrorContainer text={REQUEST_FAILED} />
    }
    else if (!isValidSession) {
      return <ErrorContainer text={INVALID_SESSION} />
    }
    return <TrendsContainer />
  }

  render() {
    return (
      <div className="App">
        {this.handleRender()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.request.pending,
    isValidSession: state.user.session.result.isValid,
    requestError: state.request.error
  }
}

export default connect(mapStateToProps, {
  validateSession
})(App)
