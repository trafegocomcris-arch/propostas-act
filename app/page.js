export default function Home() {
  return (
    <div style={{ background: '#0E0E0E', color: '#FFFFFF', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '16px', fontFamily: 'Manrope, sans-serif', fontWeight: '800' }}>
          act<span style={{ color: '#F5B113' }}>.</span>
        </h1>
        <p style={{ color: '#9A9A9A', marginBottom: '24px' }}>Propostas Comerciais</p>
        <p style={{ color: '#6B6B6B', fontSize: '14px' }}>Acesse uma proposta específica:</p>
        <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
          <a href="/principioativo" style={{ color: '#F5B113', textDecoration: 'none', fontSize: '15px', fontWeight: '600' }}>→ /principioativo</a>
        </div>
      </div>
    </div>
  )
}
