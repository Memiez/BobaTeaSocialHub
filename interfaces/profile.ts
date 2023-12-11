// interfaces/profile.ts
export interface UserProfile {
    id: string;
    name: string;
    bio: string;
    avatarUrl: string;
  }
  
  // interfaces/post.ts
  export interface Post {
    id: string;
    userId: string;
    content: string;
    createdAt: Date;
  }
  