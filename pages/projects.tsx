import Head from 'next/head';
import Layout from '../components/ui/layout';
import AnimatedText from '../components/ui/animated-text';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>LM - Projects</title>
        <meta name="description" content="Projects page" />
      </Head>
      <div className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="My Personal Projects" className="mb-16" />
        </Layout>
      </div>
    </>
  );
};

export default ProjectsPage;
