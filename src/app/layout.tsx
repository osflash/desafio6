import '~/styles/globals.scss'

interface RootLayoutProps {
  children: React.ReactNode
}

import { Rubik } from '@next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'optional'
})

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br" className={rubik.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
