export const initialState = {
  basket: [],
  user: null,
};

//selector---  calculating the total price of item in the checkout page 👡
export function getBasketTotal(basket) {
  var total = 0.0;
  basket.map((item) => total += Number.parseFloat(item.price) );
  return total;
}

const reducer = (state, action) => {
  switch (action.type) {
    // adding to the basket 🏀
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    // removing from the basket ⚾️
    case "REMOVE_FROM_BASKET":
      // first copy the basket we have in new variable
      var newBasket = [...state.basket];
      // find the index of the item you want to delete
      var itemIndex = -1;
      for (let i = 0; i < state.basket.length; i++) {
        itemIndex = itemIndex + 1;
        if (state.basket[itemIndex].id == action.item.id) {
          break;
        }
      }
      // if we have the index
      if (itemIndex > -1) {
        // delete that item 💀
        newBasket.splice(itemIndex, 1);
      } else
        console.warn(
          `cant delete the item of id: ${action.item.id} as it is not in basket`
        );

      return {
        ...state,
        basket: newBasket,
      };

    // empty the basket 🏀
    case 'EMPTY_BASKET':
      return{
        ...state,
        basket: []
      }

    // set the user
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    //default state 📡
    default:
      return state;
  }
};

export default reducer;
