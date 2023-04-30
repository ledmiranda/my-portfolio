interface ArticleInfo {
  title: string;
  link: string;
  img: string;
  time: number;
  summary: string;
}

interface ArticleHeadlineInfo {
  title: string;
  date: string;
  link: string;
}

export const ArticlesInfo: ArticleInfo[] = [
  {
    img: '/articles/smooth scrolling in reactjs.png',
    title:
      'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
    time: 20,
    summary:
      'Lean how to create a simple and smooth scrolling component using Styled-Components',
    link: 'https://github.com/ledmiranda',
  },
  {
    img: '/articles/What is higher order component in React.jpg',
    title: 'What Is Higher Order Component (Hoc) In React?',
    time: 10,
    summary: 'Lean what is higher order components and its importance',
    link: 'https://github.com/ledmiranda',
  },
];

export const ArticleHeadlineInfo: ArticleHeadlineInfo[] = [
  {
    title:
      'Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling',
    date: '2023-01-02',
    link: 'https://github.com/ledmiranda',
  },
  {
    title:
      'Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers',
    date: '2023-01-02',
    link: 'https://github.com/ledmiranda',
  },
  {
    title:
      'Creating An Efficient Modal Component In React Using Hooks And Portals',
    date: '2023-02-02',
    link: 'https://github.com/ledmiranda',
  },
  {
    title: 'Build A Fabulous Todo List App With React, Redux And Framer-Motion',
    date: '2023-03-02',
    link: 'https://github.com/ledmiranda',
  },
  {
    title: 'Redux Simplified: A Guide for Web Developers Beginner',
    date: '2023-04-02',
    link: 'https://github.com/ledmiranda',
  },
];
