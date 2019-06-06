import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

class PostContainer extends React.Component {
  render() {
    return (
      <div className="post-container">
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <div className="postContainer">
                  <header className="postRow">
                    <img
                      src={post.thumbnailUrl}
                      alt="thumbnail"
                      className="userImage"
                    />
                    <p className="username">{post.username}</p>
                  </header>

                  <img src={post.imageUrl} alt={post.id} className="postImg" />
                  <div className="postIcons">
                    <div className="postIcon1">
                      <i className="far fa-heart" />
                    </div>
                    <div className="postIcon2">
                      <i className="far fa-comment" />
                    </div>
                  </div>
                  <section className="likes">{post.likes} likes</section>
                  <div className="postComment">
                    <CommentSection
                      comments={post.comments}
                      timestamp={post.timestamp}
                    />
                  </div>
                </div>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <header>
                    <img
                      src={post.thumbnailUrl}
                      alt="thumbnail"
                      className="userImage"
                    />
                    <p className="username">{post.username}</p>
                  </header>

                  <img src={post.imageUrl} alt={post.id} />

                  <section className="likes">{post.likes} likes</section>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })}
      </div>
    );
  }
}

export default PostContainer;
