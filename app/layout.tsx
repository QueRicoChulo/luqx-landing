export const metadata = {
  title: 'LUQX — Legal Intelligence, Rebuilt',
  description: 'AI-powered legal workflow platform for modern attorneys.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>{children}</body>
    </html>
  )
}
