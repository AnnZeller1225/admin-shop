import React, { Component } from "react";
// import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "../../utils";
import CardItem from "../CardItem";
import { deleteCard } from "../../actions";
import './CardsGroup.css';
const CardsGroup = ({ cardsGroup, onDeleteCard }) => {

  return (
    <div className="cardsGroup">
      {cardsGroup.map((el) => {
        return (
          <CardItem
            card={el}
            key={el.id}
            onDeleteCard={() => onDeleteCard(el.id)}
          />
        );
      })}
    </div>
  );
};

class CardsGroupContainer extends Component {
  render() {
    const { onDeleteCard, cardsGroup } = this.props;

    return (
      <div>
        <CardsGroup
          cardsGroup={cardsGroup}
          onDeleteCard={onDeleteCard}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCard: (id) => dispatch(deleteCard(id)),
  };
};

export default compose(connect(null, mapDispatchToProps))(
  CardsGroupContainer
);
