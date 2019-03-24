import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  // React Docs
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         hasError: false,
  //         errorMessage: ''
  //     }
  // }

  state = {
    hasError: false,
    errorMessage: ''
  };

  // React Docs
  // static getDerivedStateFromError(error) {
  //     // Update state so the next render will show the fallback UI.
  //     return { hasError: true };
  // }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}
