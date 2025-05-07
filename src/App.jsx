import './App.css'
import Header from './components/header/app'
import Navbar from './components/navbar/app'
import Hero from './components/Hero/App'
import AboutUs from './components/About-us/app'
import Services from './components/Services/app'
import Features from './components/Features/app'
import Plans from './components/Pricing/app'
import Branches from './components/Branches/app'
import Contacts from './components/Contacts/app'

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Features />
      <Plans />
      <Branches />
      <Contacts />
    </>
  )
}

export default App
