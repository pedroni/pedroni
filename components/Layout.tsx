import styled from 'styled-components'
import Footer from './Footer'
import Header from './Header'

export const Layout = ({ children, nav = [] }) => {
  return (
    <div className="pt-[var(--header-height)] min-h-screen bg-[url(/img/background.jpg)] bg-cover bg-[top_center] z-[1] relative max-w-full">
      <Header nav={nav} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
