// import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'

import { Urbanist } from 'next/font/google'
import "./globals.css";
import Header from '@/components/header';
import Footer from '@/components/footer';

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: '集美(广州)工业设计有限公司',
  description: '集美(广州)工业设计有限公司官方网站.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <Header />
        {children}
        <div className="h-[200px]" />
        <Footer/>
      </body>
    </html>
  );
}
