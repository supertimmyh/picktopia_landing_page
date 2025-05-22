import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpeg';

const SignUpSection = styled.section`
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
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #555;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f5f5f5;
  color: #000000;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    background-color: #ffffff;
  }
`;

const Select = styled.select`
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f5f5f5;
  color: #000000;

  &:focus {
    border-color: #4CAF50;
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
    background-color: #ffffff;
  }
`;

const SubmitButton = styled.button`
  padding: 1.2rem 2.5rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 30px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.3);
  }
`;

const SignUp = () => {
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    try {
      const response = await fetch('https://formspree.io/f/mqaqbnkw', {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json'
        }
      });
      
      if (response.ok) {
        form.reset();
        setStatus('success');
        navigate('/signup/success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <SignUpSection>
      <Container>
        <Title>Join Picktopia</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" name="name" required />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" name="email" required pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" title="Please enter a valid email address." />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" name="phone" required pattern="^[0-9]{10}$" title="Please enter a 10-digit phone number." />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="membership">Membership Type</Label>
            <Select id="membership" name="membership" required>
              <option value="">Select a membership type</option>
              <option value="prime">Prime Membership</option>
              <option value="community">Community Membership</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="experience">Pickleball Experience</Label>
            <Select id="experience" name="experience" required>
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          </InputGroup>

          <SubmitButton type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending...' : 'Sign Up Now'}
          </SubmitButton>
          {status === 'success' && (
            <p style={{ color: '#4CAF50', textAlign: 'center', marginTop: '1rem' }}>
              Thanks for signing up! We'll be in touch soon.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#ff0000', textAlign: 'center', marginTop: '1rem' }}>
              Oops! There was a problem submitting your form.
            </p>
          )}
        </Form>
      </Container>
    </SignUpSection>
  );
};

export default SignUp;