import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../icons/github-icon';
import { motion } from 'framer-motion';

interface ISmallProject {
  type: string;
  title: string;
  img: string;
  link: string;
  githubLink: string;
}

const FramerImage = motion(Image);

const SmallProject = ({
  type,
  title,
  img,
  link,
  githubLink,
}: ISmallProject) => {
  return (
    <div className="col-span-6 sm:col-span-12">
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl 
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light 
          md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
        />
        <Link
          href={link}
          target="_blank"
          className="'w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            width={600}
            height={600}
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
        <div className="flex flex-col items-start justify-between w-full mt-4">
          <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
              {title}
            </h2>
          </Link>
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline md:text-base"
            >
              Visit
            </Link>
            <Link href={githubLink} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SmallProject;
