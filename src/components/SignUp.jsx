import styled from 'styled-components';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <SignUpSection>
      <Container>
        <Title>Join Picktopia</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input type="text" id="name" required />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input type="email" id="email" required />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" required />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="membership">Membership Type</Label>
            <Select id="membership" required>
              <option value="">Select a membership type</option>
              <option value="basic">Basic Membership</option>
              <option value="premium">Premium Membership</option>
              <option value="family">Family Membership</option>
            </Select>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="experience">Pickleball Experience</Label>
            <Select id="experience" required>
              <option value="">Select your experience level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
          </InputGroup>

          <SubmitButton type="submit">Sign Up Now</SubmitButton>
        </Form>
      </Container>
    </SignUpSection>
  );
};

export default SignUp;