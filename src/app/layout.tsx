import '~/styles/globals.scss'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
