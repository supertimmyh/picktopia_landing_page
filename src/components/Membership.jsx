import React from 'react';
import styled from 'styled-components';

// Define styled components
const MembershipSection = styled.section`
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
  max-width: 800px;
  margin: 0 auto 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PlansContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PlanCard = styled.div`
  flex: 1 1 350px;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  max-width: 400px;
  border-top: 5px solid ${props => props.featured ? '#E84393' : '#4834D4'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.8rem;
  color: ${props => props.featured ? '#E84393' : '#4834D4'};
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const PlanPrice = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #20BF6B;
`;

const PlanSubtext = styled.div`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
  flex-grow: 1;
`;

const BenefitItem = styled.li`
  margin-bottom: 0.8rem;
  position: relative;
  padding-left: 1.8rem;
  font-size: 1rem;
  
  &::before {
    content: "✅";
    position: absolute;
    left: 0;
    top: 2px;
  }
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
  border: 2px solid transparent;
  margin-top: 1.5rem;
  text-align: center;

  &:hover {
    background-color: #D43782;
  }
`;

const PolicySection = styled.div`
  background-color: rgba(235, 245, 255, 0.9);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 3rem;
  border: 2px solid #4834D4;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

const PolicyTitle = styled.h3`
  font-size: 1.8rem;
  color: #4834D4;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: bold;
`;

const PolicyList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PolicyItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  
  span {
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`;

const PunchPassContainer = styled.div`
  border-top: 1px solid #eee;
  padding-top: 1rem;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`;

const PunchPassTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;
`;


const Membership = () => {
  return (
    <MembershipSection id="membership">
      <Container>
        <Header>Membership & Pricing</Header>
        <Description>
          Choose the perfect plan to kickstart your pickleball journey at our new St Clair location. We have options for everyone, from dedicated players to casual drop-in enthusiasts.
        </Description>

        <PlansContainer>
          {/* Founding Membership Card */}
          <PlanCard featured>
            <div>
              <PlanTitle featured>All-Access Membership</PlanTitle>
              <PlanSubtext>Perfect for dedicated players who want unlimited access and premium benefits.</PlanSubtext>
              <PlanPrice><span style={{textDecoration: 'line-through', color: '#999', fontSize: '1.8rem', marginRight: '0.5rem'}}>$139</span>$109 <span style={{fontSize: '1.2rem', fontWeight: 'normal'}}>+ tax / month</span></PlanPrice>
              <BenefitList>
                <BenefitItem>Four (4) free court rental (Fair Use Policy applies)</BenefitItem>
                <BenefitItem>Unlimited open-play sessions</BenefitItem>
                <BenefitItem>12 month commitment.</BenefitItem>
                <BenefitItem>Priority access & discounted pricing on lessons/clinics</BenefitItem>
                <BenefitItem>10% off merchandise</BenefitItem>
                <BenefitItem>Two (2) free guest passes per month</BenefitItem>
                <BenefitItem>14-day advanced booking privileges</BenefitItem>
                <BenefitItem>15% discount for hosting any event</BenefitItem>
              </BenefitList>
            </div>
            <CTAButton href="https://app.courtreserve.com/Portal/Picktopia" target="_blank" rel="noopener noreferrer">Sign Up Now</CTAButton>
          </PlanCard>

          {/* Daytime Membership Card */}
          <PlanCard>
            <div>
              <PlanTitle>Daytime Membership</PlanTitle>
              <PlanSubtext>Ideal for individuals who enjoys social plays during weekday daytime hours. 12 month commitment.</PlanSubtext>
              <PlanPrice>$69 <span style={{fontSize: '1.2rem', fontWeight: 'normal'}}>+ tax / month</span></PlanPrice>
              <BenefitList>
                <BenefitItem>FREE Unlimited open-play sessions during Monday-Friday non-prime hours - No extra cost!</BenefitItem>
                <BenefitItem>Reserve up to 10 days in advance</BenefitItem>
                <BenefitItem>12 month commitment</BenefitItem>
                <BenefitItem>15% discount for hosting any event</BenefitItem>
              </BenefitList>
            </div>
            <CTAButton href="https://app.courtreserve.com/Portal/Picktopia" target="_blank" rel="noopener noreferrer">Sign Up Now</CTAButton>
          </PlanCard>

          {/* Punch Pass Card */}
          <PlanCard>
            <div>
              <PlanTitle>Drop-in Punch Pass</PlanTitle>
              <PlanSubtext>Perfect for flexible, casual play. Passes include 10 sessions. One punch card per person.</PlanSubtext>
              <div style={{marginTop: '2rem'}}>
                <PunchPassContainer>
                  <PunchPassTitle>☀️ Off-Peak Punch Card</PunchPassTitle>
                  <PlanPrice>$85 <span style={{fontSize: '1.2rem', fontWeight: 'normal'}}>+ HST</span></PlanPrice>
                  <BenefitList>
                    <BenefitItem>Flexible access during designated daytime drop-in hours.</BenefitItem>
                  </BenefitList>
                </PunchPassContainer>
                <PunchPassContainer>
                  <PunchPassTitle>🌙 Anytime Punch Card</PunchPassTitle>
                  <PlanPrice>$120 <span style={{fontSize: '1.2rem', fontWeight: 'normal'}}>+ HST</span></PlanPrice>
                  <BenefitList>
                    <BenefitItem>Access drop-in sessions any time, day or evening.</BenefitItem>
                  </BenefitList>
                </PunchPassContainer>
              </div>
            </div>
            <CTAButton href="tel:+16474789866">Call to Inquire</CTAButton>
          </PlanCard>

        </PlansContainer>

        <PolicySection>
          <PolicyTitle>Fair Court Use Policy (for Memberships)</PolicyTitle>
          <PolicyList>
            <PolicyItem><span>🏟️</span><div><strong>Booking Window:</strong> Founding members can book up to 4 courts within a 14-day window. Daytime members can book up to 2 courts within a 10-day window.</div></PolicyItem>
            <PolicyItem><span>⏱️</span><div><strong>Booking Duration:</strong> Each booking is for a maximum of 2 hours.</div></PolicyItem>
            <PolicyItem><span>👥</span><div><strong>Evening Play:</strong> Bookings at 4 PM or later require a minimum of 4 players.</div></PolicyItem>
          </PolicyList>
        </PolicySection>

      </Container>
    </MembershipSection>
  );
};

export default Membership;