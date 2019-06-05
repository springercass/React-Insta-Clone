import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div className="commentSec">
      <div className="user">{props.user}</div>
      <div className="userText">{props.text}</div>
    </div>
  );
};

CommentSection.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CommentSection;
