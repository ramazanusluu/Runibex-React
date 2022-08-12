import React, { Component } from "react";
import axios from "axios";
import SearchInput from "./components/SearchInput";
import ImageList from "./components/ImageList";

export default class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (entry) => {
    // console.log(entry);
    const response = await axios.get(
      `https://pixabay.com/api/?key=29216466-f4a3b0ccd2135b6e67122f573&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
