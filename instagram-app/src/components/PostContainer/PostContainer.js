import React from "react";
//import "./PostContainer.scss";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostContainerSCSS = styled.div`
  width: 100%;
`;

const PostRow = styled.header`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  height: 50px;
  border-radius: 50%;
  margin: 0 2% 0 2%;
`;

const Username = styled.p`
  font-weight: bold;
  color: rgb(16, 16, 73);
`;

const PostImage = styled.img`
  width: 100%;
  margin: 2% 0 0 0;
`;

const PostIcons = styled.div`
  display: flex;
`;

const PostIcon1 = styled.div`
  font-size: 1.2rem;
  padding: 0 1%;
`;

const PostIcon2 = styled.div`
  font-size: 1.2rem;
  transform: scaleX(-1);
`;

const Likes = styled.section`
  padding: 1% 0 1% 1%;
  font-weight: bold;
  color: rgb(16, 16, 73);
`;

class PostContainer extends React.Component {
  render() {
    return (
      <PostContainerSCSS>
        {this.props.filteredPosts.length === 0
          ? this.props.data.map(post => {
              return (
                <PostContainerSCSS>
                  <PostRow>
                    <UserImage src={post.thumbnailUrl} alt="thumbnail" />
                    <Username>{post.username}</Username>
                  </PostRow>

                  <PostImage src={post.imageUrl} alt={post.id} />
                  <PostIcons>
                    <PostIcon1 onClick={this.addLike}>
                      <i className="far fa-heart" />
                    </PostIcon1>
                    <PostIcon2>
                      <i className="far fa-comment" />
                    </PostIcon2>
                  </PostIcons>
                  <Likes>{post.likes} Likes</Likes>
                  <div className="postComment">
                    <CommentSection
                      comments={post.comments}
                      timestamp={post.timestamp}
                    />
                  </div>
                </PostContainerSCSS>
              );
            })
          : this.props.filteredPosts.map(post => {
              return (
                <>
                  <PostRow>
                    <UserImage src={post.thumbnailUrl} alt="thumbnail" />
                    <Username>{post.username}</Username>
                  </PostRow>

                  <PostImage src={post.imageUrl} alt={post.id} />

                  <Likes>{post.likes} likes</Likes>

                  <CommentSection
                    comments={post.comments}
                    timestamp={post.timestamp}
                  />
                </>
              );
            })}
      </PostContainerSCSS>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default PostContainer;
