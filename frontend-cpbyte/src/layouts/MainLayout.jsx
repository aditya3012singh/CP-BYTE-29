import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function MainLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#060a10', color: '#f1f5f9', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
