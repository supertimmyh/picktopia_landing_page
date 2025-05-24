import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'; // Changed to HeroSection
// import Features from './components/Features'
// import KidsSection from './components/KidsSection'
// import GiftCardSection from './components/GiftCardSection'
// import PrivateEvents from './components/PrivateEvents'
// import PromotionalOffer from './components/PromotionalOffer'
import GrandOpening from './components/GrandOpening'; // Import the new component
import SoftOpeningSignUp from './components/SoftOpeningSignUp'; // Import the soft opening signup page
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import SignUpSuccess from './components/SignUpSuccess'
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
              <HeroSection />
              <GrandOpening />
              {/* <PromotionalOffer /> */}
              {/* <Features />
              <KidsSection />
              <GiftCardSection />
              <PrivateEvents /> */}
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/success" element={<SignUpSuccess />} />
          <Route path="/soft-opening-signup" element={<SoftOpeningSignUp />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  )
}

export default App
