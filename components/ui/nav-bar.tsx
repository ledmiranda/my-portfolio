import { motion } from 'framer-motion';
import Logo from './logo';
import CustomLink from './custom-link';
import GithubIcon from '../icons/github-icon';
import LinkedInIcon from '../icons/linkedin-icon';
import { PersonalLinks } from '../../models/personal-info';
import useThemeSwitcher from '../../shared/hooks/useThemeSwitcher';
import SunIcon from '../icons/sun-icon';
import MoonIcon from '../icons/moon-icon';

const NavBar = () => {
  const { mode, setMode } = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
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
          className="ml-3 flex items-center justify-center rounded-full p-1"
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
