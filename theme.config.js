/**
 * Theme configuration for the Nextra Docs theme.
 * See https://nextra.site/docs/docs-theme/theme-configuration for the available
 * options. Most fields are optional; feel free to extend this file when
 * customizing your portfolio further.
 */
export default {
  logo: () => <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My Portfolio</span>,
  project: {
    link: 'https://github.com/kanishksingh01/nextra-githubactions'
  },
  docsRepositoryBase: 'https://github.com/kanishksingh01/nextra-githubactions',
  footer: {
    text: () => <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
  }
}
