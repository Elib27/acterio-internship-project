import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center'>
      <h1 className='py-8 text-center text-4xl font-semibold'>Home page</h1>
      <Link
        className='rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white'
        href='/posts'
      >
        See posts
      </Link>
    </main>
  );
}
