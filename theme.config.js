const currentYear = new Date().getFullYear()

/**
 * Theme configuration for the Nextra Docs theme.
 * See https://nextra.site/docs/docs-theme/theme-configuration for the available
 * options. Most fields are optional; feel free to extend this file when
 * customizing your portfolio further.
 */
export default {
  logo: 'My Portfolio',
  darkMode: true,
  nextThemes: {
    defaultTheme: 'dark'
  },
  project: {
    // Link in the navbar pointing to the live site.
    link: 'https://kanishksingh01.github.io/nextra-githubactions'
  },
  docsRepositoryBase: 'https://github.com/kanishksingh01/nextra-githubactions',
  footer: {
    // Replace "Your Name" with your actual name or brand.
    text: `\u00a9 ${currentYear} Your Name. All rights reserved.`
  }
}
