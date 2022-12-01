import Footer from '../component/Footer'
import Header from '../component/Header'

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
