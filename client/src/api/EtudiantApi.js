import EtudiantApiGenerated from "./generated/EtudiantApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class EtudiantApi extends EtudiantApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Etudiant List
  static getEtudiantList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/etudiants")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default EtudiantApi;