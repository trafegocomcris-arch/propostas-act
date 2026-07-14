import './globals.css'

export const metadata = {
  title: 'Propostas ACT Digital',
  description: 'Propostas comerciais profissionais da ACT Digital',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
