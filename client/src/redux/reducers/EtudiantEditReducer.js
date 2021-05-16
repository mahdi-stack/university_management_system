// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  etudiant: {}
};

// Reducer
export default function EtudiantEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ETUDIANT_SUCCESS:
      return { ...state, etudiant: action.payload };
    case types.UPDATE_ETUDIANT_SUCCESS:
      return { ...state, etudiant: action.payload };
    case types.GET_ETUDIANT_SUCCESS:
      return { ...state, etudiant: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}