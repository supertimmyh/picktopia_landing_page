import React from 'react';
import styled from 'styled-components';

// Define styled components
const ClubInfoSection = styled.section`
  padding: 4rem 2rem;
  background-color: #042944; // Dark navy background from logo
  color: #fff;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  font-weight: bold;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const TimeDefinitionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const TimeBox = styled.div`
  border: 2px solid ${props => props.color};
  padding: 1.5rem 2rem;
  border-radius: 10px;
  min-width: 300px;
  background-color: rgba(255, 255, 255, 0.05);
`;

const TimeTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 1rem;
`;

const TimeDetails = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`;

const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const PricingCard = styled.div`
  flex: 1 1 400px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 450px;
  border-top: 5px solid ${props => props.borderColor};
  text-align: left;
  transition: transform 0.2s ease-in-out;

  &:hover {
      transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
  color: #fff;
`;

const PriceTier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-of-type {
      border-bottom: none;
  }
`;

const PriceLabel = styled.h4`
  font-size: 1.2rem;
  color: ${props => props.color};
  font-weight: 500;
`;

const Price = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #20BF6B;

  small {
    font-size: 1rem;
    font-weight: 400;
    color: #eee;
  }
`;

const CourtTypeContainer = styled.div`
  margin-bottom: 2rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CourtTypeTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${props => props.color};
  text-align: center;
`;


const ClubInfo = () => {
    const primeColor = '#E84393'; // Pink from existing components
    const nonPrimeColor = '#00C6A7'; // A complementary teal

  return (
    <ClubInfoSection id="club-info">
      <Container>
        <Header>Club Hours & Pricing</Header>
        
        <TimeDefinitionContainer>
          <TimeBox color={primeColor}>
            <TimeTitle color={primeColor}>Prime Time</TimeTitle>
            <TimeDetails>Weekdays: 4 PM - 10 PM</TimeDetails>
            <TimeDetails>Weekends & Holidays: All Day</TimeDetails>
          </TimeBox>
          <TimeBox color={nonPrimeColor}>
            <TimeTitle color={nonPrimeColor}>Non-Prime Time</TimeTitle>
            <TimeDetails>Weekdays: 9 AM - 4 PM</TimeDetails>
          </TimeBox>
        </TimeDefinitionContainer>

        <PricingContainer>
          <PricingCard borderColor={primeColor}>
            <CardTitle>Open Play (Drop-in)</CardTitle>
            <PriceTier>
              <PriceLabel color={primeColor}>Prime Time</PriceLabel>
              <Price>$10 <small>+ HST / person</small></Price>
            </PriceTier>
            <PriceTier>
              <PriceLabel color={nonPrimeColor}>Non-Prime Time</PriceLabel>
              <Price>$7 <small>+ HST / person</small></Price>
            </PriceTier>
          </PricingCard>

          <PricingCard borderColor={nonPrimeColor}>
            <CardTitle>Private Court Booking</CardTitle>
            <CourtTypeContainer>
                <CourtTypeTitle color={nonPrimeColor}>Championship Court</CourtTypeTitle>
                 <PriceTier>
                    <PriceLabel color={primeColor}>Prime Time</PriceLabel>
                    <Price>$40 <small>+ HST / hour</small></Price>
                </PriceTier>
                <PriceTier>
                    <PriceLabel color={nonPrimeColor}>Non-Prime Time</PriceLabel>
                    <Price>$35 <small>+ HST / hour</small></Price>
                </PriceTier>
            </CourtTypeContainer>
            <CourtTypeContainer>
                <CourtTypeTitle color={nonPrimeColor}>Standard Court</CourtTypeTitle>
                <PriceTier>
                    <PriceLabel color={primeColor}>Prime Time</PriceLabel>
                    <Price>$35 <small>+ HST / hour</small></Price>
                </PriceTier>
                <PriceTier>
                    <PriceLabel color={nonPrimeColor}>Non-Prime Time</PriceLabel>
                    <Price>$30 <small>+ HST / hour</small></Price>
                </PriceTier>
            </CourtTypeContainer>
          </PricingCard>
        </PricingContainer>

      </Container>
    </ClubInfoSection>
  );
};

export default ClubInfo;