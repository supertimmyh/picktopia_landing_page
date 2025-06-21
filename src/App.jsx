import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import ClubInfo from './components/ClubInfo'; // Import the new ClubInfo component
import Membership from './components/Membership';
import WaiverForm from './components/WaiverForm';
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
              <ClubInfo />
              <Membership />
            </>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/success" element={<SignUpSuccess />} />
          <Route path="/waiver" element={<WaiverForm />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  )
}

export default App