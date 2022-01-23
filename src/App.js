import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      SearchBox: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchChange: event.target.value.toLowerCase() });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toString().toLowerCase().includes(this.state.searchChange);
    });
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
