import Link from 'next/link';
import Image from 'next/image';
import ActerioLogo from '@/assets/acterio_logo.svg';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center justify-center p-8'>
      <Image src={ActerioLogo} alt='Acterio logo' />
      <h1 className='py-8 text-center text-4xl font-semibold'>
        Acterio Internship project - Eliot Bas
      </h1>
      <div className='flex flex-col gap-4 pb-8'>
        <a
          className='text-blue-500 underline underline-offset-2'
          href='https://www.linkedin.com/in/eliot-bas/'
          target='_blank'
        >
          Linkedin
        </a>
        <a
          className='text-blue-500 underline underline-offset-2'
          href='https://github.com/Elib27'
          target='_blank'
        >
          GitHub
        </a>
        <a
          className='text-blue-500 underline underline-offset-2'
          href='https://eliotbas.com/en/'
          target='_blank'
        >
          Portfolio
        </a>
      </div>
      <Link
        className='rounded-lg bg-blue-600 px-4 py-2 text-xl font-semibold text-white'
        href='/posts'
      >
        Go to posts
      </Link>
    </main>
  );
}
