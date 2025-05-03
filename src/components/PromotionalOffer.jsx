import styled from 'styled-components';

const OfferSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  color: white;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 100%;
    background: linear-gradient(135deg, #FF9A8B 0%, #FF6B88 100%);
    z-index: -1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const Header = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: white;
  color: #FF6B88;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid white;

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

const PromotionalOffer = () => {
  return (
    <OfferSection>
      <Container>
        <Header>Get 50% Off Your First Booking at Our Clubs</Header>
        <CTAButton href="#claim-offer">Claim Offer</CTAButton>
      </Container>
    </OfferSection>
  );
};

export default PromotionalOffer;