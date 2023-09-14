import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    // You can handle errors here, e.g., log them or display an error message
    console.error('Error:', error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // Render an error message or fallback UI
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
