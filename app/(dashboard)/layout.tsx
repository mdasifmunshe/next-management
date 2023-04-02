import { Inter } from 'next/font/google';
import clsx from 'clsx';

import '../globals.css';
import Sidebar from '@/components/Sidebar';
import GlassPane from '@/components/GlassPane';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Project Management',
  description: 'Created by Md Asif Munshe',
};

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={clsx('dark')}>
      <head />
      <body className={`h-screen w-screen candy-mesh p-6 ${inter.className}`}>
        <GlassPane className='w-full h-full p-6 flex align-center container mx-auto'>
          <Sidebar />
          <main className='w-full pl-6 h-full'>{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
