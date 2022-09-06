import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  const friendStyle = {
    // flex: '2'
    // display: 'inline-block',
    // width: '25%',
    // right: '0',
  }
  return (
    <React.Fragment>
      <div style={friendStyle}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Friend.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Friend;