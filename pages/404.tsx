import AnimatedText from '../components/ui/animated-text';
import Layout from '../components/ui/layout';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex w-full flex-col items-center justify-center mb-16 overflow-hidde dark:text-light">
        <Layout className="pt-44">
          <AnimatedText
            text="Page Not Found!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
        </Layout>
      </div>
    </div>
  );
};

export default NotFoundPage;
