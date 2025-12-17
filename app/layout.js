import 'nextra-theme-docs/style.css'
import { ThemeProvider } from './theme-provider'

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio site built with Nextra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <header style={{ marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>My Portfolio</h1>
              <nav>
                <a href="https://github.com/kanishksingh01/nextra-githubactions" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </nav>
            </header>
            <main>
              {children}
            </main>
            <footer style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--nextra-border-color, rgba(229, 231, 235, 0.2))' }}>
              <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
