import Navbar from '../components/layout/Navbar'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default MainLayout
