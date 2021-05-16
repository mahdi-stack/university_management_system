// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";

// Custom Actions


// START IMPORT ACTIONS
import ProfesseurActions from "../redux/actions/ProfesseurActions";

// END IMPORT ACTIONS

/** APIs

* actionsProfesseur.create
*	@description CRUD ACTION create
*
* actionsProfesseur.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsProfesseur.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class ProfesseurEdit extends Component {
  // Init professeur
  constructor(props) {
    super(props);
    this.state = {
      professeur: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsProfesseur.loadProfesseur(this.props.match.params.id);
    }
    
  }

  // Insert props professeur in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      professeur: props.professeur
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.professeur._id) {
      this.props.actionsProfesseur.saveProfesseur(this.state.professeur).then(data => {
        this.props.history.push("/professeurs/");
      });
    } else {
      this.props.actionsProfesseur.createProfesseur(this.state.professeur).then(data => {
        this.props.history.push("/professeurs/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Professeur Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="CNI"
            label="CNI"
            value={this.state.professeur.CNI || ""}
            onChange={Utils.handleChange.bind(this, "professeur")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.professeur.CNI && this.state.professeur.CNI === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="Date_de_naissance"
            label="Date_de_naissance"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.professeur.Date_de_naissance
                ? new Date(this.state.professeur.Date_de_naissance)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "professeur", "Date_de_naissance")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.professeur.Date_de_naissance && this.state.professeur.Date_de_naissance === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Nom"
            label="Nom"
            value={this.state.professeur.Nom || ""}
            onChange={Utils.handleChange.bind(this, "professeur")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.professeur.Nom && this.state.professeur.Nom === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Prenom"
            label="Prenom"
            value={this.state.professeur.Prenom || ""}
            onChange={Utils.handleChange.bind(this, "professeur")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.professeur.Prenom && this.state.professeur.Prenom === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/professeurs/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsProfesseur: bindActionCreators(ProfesseurActions, dispatch),
  };
};

// Validate types
ProfesseurEdit.propTypes = { 
  actionsProfesseur: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    professeur: state.ProfesseurEditReducer.professeur
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfesseurEdit);
