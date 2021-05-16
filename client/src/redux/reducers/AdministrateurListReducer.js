// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function AdministrateurListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ADMINISTRATEUR_SUCCESS:
      return { ...state, administrateur: action.payload };
    case types.LIST_ADMINISTRATEUR_SUCCESS:
      return { ...state, listAdministrateur: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}