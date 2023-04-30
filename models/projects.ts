interface ProjectInfo {
  type: string;
  title: string;
  summary?: string;
  img: string;
  link: string;
  githubLink: string;
}

export const ProjectsInfo: ProjectInfo[] = [
  {
    type: 'Featured Project',
    title: 'Videogame shop',
    summary: `Web platform built with Next.js, Tailwind CSS and Context API. 
      It emulates an e-shop market for buying videogames`,
    img: '/projects/e-shop.jpeg',
    link: 'https://github.com/ledmiranda',
    githubLink: 'https://github.com/ledmiranda',
  },
  {
    type: 'Web App',
    title: 'Task Manager',
    summary: `Web page built with React, Styled Components. 
      It emulates a project management by creating different task and put them in the desire status.`,
    img: '/projects/task-manager.png',
    link: 'https://github.com/ledmiranda',
    githubLink: 'https://github.com/ledmiranda',
  },
];

export const SmallProjectsInfo: ProjectInfo[] = [
  {
    type: 'Web App',
    title: 'Supermarket List',
    img: '/projects/fashion-studio-website.jpg',
    link: 'https://github.com/ledmiranda',
    githubLink: 'https://github.com/ledmiranda',
  },
  {
    type: 'Website',
    title: 'Blog',
    img: '/projects/fashion-studio-website.jpg',
    link: 'https://github.com/ledmiranda',
    githubLink: 'https://github.com/ledmiranda',
  },
];
