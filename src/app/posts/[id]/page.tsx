'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import CircularProgress from '@mui/joy/CircularProgress';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

export default function PostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked((c) => !c);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [params.id]);

  if (!post)
    return (
      <main className='flex h-screen items-center justify-center'>
        <CircularProgress />
      </main>
    );

  const likesCount = (isLiked ? 1 : 0) + post.reactions;

  return (
    <main className='flex justify-center px-8'>
      <div className='max-w-2xl'>
        <h1 className='py-12 text-center text-4xl font-semibold'>
          {post.title}
        </h1>
        <p className='text-justify'>{post.body}</p>
        <p className='text-right italic text-gray-500'>
          Author: User {post.userId}
        </p>
        <div className='flex justify-between pt-8'>
          <div className='flex items-center justify-center gap-3'>
            {post.tags.map((tag, index) => (
              <Chip
                className='h-fit'
                key={index}
                size='lg'
                variant='soft'
                color='primary'
              >
                {tag}
              </Chip>
            ))}
          </div>
          <div className='flex items-center gap-4'>
            <IconButton
              onClick={() => toggleLike()}
              aria-label='Like the post'
              sx={{
                '--IconButton-size': '50px',
              }}
            >
              {isLiked ? <MdFavorite /> : <MdFavoriteBorder />}
            </IconButton>
            <p className='font-semibold'>
              {likesCount} {`Like${likesCount > 1 ? 's' : ''}`}
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <Link
            className='mt-16 block w-fit rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white'
            href='/posts'
          >
            Back to posts
          </Link>
        </div>
      </div>
    </main>
  );
}
