import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 120px 2rem 2rem;
  min-height: 100vh;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #D22B2B; /* A festive red for Canada Day */
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  max-width: 700px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
`;

const IframeWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 1100px; /* Adjust height as needed */
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const EventRegistration = () => {
  return (
    <PageContainer>
      <Title>Canada Day Pickleball Intro!</Title>
      <Description>
        Celebrate Canada Day with us! Sign up for a 2-hour coach-guided introductory pickleball play session just for $8. All equipment will be provided.
        <br />
        <strong>Please note: slots are limited. You will be notified by email to confirm your spot.</strong>
      </Description>
      <IframeWrapper>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdIM2EZWJuGzByUxVKQ2kKvgl8H748P8WN7U4dESIEXESWPyA/viewform?embedded=true" // <-- PASTE YOUR EMBED URL HERE
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </IframeWrapper>
    </PageContainer>
  );
};

export default EventRegistration;