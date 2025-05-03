import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import KidsSection from './components/KidsSection'
import GiftCardSection from './components/GiftCardSection'
import PrivateEvents from './components/PrivateEvents'
import PromotionalOffer from './components/PromotionalOffer'
import GrandOpening from './components/GrandOpening'; // Import the new component
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import './App.css'

const AppWrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
`;

function App() {
  return (
    <Router>
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <GrandOpening /> {/* Add the GrandOpening component here */}
              <Features />
              <KidsSection />
              <GiftCardSection />
              <PrivateEvents />
              <PromotionalOffer />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  )
}

export default App
