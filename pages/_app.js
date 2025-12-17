import 'nextra-theme-docs/style.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '20px' }}>
      <header style={{ marginBottom: '2rem', padding: '1rem 0', borderBottom: '1px solid #eaeaea' }}>
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
        </nav>
      </header>
      <main>
        <Component {...pageProps} />
      </main>
      <footer style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #eaeaea', textAlign: 'center' }}>
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
