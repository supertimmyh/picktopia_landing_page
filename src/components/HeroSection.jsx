import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import pickleball from '../assets/pickleball.svg'; // Import the pickleball SVG
import heroImage from '../assets/hero-image.jpeg'; // Import the hero image

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  min-height: 70vh; // Adjust height as needed
  padding: 5rem 2rem 2rem; // Adjusted top padding for thinner navbar
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url(${heroImage}); // Use heroImage as background
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClubName = styled.h2`
  font-size: 1.8rem; // Adjusted size
  font-weight: 500;
  color: #FFA500; // Orange color from image
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MainHeadline = styled.h1`
  font-size: 3rem; // Adjusted size
  font-weight: bold;
  color: #ffffff; // White color
  margin-bottom: 1rem;
  line-height: 1.2;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const SubHeadline = styled(Link)`
  font-size: 1.5rem; // Adjusted size
  font-weight: 500;
  color: #FFA500; // Orange color for emphasis, similar to 'JOIN THE RALLY!'
  text-transform: uppercase;
  letter-spacing: 2px;
  border: 2px solid #FFA500;
  padding: 0.5rem 1.5rem;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #FFA500;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Placeholder for pickleball and paddle visuals - could be SVGs or images
const VisualsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.3; // Adjust opacity to blend with background
  // Example: Add a pickleball SVG or image here
  // Example: Add a paddle SVG or image here
`;

const Pickleball = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  animation: ${float} 3s ease-in-out infinite;
  filter: brightness(0.8) opacity(0.7);
  z-index: 0; // Ensure pickleballs are behind the text
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ top: '15%', left: '10%', animationDelay: '0s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ top: '25%', right: '15%', animationDelay: '0.5s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ bottom: '20%', left: '20%', animationDelay: '1s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ bottom: '30%', right: '10%', animationDelay: '1.5s' }}
      />
      <Pickleball 
        src={pickleball} 
        alt="Pickleball"
        style={{ top: '50%', left: '45%', animationDelay: '0.2s' }}
      />
      {/* <VisualsContainer /> */}
      {/* Uncomment VisualsContainer if you add actual visuals */}

      <TextWrapper>
        <ClubName>PICKTOPIA PICKLEBALL CLUB</ClubName>
        <MainHeadline>PICKLEBALL FUN FOR EVERYONE - JOIN THE RALLY</MainHeadline>
        <SubHeadline to="https://app.gocourtplus.com/picktopia/login">Book a Court</SubHeadline>
      </TextWrapper>
    </HeroContainer>
  );
};

export default HeroSection;