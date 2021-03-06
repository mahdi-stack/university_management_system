/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN EtudiantApiGenerated.js PLEASE EDIT ../EtudiantApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class EtudiantApiGenerated {

  static contextUrl = properties.endpoint + "/etudiant";

  // CRUD METHODS

  /**
  * EtudiantService.create
  *   @description CRUD ACTION create
  *
  */
  static createEtudiant(etudiant) {
    return axios.post(EtudiantApiGenerated.contextUrl, etudiant )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * EtudiantService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteEtudiant(id) {
    return axios.delete(EtudiantApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * EtudiantService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneEtudiant(id) {
    return axios.get(EtudiantApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * EtudiantService.list
  *   @description CRUD ACTION list
  *
  */
  static getEtudiantList() {
    return axios.get(EtudiantApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * EtudiantService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveEtudiant(etudiant) {
    return axios.post(EtudiantApiGenerated.contextUrl + "/" + etudiant._id, etudiant )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default EtudiantApiGenerated;
