import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      champions: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json"
    )
      .then((response) => response.json())
      .then((champs) => this.setState({ champions: champs }));
  }

  render() {
    return (
      <div className="App">
        <CardList champions={this.state.champions}></CardList>
      </div>
    );
  }
}
export default App;
