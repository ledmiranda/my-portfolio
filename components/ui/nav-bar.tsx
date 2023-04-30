import { motion } from 'framer-motion';
import Logo from './logo';
import CustomLink from './custom-link';
import GithubIcon from '../icons/github-icon';
import LinkedInIcon from '../icons/linkedin-icon';
import { PersonalLinks } from '../../models/personal-info';
import useThemeSwitcher from '../../shared/hooks/useThemeSwitcher';
import SunIcon from '../icons/sun-icon';
import MoonIcon from '../icons/moon-icon';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, setMode } = useThemeSwitcher();

  const menuClickHandler = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
      dark:text-light
    "
    >
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={menuClickHandler}
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm 
          ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out dark:bg-light block h-0.5 w-6 rounded-sm 
          ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'} `}
        ></span>
      </button>
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Project" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href={PersonalLinks.linkedIn}
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href={PersonalLinks.github}
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <button
          className={`ml-3 flex items-center justify-center rounded-full p-1
            ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
          `}
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        >
          {mode === 'dark' ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
