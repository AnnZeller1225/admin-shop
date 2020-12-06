export const deleteCard = (cardId) => {
  return {
    type: "DELETE_CARD",
    payload: cardId,
  };
};
export const changeModal = () => {
  return {
    type: "CHANGE_MODAL",
  };
};
export const addCard = (info, price, quantity, color) => {
  return {
    type: "ADD_CARD",
    info,
    price,
    quantity,
    color,
  };
};
