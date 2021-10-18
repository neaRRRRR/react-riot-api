import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();

    this.state = {
      champions: [],
      searchField: "",
    };

    //!this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/ngryman/lol-champions/master/champions.json"
    )
      .then((response) => response.json())
      .then((champs) => this.setState({ champions: champs }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { champions, searchField } = this.state;
    const filteredChamps = champions.filter((champion) =>
      champion.name.toLowerCase().startsWith(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>League Of Legends</h1>
        <SearchBox
          placeholder="Search Champions"
          handleChange={this.handleChange}
        />
        <CardList champions={filteredChamps}></CardList>
      </div>
    );
  }
}
export default App;
