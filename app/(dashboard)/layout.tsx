import '../globals.css';
import Sidebar from '@/components/Sidebar';
import clsx from 'clsx';
import GlassPane from '@/components/GlassPane';

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
      <body className='h-screen w-screen candy-mesh p-6'>
        <GlassPane className='w-full h-full p-6 flex align-center container mx-auto'>
          <Sidebar />
          <main className='w-full pl-6 h-full'>{children}</main>
        </GlassPane>
      </body>
    </html>
  );
}
