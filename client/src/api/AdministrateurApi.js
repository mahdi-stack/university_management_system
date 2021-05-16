import AdministrateurApiGenerated from "./generated/AdministrateurApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AdministrateurApi extends AdministrateurApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Administrateur List
  static getAdministrateurList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/administrateurs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AdministrateurApi;