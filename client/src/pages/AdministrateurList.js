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
import AdministrateurActions from "../redux/actions/AdministrateurActions";

// END IMPORT ACTIONS

/** APIs

* actionsAdministrateur.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsAdministrateur.list
*	@description CRUD ACTION list
*

**/


class AdministrateurList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsAdministrateur.loadAdministrateurList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsAdministrateur.deleteAdministrateur(this.state.idDelete).then(data => {
      this.props.actionsAdministrateur.loadAdministrateurList();
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
    const link = "/administrateurs/";

    return (
      <div>
        <h1>Administrateur List</h1>

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
                  <Link to={"/administrateurs/" + row._id} key={row._id}>
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
          <Link to="/administrateurs/new">
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
    actionsAdministrateur: bindActionCreators(AdministrateurActions, dispatch),
  };
};

// Validate types
AdministrateurList.propTypes = { 
  actionsAdministrateur: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.AdministrateurListReducer.listAdministrateur
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdministrateurList);
