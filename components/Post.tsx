import React from 'react';

interface IPostProps {
  content: string;
  likes: number;
  // You can add more properties here if needed
}

const Post: React.FC<IPostProps> = ({ content, likes }) => {
  return (
    <article className="bg-white shadow rounded-lg p-4">
      <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
      {/* Render other post information like likes */}
      <div className="likes">{likes} Likes</div>
      {/* Add buttons for like, comment, etc. */}
    </article>
  );
};

export default Post;
