import { motion } from 'framer-motion';

interface ISkill {
  name: string;
  xPosition: string;
  yPosition: string;
}

const Skill = ({ name, xPosition, yPosition }: ISkill) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark 
        text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{
        x: xPosition,
        y: yPosition,
        transition: { duration: 1.5 },
      }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default Skill;
