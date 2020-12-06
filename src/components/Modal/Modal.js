import React, { useState } from "react";
import { addCard, changeModal } from "../../actions";
import { connect } from "react-redux";
import "./Modal.css";

const Modal = ({ dispatch }) => {
  const [info, setInfo] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("Красный");
  const [img, setImg] = useState("");
  const [quantity, setQuantity] = useState("");
  const [file, setFile] = "";
  const [imgUrl, setImgUrl] = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard(info, price, quantity, color));
    dispatch(changeModal());
    setPrice("");
    setInfo("");
    setColor("");
    setImg("");
    setQuantity("");
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImgUrl(reader.result);
      setFile(file);
    };
  };
  return (
    <div className="modal-wrap">
      <form className="modal" onSubmit={(e) => handleSubmit(e)}>
        <div className="modal__title">Добавить товар</div>
        <div
          className="close-btns"
          onClick={() => {
            dispatch(changeModal());
          }}
        >
          <div className="close-btn1"></div>
          <div className="close-btn2"></div>
        </div>
        <div className="modal-item">
          <span className="modal-item__title">Название</span>
          <div className="modal-item__inp modal-item__inp--longer">
            <input
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              type="text"
              className=""
            />
          </div>
        </div>
        <div className="modal-item">
          <span className="modal-item__title">Цена</span>
          <div className="modal-item__inp">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              className=""
            />
            <span>руб</span>
          </div>
        </div>
        <div className="modal-item">
          <span className="modal-item__title">Количество</span>
          <div className="modal-item__inp">
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
            />
            <span>шт</span>
          </div>
        </div>
        <div className="modal-item">
          <span>Вкладка</span>
          <div className="modal-item__inp">
            <label>
              <select value={color} onChange={(e) => setColor(e.target.value)}>
                <option value="Красный">Красный</option>
                <option value="Синий">Синий</option>
                <option value="Зеленый">Зеленый</option>
              </select>
            </label>
          </div>
        </div>
        <div className="modal-btns">
          <span>Кликните или перетащите сюда картинку</span>
          <input
            className="modal-btn"
            type="file"
            onChange={(e) => handleImageChange(e)}
          />
        </div>
        <div className="btn-wrap">
          <div
            className="btn-send"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Добавить
          </div>
          <span
            onClick={() => {
              dispatch(changeModal());
            }}
            className="cansel"
          >
            Отмена
          </span>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps({ modal }) {
  return {
    modal: modal,
  };
}
export default connect(mapStateToProps)(Modal);
