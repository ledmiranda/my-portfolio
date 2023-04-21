import Link from 'next/link';
import Layout from './layout';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between ">
        <Link href="/">Luis Miranda</Link>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
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
