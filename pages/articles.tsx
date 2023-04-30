import Head from 'next/head';
import Layout from '../components/ui/layout';
import AnimatedText from '../components/ui/animated-text';
import FeaturedArticle from '../components/articles/featured-article';
import { ArticleHeadlineInfo, ArticlesInfo } from '../models/articles';
import ArticleItem from '../components/articles/article-item';

const ArticlesPage = () => {
  return (
    <>
      <Head>
        <title>LM - Articles</title>
        <meta name="description" content="Articles description" />
      </Head>
      <div className="flex w-full flex-col items-center justify-center mb-16 overflow-hidde dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Dev articles" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            {ArticlesInfo.map(({ img, title, time, summary, link }) => (
              <FeaturedArticle
                key={title}
                img={img}
                title={title}
                time={time}
                summary={summary}
                link={link}
              />
            ))}
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 ">
            All Articles
          </h2>
          <ul>
            {ArticleHeadlineInfo.map(({ title, date, link }) => (
              <ArticleItem key={title} title={title} date={date} link={link} />
            ))}
          </ul>
        </Layout>
      </div>
    </>
  );
};

export default ArticlesPage;
