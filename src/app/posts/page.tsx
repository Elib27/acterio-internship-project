'use client';
import { useState, useEffect } from 'react';
import PostsGrid from '@/components/PostsGrid';
import Input from '@mui/joy/Input';

export default function Posts() {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
      });
  }, []);

  function searchPosts(query: string) {
    if (!posts) return;
    const postResults = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(postResults);
  }

  function deletePost(id: number) {
    if (!posts) return;
    const newPosts = posts.filter((post) => post.id != id);
    setPosts(newPosts);
    setFilteredPosts(newPosts);
  }

  return (
    <main className='flex justify-center px-8'>
      <div className='flex w-full flex-col items-center md:w-11/12'>
        <h2 className='py-8 text-center text-3xl font-bold'>Posts</h2>
        <Input
          className='w-full max-w-md'
          color='neutral'
          size='md'
          variant='outlined'
          placeholder='Search post here…'
          onChange={(e) => searchPosts(e.target.value)}
        />
        {filteredPosts && (
          <p className='w-full pt-8 text-gray-500'>
            {filteredPosts?.length}{' '}
            {`result${filteredPosts.length > 1 ? 's' : ''}`}
          </p>
        )}
        <PostsGrid filteredPosts={filteredPosts} deletePost={deletePost} />
      </div>
    </main>
  );
}
