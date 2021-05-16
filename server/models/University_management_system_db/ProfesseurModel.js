import ProfesseurModelGenerated from "./generated/ProfesseurModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProfesseurModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ProfesseurModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProfesseurModelGenerated,
  ...customModel
};
