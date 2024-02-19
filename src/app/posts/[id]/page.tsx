import Link from 'next/link';
import Chip from '@mui/joy/Chip';
import LikesCounter from '@/components/LikesCounter';

async function getPost(id: string) {
  const res = await fetch(`https://dummyjson.com/posts/${id}`);

  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }

  const post = (await res.json()) as Post;

  return post;
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  // if (!post)
  //   return (
  //     <main className='flex h-screen items-center justify-center'>
  //       <CircularProgress />
  //     </main>
  //   );

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
          <LikesCounter reactions={post.reactions} />
        </div>
        <div className='flex justify-center'>
          <Link
            className='mt-20 block w-fit rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white'
            href='/posts'
          >
            Back to posts
          </Link>
        </div>
      </div>
    </main>
  );
}
