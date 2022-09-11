import './App.css';
import './App.css';
import backgroundImage from './assets/background.webp'
import Navbar from './components/Navbar';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ContactusSection from './sections/ContactusSection';

function App() {
  return (
    <div className='app' style={{ backgroundImage: `url(${backgroundImage})` ,backgroundRepeat: 'no-repeat', }}>
      <Navbar/>
      <HomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ContactusSection/>
    </div>
  );
}

export default App;
