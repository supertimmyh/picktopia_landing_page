import React from 'react';
import styled from 'styled-components';

// Define styled components similar to GiftCardSection
const GrandOpeningSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%); // Example gradient, adjust as needed
  color: #333; // Dark text for light background
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: #4834D4; // Use a primary color from the theme if available

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HighlightText = styled.span`
  font-weight: bold;
  color: #6C63FF; // Another theme color
`;

const GrandOpening = () => {
  return (
    <GrandOpeningSection>
      <Container>
        <Header>🎉 Grand Opening Soon! 🎉</Header>
        <Description>
          Get ready, Toronto! Picktopia is thrilled to announce its upcoming Grand Opening.
          Join us for exclusive events, special offers, and the best pickleball experience in the city.
          Stay tuned for the official date and celebration details!
          <br /><br />
          Follow us on social media for the latest updates!
        </Description>
        {/* Add more content or CTAs if needed */}
      </Container>
    </GrandOpeningSection>
  );
};

export default GrandOpening;