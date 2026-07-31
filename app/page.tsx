export default function Home() {
  return (
    <main style={{ maxWidth: 800, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>LUQX</h1>
      <p>Legal intelligence, rebuilt for speed.</p>
      <section style={{ marginTop: '2rem' }}>
        <h2>Features</h2>
        <ul>
          <li>Case-aware document management</li>
          <li>Legal research with citations</li>
          <li>Draft generation and review</li>
          <li>Audit-grade integrity log</li>
        </ul>
      </section>
      <a href="https://legalIQ.luqx.tech" style={{ display: 'inline-block', marginTop: '2rem', padding: '1rem 2rem', background: '#111', color: '#fff', textDecoration: 'none', borderRadius: 8 }}>
        Open LEGALIQ
      </a>
    </main>
  )
}
