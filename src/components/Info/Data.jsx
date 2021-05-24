export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Live Courses',
  headline: 'Attend our courses at minimal price',
  description:
    '20 day online live workshop with certified professionals \nRegular optional quizzes,lecture notes  and study material to solidify your concepts and understanding.    \n Lifetime access to CAD models and softwares.',
  buttonLabel: 'Register Now',
  href: 'https://rzp.io/l/conceptlab',
  imgStart: false,
  img: require('../../images/svg-1.svg').default,
  alt: 'design',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Upskill yourself',
  headline: 'Get industry ready by learning the most cut-edge softwares',
  description: 'Learn in demand CAD softwares Catia & SolidWorks. \n Top 5 students to get a chance to be certified by Dassault Systems for free.',
  buttonLabel: 'Learn More',
  href: 'https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design',
  imgStart: true,
  img: require('../../images/svg-2.svg').default,
  alt: 'industry',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Concept Lab',
  headline: 'Registering for our courses is extremely easy',
  description: 'Click the button below to register for any course',
  buttonLabel: 'Register',
  href: 'https://rzp.io/l/conceptlab',
  imgStart: false,
  img: require('../../images/svg-3.svg').default,
  alt: 'payment',
  primary: false,
  darkText: true
};
const text = `All students who will be enrolling in our training program, will be given a chance to opt for a 10 day internship program in one of the following domains of their choice:\n
      1.Live project on CAD modelling\n            
      2.Marketing and Business development\n            
      3.Sales and Revenue\n            
      After successful completion of internship period,internship certificates(for all) and LOR's\n(to deserving candidates) will be given.\n
`
const newText = text.split('\n').map(str => <p>{str}</p>);

export const homeObjFour = {
  id: 'intern',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'Internships',
  headline: 'Start your career with us',
  description: newText,
  buttonLabel: 'Register Now to apply',
  href: 'https://rzp.io/l/conceptlab',
  imgStart: true,
  img: require('../../images/svg-4.svg').default,
  alt: 'payment',
  dark: true,
  primary: true,
  darkText: false
};
