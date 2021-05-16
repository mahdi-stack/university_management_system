import actionsFunction from "./generated/EtudiantActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import EtudiantApi from "../../api/EtudiantApi";
 
 actionsFunction.loadEtudiantList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return EtudiantApi
     .getEtudiantList()
     .then(list => {
       dispatch(actionsFunction.loadEtudiantSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
