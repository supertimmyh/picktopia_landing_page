import styled from 'styled-components';

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
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${DarkTeal};
    box-shadow: 0 0 0 2px rgba(0, 106, 106, 0.3);
  }
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

const SoftOpeningSignUp = () => {
  return (
    <Container>
      <Header>GRAND<br/>OPENING</Header>
      <SubHeader>PICKTOPIA PICKLEBALL CLUB</SubHeader>

      <EventDetails>
        <EventInfo style={{fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '0.5rem'}}>SOFT OPENING STARTING</EventInfo>
        <EventDate>May 30, 2025</EventDate>
        <EventInfo>FREE EVENT • REGISTER ONLINE</EventInfo>
      </EventDetails>

      {/* Update form to use Formspree endpoint */}
      <SignUpForm action="https://formspree.io/f/mnndknyb" method="POST">
        <Input 
          type="text" 
          name="name" // Add name attribute for Formspree
          placeholder="Full Name" 
          // Remove value and onChange as Formspree handles form data
          // value={name} 
          // onChange={(e) => setName(e.target.value)} 
          required 
        />
        <Input 
          type="email" 
          name="email" // Add name attribute for Formspree
          placeholder="Email Address" 
          // Remove value and onChange as Formspree handles form data
          // value={email} 
          // onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <SubmitButton type="submit">SIGN UP FOR FREE!</SubmitButton>
      </SignUpForm>
    </Container>
  );
};

export default SoftOpeningSignUp;