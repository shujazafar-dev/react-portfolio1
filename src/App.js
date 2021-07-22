import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-lists.component";
import SearchBox from "./components/search-box";
export class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div>
        <div className="App">
          <h1>Monsters App</h1>
          <SearchBox
            placeholder="search monster..."
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </div>
      </div>
    );
  }
}

export default App;
