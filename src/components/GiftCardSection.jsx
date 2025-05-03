import styled from 'styled-components';
import giftCardImage from '../assets/giftcard-section.png';

const GiftSection = styled.section`
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
    background: linear-gradient(135deg, #6C63FF 0%, #4834D4 100%);
    z-index: -1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  text-align: left;
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const GiftCardImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: white;
  color: #4834D4;
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

const GiftCardSection = () => {
  return (
    <GiftSection>
      <Container>
        <ContentContainer>
          <Header>Give the Gift of Play</Header>
          <Description>
            Share the joy of pickleball with your loved ones! Our gift cards are perfect
            for introducing friends and family to this exciting sport. Whether they're
            beginners or seasoned players, a Picktopia gift card opens the door to
            unforgettable experiences, professional instruction, and a welcoming community.
          </Description>
          <CTAButton href="#purchase-gift-card">Purchase Gift Card</CTAButton>
        </ContentContainer>
        <ImageContainer>
          <GiftCardImg src={giftCardImage} alt="Picktopia Gift Card" />
        </ImageContainer>
      </Container>
    </GiftSection>
  );
};

export default GiftCardSection;