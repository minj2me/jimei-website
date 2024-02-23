import ToastProvider from '@/providers/toast-provider'
//要加上ChakraProvider,不然样式不起作用
import { ChakraProvider } from '@chakra-ui/react';
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
        <ChakraProvider>
        <Header />
        {children}
        <div className="h-[200px]" />
        <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
}
