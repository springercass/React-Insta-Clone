import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

const PostContainer = props => {
  return (
    <div className="postContainer">
      <div className="postRow">
        <img src={props.thumbnailUrl} className="userImage" />
        <p className="username">{props.username}</p>
      </div>
      <div className="imageArea">
        <img src={props.imageUrl} className="postImg" />
      </div>
      <div className="postIcons">
        <div className="postIcon1">
          <i className="far fa-heart" />
        </div>
        <div className="postIcon2">
          <i className="far fa-comment" />
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
      <input className="inputComment" placeholder="Add a comment" />
    </div>
  );
};

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default PostContainer;
