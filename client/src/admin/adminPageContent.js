import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as adminActions from './../actions/adminActions.js';

class AdminPageContent extends Component {
  componentWillMount() {
    this.props.adminActions.fetchAllUsers();
  }

  render() {
    let userList = this.props.users.map((user) => {
      return (
        <div style={{display: 'flex', justifyContent: 'space-around', margin: '2rem'}}>
          <div className="admin-user-email">{user.email}</div>
          <div className="admin-user-existingCredits">{user.credits}</div>
          <div className="admin-user-giveCredit" onClick={() => this.props.adminActions.giveCredit(user.id, 1)}>Give 1 Credit</div>
        </div>
      )
    })

    return (
      <div>
        {userList}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.admin.users
  }
}

function mapDispatchToActions(dispatch) {
  return {
    adminActions: bindActionCreators(adminActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(AdminPageContent)
