// Prefix internal paths with the deploy base (e.g. /Portfolio)
export const url = (path = '') => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
};

export const links = {
  github: 'https://github.com/Doombuoy',
  linkedin: 'https://www.linkedin.com/in/agam-singh-saini-199185220/',
  email: 'mailto:agamsingh.saini@student.uts.edu.au',
  emailText: 'agamsingh.saini@student.uts.edu.au',
  resume: 'Agam_Singh_Saini_Resume.pdf',
};
