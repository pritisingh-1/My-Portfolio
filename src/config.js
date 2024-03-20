module.exports = {
  siteTitle: 'Priti Singh',
  siteDescription:
    'Priti is a Web Developer, who loves learning new things and helping tech beginners.',
  siteKeywords:
    'Priti Singh, PritiSingh, Mern Stack Developer, web developer, javascript, girlscript, bhagalpur, MCA',
  siteUrl: 'https://priti-singh.netlify.app/',
  siteLanguage: 'en_US',
  // googleAnalyticsID: 'UA-45666519-2',
  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Priti Singh',
  location: 'Patna, India',
  email: 'pritisinghsgg2017@gmail.com',
  github: 'https://github.com/pritisingh-1/',

  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/pritisingh-1/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/priti-singh-4b4805217?original_referer=',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/prity9593/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },

    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
