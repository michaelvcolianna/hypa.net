import './main.css'

export const metadata = {
  title: 'mvsizzle.com',
  description: 'A *private* web host.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
