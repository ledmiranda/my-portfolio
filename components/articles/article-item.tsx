import Link from 'next/link';
import { motion } from 'framer-motion';

interface IArticleItem {
  title: string;
  date: string;
  link: string;
}
const ArticleItem = ({ title, date, link }: IArticleItem) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light 
        text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:border-light
        dark:bg-dark dark:text-light sm:flex-col"
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
      </Link>
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

export default ArticleItem;
