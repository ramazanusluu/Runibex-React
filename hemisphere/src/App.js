import React, { Component } from "react";
import HemisphereDisplay from "./components/HemisphereDisplay";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: "",
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return (
        <>
          <div>
            <h1>{this.state.errorMessage}</h1>
          </div>
        </>
      );
    } else if (!this.state.errorMessage && this.state.latitude) {
      return (
        <>
          <HemisphereDisplay latitude={this.state.latitude} />
        </>
      );
    } else {
      return (
        <>
          <div>
            <h1>Loading...</h1>
          </div>
        </>
      );
    }
  }
}
