import React from "react";

function BlogPost(props) {
  const { index, title, author, content, date, onDeleteClick, onEditClick } =
    props;

  const handleDeleteClick = () => {
    onDeleteClick(index);
  };

  const handleEditClick = () => {
    onEditClick(index);
  };
  return (
    <div className="BlogPost-container">
      <form className="blogForm">
        <div className="blogPost-props">
          <h1>{title}</h1>
          <p>
            By: {author} on {date}
          </p>
          <p>{content}</p>
          <div className="btn">
            <button className="editBtn" type="button" onClick={handleEditClick}>
              Edit
            </button>
            <button
              className="deleteBtn"
              type="button"
              onClick={handleDeleteClick}
            >
              Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BlogPost;
