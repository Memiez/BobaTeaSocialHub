// components/Feed.tsx
import React from 'react';
import PostItem from './PostItem';
import { IPost } from '../interfaces/post';

// Extended dummy posts array with three additional posts
const dummyPosts: IPost[] = [
  {
    id: 1,
    title: 'Sustainable Energy for a Brighter Future',
    imageUrl: 'https://via.placeholder.com/600', // Placeholder image
    summary: 'As the world moves towards a more sustainable future, renewable energy sources are at the forefront of this transformation.',
    content: `
      <p>Renewable energy, from wind to solar to hydroelectric, has the potential to revolutionize how we think about and use power. With advancements in technology, these clean energy sources are becoming more efficient and, in turn, more accessible to the masses.</p>
      <p>This is just the beginning of the journey towards a more sustainable world, and every step forward is a step towards preserving our planet for future generations.</p>
    `,
  },
  // Second post
  {
    id: 2,
    title: 'The Impact of Electric Vehicles on the Environment',
    imageUrl: 'https://via.placeholder.com/600',
    summary: 'Electric vehicles are changing the landscape of transportation, offering a cleaner, more efficient alternative to traditional combustion engines.',
    content: `
      <p>The adoption of electric vehicles (EVs) has surged in recent years, promising a significant reduction in greenhouse gas emissions.</p>
      <p>As battery technology improves and charging infrastructure expands, EVs are becoming a viable option for more and more people around the world.</p>
    `,
  },
  // Third post
  {
    id: 3,
    title: 'Innovations in Solar Power Technology',
    imageUrl: 'https://via.placeholder.com/600',
    summary: 'Solar power has seen incredible advancements in recent years, with new technologies making it more efficient and accessible than ever before.',
    content: `
      <p>Solar panels are no longer the bulky, inefficient units of the past. Today's panels are sleek, powerful, and can be integrated into building materials themselves.</p>
      <p>With the cost of solar energy falling, it's becoming an increasingly attractive option for both individuals and large-scale energy producers.</p>
    `,
  },
  // Fourth post
  {
    id: 4,
    title: 'The Rise of Smart Grids in Modern Cities',
    imageUrl: 'https://via.placeholder.com/600',
    summary: 'Smart grids are transforming the way cities manage and distribute electricity, leading to more efficient use of resources and better service for consumers.',
    content: `
      <p>Smart grids use digital technology to monitor and react to changes in electricity usage, helping to prevent outages and distribute power where it's needed most.</p>
      <p>This technology is crucial for integrating renewable energy sources into the grid, as it can adjust to the variable nature of solar and wind power.</p>
    `,
  },
];

const Feed: React.FC = () => {
  return (
    <div>
      {dummyPosts.map(post => (
        <PostItem key={post.id.toString()} post={post} />
      ))}
    </div>
  );
};

export default Feed;
