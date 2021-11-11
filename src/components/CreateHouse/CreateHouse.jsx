import React from "react";
import { createHouse } from "../../redux/actions";
import * as ReactRedux from "react-redux";
//import { connect } from "react-redux";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {
  const [input, setInput] = React.useState({
    name: "",
    region: "",
    words: "",
  });

  const dispatch = ReactRedux.useDispatch();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createHouse(input));
    setInput({
      name: "",
      region: "",
      words: "",
    });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        name="name"
        value={input.name}
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="region">Region: </label>
      <input
        type="text"
        name="region"
        value={input.region}
        onChange={(e) => handleInputChange(e)}
      />
      <label htmlFor="words">Words: </label>
      <input
        type="text"
        name="words"
        value={input.words}
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit">
        Create
      </button>
    </form>
  );
};

export default CreateHouse;
