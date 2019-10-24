import React, { Component } from "react";
import axios from "axios";
import TopSpot from "./topspot";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="App">
        <div className="card">
          <div className="cardy-body">
            <div className="card-title"><h4>San Diego Top Spots</h4></div>
            <div className="card-text">
              A list of the top 30 places to see in San Diego, California.
            </div>
          </div>
        </div>
        {this.state.topspots.map(topspots => (
          <TopSpot
            key={topspots.id}
            name={topspots.name}
            description={topspots.description}
            location={topspots.location}
          />
        ))}
      </div>
    );
  }
}

export default App;
