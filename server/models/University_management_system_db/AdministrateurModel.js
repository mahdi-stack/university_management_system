import AdministrateurModelGenerated from "./generated/AdministrateurModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = AdministrateurModelGenerated.init();
  
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
      return await AdministrateurModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...AdministrateurModelGenerated,
  ...customModel
};
