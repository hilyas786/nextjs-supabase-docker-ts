import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { ReactElement } from 'react';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="flex bg-black w-screen items-center justify-center">
      <h1 className="text-yellow-500 ">Hello</h1>
    </div>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
