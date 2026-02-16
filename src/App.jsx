import React, { Component } from "react";
import data from "./data";
import ChildComponent from "./ChildComponent";

class App extends Component {
  state = {
    pets: data
  };

  toggleTreat = (id) => {
    this.setState({
      pets: this.state.pets.map((pet) =>
        pet.id === id ? { ...pet, hasTreat: !pet.hasTreat } : pet
      )
    });
  };

  render() {
    return (
      <div>
        <h1>Pet Kennel</h1>

        {this.state.pets.map((pet) => (
          <ChildComponent
            key={pet.id}
            pet={pet}
            toggleTreat={this.toggleTreat}
          />
        ))}
      </div>
    );
  }
}

export default App;
