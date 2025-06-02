import styled from 'styled-components';
import { useState, useEffect } from 'react';

// Colors inspired by the existing design
const PageBackground = '#f9a03f'; // Orange background
const TextColor = '#fdf5e6'; // Cream/Off-white text
const DarkTeal = '#006a6a'; // For banners
const LimeGreen = '#c0d904'; // For highlights
const DarkTextOnLime = '#333333';
const ButtonTextColor = '#f9a03f';
const ErrorColor = '#ff3333'; // Red for error messages

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  background-color: ${PageBackground};
  padding: 120px 20px 40px; // Increased top padding for navbar
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const Header = styled.h1`
  color: ${TextColor};
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

const SubHeader = styled.div`
  background-color: ${DarkTeal};
  color: ${TextColor};
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: inline-block;
`;

const WaiverContainer = styled.div`
  background-color: white;
  color: #333;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  max-width: 800px;
  width: 100%;
  text-align: left;
  max-height: 400px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
`;

const WaiverText = styled.div`
  white-space: pre-line;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const WaiverForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
  
  div {
    width: 100%;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid ${props => props.hasError ? ErrorColor : '#ccc'};
  font-size: 1rem;
  background-color: #333;
  color: white;
  width: 100%;
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? ErrorColor : DarkTeal};
    box-shadow: 0 0 0 2px ${props => props.hasError ? 'rgba(255, 51, 51, 0.3)' : 'rgba(0, 106, 106, 0.3)'};
  }
  &:read-only {
    background-color: #444;
    cursor: not-allowed;
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

const ErrorMessage = styled.div`
  color: ${ErrorColor};
  font-size: 0.8rem;
  margin-top: 5px;
  text-align: left;
  font-weight: bold;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 1rem;
`;

const CheckboxInput = styled.input`
  margin-right: 10px;
  margin-top: 5px;
  width: auto !important;
`;

const CheckboxLabel = styled.label`
  color: ${TextColor};
  text-align: left;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const SubmitButton = styled.button`
  background-color: ${TextColor};
  color: ${ButtonTextColor};
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  margin-top: 1rem;

  &:hover {
    background-color: #f0e6d2; // Slightly darker cream
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const SuccessMessage = styled.div`
  background-color: ${LimeGreen};
  color: ${DarkTextOnLime};
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  font-weight: bold;
  max-width: 600px;
  width: 100%;
`;

const ValidationSummary = styled.div`
  background-color: ${ErrorColor};
  color: white;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-weight: bold;
  max-width: 600px;
  width: 100%;
  text-align: left;
`;

const WaiverFormComponent = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfSigning, setDateOfSigning] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Add validation state
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    agreeToTerms: ''
  });
  const [showValidationSummary, setShowValidationSummary] = useState(false);

  // Set current date when component mounts
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    setDateOfSigning(today);
  }, []);

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {
      fullName: '',
      email: '',
      agreeToTerms: ''
    };
    let isValid = true;

    // Validate full name
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = 'Email address is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate agreement checkbox
    if (!agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms of the waiver';
      isValid = false;
    }

    setErrors(newErrors);
    setShowValidationSummary(!isValid);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return; // Stop form submission if validation fails
    }
    
    const form = e.target;
    const data = new FormData(form);

    try {
      // Use the provided Formspree endpoint
      const response = await fetch('https://formspree.io/f/xeokqoob', {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setShowSuccess(true);
        setFullName('');
        setEmail('');
        setAgreeToTerms(false);
        setErrors({
          fullName: '',
          email: '',
          agreeToTerms: ''
        });
        setShowValidationSummary(false);
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

  const waiverText = `ACTIVITY WAIVER AND RELEASE 
("Waiver") NOTICE TO USERS (each a "Participant") OF PICKTOPIA PICKLEBALL CLUB FACILITIES 
EXCLUSION OF LIABILITY – ASSUMPTION OF RISK – JURISDICTION 
THESE CONDITIONS WILL AFFECT YOUR LEGAL RIGHTS INCLUDING THE RIGHT TO SUE OR CLAIM COMPENSATION FOLLOWING AN ACCIDENT. PLEASE READ CAREFULLY! 
TO: Picktopia Pickleball Club Inc., Unit #B2 3595 St Clair Ave E, Toronto, ON M1K 1L8, and all other present and future locations ("Picktopia") 
In consideration of being permitted to participate in the Activity (defined below) and use the Facility, the Participant acknowledges and agrees to the following terms: 
Waiver and Release 
1. 	 Assumption of Risk: 
The Participant assumes all risk of personal injury, death, or property loss resulting from any cause whatsoever, including but not limited to: risks and hazards associated with playing pickleball and participating in related activities; use of Facility facilities; collision with objects or persons; slips, trips, falls; accidents during play; being struck by equipment; and other risks related to physical exertion. This includes risks from negligence of Picktopia or any of the Activity Providers, except as otherwise provided by law. 
2. 	 Voluntary Acceptance: 
THE PARTICIPANT FREELY ACCEPTS AND FULLY ASSUMES ALL THE ABOVE RISKS, DANGERS, AND HAZARDS, including the possibility of personal injury, death, or property damage. 
3. 	 Release of Liability: 
The Participant agrees that the Activity Providers shall not be liable for any personal injury, death, or property loss and releases, discharges, and holds harmless all Activity Providers from any claims or demands arising out of participation in the Activity. This release is intended to be as broad and inclusive as permitted by the laws of the applicable jurisdiction. 
Details of Activity 
4. 	 The Activity: 
Participation includes playing pickleball and engaging in any related activities (e.g., court rentals, open-play sessions, training sessions, social events, tournaments) at any Picktopia location. 
Binding Agreement and Acknowledgment 
5. 	 Binding Effect: 
This Waiver is binding on the Participant and their heirs, executors, administrators, legal representatives, and assigns. 
6. 	 Informed Consent: 
By signing below, I acknowledge that I have read, fully understand, and voluntarily agree to this Waiver. 
Fitness to Participate 
7. 	 Medical Clearance: 
The Participant confirms they have no physical or mental conditions that would make participation unsafe. If necessary, the Participant agrees to obtain a medical examination and clearance prior to participation. 
General Provisions 
8. 	 Governing Law and Jurisdiction: 
This Waiver shall be governed by the laws of the province of Ontario and applicable federal laws. If Picktopia operates in other jurisdictions, this Waiver is intended to be enforceable in those areas to the fullest extent allowed by local laws. If any provision is found unenforceable, the remainder shall remain in effect. All litigation will be brought in Ontario, unless local law requires otherwise. 
9. 	 Emergency Medical Treatment: 
In the event of an injury, the Participant consents to receive emergency medical treatment deemed necessary by Picktopia or emergency responders. 
10. 	 Modifications: 
Picktopia reserves the right to update or modify this Waiver at any time. Continued participation in the Activity signifies acceptance of any updated terms. 
11. 	 Severability: 
If any portion of this Waiver is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. 
THE LIABILITY OF THE ACTIVITY PROVIDERS IS EXCLUDED BY THIS WAIVER. THE PARTICIPANT MUST BE RESPONSIBLE FOR HIS/HER OWN SAFETY IN PURSUIT OF THE ACTIVITY AND USE OF THE FACILITY.`;

  return (
    <Container>
      <Header>ACTIVITY WAIVER AND RELEASE</Header>
      <SubHeader>PICKTOPIA PICKLEBALL CLUB</SubHeader>

      <WaiverContainer>
        <WaiverText>{waiverText}</WaiverText>
      </WaiverContainer>

      {showValidationSummary && (
        <ValidationSummary>
          <div>Please correct the following errors:</div>
          <ul>
            {errors.fullName && <li>{errors.fullName}</li>}
            {errors.email && <li>{errors.email}</li>}
            {errors.agreeToTerms && <li>{errors.agreeToTerms}</li>}
          </ul>
        </ValidationSummary>
      )}

      <WaiverForm method="POST" action="https://formspree.io/f/xeokqoob" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="fullName">Full Name:</Label>
          <Input 
            type="text" 
            id="fullName"
            name="fullName" 
            placeholder="Enter your full name" 
            value={fullName} 
            onChange={(e) => setFullName(e.target.value)} 
            hasError={!!errors.fullName}
            required 
          />
          {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
        </div>
        
        <div>
          <Label htmlFor="email">Email Address:</Label>
          <Input 
            type="email" 
            id="email"
            name="email" 
            placeholder="Enter your email address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            hasError={!!errors.email}
            required 
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </div>
        
        <div>
          <Label htmlFor="dateOfSigning">Date of Signing:</Label>
          <Input 
            type="date" 
            id="dateOfSigning"
            name="dateOfSigning" 
            value={dateOfSigning} 
            onChange={(e) => setDateOfSigning(e.target.value)} 
            required 
            readOnly
          />
        </div>

        <input 
          type="hidden" 
          name="waiver_version" 
          value="Waiver_v1.0_2025-06-01" 
        />
        
        <CheckboxContainer>
          <CheckboxInput 
            type="checkbox" 
            id="agreeToTerms"
            name="agreeToTerms" 
            checked={agreeToTerms} 
            onChange={(e) => setAgreeToTerms(e.target.checked)} 
            required 
          />
          <CheckboxLabel htmlFor="agreeToTerms">
            I have read, understood, and agree to the terms of the waiver outlined above, and I am signing this waiver electronically.
          </CheckboxLabel>
        </CheckboxContainer>
        {errors.agreeToTerms && <ErrorMessage>{errors.agreeToTerms}</ErrorMessage>}
        
        <SubmitButton type="submit">Agree and Submit</SubmitButton>
      </WaiverForm>
      
      {showSuccess && <SuccessMessage>Thank you for submitting the waiver. Your agreement has been recorded.</SuccessMessage>}
    </Container>
  );
};

export default WaiverFormComponent;