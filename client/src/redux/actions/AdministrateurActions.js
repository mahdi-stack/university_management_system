import actionsFunction from "./generated/AdministrateurActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import AdministrateurApi from "../../api/AdministrateurApi";
 
 actionsFunction.loadAdministrateurList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return AdministrateurApi
     .getAdministrateurList()
     .then(list => {
       dispatch(actionsFunction.loadAdministrateurSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
