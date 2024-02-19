'use client';
import CircularProgress from '@mui/joy/CircularProgress';
import PostCard from './PostCard';

export default function PostsGrid({
  filteredPosts,
  deletePost,
}: {
  filteredPosts: Post[] | null;
  deletePost: (id: number) => void;
}) {
  if (!filteredPosts)
    return (
      <div className='flex justify-center pt-16'>
        <CircularProgress />
      </div>
    );

  if (filteredPosts.length === 0)
    return (
      <div className='flex justify-center pt-16'>
        <h2 className='text-xl font-semibold '>No results</h2>
      </div>
    );

  return (
    <div className='grid-auto-fill grid gap-6 py-8'>
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
}
