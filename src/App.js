import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import "./BlogPost.css";
import NoContent from "./components/NoContent";

function App() {
  const [title, setTitle] = useState(""); //Hook for title
  const [author, setAuthor] = useState(""); //Hook for author
  const [date, setDate] = useState(""); //Hook for date
  const [content, setContent] = useState(""); //Hook for content
  const [posts, setPosts] = useState([]); //Hook for new blog post
  const [filter, setFilter] = useState("all"); //Hook of date filter

  const handleTitleChange = (event) => {
    // Event handler for title
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    // Event handler for author
    setAuthor(event.target.value);
  };

  const handleDateChange = (event) => {
    // Event handler for date
    setDate(event.target.value);
  };

  const handleContentChange = (event) => {
    // Event handler for content
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    // Event handler for submit btn
    event.preventDefault();
    const newPost = { title, author, date, content };
    setPosts([...posts, newPost]); // Generates new blog post when the submit btn is clicked
    setTitle(""); //When the submit btn was clicked the input fields is set in blank
    setAuthor("");
    setDate("");
    setContent("");
  };

  const handleEditClick = (index) => {
    //Event handler for edit btn to change the input text
    const postToEdit = posts[index];
    setTitle(postToEdit.title);
    setAuthor(postToEdit.author);
    setDate(postToEdit.date);
    setContent(postToEdit.content);
  };

  const handleDeleteClick = (index) => {
    //Event handler for delete btn to remove blog post
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };
  const handleFilterChange = (event) => {
    // Event handler for filter dropdown to filter the date of posted blog
    setFilter(event.target.value);
  };
  const filteredPosts = //Using conditional ternary operator. If the filter is equal to "all" it turns true, all of posted blog is displayed. If false, posted blog is filtered by date
    filter === "all" ? posts : posts.filter((post) => post.date === filter);

  return (
    <div className="App">
      <Header />

      <form onSubmit={handleSubmit}>
        <div className="input-blog">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            required
          />
          <label>Author:</label>
          <input
            type="text"
            value={author}
            onChange={handleAuthorChange}
            required
          />
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
          <label>Content:</label>
          <textarea
            value={content}
            onChange={handleContentChange}
            required
          ></textarea>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="filter">
        <label>Filter by date:</label>
        <select
          className="dropdown"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="all">All</option>
          {posts.map((post) => (
            <option key={post.date} value={post.date}>
              {post.date}
            </option>
          ))}
        </select>
      </div>

      <div className="modal">
        {filteredPosts.length === 0 ? (
          <NoContent />
        ) : (
          <div className="newPost">
            {filteredPosts.map((post, index) => (
              <BlogPost
                key={index}
                index={index}
                title={post.title}
                author={post.author}
                date={post.date}
                content={
                  post.date === filter // If its true the posted blog is filtered, all of content is displayed
                    ? post.content // If false, posted blog content is limited in 50
                    : `${post.content.slice(0, 50)}...`
                }
                onEditClick={handleEditClick}
                onDeleteClick={handleDeleteClick}
              />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
