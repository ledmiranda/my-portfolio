import { useRef } from 'react';
import { motion } from 'framer-motion';
import TimelineIcon from './timeline-icon';

interface ITimelineDetail {
  title: string;
  time: string;
  location: string;
  description: string;
  company?: string;
}
const TimelineDetail = ({
  title,
  time,
  location,
  description,
  company = '',
}: ITimelineDetail) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <TimelineIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          <span className="text-dark dark:text-light">{title}</span>&nbsp;
          {company && (
            <span className="text-primary dark:text-primaryDark capitalize">
              @{company}
            </span>
          )}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {location}
        </span>
        <p className="font-medium w-full md:text-sm text-dark dark:text-light">
          {description}
        </p>
      </motion.div>
    </li>
  );
};

export default TimelineDetail;
