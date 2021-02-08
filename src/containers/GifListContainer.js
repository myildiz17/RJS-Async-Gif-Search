import React, { Component } from "react";
import GifSearch from '../components/GifList'

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g"
    )
      .then((res) => res.json())
      .then((gifs) => {
        this.setState({
          data: gifs.data.slice(0,3)
        });
        
      });
  }

  render() {
    return <div>
        <GifSearch  data={this.state.data} />
    </div>;
  }
}

export default GifListContainer;
