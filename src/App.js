import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      SearchBox: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchChange: event.target.value.toLowerCase() });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toString()
        .toLowerCase()
        .includes(this.state.searchChange);
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>
    } else
    return (
      <div className="tc">
        <h1 className="f2">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
