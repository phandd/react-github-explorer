import React from 'react';
import { withRouter } from 'react-router';

// To avoid auto scroll down when start a new screen. Read more: https://reacttraining.com/react-router/web/guides/scroll-restoration
class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)