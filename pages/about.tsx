import Head from 'next/head';
import AnimatedText from '../components/ui/animated-text';
import Layout from '../components/ui/layout';
import Image from 'next/image';
import profilePhoto from '../public/photo/dev-photo-1.png';
import AnimatedNumber from '../components/ui/animated-number';
import Skills from '../components/about/skills';
import Timeline from '../components/about/timeline/timeline';
import { educationDetail, experiencesDetail } from '../models/timeline-info';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>LM - About</title>
        <meta name="description" content="Profile description" />
      </Head>
      <div className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="My Professional Story!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Dynamic and creative software developer with over 6 years of
                experience in front-end development. I enjoy producing robust
                code for high-volume companies by designing and developing
                applications using the latest technologies in the market,
                including React, Angular, TypeScript, and JavaScript.
              </p>
              <p className="my-4 font-medium">
                I have successfully completed every task assigned to me,
                including bug fixing, feature implementation, and migrations
                from older frameworks to new ones, as detailed in my experience
                at Belatrix and Encora.
              </p>
              <p className="font-medium">
                I am eager to support the dev team using agile methodologies
                such as SCRUM, and I am always willing to learn from them. My
                goal is to keep working with the most recent technologies, as it
                will provide opportunities to solve new challenges that projects
                may present and help me grow professionally.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark" />
              <Image
                src={profilePhoto}
                alt="dev-photo"
                className="w-full h-auto rounded-2xl bg-dark"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={6} />+
                </span>
                <h2 className="text-xl font-med capitalize text-dark/75">
                  Years of Experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-med capitalize text-dark/75">
                  YoE in Angular
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-xl font-med capitalize text-dark/75">
                  YoE in React
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Timeline
            key="Experience"
            sectionTitle="Experience"
            timelineInfo={experiencesDetail}
          />
          <Timeline
            key="Education"
            sectionTitle="Education"
            timelineInfo={educationDetail}
          />
        </Layout>
      </div>
    </>
  );
};

export default AboutPage;
