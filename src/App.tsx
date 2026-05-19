import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="min-h-[calc(100vh-5rem)] px-4 py-8 md:px-8 lg:px-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
