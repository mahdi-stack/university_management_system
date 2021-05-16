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
import AdministrateurActions from "../redux/actions/AdministrateurActions";

// END IMPORT ACTIONS

/** APIs

* actionsAdministrateur.create
*	@description CRUD ACTION create
*
* actionsAdministrateur.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsAdministrateur.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class AdministrateurEdit extends Component {
  // Init administrateur
  constructor(props) {
    super(props);
    this.state = {
      administrateur: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsAdministrateur.loadAdministrateur(this.props.match.params.id);
    }
    
  }

  // Insert props administrateur in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      administrateur: props.administrateur
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.administrateur._id) {
      this.props.actionsAdministrateur.saveAdministrateur(this.state.administrateur).then(data => {
        this.props.history.push("/administrateurs/");
      });
    } else {
      this.props.actionsAdministrateur.createAdministrateur(this.state.administrateur).then(data => {
        this.props.history.push("/administrateurs/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Administrateur Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="CNI"
            label="CNI"
            value={this.state.administrateur.CNI || ""}
            onChange={Utils.handleChange.bind(this, "administrateur")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.administrateur.CNI && this.state.administrateur.CNI === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="Date_de_naissance"
            label="Date_de_naissance"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.administrateur.Date_de_naissance
                ? new Date(this.state.administrateur.Date_de_naissance)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "administrateur", "Date_de_naissance")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.administrateur.Date_de_naissance && this.state.administrateur.Date_de_naissance === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Nom"
            label="Nom"
            value={this.state.administrateur.Nom || ""}
            onChange={Utils.handleChange.bind(this, "administrateur")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.administrateur.Nom && this.state.administrateur.Nom === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Prenom"
            label="Prenom"
            value={this.state.administrateur.Prenom || ""}
            onChange={Utils.handleChange.bind(this, "administrateur")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.administrateur.Prenom && this.state.administrateur.Prenom === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/administrateurs/">Back to list</Link>

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
    actionsAdministrateur: bindActionCreators(AdministrateurActions, dispatch),
  };
};

// Validate types
AdministrateurEdit.propTypes = { 
  actionsAdministrateur: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    administrateur: state.AdministrateurEditReducer.administrateur
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministrateurEdit);
