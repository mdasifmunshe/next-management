import { Inter } from 'next/font/google';
import '../globals.css';
import GlassPane from '@/components/GlassPane';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Project Management',
  description: 'Created by Md Asif Munshe',
};

export default function AuthRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`h-screen w-screen rainbow-mesh p-6 ${inter.className}`}>
        <GlassPane className='w-full h-full flex items-center justify-center'>
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
