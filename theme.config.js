import React from 'react'

const currentYear = new Date().getFullYear()

/**
 * Theme configuration for the Nextra Docs theme.  See
 * https://nextra.site/docs/docs-theme/theme-configuration for the available
 * options.  Most fields are optional; feel free to extend this file when
 * customizing your portfolio further.
 */
export default {
  logo: <span style={{ fontWeight: 700 }}>My Portfolio</span>,
  project: {
    // Link in the navbar pointing back to the GitHub repository.
    link: 'https://github.com/kanishksingh01/nextra-githubactions'
  },
  docsRepositoryBase: 'https://github.com/kanishksingh01/nextra-githubactions',
  footer: {
    // Replace "Your Name" with your actual name or brand.
    text: `© ${currentYear} Your Name. All rights reserved.`
  }
}
