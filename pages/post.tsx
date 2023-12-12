import React, { useState, useEffect } from 'react';
import PostDisplay from '../components/PostDisplay';
import { Post } from '../interfaces/post';

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // TODO: Fetch posts from your backend and update the state
  }, []);

  return (
    <div>
      {posts.map(post => (
        <PostDisplay key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsPage;