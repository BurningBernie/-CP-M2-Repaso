import React from "react";
import * as ReactRedux from "react-redux";
import { getHouse } from "../../redux/actions";
import CharacterCard from "../CharacterCard/CharacterCard";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {
  const dispatch = ReactRedux.useDispatch();

  const house = ReactRedux.useSelector((state) => state.house);

  // console.log(characters);
  const houseId = props.match.params.houseId;

  React.useEffect(() => {
    dispatch(getHouse(houseId));
  }, [dispatch, houseId]);

  return (
    <div>
      <p>{house.name}</p>
      <p>{house.words}</p>
      <h3>Characters</h3>
      {house.characters?.map((character) => (
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
