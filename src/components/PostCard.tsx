import Link from 'next/link';
import Card from '@mui/joy/Card';
import Chip from '@mui/joy/Chip';
import IconButton from '@mui/joy/IconButton';
import { MdFavorite, MdDelete } from 'react-icons/md';

export default function PostCard({
  post,
  deletePost,
}: {
  post: Post;
  deletePost: (id: number) => void;
}) {
  return (
    <article className='relative'>
      <Link href={`/posts/${post.id}`} className='block h-full'>
        <Card
          className='flex h-full cursor-pointer flex-col justify-between transition-colors duration-300 ease-in-out hover:bg-blue-50'
          color='neutral'
          orientation='vertical'
          size='md'
          variant='outlined'
          sx={{
            '--Card-padding': '20px',
          }}
        >
          <div>
            <h3 className='pb-4 text-center text-xl font-semibold'>
              {post.title}
            </h3>
            <p className='max-h-20 overflow-hidden text-ellipsis text-nowrap pb-8 text-justify'>
              {post.body}
            </p>
            <div className='flex gap-2'>
              {post.tags.map((tag, index) => (
                <Chip key={index} size='md' variant='soft' color='primary'>
                  {tag}
                </Chip>
              ))}
            </div>
          </div>
          <div className='flex items-center justify-end gap-2 pt-2'>
            <span className='font-semibold'>{post.reactions}</span>{' '}
            <MdFavorite className='inline' size={16} />
          </div>
        </Card>
      </Link>
      <IconButton
        className='absolute bottom-4 left-4'
        variant='soft'
        onClick={() => deletePost(post.id)}
      >
        <MdDelete color='#6596bb' size={18} />
      </IconButton>
    </article>
  );
}
