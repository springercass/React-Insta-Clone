import React from "react";
import "./CommentSection.css";

class CommentSection extends React.Component {
  state = {
    comments: this.props.comments,
    newComment: ""
  };

  addNewComment = element => {
    element.preventDefault();
    const newComment = {
      username: "sprincas",
      text: this.state.newComment
    };

    this.setState({
      comments: [...this.state.comments, newComment],
      newComment: ""
    });
  };

  changeHandler = element => {
    this.setState({
      [element.target.name]: element.target.value
    });
  };

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map(comment => {
          return (
            <div className="commentSec">
              <div className="user">{comment.username}</div>
              <div>{comment.text}</div>
            </div>
          );
        })}

        <div className="time">{this.props.timestamp}</div>
        <form onSubmit={this.addNewComment}>
          <input
            type="text"
            name="newComment"
            className="inputComment"
            value={this.state.newComment}
            onChange={this.changeHandler}
            placeholder="Add a comment"
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
