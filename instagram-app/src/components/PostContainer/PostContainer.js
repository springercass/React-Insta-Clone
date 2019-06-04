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
      <div className="likes"> {props.likes} Likes</div>
      <div className="postComment">
        {props.comments.map(element => (
          <CommentSection
            key={element.id}
            user={element.username}
            text={element.text}
          />
        ))}
      </div>
      <div className="time">{props.timestamp}</div>
      <input className="inputComment" placeholder="Add a comment..." />
    </div>
  );
};

export default PostContainer;
