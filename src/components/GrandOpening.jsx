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

const OfferDetailsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8); // Semi-transparent white background
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2.5rem;
  border: 2px solid #4834D4;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const OfferHeader = styled.h3`
  font-size: 2rem;
  color: #E84393; // A vibrant pink for the offer header
  margin-bottom: 1rem;
`;

const OfferText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0.5rem;

  strong {
    color: #E84393;
  }
`;

const PriceHighlight = styled.span`
  font-weight: bold;
  color: #20BF6B; // A green for prices
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #E84393; // Match offer header color
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid #E84393;
  margin-top: 1.5rem;

  &:hover {
    background-color: #D43782;
    border-color: #D43782;
  }
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

        <OfferDetailsContainer>
          <OfferHeader>🌟 Grand Opening Special! 🌟</OfferHeader>
          <OfferText>From <strong>June 2023</strong> to <strong>August 2023</strong>, enjoy exclusive rates:</OfferText>
          <OfferText>✓ Membership: <PriceHighlight>$29.99/month</PriceHighlight></OfferText>
          <OfferText>✓ Prime Time Play: <PriceHighlight>$2.99/person</PriceHighlight></OfferText>
          <OfferText>✓ Non-Prime Time Play: <PriceHighlight>Free for members!</PriceHighlight></OfferText>
          <CTAButton href="#claim-offer">Claim Your Offer Now</CTAButton>
        </OfferDetailsContainer>
        {/* Add more content or CTAs if needed */}
      </Container>
    </GrandOpeningSection>
  );
};

export default GrandOpening;