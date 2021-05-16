// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  administrateur: {}
};

// Reducer
export default function AdministrateurEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ADMINISTRATEUR_SUCCESS:
      return { ...state, administrateur: action.payload };
    case types.UPDATE_ADMINISTRATEUR_SUCCESS:
      return { ...state, administrateur: action.payload };
    case types.GET_ADMINISTRATEUR_SUCCESS:
      return { ...state, administrateur: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}