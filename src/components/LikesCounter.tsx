'use client';

import { useState } from 'react';
import IconButton from '@mui/joy/IconButton';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';

export default function LikesCounter({ reactions = 0 }: { reactions: number }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => setIsLiked((c) => !c);

  const likesCount = (isLiked ? 1 : 0) + reactions;

  return (
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
  );
}
