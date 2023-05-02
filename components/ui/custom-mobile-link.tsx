import Link from 'next/link';
import { useRouter } from 'next/router';

interface ICustomMobileLink {
  href: string;
  title: string;
  onClick: () => void;
  className?: string;
}

const CustomMobileLink = ({
  href,
  title,
  onClick,
  className = '',
}: ICustomMobileLink) => {
  const router = useRouter();

  const clickHandler = () => {
    onClick();
    router.push(href);
  };

  return (
    <button
      onClick={clickHandler}
      className={`${className} relative group text-light dark:text-dark my-2`}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-dark
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomMobileLink;
