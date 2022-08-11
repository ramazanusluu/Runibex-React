import React, { Component } from "react";

export default class App extends Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return (
      <div>
        <h1>You are in the norhern hemisphere.</h1>
      </div>
    );
  }
}
