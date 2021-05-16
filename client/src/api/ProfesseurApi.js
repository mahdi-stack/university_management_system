import ProfesseurApiGenerated from "./generated/ProfesseurApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ProfesseurApi extends ProfesseurApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Professeur List
  static getProfesseurList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/professeurs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ProfesseurApi;