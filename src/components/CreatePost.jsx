import React, { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reaction = parseInt(reactionElement.current.value);
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
    addPost(userId, postTitle, postBody, reaction, tags);
  };

  return (
    <form className="createpost" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label for="userid" className="form-label">
          User ID
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userid"
          placeholder="Your user id"
        />
      </div>
      <div className="mb-3">
        <label for="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label for="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about..."
        />
      </div>
      <div className="mb-3">
        <label for="reaction" className="form-label">
          Number of reactions
        </label>
        <input
          ref={reactionElement}
          type="text"
          className="form-control"
          id="reaction"
          placeholder="How many people reacted to this post"
        />
      </div>

      <div className="mb-3">
        <label for="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder=" Enter your tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
