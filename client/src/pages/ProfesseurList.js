// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import ProfesseurActions from "../redux/actions/ProfesseurActions";

// END IMPORT ACTIONS

/** APIs

* actionsProfesseur.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsProfesseur.list
*	@description CRUD ACTION list
*

**/


class ProfesseurList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsProfesseur.loadProfesseurList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsProfesseur.deleteProfesseur(this.state.idDelete).then(data => {
      this.props.actionsProfesseur.loadProfesseurList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "CNI",
        type: "string",
        label: "CNI"
      }, 
      {
        id: "Date_de_naissance",
        type: "date",
        label: "Date_de_naissance"
      }, 
      {
        id: "Nom",
        type: "string",
        label: "Nom"
      }, 
      {
        id: "Prenom",
        type: "string",
        label: "Prenom"
      },
    ];
    const link = "/professeurs/";

    return (
      <div>
        <h1>Professeur List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">CNI</TableCell>
              <TableCell align="right">Date_de_naissance</TableCell>
              <TableCell align="right">Nom</TableCell>
              <TableCell align="right">Prenom</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/professeurs/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.CNI }</TableCell>
                <TableCell align="right">{ row.Date_de_naissance }</TableCell>
                <TableCell align="right">{ row.Nom }</TableCell>
                <TableCell align="right">{ row.Prenom }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/professeurs/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
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
ProfesseurList.propTypes = { 
  actionsProfesseur: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ProfesseurListReducer.listProfesseur
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfesseurList);
