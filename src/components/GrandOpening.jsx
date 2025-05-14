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
    <GrandOpeningSection>
      <Container>
        <Header>🎉 Picktopia St Clair — Summer 2025 Launch 🎉</Header>
        <Description>
          Get ready for an incredible summer of pickleball at our brand new St Clair location! 
          Join us from June 1 to September 1, 2025 with our special launch pricing.
        </Description>

        <OfferDetailsContainer>
          <OfferHeader>🌞 GRAND OPENING SPECIAL — SUMMER UNLIMITED PLAY</OfferHeader>
          <OfferText>June 1 – September 1, 2025</OfferText>
          
          <PlanContainer>
            <PlanCard featured={true}>
              <PlanTitle featured={true}>🥇 Full Summer Pass</PlanTitle>
              <PlanPrice>$129</PlanPrice>
              <PlanSubtext>one-time for 3 months</PlanSubtext>
              
              <BenefitList>
                <BenefitItem>Unlimited open play sessions</BenefitItem>
                <BenefitItem>Unlimited court bookings during non-prime hours</BenefitItem>
                <BenefitItem>Up to 3 prime-time bookings/week</BenefitItem>
                <BenefitItem>Championship court surcharge: $10/hr (prime only)</BenefitItem>
                <BenefitItem>10% off clinics, training, and merch</BenefitItem>
                <BenefitItem>4 guest passes per month</BenefitItem>
                <BenefitItem>Priority access to Fall/Winter Full Membership</BenefitItem>
              </BenefitList>
              
              <OfferText><strong>🔥 Best value</strong> — equivalent to just $43/month for full indoor access all summer!</OfferText>
              <ButtonContainer>
                <CTAButton href="#claim-offer">GET FULL SUMMER PASS</CTAButton>
              </ButtonContainer>
            </PlanCard>
            
            <PlanCard>
              <PlanTitle>💡 Monthly Unlimited Play</PlanTitle>
              <PlanPrice>$49</PlanPrice>
              <PlanSubtext>per month</PlanSubtext>
              
              <BenefitList>
                <BenefitItem>Same access as the Full Summer Pass</BenefitItem>
                <BenefitItem>2 guest passes per month</BenefitItem>
                <BenefitItem>Option to upgrade to Full Summer Pass for $80</BenefitItem>
              </BenefitList>
              
              <OfferText>Must upgrade within 18 days of plan start to gain all Full Summer Pass benefits retroactively</OfferText>
              <ButtonContainer>
                <CTAButton href="#claim-offer">GET MONTHLY PASS</CTAButton>
              </ButtonContainer>
            </PlanCard>
          </PlanContainer>
          
          <TimeDefinition>
            <TimeTitle>⏰ Prime vs. Non-Prime Time</TimeTitle>
            
            <TimeRow>
              <TimeLabel>Prime Time:</TimeLabel>
              <TimeValue>Weekdays: 5 PM – 12 AM<br />Weekends: 9 AM – 5 PM</TimeValue>
            </TimeRow>
            
            <TimeRow>
              <TimeLabel>Non-Prime Time:</TimeLabel>
              <TimeValue>Weekdays: 7 AM – 5 PM<br />Weekends: 5 PM – 12 AM</TimeValue>
            </TimeRow>
          </TimeDefinition>
          
          <OfferHeader style={{ marginTop: '2rem' }}>🏓 Regular Season Open Play Pricing</OfferHeader>
          <OfferText>After September 1, 2025</OfferText>
          
          <PricingTable>
            <PricingHeader>
              <PricingCell isHeader>Time Slot</PricingCell>
              <PricingCell isHeader>Open Play Price (per player)</PricingCell>
            </PricingHeader>
            
            <PricingRow>
              <PricingCell>Non-Prime</PricingCell>
              <PricingCell><PriceHighlight>$5</PriceHighlight></PricingCell>
            </PricingRow>
            
            <PricingRow>
              <PricingCell>Prime</PricingCell>
              <PricingCell><PriceHighlight>$8</PriceHighlight></PricingCell>
            </PricingRow>
          </PricingTable>
          
          <OfferText style={{ marginTop: '1rem' }}>💡 These rates apply to all non-members or players without a pass.</OfferText>
          
          <OfferHeader style={{ marginTop: '2rem' }}>🏟️ Court Booking Rates</OfferHeader>
          <OfferText>Standard Model, Non-Pass Holders</OfferText>
          
          <PricingTable>
            <PricingHeader>
              <PricingCell isHeader>Court Type</PricingCell>
              <PricingCell isHeader>Non-Prime</PricingCell>
              <PricingCell isHeader>Prime</PricingCell>
            </PricingHeader>
            
            <PricingRow>
              <PricingCell>Standard Courts</PricingCell>
              <PricingCell><PriceHighlight>$35/hr</PriceHighlight></PricingCell>
              <PricingCell><PriceHighlight>$40/hr</PriceHighlight></PricingCell>
            </PricingRow>
            
            <PricingRow>
              <PricingCell>Championship Courts</PricingCell>
              <PricingCell><PriceHighlight>$45/hr</PriceHighlight></PricingCell>
              <PricingCell><PriceHighlight>$50/hr</PriceHighlight></PricingCell>
            </PricingRow>
          </PricingTable>
          
          <OfferText style={{ marginTop: '1rem' }}>🧑‍🤝‍🧑 Booking fees are typically split among players unless covered by a pass or membership.</OfferText>
        </OfferDetailsContainer>
      </Container>
    </GrandOpeningSection>
  );
};

export default GrandOpening;