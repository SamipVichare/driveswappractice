// pages/index.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import './globals.css';
import backgroundImg from '@/components/images/carbg2.png'; // Update the path to your background image

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Find Your Drive</title>
        <meta name="description" content="Find and book your ideal drive" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        {/* Background Image */}
        <Image
          src={backgroundImg}
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Car"
          className="absolute z-0"
        />

        {/* Search Container */}
        <div className="relative z-10 min-h-screen flex flex-col justify-center items-center">
          <div className="bg-white bg-opacity-50 rounded-lg p-8 max-w-2xl mx-auto text-center">
            {/* Search Inputs */}
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="flex-1">
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  placeholder="City, airport, address or hotel"
                  className="w-full px-4 py-2 rounded-md"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="from" className="sr-only">
                  From
                </label>
                <input
                  type="date"
                  id="from"
                  className="w-full px-4 py-2 rounded-md"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="until" className="sr-only">
                  Until
                </label>
                <input
                  type="date"
                  id="until"
                  className="w-full px-4 py-2 rounded-md"
                />
              </div>
            </div>
            {/* Search Button */}
            <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300">
              Search
            </button>
          </div>
          
          {/* Headline Text */}
          <h1 className="text-white text-5xl font-bold mt-4">
            Find your drive
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
