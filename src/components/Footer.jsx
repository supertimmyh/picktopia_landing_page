import styled from 'styled-components';

// SVG Icon Components
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

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
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: #4CAF50;
    transform: scale(1.1);
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
            <SocialIcon href="https://www.facebook.com/share/1AitgTBCBJ/?mibextid=wwXIfr" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/rally.picktopia" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </SocialIcon>
          </SocialLinks>
        </Column>
        
        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <ContactLink href="mailto:info@rallypicktopia.com">info@rallypicktopia.com</ContactLink>
            <ContactLink href="tel:+16474789866">(647) 478-9866</ContactLink>
            <div>3595 St Clair Ave E. Unit B2</div>
            <div>Toronto, ON M1K 1L8</div>
          </ContactInfo>
        </Column>

        <Column>
          <Title>Hours of Operation</Title>
          <ContactInfo>
            <div>Monday: 9:00 am – 10:00 pm</div>
            <div>Tuesday: 9:00 am – 10:00 pm</div>
            <div>Wednesday: 9:00 am – 10:00 pm</div>
            <div>Thursday: 9:00 am – 10:00 pm</div>
            <div>Friday: 9:00 am – 10:00 pm</div>
            <div>Saturday: 9:00 am – 10:00 pm</div>
            <div>Sunday: 9:00 am – 10:00 pm</div>
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