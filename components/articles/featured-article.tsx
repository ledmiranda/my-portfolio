import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface IFeaturedArticle {
  img: string;
  title: string;
  time: number;
  summary: string;
  link: string;
}

const FramerImage = motion(Image);

const FeaturedArticle = ({
  img,
  title,
  time,
  summary,
  link,
}: IFeaturedArticle) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          width={200}
          height={200}
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time} min</span>
    </li>
  );
};

export default FeaturedArticle;
