// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function EtudiantListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ETUDIANT_SUCCESS:
      return { ...state, etudiant: action.payload };
    case types.LIST_ETUDIANT_SUCCESS:
      return { ...state, listEtudiant: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}