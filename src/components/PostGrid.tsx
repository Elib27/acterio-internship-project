'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import CircularProgress from '@mui/joy/CircularProgress';
import Input from '@mui/joy/Input';

export default function PostGrid() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
      });
  }, []);

  function searchPosts(query: string) {
    const postResults = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(postResults);
  }

  if (!posts.length)
    return (
      <div className='flex justify-center pt-16'>
        <CircularProgress />
      </div>
    );

  return (
    <>
      <div className='flex justify-center px-8'>
        <Input
          className='w-full max-w-sm'
          color='neutral'
          size='md'
          variant='outlined'
          placeholder='Search post here…'
          onChange={(e) => searchPosts(e.target.value)}
        />
      </div>
      <div className='grid-auto-fill grid auto-rows-fr gap-4 px-8 py-4'>
        {filteredPosts.map((post, index) => (
          <Link href={`/posts/${post.id}`} key={index}>
            <Card
              className='cursor-pointer transition-colors   duration-300 ease-in-out hover:bg-blue-50'
              color='neutral'
              invertedColors={false}
              orientation='vertical'
              size='md'
              variant='outlined'
              sx={{
                '--Card-padding': '20px',
              }}
            >
              <h3 className='text-center text-xl font-semibold'>
                {post.title}
              </h3>
              <p className='max-h-20 overflow-hidden text-ellipsis text-nowrap text-justify'>
                {post.body}
              </p>
              <div className='flex gap-2'>
                {post.tags.map((tag, index) => (
                  <Chip key={index} size='md' variant='soft' color='primary'>
                    {tag}
                  </Chip>
                ))}
              </div>
              <p>Reactions: {post.reactions}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
