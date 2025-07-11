import React from 'react';
import styled from 'styled-components';

// Define styled components
const GrandOpeningSection = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: #333;
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
  color: #4834D4;

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
  color: #6C63FF;
`;

const OfferDetailsContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2.5rem;
  border: 2px solid #4834D4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const OfferHeader = styled.h3`
  font-size: 2rem;
  color: #E84393;
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
  color: #20BF6B;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: #E84393;
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

// New styled components for pricing tables
const PricingTable = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  border-collapse: collapse;
  text-align: left;
`;

const PricingRow = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  padding: 0.8rem 0;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PricingCell = styled.div`
  flex: 1;
  padding: 0.5rem;
  
  &:first-child {
    font-weight: ${props => props.isHeader ? 'bold' : 'normal'};
  }
  
  @media (max-width: 768px) {
    padding: 0.3rem 0.5rem;
  }
`;

const PricingHeader = styled(PricingRow)`
  font-weight: bold;
  background-color: rgba(232, 67, 147, 0.1);
  border-bottom: 2px solid #E84393;
`;

const BenefitList = styled.ul`
  text-align: left;
  margin: 1rem 0;
  padding-left: 1.5rem;
`;

const BenefitItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  
  &::before {
    content: "✅";
    position: absolute;
    left: -1.5rem;
  }
`;

const PlanContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PlanCard = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  border-top: 5px solid ${props => props.featured ? '#E84393' : '#4834D4'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


const PlanTitle = styled.h4`
  font-size: 1.5rem;
  color: ${props => props.featured ? '#E84393' : '#4834D4'};
  margin-bottom: 0.5rem;
`;

const PlanPrice = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #20BF6B;
`;

const PlanSubtext = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const TimeDefinition = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1.5rem;
  border-left: 4px solid #4834D4;
`;

const TimeTitle = styled.h4`
  font-size: 1.2rem;
  color: #4834D4;
  margin-bottom: 0.5rem;
`;

const TimeRow = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TimeLabel = styled.div`
  font-weight: bold;
  width: 120px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TimeValue = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  margin-top: auto;
  padding-top: 1rem;
`;

const GrandOpening = () => {
  return (
    <GrandOpeningSection id="membership">
      <Container>
        <Header>🎉 Welcome to Picktopia St Clair! 🎉</Header>
        <Description>
          Our brand new St Clair location is now open! We offer a variety of membership options to suit your playing style.
        </Description>

        <OfferDetailsContainer>
          <OfferHeader>Membership Information</OfferHeader>
          <OfferText>
            Full membership details will be published soon. 
            In the meantime, please call us for more information on our membership plans and benefits.
          </OfferText>
          <OfferText>
            Contact us at: <a href="tel:+16474789866">6474789866</a>
          </OfferText>
          <CTAButton href="https://app.courtreserve.com/Portal/Picktopia" target="_blank" rel="noopener noreferrer">Book a Court</CTAButton>
        </OfferDetailsContainer>
      </Container>
    </GrandOpeningSection>
  );
};

export default GrandOpening;