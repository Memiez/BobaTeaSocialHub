import React from 'react';
import { IPost } from '../interfaces/post';

interface PostItemProps {
  post: IPost;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  // Placeholder functions for handling button clicks
  const handleLike = () => {
    console.log('Liked', post.id);
    // Implement like functionality here
  };

  const handleComment = () => {
    console.log('Comment on', post.id);
    // Implement comment functionality here
  };

  const handleShare = () => {
    console.log('Share', post.id);
    // Implement share functionality here
  };

  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden my-5">
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
        <p className="text-gray-700 mb-3">{post.summary}</p>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex justify-between items-center mt-4">
          <button onClick={handleLike} className="text-blue-600 hover:text-blue-800">
            Like
          </button>
          <button onClick={handleComment} className="text-blue-600 hover:text-blue-800">
            Comment
          </button>
          <button onClick={handleShare} className="text-blue-600 hover:text-blue-800">
            Share
          </button>
        </div>
      </div>
    </article>
  );
};

export default PostItem;
