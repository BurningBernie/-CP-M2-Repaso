import React, { Component } from "react";
import { connect } from "react-redux";
import mainImage from "../../img-cp2/main-image-cp2.jpg";
import { getAllHouses } from "../../redux/actions";
import HouseCard from "../HouseCard/HouseCard";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX, JUNTO A MAP_STATE_TO_PROPS
// Y MAP_DISPATCH_TO_PROPS!! <3
export class Houses extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    this.props.getAllHouses();
    // this.setState({
    //   houses: this.props.getAllHouses(),
    // });
  }

  render() {
    return (
      <div>
        <h1>Game of Thrones</h1>
        <img src={mainImage} alt="main-img" />
        <h3>Houses</h3>
        {this.props.houses?.map((e) => {
          return (
            <HouseCard
              key={e.id}
              id={e.id}
              region={e.region}
              name={e.name}
              words={e.words}
              characters={e.characters}
            />
          );
        })}
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    getAllHouses: () => dispatch(getAllHouses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
