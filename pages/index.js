import React from 'react';
import Head from 'next/head';
import Welcome from '../components/Welcome';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Welcome />
  </div>
);

export default Home;
