import BannerSection from "./components/BannerSection"
import Category from "./components/Category"
import FeatureBreadSection from "./components/FeatureBreadSection"
import FeatureFruitsSection from "./components/FeatureFruitsSection"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
const App = () => {
  return (
    <main className="container">
     <Navbar />
     <Hero />
     <Category />
     <FeatureFruitsSection />
     <FeatureBreadSection />
     <BannerSection />
    </main>
  )
}

export default App
