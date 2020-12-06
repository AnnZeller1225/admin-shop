import React from "react";
import { Link, HashRouter as Router, Route } from "react-router-dom";

import { connect } from "react-redux";
import CardsGroup from "../CardsGroup";
import { changeModal } from "../../actions";
import "./App.css";
import Modal from "../Modal";
const pages = [
  {
    name: `Красный`,
    id: 1,
    color: "Красный",
  },
  {
    name: `Синий`,
    id: 2,
    color: "Синий",
  },
  {
    name: `Зеленый`,
    id: 3,
    color: "Зеленый",
  },
];

const App = ({ cardsGroup, modalIsOpen, changeModal }) => {
  if (modalIsOpen) {
    return <Modal />;
  } else {
    return (
      <main className="app-wrap">
        <Router>
          <div className="wrap">
            <div className="wrap-links">
              <Link to="/" className="link">
                Все
              </Link>
              {pages.map((el) => {
                return (
                  <Link className="link" to={`/${el.id}`} key={el.id}>
                    {el.name}
                  </Link>
                );
              })}
            </div>
            <div className="modal-block">
              <div className="modal-block-el">
                <label>
                  <select onChange={changeModal}>
                    <option>управление</option>
                    <option>Добавить товар</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <Route
            exact
            path="/"
            render={(props) => (
           
              <CardsGroup
                {...props}
                cardsGroup={cardsGroup.map((el) => {
                  return el;
                })}
              />
            )}
          />
          {pages.map((el) => {
            return (
              <Route
                exact
                path={`/${el.id}`}
                key={el.id}
                render={(props) => (
                  <CardsGroup
                    {...props}
                    cardsGroup={cardsGroup.filter(function (elem) {
                      return elem.color === el.color;
                    })}
                  />
                )}
              />
            );
          })}
        </Router>
      </main>
    );
  }
};

const mapStateToProps = ({ cardsGroup, modalIsOpen }) => {
  return {
    cardsGroup: cardsGroup,
    modalIsOpen: modalIsOpen,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeModal: () => dispatch(changeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
