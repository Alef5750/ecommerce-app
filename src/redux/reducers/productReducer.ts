import { ActionNames } from "../constants/action-names";

interface Action<T = any> {
  type: string;
  payload?: T;
}

const initialState = {
  products: [
    {
      id: 1,
      title: "Intro to Redux",
      category: "course",
      price: "50",
    },
  ],
};

// fist parameter is the state, second is the action
export const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionNames.SET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
