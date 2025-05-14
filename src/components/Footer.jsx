import styled from 'styled-components';

const FooterSection = styled.footer`
  position: relative;
  padding: 4rem 2rem 2rem;
  color: white;
  background-color: #1a1a1a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4CAF50;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #4CAF50;
  }
`;

const LegalText = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Column>
          <Title>Connect With Us</Title>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">📱</SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">📨</SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">📸</SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">💼</SocialIcon>
          </SocialLinks>
        </Column>
        
        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <ContactLink href="mailto:info@picktopia.com">info@picktopia.com</ContactLink>
            <ContactLink href="tel:+1234567890">(886) 900-0376</ContactLink>
            <div>3595 St Clair Ave E.</div>
            <div>Toronto, ON M1K 1L8</div>
          </ContactInfo>
        </Column>

        <Column>
          <Title>Hours of Operation</Title>
          <ContactInfo>
            <div>Monday: 8:00 am – 10:00 pm</div>
            <div>Tuesday: 8:00 am – 10:00 pm</div>
            <div>Wednesday: 8:00 am – 10:00 pm</div>
            <div>Thursday: 8:00 am – 10:00 pm</div>
            <div>Friday: 8:00 am – 11:00 pm</div>
            <div>Saturday: 8:00 am – 11:00 pm</div>
            <div>Sunday: 8:00 am – 10:00 pm</div>
          </ContactInfo>
        </Column>
        
        <Column>
          <Title>Legal</Title>
          <ContactLink href="#">Terms of Service</ContactLink>
          <ContactLink href="#">Privacy Policy</ContactLink>
          <ContactLink href="#">Cookie Policy</ContactLink>
        </Column>
      </Container>
      
      <LegalText>
        <p>© {new Date().getFullYear()} Picktopia. All rights reserved.</p>
      </LegalText>
    </FooterSection>
  );
};

export default Footer;