import './globals.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html dir='rtl'>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,1,-25" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
      </head>
      <body className='overflow-x-hidden'>
        <section>
          <Header />
          {children}
          <Footer />
        </section>
      </body>
    </html >
  )
}