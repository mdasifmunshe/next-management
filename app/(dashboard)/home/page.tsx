import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div className='text-3xl font-bold underline'>Hello Home!</div>
    </div>
  );
}