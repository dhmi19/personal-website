import React from 'react';
import ReactGA from 'react-ga';
import { withRouter } from 'react-router-dom';

class GAListener extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-179006078-1");
    this.sendPageView(this.props.history.location);
    this.props.history.listen(this.sendPageView);
  }

  sendPageView = location => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  };

  render() {
    return this.props.children;
  }
}

export default withRouter(GAListener);