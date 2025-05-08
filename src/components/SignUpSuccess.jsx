import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpeg';

const SuccessSection = styled.section`
  position: relative;
  padding: 4rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
`;

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 1.2rem 2.5rem;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);
  }
`;

const SignUpSuccess = () => {
  return (
    <SuccessSection>
      <Container>
        <Title>Welcome to Picktopia! 🎉</Title>
        <Message>
          Thank you for joining our community! We've received your registration and will be in touch shortly with more information about your membership.
          <br /><br />
          Get ready for an amazing pickleball experience!
        </Message>
        <HomeButton to="/">Return to Home</HomeButton>
      </Container>
    </SuccessSection>
  );
};

export default SignUpSuccess;