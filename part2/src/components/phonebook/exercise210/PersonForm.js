const PersonForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <div>
        name:{" "}
        <input
          value={props.newName}
          onChange={props.handleInputNameChange}
          type="text"
        />
      </div>

      <div>
        number:{" "}
        <input
          value={props.newNumber}
          onChange={props.handleInputNumberChange}
          type="number"
        />
      </div>

      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
