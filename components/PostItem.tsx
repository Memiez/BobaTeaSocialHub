import React from 'react';
import { IPost } from '../interfaces/post';

const PostItem: React.FC<{ post: IPost }> = ({ post }) => {
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
        {/* You may have more UI elements here */}
      </div>
    </article>
  );
};

export default PostItem;
