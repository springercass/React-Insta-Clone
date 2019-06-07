import React from "react";
//import "./CommentSection.scss";
import styled from "styled-components";

const Time = styled.div`
  padding: 0 0 0 1%;
  color: gray;
`;

const InputComment = styled.input`
  height: 30px;
  width: 96%;
  margin: 1% 0 5% 1%;
  border-radius: 3%;
  border: 1px solid lightgray;
  padding: 0 0 0 1%;
`;

const CommentSec = styled.div`
  display: flex;
`;

const UserComment = styled.div`
  font-weight: bolder;
  padding: 0 1% 1% 1%;
`;

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
            <CommentSec>
              <UserComment>{comment.username}</UserComment>
              <div>{comment.text}</div>
            </CommentSec>
          );
        })}

        <Time>{this.props.timestamp}</Time>
        <form onSubmit={this.addNewComment}>
          <InputComment
            type="text"
            name="newComment"
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
