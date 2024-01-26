import './main.css'

export const metadata = {
  title: 'hypa.net',
  description: 'Web development and private web hosting.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
