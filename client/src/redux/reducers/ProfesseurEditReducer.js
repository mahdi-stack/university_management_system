// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  professeur: {}
};

// Reducer
export default function ProfesseurEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_PROFESSEUR_SUCCESS:
      return { ...state, professeur: action.payload };
    case types.UPDATE_PROFESSEUR_SUCCESS:
      return { ...state, professeur: action.payload };
    case types.GET_PROFESSEUR_SUCCESS:
      return { ...state, professeur: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}