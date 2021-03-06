export const initialState = {
  basket: [],
  user: null
};

// selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item] //talkn about this
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item, index) => index !== action.id)
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  };
} 
export default reducer;