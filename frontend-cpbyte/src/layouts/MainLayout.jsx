import Navbar from '../components/layout/Navbar'

function MainLayout({ children }) {
  return (
    <div style={{ minHeight: '100vh', background: '#060a10', color: '#f1f5f9', fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
