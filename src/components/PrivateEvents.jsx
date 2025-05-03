import styled from 'styled-components';

const EventsSection = styled.section`
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
    background: linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%);
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
  margin-bottom: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: white;
  color: #2193b0;
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

const PrivateEvents = () => {
  return (
    <EventsSection id="events">
      <Container>
        <Header>Book Your Next Event</Header>
        <Description>
          Transform your special occasions into unforgettable experiences at Picktopia.
          Whether you're planning a corporate team-building event, birthday celebration,
          or private tournament, our versatile facility and dedicated staff will ensure
          your event is a success. We offer customizable packages including court rentals,
          equipment, and professional instruction for groups of all sizes.
        </Description>
        <CTAButton href="#book-event">Book Now</CTAButton>
      </Container>
    </EventsSection>
  );
};

export default PrivateEvents;