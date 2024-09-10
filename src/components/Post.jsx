import React, { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";
import { PostList } from "../store/posts-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const [like, setLike] = useState(post.reaction);

  const incReaction = () => {
    setLike(like + 1);
  };

  return (
    <div className="card postCard" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="d-flex align-items-center thumb" onClick={incReaction}>
          <FaRegThumbsUp />
          {like}
        </div>
      </div>
    </div>
  );
};

export default Post;
