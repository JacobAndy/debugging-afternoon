import { productsController } from "./productsController";

// Constants
const ADD_TO_SHOPPING_CART = "ADD_TO_SHOPPING_CART";
const REMOVE_FROM_SHOPPING_CART = "REMOVE_FROM_SHOPPING_CART";
const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_ALL_PRODUCTS_PENDING = "GET_ALL_PRODUCTS_PENDING";
const GET_ALL_PRODUCTS_FULFILLED = "GET_ALL_PRODUCTS_FULFILLED";

let initialState = {
  products: [],
  shoppingCart: [],
  loading: false
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS_PENDING:
      console.log("pending");
      return Object.assign({}, state, { loading: true });

    case GET_ALL_PRODUCTS_FULFILLED:
      console.log("fulfilled");
      return Object.assign({}, state, {
        loading: false,
        products: action.payload
      });

    case ADD_TO_SHOPPING_CART:
      return Object.assign({}, state, {
        shoppingCart: [...state.shoppingCart, action.payload]
      });

    case REMOVE_FROM_SHOPPING_CART:
      let newArray = state.shoppingCart.slice();
      newArray.splice(action.payload, 1);
      return Object.assign({}, state, { shoppingCart: newArray });

    default:
      console.log("default");
      return state;
  }
}

// Action Creators
export function addToShoppingCart(product) {
  return {
    type: ADD_TO_SHOPPING_CART,
    payload: product
  };
}

export function removeFromShoppingCart(productIndex) {
  return {
    type: REMOVE_FROM_SHOPPING_CART,
    payload: productIndex
  };
}
//Products as param?
export function getAllProducts() {
  return {
    type: GET_ALL_PRODUCTS,
    payload: productsController()
  };
}
