import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background: #f9f9f9;
`;

const Header = styled.header`
  width: 100%;
  padding: 2rem 0;
  background: #0056b3;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`;

const MainSection = styled.section`
  max-width: 800px;
  margin: 2rem 0;
  padding: 2rem;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const CTAButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: white;
  background: #0056b3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #004494;
  }
`;

const Footer = styled.footer`
  padding: 2rem 0;
  background: #333;
  color: white;
  width: 100%;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header>IntegrityTrack System</Header>
      <MainSection>
        <SectionTitle>Welcome to IntegrityTrack</SectionTitle>
        <SectionDescription>
          Our mission is to enhance transparency and accountability in public sectors by providing a platform for reporting, tracking, and auditing corruption incidents. Join us in making a difference.
        </SectionDescription>
        <CTAButton>Get Started</CTAButton>
      </MainSection>
      <MainSection>
        <SectionTitle>Features</SectionTitle>
        <SectionDescription>
          <ul>
            <li>Report incidents of corruption and malpractice easily</li>
            <li>Track and monitor public resource allocations</li>
            <li>Collaborate with government agencies and civil society</li>
            <li>Access detailed audit reports and data visualizations</li>
          </ul>
        </SectionDescription>
      </MainSection>
      <Footer>
        &copy; 2024 IntegrityTrack. All rights reserved.
      </Footer>
    </LandingPageContainer>
  );
};

export default LandingPage;

