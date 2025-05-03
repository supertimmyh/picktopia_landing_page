import styled from 'styled-components';
import kidsImage from '../assets/kids-section.png';

const KidsSectionWrapper = styled.section`
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
    background: linear-gradient(135deg, #9C27B0 0%, #673AB7 100%);
    z-index: -1;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  max-width: 500px;
`;

const KidsImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const ContentContainer = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
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
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: #FFC107;
  color: #333;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: transparent;
    border-color: #FFC107;
    color: #FFC107;
    transform: translateY(-2px);
  }
`;

const KidsSection = () => {
  return (
    <KidsSectionWrapper id="kids">
      <Container>
        <ImageContainer>
          <KidsImg src={kidsImage} alt="Kids playing pickleball" />
        </ImageContainer>
        <ContentContainer>
          <Title>Picktopia Kids</Title>
          <Description>
            Introduce your children to the exciting world of pickleball! Our specialized kids' program 
            combines fun activities with fundamental skills development, creating an engaging environment 
            where young players can learn, grow, and make new friends.
          </Description>
          <CTAButton href="#kids-program">Learn More About Kids' Classes</CTAButton>
        </ContentContainer>
      </Container>
    </KidsSectionWrapper>
  );
};

export default KidsSection;