const ChildComponent = ({ pet, toggleStatus }) => {
  return (
    <div>
      <h2>{pet.name}</h2>

      <img src={pet.image} width="200" />

      <p>{pet.adopted ? "Adopted" : "Available"}</p>

      <button onClick={() => toggleStatus(pet.id)}>
        Change Status
      </button>
    </div>
  );
};

export default ChildComponent;
