import { comprasTypes } from "../types/compraTypes";

export const compras = (state = [], action) => {
  switch (action.type) {
    case comprasTypes.ADD_COMPRA:
      return [...state, action.payload];
    case comprasTypes.ALL_DELETE:
        return []
        case comprasTypes.DELETE_COMPRA:
      return [...action.payload]
      case comprasTypes.CHANGE_STATUS :
      return [...action.payload]
      


    default:
      return state;
  }
};