import actionsFunction from "./generated/ProfesseurActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ProfesseurApi from "../../api/ProfesseurApi";
 
 actionsFunction.loadProfesseurList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ProfesseurApi
     .getProfesseurList()
     .then(list => {
       dispatch(actionsFunction.loadProfesseurSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
