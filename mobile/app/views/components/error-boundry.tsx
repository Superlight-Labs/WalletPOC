import { Component, ErrorInfo, ReactNode } from "react";
import { SetterOrUpdater } from "recoil";
import { LoadingState } from "state/atoms";

type Props = {
  children?: ReactNode;
  updateState: SetterOrUpdater<LoadingState>;
};

class ErrorBoundary extends Component<Props> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error boundry caught error", { error, errorInfo });
    this.props.updateState({ status: "Error", message: "Something weng wrong" });
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;
