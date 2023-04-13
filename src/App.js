import * as React from "react";
import "./styles.css";

export default function App() {
  const [searchValue, setSearch] = React.useState(0);
  const [posts, setPosts] = React.useState([]);
  const [filteredPosts, setFilteredPosts] = React.useState([]);

  const handleSearchChange = (event) => {
    setSearch(parseInt(event.target.value, 10));
  };

  const handleSearchReset = () => {
    setSearch(0);
  };

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  React.useEffect(() => {
    setFilteredPosts(posts.filter((post) => post.id === searchValue));
  }, [posts, searchValue]);

  return (
    <div className="app">
      <h1>Search Posts</h1>
      <input
        type="number"
        min={0}
        value={searchValue}
        onChange={handleSearchChange}
      />
      <br />
      <button className="button" type="button" onClick={handleSearchReset}>
        Reset Search
      </button>
      <h1>Filtered Posts</h1>
      <pre className="code">
        <code>{JSON.stringify(filteredPosts, null, 2)}</code>
      </pre>
      <h1>Available Posts</h1>
      <pre className="code">
        <code>{JSON.stringify(posts, null, 2)}</code>
      </pre>
    </div>
  );
}
