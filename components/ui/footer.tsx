import Link from 'next/link';
import Layout from './layout';

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light
      sm:text-base"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <Link href="/">Luis Miranda</Link>
        <span className="lg:py-2">
          {new Date().getFullYear()} &copy; All Rights Reserved
        </span>
        <div className="flex items-center lg:py-2">
          Built with &nbsp;
          <a
            href="https://nextjs.org/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Next.js
          </a>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
