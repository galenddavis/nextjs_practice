import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const firstPost = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>first post</title>
        </Head>
        <Image
          src='/images/profile.jpg'
          height={144}
          width={144}
          alt='Galen Davis'
        />
        <h1 className='tag'>First Post</h1>
        <Link href='/' >
          <a>Back Home</a>
        </Link>

        {/* <style jsx>{`

        .tag {
            background: red;
            color: white;
        }
      `}</style> */}

      </Layout>
    </>
  );
};

export default firstPost;
