import React from "react";
import PropTypes from "prop-types";

function Post(props){
  const feedStyle = {
    // flex: '2'
  //  display: 'inline-block',
  //  width: '25%' ,
  //  margin: 'auto',
  }
  return (
    <React.Fragment>
      <div style={feedStyle}>
        <h3>{props.location} - {props.names}</h3>
        <p><em>{props.issue}</em></p>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Post.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default Post;