/**
 * Theme configuration for the Nextra Docs theme.
 * All fields are optional; customize as needed.
 */
export default {
  logo: () => <span>SRE InfoHub</span>,
  project: {
    link: 'https://kanishksingh01.github.io/nextra-githubactions'
  },
  docsRepositoryBase: 'https://github.com/kanishksingh01/nextra-githubactions',
  nextThemes: {
    defaultTheme: 'dark'
  },
  darkMode: true,
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  footer: {
    text: () => <span>© {new Date().getFullYear()} SRE InfoHub. All rights reserved.</span>
  },
}
