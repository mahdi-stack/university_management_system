// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import AdministrateurModel from "../models/University_management_system_db/AdministrateurModel";
import EtudiantModel from "../models/University_management_system_db/EtudiantModel";
import ProfesseurModel from "../models/University_management_system_db/ProfesseurModel";
import UserModel from "../models/University_management_system_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.university_management_system_db_dbUrl);

    // Start Init Models

		AdministrateurModel.init();
		EtudiantModel.init();
		ProfesseurModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_university_management_system_db = await mongoose.connect(
        "mongodb://" + properties.university_management_system_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_university_management_system_db;
  }
}

export default new Database();
