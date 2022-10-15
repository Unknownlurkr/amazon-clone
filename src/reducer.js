//declare app lvl states to be used laetr
//reducer alwways listening to dispatchg
//states used-starts with empty basket  and guest user
export const initialState = {
  basket: [],
};

//selector-takes basket and return following:
//reduce map through the basket:tally up total
//intial amount starts at xzero, iterate through basket and add up the item price
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

//reducer taking in state and action to preform opperationson the state
const reducer = (state, action) => {
  //view dispatched items
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //return the state
      //and the state of the basket and whatever was added(action item)
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    //default state
    default:
      return state;
  }
};

export default reducer;
