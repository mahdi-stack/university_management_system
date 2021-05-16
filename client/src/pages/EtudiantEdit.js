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
import EtudiantActions from "../redux/actions/EtudiantActions";

// END IMPORT ACTIONS

/** APIs

* actionsEtudiant.create
*	@description CRUD ACTION create
*
* actionsEtudiant.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsEtudiant.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class EtudiantEdit extends Component {
  // Init etudiant
  constructor(props) {
    super(props);
    this.state = {
      etudiant: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsEtudiant.loadEtudiant(this.props.match.params.id);
    }
    
  }

  // Insert props etudiant in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      etudiant: props.etudiant
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.etudiant._id) {
      this.props.actionsEtudiant.saveEtudiant(this.state.etudiant).then(data => {
        this.props.history.push("/etudiants/");
      });
    } else {
      this.props.actionsEtudiant.createEtudiant(this.state.etudiant).then(data => {
        this.props.history.push("/etudiants/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Etudiant Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="CNE"
            label="CNE"
            value={this.state.etudiant.CNE || ""}
            onChange={Utils.handleChange.bind(this, "etudiant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.etudiant.CNE && this.state.etudiant.CNE === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="CNI"
            label="CNI"
            value={this.state.etudiant.CNI || ""}
            onChange={Utils.handleChange.bind(this, "etudiant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.etudiant.CNI && this.state.etudiant.CNI === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Code_Apoge"
            label="Code_Apoge"
            value={this.state.etudiant.Code_Apoge || ""}
            onChange={Utils.handleChange.bind(this, "etudiant")}
            type="number"
            margin="normal"
            fullWidth
            required
            {...(!this.state.etudiant.Code_Apoge && this.state.etudiant.Code_Apoge === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="Date_de_naissance"
            label="Date_de_naissance"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.etudiant.Date_de_naissance
                ? new Date(this.state.etudiant.Date_de_naissance)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "etudiant", "Date_de_naissance")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.etudiant.Date_de_naissance && this.state.etudiant.Date_de_naissance === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Nom"
            label="Nom"
            value={this.state.etudiant.Nom || ""}
            onChange={Utils.handleChange.bind(this, "etudiant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.etudiant.Nom && this.state.etudiant.Nom === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Prenom"
            label="Prenom"
            value={this.state.etudiant.Prenom || ""}
            onChange={Utils.handleChange.bind(this, "etudiant")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.etudiant.Prenom && this.state.etudiant.Prenom === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/etudiants/">Back to list</Link>

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
    actionsEtudiant: bindActionCreators(EtudiantActions, dispatch),
  };
};

// Validate types
EtudiantEdit.propTypes = { 
  actionsEtudiant: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    etudiant: state.EtudiantEditReducer.etudiant
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EtudiantEdit);
