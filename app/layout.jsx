import 'nextra-theme-docs/style.css'
import { Layout } from 'nextra-theme-docs'

export const metadata = {
  title: {
    default: 'My Portfolio',
    template: '%s – My Portfolio',
  },
  description: 'Personal portfolio built with Nextra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout
          logo={<span>My Portfolio</span>}
          project={{ link: 'https://kanishksingh01.github.io/nextra-githubactions' }}
          docsRepositoryBase="https://github.com/kanishksingh01/nextra-githubactions/blob/main/content"
          nextThemes={{ defaultTheme: 'dark' }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
