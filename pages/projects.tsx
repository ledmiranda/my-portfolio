import Head from 'next/head';
import Layout from '../components/ui/layout';
import AnimatedText from '../components/ui/animated-text';
import Project from '../components/projects/project';
import { ProjectsInfo, SmallProjectsInfo } from '../models/projects';
import SmallProject from '../components/projects/small-project';

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>LM - Projects</title>
        <meta name="description" content="Projects page" />
      </Head>
      <div className="flex w-full flex-col items-center justify-center mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="My Personal Projects" className="mb-16" />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            {ProjectsInfo.map(
              ({ type, title, summary, img, link, githubLink }) => (
                <Project
                  key={title}
                  type={type}
                  title={title}
                  summary={summary}
                  img={img}
                  link={link}
                  githubLink={githubLink}
                />
              )
            )}
            {SmallProjectsInfo.map(({ type, title, img, link, githubLink }) => (
              <SmallProject
                key={title}
                type={type}
                title={title}
                img={img}
                link={link}
                githubLink={githubLink}
              />
            ))}
          </div>
        </Layout>
      </div>
    </>
  );
};

export default ProjectsPage;
