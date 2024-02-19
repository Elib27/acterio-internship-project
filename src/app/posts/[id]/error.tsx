'use client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className='flex h-screen flex-col items-center justify-center text-center'>
      <h2 className='text-2xl font-semibold text-red-500'>
        Something went wrong!
      </h2>
      <button
        className='mt-8 block w-fit rounded-lg border-2 border-blue-600 px-4 py-2 font-semibold text-blue-600 '
        onClick={() => reset()}
      >
        Try again
      </button>
      <Link
        className='mt-8 block w-fit rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white'
        href='/posts'
      >
        Back to posts
      </Link>
    </main>
  );
}
