import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  return (
    <div className="postContainer">
      <div className="postRow">
        <img src={props.thumbnailUrl} />
        {props.username}
      </div>
      <div className="imageArea">
        <img src={props.imageUrl} />
      </div>
      <div className="postIcons">
        <div className="postIcon">
          <img />
          <img />
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
