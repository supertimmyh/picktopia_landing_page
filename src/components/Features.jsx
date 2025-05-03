import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f8f8;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FeatureCard = styled.div`
  background: white;
  border: 2px solid #0084ff;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
`;

const IconTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid #0084ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  color: #0084ff;
  font-size: 1.5rem;
  margin: 0;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #0084ff;
  margin: 0;
`;

const Description = styled.p`
  color: #0084ff;
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
`;

const Button = styled.a`
  background: #0084ff;
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 25px;
  text-align: center;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background: #0066cc;
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
        <FeatureCard>
          <IconTitle>
            <Icon>🏸</Icon>
            <Title>Play</Title>
          </IconTitle>
          <Divider />
          <Description>
            Court Reservations, Clinics, Open Play, CardioPickle, Leagues, Tournaments... we have something for everyone.
          </Description>
          <Button href="#book">Book Now</Button>
        </FeatureCard>

        <FeatureCard>
          <IconTitle>
            <Icon>👥</Icon>
            <Title>Become A Member</Title>
          </IconTitle>
          <Divider />
          <Description>
            Perks galore! Exclusive CityPickle Founding memberships are now available.
          </Description>
          <Button href="#learn">Learn More</Button>
        </FeatureCard>
      </Container>
    </FeaturesSection>
  );
};

export default Features;