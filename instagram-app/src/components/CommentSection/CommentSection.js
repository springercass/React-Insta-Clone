import React from "react";
import "./CommentSection.css";

const CommentSection = props => {
  return (
    <div className="commentSec">
      <div className="user">{props.user}</div>
      <div className="userText">{props.text}</div>
    </div>
  );
};

export default CommentSection;
