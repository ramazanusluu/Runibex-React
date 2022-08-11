import React, { Component } from "react";
import SearchInput from "./components/SearchInput";

export default class App extends Component {
  onSearchSubmit = (entry) => {
    console.log(entry);
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
