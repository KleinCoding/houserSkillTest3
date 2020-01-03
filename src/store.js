import { createStore } from "redux";

const initialState = {
  name: "",
  address: "",
  city: "",
  house_state: "",
  zipcode: null,
  img: "",
  mortgage: null,
  rent: null,
  house: [],
};

export const HOUSE_NAME = "HOUSE_NAME";
export const HOUSE_ADDRESS = "HOUSE_ADDRESS";
export const HOUSE_CITY = "HOUSE_CITY";
export const HOUSE_STATE = "HOUSE_STATE";
export const HOUSE_ZIP = "HOUSE_ZIP";
export const HOUSE_IMG = "HOUSE_IMG";
export const HOUSE_MORTGAGE = "HOUSE_MORTGAGE";
export const HOUSE_RENT = "HOUSE_RENT";
export const HOUSE_CANCEL = "HOUSE_CANCEL";
export const ADD_HOUSE = "ADD_HOUSE"

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case HOUSE_NAME:
      return {
        ...state,
        name: payload
      };
    case HOUSE_ADDRESS:
      return {
        ...state,
        address: payload
      };
    case HOUSE_CITY:
      return {
        ...state,
        city: payload
      };
    case HOUSE_ZIP:
      return {
        ...state,
        zipcode: payload
      };
    case HOUSE_STATE:
      return {
        ...state,
        house_state: payload
      };
    case HOUSE_IMG:
      return {
        ...state,
        img: payload
      };
    case HOUSE_MORTGAGE:
      return {
        ...state,
        mortgage: payload
      };
    case HOUSE_RENT:
      return {
        ...state,
        rent: payload
      };

    case HOUSE_CANCEL:
      return {
        name: "",
        address: "",
        city: "",
        state: " ",
        zipcode: null,
        img: "",
        mortgage: null,
        rent: null
      };

      case ADD_HOUSE:
          const {
            name,
            address,
            city,
            house_state,
            zipcode,
            img,
            mortgage,
            rent
          } = state;
          const house = {
              name,
              address,
              city,
              house_state,
              zipcode,
              img,
              mortgage,
              rent
          }
          const newHouse = [house];
          return {
              ...state,
              house: newHouse
          }
    default:
      return state;
  }
}

export default createStore(reducer);
