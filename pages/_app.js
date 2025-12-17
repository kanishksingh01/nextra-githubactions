import { ThemeProvider, useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div style={{ minHeight: '100vh', transition: 'background-color 0.3s, color 0.3s' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
          <header style={{ marginBottom: '2rem', padding: '1rem 0', borderBottom: '1px solid var(--border-color, #eaeaea)' }}>
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'inherit' }}>
                My Portfolio
              </Link>
              <Link href="/projects" style={{ textDecoration: 'none', color: 'inherit' }}>
                Projects
              </Link>
              <a 
                href="https://github.com/kanishksingh01/nextra-githubactions" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ marginLeft: 'auto', textDecoration: 'none', color: 'inherit' }}
              >
                GitHub
              </a>
              <ThemeToggle />
            </nav>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
          <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color, #eaeaea)', textAlign: 'center' }}>
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => setMounted(true), [])
  
  if (!mounted) return null
  
  const currentTheme = theme === 'system' ? resolvedTheme : theme
  
  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      style={{
        padding: '0.5rem',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        fontSize: '1.25rem'
      }}
      aria-label="Toggle theme"
    >
      {currentTheme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}
