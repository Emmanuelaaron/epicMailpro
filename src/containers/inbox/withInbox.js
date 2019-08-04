import { connect } from "react-redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import inbox from "../../Redux/actions/inboxAction.js";
import InboxComponent from "../../components/inbox/index";

export class withInbox extends Component {
  componentDidMount() {
    const { fetchMessageinbox } = this.props;
    fetchMessageinbox();
  }
  render() {
    const { message } = this.props;
    // console.log(message, '===============')
    return <InboxComponent message={message} />;
  }
}

const mapStateToProps = state => ({
  message: state.inboxReducer.messages
});

export default connect(
  mapStateToProps,
  { fetchMessageinbox: inbox }
)(withInbox);

