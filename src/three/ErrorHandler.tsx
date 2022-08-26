import { Component, ReactNode } from "react";

export default class ErrorHandler extends Component<{
  fallback: ReactNode;
  children: ReactNode;
}> {
  state = { hasError: false, errorr: null };

  static getDerivedStateFromError(e: Error) {
    return {
      hasError: true,
      error: e,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
