import BannerSection from "./components/BannerSection"
import Category from "./components/Category"
import FeatureBreadSection from "./components/FeatureBreadSection"
import FeatureFruitsSection from "./components/FeatureFruitsSection"
import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
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
     <FeatureSection />
     <Footer />
    </main>
  )
}

export default App
