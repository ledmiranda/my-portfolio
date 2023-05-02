import { ReactElement } from 'react';
import CustomLink from './custom-link';
import CustomMobileLink from './custom-mobile-link';
import { motion } from 'framer-motion';

interface IMenu {
  children: ReactElement | ReactElement[];
  isOpen: boolean;
  onClick: () => void;
}

const Menu = ({ children, isOpen, onClick }: IMenu) => {
  return (
    <>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Project" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
        </nav>
        {children}
      </div>
      {isOpen && (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center 
            fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 
            dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" onClick={onClick} />
            <CustomMobileLink href="/about" title="About" onClick={onClick} />
            <CustomMobileLink
              href="/projects"
              title="Project"
              onClick={onClick}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              onClick={onClick}
            />
          </nav>
          <div className="flex items-center flex-col justify-center">
            {children}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Menu;
