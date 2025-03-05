import Header from './components/Header';
import Banner from './components/Banner';
import ServiceSection from './components/ServiceSection';
import AboutSection from './components/AboutSection';
import CompanyStats from './components/CompanyStats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <ServiceSection />
      <AboutSection />
      <CompanyStats />
      <Footer />
    </div>
  );
}

export default App;
