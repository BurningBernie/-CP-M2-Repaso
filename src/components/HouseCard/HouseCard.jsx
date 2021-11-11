import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteHouse } from "../../redux/actions";
import { Link } from "react-router-dom";

// CUIDADOOOO. SI O SI CLASS COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR EL METODO CONNECT DE REDUX , JUNTO A MAP_DISPATCH_TO_PROPS! <3
export class HouseCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div>
        <button onClick={() => this.props.deleteHouse(this.props.id)}>
          Eliminar
        </button>
        <Link to={`/houses/${this.props.id}`}>
          <h3>{this.props.name}</h3>
        </Link>
        <p>{`Region: ${this.props.region}`}</p>
        <p>{`Words: ${this.props.words}`}</p>
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    deleteHouse: (id) => dispatch(deleteHouse(id)),
  };
};

export default connect(null, mapDispatchToProps)(HouseCard);
