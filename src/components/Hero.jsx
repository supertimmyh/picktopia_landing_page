import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpeg';
import pickleball from '../assets/pickleball.svg';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeroWrapper = styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Pickleball = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  animation: ${float} 3s ease-in-out infinite;
  filter: brightness(0.8) opacity(0.7);
`;

const HeroContent = styled.div`
  max-width: 1200px;
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;

  &:hover, &:focus {
    background-color: transparent;
    border-color: white;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus-visible {
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ top: '15%', left: '15%', animationDelay: '0s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ top: '25%', right: '20%', animationDelay: '0.5s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ bottom: '20%', left: '25%', animationDelay: '1s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ bottom: '30%', right: '15%', animationDelay: '1.5s' }}
      />
      <HeroSection>
        <HeroContent>
          <Subtitle>Pickleball Fun for Everyone - Join the Rally at</Subtitle>
          <Title>Picktopia Pickleball Club</Title>
          <CTAButton to="/signup">Join Now</CTAButton>
        </HeroContent>
      </HeroSection>
    </HeroWrapper>
  );
};

export default Hero;