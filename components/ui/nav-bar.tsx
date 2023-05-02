import { motion } from 'framer-motion';
import GithubIcon from '../icons/github-icon';
import LinkedInIcon from '../icons/linkedin-icon';
import { PersonalLinks } from '../../models/personal-info';
import useThemeSwitcher from '../../shared/hooks/useThemeSwitcher';
import SunIcon from '../icons/sun-icon';
import MoonIcon from '../icons/moon-icon';
import { useState } from 'react';
import Menu from './menu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { mode, setMode } = useThemeSwitcher();

  const menuClickHandler = () => {
    setIsOpen((currentValue) => !currentValue);
  };

  return (
    <header
      className="w-full px-32 py-8 font-medium flex items-center justify-between
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8"
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
      <Menu isOpen={isOpen} onClick={menuClickHandler}>
        <nav className="flex items-center justify-center flex-wrap mt-2">
          <motion.a
            href={PersonalLinks.linkedIn}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href={PersonalLinks.github}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full text-dark dark:text-light dark:bg-dark sm:mx-1"
          >
            <GithubIcon />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center w-7 rounded-full p-1
            ${mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'}
            sm:mx-1
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
      </Menu>
    </header>
  );
};

export default NavBar;
