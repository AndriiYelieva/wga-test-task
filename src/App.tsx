import './App.css';
import { Header } from './components/Header';
import { Catagory } from './components/Catagory';
import { Women } from './components/Women';
import { Men } from './components/Men';
import { Alone } from './components/Alone';
import { Techen } from './components/Tachen';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <Header />
      <Catagory />
      <Women />
      <Men />
      <Alone />
      <Techen />
      <Footer />
    </>
  )
}

export default App
