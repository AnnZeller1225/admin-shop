import image from "../img/image 1.png";
import image3 from "../img/image 3.png";
import image4 from "../img/image 4.png";

const initialState = {
  cardsGroup: [
    {
      id: 1,
      img: image,
      price: "1100",
      info: "Очень красивая лампа",
      color: "Красный",
      quantity: 1,
    },
    {
      id: 2,
      img: image3,
      price: "1200",
      info: "Люстра, шикос!",
      color: "Синий",
      quantity: 6,
    },
    {
      id: 3,
      img: image4,
      price: "700",
      info: "А эта, как тарелка перевернутая",
      color: "Синий",
      quantity: 6,
    },
  ],
  modalIsOpen: false,
};
let id = 3;
const deleteCard = (state, worklogId) => {
  const { cardsGroup } = state;
  const cardIndex = cardsGroup.findIndex(({ id }) => id === worklogId);
  const card = cardsGroup[cardIndex];
  card.quantity = card.quantity - 1;

  if (card.quantity < 1) {
    let newCardsGroup = [
      ...cardsGroup.slice(0, cardIndex),
      ...cardsGroup.slice(cardIndex + 1),
    ]; //список оставшихся card
    return {
      ...state,
      cardsGroup: newCardsGroup,
    };
  } else {
    let newCardsGroup = [
      ...cardsGroup.slice(0, cardIndex),
      card,
      ...cardsGroup.slice(cardIndex + 1),
    ];
    return {
      ...state,
      cardsGroup: newCardsGroup,
    };
  }
};
const changeModal = (state) => {
  const { modalIsOpen } = state;

  return {
    ...state,
    modalIsOpen: !modalIsOpen,
  };
};
const addCard = (state, info, price, quantity, color) => {
  id++;
  const { cardsGroup } = state;
  const newCard = {
    id: id,
    info: info,
    quantity: quantity,
    color: color,
    price: price,
  };
  let newcardsGroup = [...cardsGroup, newCard];
  return {
    ...state,
    cardsGroup: newcardsGroup,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      return deleteCard(state, action.payload);
    case "CHANGE_MODAL":
      return changeModal(state, action.payload);
    case "ADD_CARD":
      return addCard(
        state,
        action.info,
        action.price,
        action.quantity,
        action.color
      );

    default:
      return state;
  }
};
export default reducer;
