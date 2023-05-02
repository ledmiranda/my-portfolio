import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../icons/github-icon';
import { motion } from 'framer-motion';

interface IProject {
  type: string;
  title: string;
  summary?: string;
  img: string;
  link: string;
  githubLink: string;
}

const FramerImage = motion(Image);

const Project = ({ type, title, summary, img, link, githubLink }: IProject) => {
  return (
    <div className="col-span-12">
      <article
        className="w-full relative flex items-center justify-between rounded-3xl 
        border border-so border-dark bg-light shadow-xl p-12 rounded-br-2xl
        dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] 
          bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
        />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            width={200}
            height={200}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            50vw"
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 text-dark w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
          {summary && (
            <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
              {summary}
            </p>
          )}
          <div className="mt-2 flex items-center">
            <Link
              href={githubLink}
              target="_blank"
              className="w-10 text-dark dark:text-light"
            >
              <GithubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
                dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;
