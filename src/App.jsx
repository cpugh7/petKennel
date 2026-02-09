import React, { Component } from "react";
import data from "./data";
import ChildComponent from "./ChildComponent";

class App extends Component {
  state = {
    pets: data
  };

  toggleStatus = (id) => {
    this.setState({
      pets: this.state.pets.map((pet) =>
        pet.id === id
          ? { ...pet, adopted: !pet.adopted }
          : pet
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
            toggleStatus={this.toggleStatus}
          />
        ))}
      </div>
    );
  }
}

export default App;
