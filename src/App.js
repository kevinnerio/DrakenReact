import NavScrollExample from './components/Heading';
import './App.css';
import HeroBackground from './components/Hero';
import FooterLayout from './components/Footer';
import Intro from './components/Intro';
import ContactUs from './components/Contact';
import ClientsSection from './components/PastClients';
import OurServices from './components/OurServices';

function App() {
  return (
    <div className="App">
      <NavScrollExample/>
      <HeroBackground/>
      <Intro/>
      <OurServices/>
      <ContactUs/>
      <ClientsSection/>
      <FooterLayout/>
    </div>
  );
}

export default App;
