// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ProfesseurListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_PROFESSEUR_SUCCESS:
      return { ...state, professeur: action.payload };
    case types.LIST_PROFESSEUR_SUCCESS:
      return { ...state, listProfesseur: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}