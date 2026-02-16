const ChildComponent = ({ pet, toggleTreat }) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>{pet.name}</h2>

      <img
        src={pet.image}
        alt={pet.name}
        width="220"
        style={{ display: "block", marginBottom: "10px" }}
      />

      <p>{pet.hasTreat ? "Treat: YES" : "Treat: NO"}</p>

      <button onClick={() => toggleTreat(pet.id)}>
        {pet.hasTreat ? "NO treat" : "Give it a treat"}
      </button>
    </div>
  );
};

export default ChildComponent;
