import React from "react";
import "./CardItem.css";
const CardItem = ({ card, onDeleteCard }) => {
  return (
    <div className="card">
      <div className="card-img">
      <img src={card.img} alt="" />
      </div>
      <div className="card-info">{card.info}</div>
      <div className="card-price">{card.price}руб.</div>
      <div className="card-color">{card.color}</div>
      <div className="card-quantity">{card.quantity}шт</div>
      <div className="del" onClick={onDeleteCard}>
        удалить
      </div>
    </div>
  );
};

export default CardItem;
