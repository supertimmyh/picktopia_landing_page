import styled from 'styled-components';
import { useState } from 'react'; // Re-add useState

// Colors inspired by the promotional image
const PageBackground = '#f9a03f'; // Orange background
const TextColor = '#fdf5e6'; // Cream/Off-white text
const DarkTeal = '#006a6a'; // For banners like 'PICKLEBALL CLUB'
const LimeGreen = '#c0d904'; // For 'SOFT OPENING' banner
const DarkTextOnLime = '#333333';
const ButtonTextColor = '#f9a03f';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; // Align content to the top
  min-height: 100vh;
  background-color: ${PageBackground};
  padding: 120px 20px 20px; // Increased top padding for navbar to prevent obstruction
  text-align: center;
  font-family: 'Arial', sans-serif; // Basic sans-serif font
`;

const Header = styled.h1`
  color: ${TextColor};
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  line-height: 1.1;
  // Attempting a brush stroke look with text-shadow, might need a specific font for better effect
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

const SubHeader = styled.div`
  background-color: ${DarkTeal};
  color: ${TextColor};
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-block;
`;

const EventDetails = styled.div`
  background-color: ${LimeGreen};
  color: ${DarkTextOnLime};
  padding: 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
`;

const EventDate = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0 0 0.5rem 0;
`;

const EventInfo = styled.p`
  font-size: 1.2rem;
  margin: 0;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin-bottom: 2rem;
  
  div {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #333;
  color: white;
  width: 100%;
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
    border-color: ${DarkTeal};
    box-shadow: 0 0 0 2px rgba(0, 106, 106, 0.3);
  }
`;

// Add Select styled component for dropdown fields
const Select = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  background-color: #333;
  color: white;
  width: 100%;
  &:focus {
    outline: none;
    border-color: ${DarkTeal};
    box-shadow: 0 0 0 2px rgba(0, 106, 106, 0.3);
  }
  option {
    background-color: #333;
    color: white;
  }
  &:invalid {
    color: #999;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: ${TextColor};
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: ${TextColor}; // Cream button
  color: ${ButtonTextColor}; // Orange text
  font-size: 1.8rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);

  &:hover {
    background-color: #f0e6d2; // Slightly darker cream
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

// New styled component for the success message
const SuccessMessage = styled.div`
  background-color: ${LimeGreen};
  color: ${DarkTextOnLime};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: bold;
`;

const SoftOpeningSignUp = () => {
  // Re-add useState for name and email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // Add state for date selection
  const [datePreference, setDatePreference] = useState('');
  // Add useState for success message visibility
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setShowSuccess(true);
        setName(''); // Clear name field
        setEmail(''); // Clear email field
        setDatePreference(''); // Clear date preference field
        setTimeout(() => setShowSuccess(false), 5000); // Hide message after 5 seconds
      } else {
        // Handle errors if Formspree returns an error
        alert('Oops! There was a problem submitting your form.');
      }
    } catch {
      // Handle network errors
      alert('Oops! There was a problem submitting your form.');
    }
  };

  return (
    <Container>
      <Header>SOFT<br/>OPENING</Header>
      <SubHeader>PICKTOPIA PICKLEBALL CLUB</SubHeader>

      <EventDetails>
        <EventInfo style={{fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0.5rem'}}>SOFT OPENING WEEK</EventInfo>
        <EventDate>June 1, 2025 - June 7, 2025</EventDate>
        <EventInfo>FREE EVENT • REGISTER ONLINE</EventInfo>
      </EventDetails>

      {/* Update form to use local handleSubmit and remove _next hidden input */}
      <SignUpForm action="https://formspree.io/f/mnndknyb" method="POST" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="name">Name:</Label>
          <Input 
            type="text" 
            id="name"
            name="name" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="email">Email:</Label>
          <Input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="datePreference">Select date to visit:</Label>
          <Select
            id="datePreference"
            name="datePreference"
            value={datePreference}
            onChange={(e) => setDatePreference(e.target.value)}
            required
          >
            <option value="" disabled>Select a day</option>
            <option value="Sunday, June 1">Sunday, June 1</option>
            <option value="Monday, June 2">Monday, June 2</option>
            <option value="Tuesday, June 3">Tuesday, June 3</option>
            <option value="Wednesday, June 4">Wednesday, June 4</option>
            <option value="Thursday, June 5">Thursday, June 5</option>
            <option value="Friday, June 6">Friday, June 6</option>
            <option value="Saturday, June 7">Saturday, June 7</option>
          </Select>
        </div>
        <SubmitButton type="submit">SIGN UP FOR FREE!</SubmitButton>
      </SignUpForm>
      {/* Conditionally render success message */}
      {showSuccess && <SuccessMessage>Thank you for signing up! See you at our club.</SuccessMessage>}
    </Container>
  );
};

export default SoftOpeningSignUp;