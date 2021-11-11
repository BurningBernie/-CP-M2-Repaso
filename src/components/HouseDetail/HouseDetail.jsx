import React from "react";
import * as ReactRedux from "react-redux";
import { getHouse } from "../../redux/actions";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
  const dispatch = ReactRedux.useDispatch();

  const name = ReactRedux.useSelector((state) => state.house.name);
  const words = ReactRedux.useSelector((state) => state.house.words);

  const characters = ReactRedux.useSelector((state) => state.house.characters);
  // console.log(characters);
  const houseId = props.match.params.houseId;

  React.useEffect(() => {
    dispatch(getHouse(houseId));
  }, [dispatch, houseId]);

  return (
    <div>
      <p>{name}</p>
      <p>{words}</p>
      <h3>Characters</h3>
      {characters?.map((character) => (
        <CharacterCard
          key={character.id}
          id={character.id}
          fullName={character.fullName}
          title={character.title}
          family={character.family}
          imageUrl={character.imageUrl}
          houseId={character.houseId}
        />
      ))}
    </div>
  );
};

export default HouseDetail;
