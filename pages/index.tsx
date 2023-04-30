import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/ui/layout';
import Image from 'next/image';
import profilePic from '../public/photo/dev-photo-1.png';
import AnimatedText from '../components/ui/animated-text';
import Link from 'next/link';
import { ContactInfo } from '../models/personal-info';
import LinkArrow from '../components/icons/link-arrow-icon';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LM - Home</title>
        <meta name="description" content="Home page" />
      </Head>
      <div className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/3">
              <Image
                src={profilePic}
                alt="DevImage"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Fullstack Developer & Front-End Developer"
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Dynamic and creative software developer with over 6 years of
                experience in producing robust code for high-volume companies by
                designing and developing applications using the current
                technologies in the market: React, Angular, Node.js, Typescript
                and Javascript,
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href={ContactInfo.pdfPath}
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light 
                    hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark
                    hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href={ContactInfo.mailTo}
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Home;
