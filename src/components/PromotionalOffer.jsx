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
  margin-top: 2rem; /* Added top margin */

  &:hover {
    background-color: transparent;
    color: white;
  }
`;

const PromotionalOffer = ({ monthlyPrice, primeTimePrice, startDate, endDate }) => {
  // The Grand Opening Special details have been moved to GrandOpening.jsx
  // This component can be repurposed or removed if no other promotional offers are planned.
  // For now, let's return null or a placeholder if it's still rendered in App.jsx
  // Or, if there are other offers, this component would be structured to handle them.

  // Example: Rendering nothing if this specific offer was its only purpose.
  // If other offers are intended, this logic would need to be different.
  if (monthlyPrice === 29.99 && primeTimePrice === 1.99 && startDate === "June 2023" && endDate === "August 2023") {
    return null; // Or a generic message if preferred
  }

  // Placeholder for other potential offers, or this can be removed if not needed.
  return (
    <OfferSection>
      <Container>
        <Header>Special Offers</Header>
        <p>Stay tuned for exciting promotions!</p>
        {/* <p>From {startDate} to {endDate}:</p>
        <p>Membership: ${monthlyPrice}/month</p>
        <p>Prime Time Play: ${primeTimePrice}/person</p>
        <p>Non-Prime Time: Free for members</p>
        <CTAButton href="#claim-offer">Learn More</CTAButton> */}
      </Container>
    </OfferSection>
  );
};

export default PromotionalOffer;