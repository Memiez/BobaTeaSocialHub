// pages/posts/index.tsx
import React, { useState, useEffect } from 'react';

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from your API
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <button onClick={() => alert('Like functionality not implemented')}>Like</button>
          <button onClick={() => alert('Comment functionality not implemented')}>Comment</button>
          <button onClick={() => alert('Share functionality not implemented')}>Share</button>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
