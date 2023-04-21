import { title } from 'process';

export interface TimelineInfo {
  id: string;
  title: string;
  company?: string;
  time: string;
  location: string;
  description: string;
}

export const experiencesDetail: TimelineInfo[] = [
  {
    id: 'Experience 01',
    title: 'Front-End Developer',
    company: 'Prediktive',
    time: 'Mar 2022 - Apr 2023',
    location: 'Remote',
    description: `Contractor at XupPay: Project related with banking and loans for small companies
    - Delivered new features to a web platform that delivers loans software for small businesses. 
    - This project is being maintained in Angular 14 using the following: Sass for styling, MobX for state management and Github Actions for CI/CD.
    - Implemented unit test using Jasmine.
    - Collaborated with QA and Business team to deliver features to end users.`,
  },
  {
    id: 'Experience 02',
    title: 'Front-End Developer',
    company: 'Encora',
    time: 'Jan 2021 - Mar 2022',
    location: 'Lima, Peru',
    description: `Contractor at Scotiabank: Bank project
    Gave support to an existing web platform using Angular and React with the following: 
    - React function components.
    - Redux in order to use the state management.
    - TypeScript that helps to type functions, objects in order to avoid errors.
    - Jest for unit testing.
    - Node.js to mock endpoints from backend to do testing.
    
    Successfully migrated the mentioned platform using new technologies:
    - Next.js that helps to use server side rendering.
    - Styled-components that helps to use css in javascript code.
    
    Attended to meetings with the team in order to detail future requirements by using Scrum.`,
  },
  {
    id: 'Experience 03',
    title: 'Front-End Developer',
    company: 'Globant',
    time: 'Mar 2020 - Dec 2020',
    location: 'Lima, Peru',
    description: `Contractor at ESPN: CMS platform to manage and store videos
    - Deliver new features for the project that was built in Angular, SASS, NgRx, RxJs.
    - Meet with the clients every day for the scrum meetings.`,
  },
  {
    id: 'Experience 04',
    title: 'Full Stack Developer',
    company: 'Belatrix',
    time: 'Dec 2017 - Mar 2020',
    location: 'Lima, Peru',
    description: `Contractor at Brainshark: E-learning platform project
    - Helped by leading the scrum meetings (dailys, refinement, planning meetings) 
    - Worked in a new project that involves the migration of legacy code to Angular (Javascript, Typescript, SASS) and ASP.NET Web API.
    - Analyzed and implemented new features and also fixed some errors.`,
  },
  {
    id: 'Experience 05',
    title: 'Full Stack Developer',
    company: 'Trans Solutions Systems S.A.',
    time: 'Mar 2016 - Dec 2017',
    location: 'Lima, Peru',
    description: `- Contractor at Clark: Web platform for sales and inventory.
    - Successfully migrated and developed platform modules using the following technologies: Aurelia, Typescript, Javascript, ASP.NET MVC and ASP.NET Web API.
    - Attended meetings with the clients in order to establish the business requirements for the system.
    - Analysis and implementation for new features.`,
  },
  {
    id: 'Experience 06',
    title: 'Web Developer',
    company: 'Software Enterprise Services',
    time: 'Aug 2015 - Feb 2016',
    location: 'Lima, Peru',
    description: `- Analyzed and developed new business requirements.
    - Implemented Object-Oriented Analysis and N. Tier Architecture using .Net Framework.
    - Gave support and delivered solutions for troubles and new features.`,
  },
  {
    id: 'Experience 07',
    title: 'Web Developer',
    company: 'TiSmart Peru',
    time: 'Aug 2013 - Jul 2015',
    location: 'Lima, Peru',
    description: `- Analyzed and delivered new business requirements.
    - Attended meetings with the clients to discuss new project requirements.
    - Created documentation for new features, issues and meetings.
    - Implemented Object-Oriented Analysis and N. Tier Architecture using .Net Framework.
    - Developed strong knowledge in front end development using JavaScript, JQUERY, HTML, etc.`,
  },
];

export const educationDetail: TimelineInfo[] = [
  {
    id: 'Education 01',
    title: 'Master in Information Technology Management',
    time: 'Dec 2021',
    location: 'Universidad ESAN',
    description: `Completed a master's projects by creating a virtual bar applying different technologies like mobile applications, social platforms`,
  },
  {
    id: 'Education 02',
    title: 'Bachelor in Science in Software Engineering',
    time: 'Dec 2014',
    location: 'Universidad Peruana de Ciencias Aplicadas',
    description: `Learned the basics about software engineering from the management point of view until the software development.
    My final project was about creating a platform that helped the university to get accredited.`,
  },
];
