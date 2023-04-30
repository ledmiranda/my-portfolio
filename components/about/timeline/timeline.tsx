import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import TimelineDetail from './timeline-detail';
import { TimelineInfo } from '../../../models/timeline-info';

interface ITimeLine {
  sectionTitle: string;
  timelineInfo: TimelineInfo[];
}
const Timeline = ({ sectionTitle, timelineInfo }: ITimeLine) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        {sectionTitle}
      </h2>
      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {timelineInfo.map(
            ({ id, title, company, time, location, description }) => (
              <TimelineDetail
                key={id}
                title={title}
                company={company}
                time={time}
                location={location}
                description={description}
              />
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
