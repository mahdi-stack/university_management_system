import { combineReducers } from "redux";

// START IMPORT REDUCERS
import AdministrateurEditReducer from "./AdministrateurEditReducer";
import AdministrateurListReducer from "./AdministrateurListReducer";
import EtudiantEditReducer from "./EtudiantEditReducer";
import EtudiantListReducer from "./EtudiantListReducer";
import HomeReducer from "./HomeReducer";
import ProfesseurEditReducer from "./ProfesseurEditReducer";
import ProfesseurListReducer from "./ProfesseurListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	AdministrateurEditReducer,
	AdministrateurListReducer,
	EtudiantEditReducer,
	EtudiantListReducer,
	HomeReducer,
	ProfesseurEditReducer,
	ProfesseurListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
