import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import postcardLogo from './../assets/postcard-icon.svg'
import Button from './../button/button.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userActions from './../actions/userActions'
import customFetch from './../helpers/customFetch'

import './creditPurchase.css';

class CreditPurchase extends Component {
  constructor(props) {
    super(props)
    this.onToken = this.onToken.bind(this);
  }

  componentWillMount() {
    this.props.userActions.fetchCredits()
  }

  onToken(token, useCredit = false) {
  let body = {
    stripeToken: token,
  }

  customFetch('/api/user/credits', {
    method: 'post',
    body: JSON.stringify(body)
  })
  .then(this.props.userActions.fetchCredits)
}


  render() {
    let creditsCount = this.props.credits || 0;

    return (
      <div>
      <div className="credit-currentAmount">You currently have {creditsCount} credits.</div>

      <StripeCheckout
        ComponentClass="div"
        token={this.onToken}
        stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
        // stripeKey="pk_test_1fP6F3hjLbG2TbLXPuEL3jEx"
        amount={1499}
        name="Postcard"
        description="10 postcard credits"
        image={postcardLogo}
        disabled={false}
        >
          <Button className="credit-checkoutButton" text="Purchase 10 Credits for $14.99" to="#" enabled={true} />
        </StripeCheckout>
        <div className="credit-description">Postcard credits can be used at any time and do not need to be used all at once.</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    credits: state.user.credits
  }
}

function mapDispatchToActions(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(CreditPurchase)
