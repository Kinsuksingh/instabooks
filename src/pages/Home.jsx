import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const float = keyframes`
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: ${float} 20s infinite ease-in-out;

  &:nth-child(1) {
    width: 300px;
    height: 300px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  &:nth-child(2) {
    width: 200px;
    height: 200px;
    top: 60%;
    right: 15%;
    animation-delay: 3s;
  }

  &:nth-child(3) {
    width: 150px;
    height: 150px;
    bottom: 20%;
    left: 20%;
    animation-delay: 6s;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 30px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  animation: ${slideUp} 0.8s ease-out;

  @media (max-width: 600px) {
    margin: 20px;
    padding: 30px 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #2d3748;
  margin-bottom: 15px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #718096;
  margin-bottom: 35px;
  line-height: 1.6;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
  }
`;

const FeatureIcon = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;

const FeatureText = styled.div`
  font-size: 14px;
  color: #4a5568;
  font-weight: 500;
`;

const NotifyButton = styled.button`
  margin-top: 30px;
  padding: 15px 40px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: ${(props) =>
    props.$notified
      ? "linear-gradient(135deg, #48bb78 0%, #38a169 100%)"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TimelineSection = styled.div`
  margin-bottom: 3rem;
`;

/* New dropdown styles */
const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
  margin: 0 auto 1.5rem auto;
  max-width: 420px;
  width: 100%;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  justify-content: flex-start;
`;

const GradeSelect = styled.select`
  width: 100%;
  padding: 0.9rem 1rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  background: white;
  appearance: none; /* hide default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #667eea 50%),
    linear-gradient(135deg, #667eea 50%, transparent 50%);
  background-position: calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px);
  background-size: 8px 8px, 8px 8px;
  background-repeat: no-repeat;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 6px 18px rgba(102, 126, 234, 0.12);
  }
`;

const TimelineItem = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
  transition: all 0.3s ease;
  padding: 0.5rem;
  &:hover {
    transform: scale(1.05);
  }
`;

const TimelineNode = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "white"};
  border: 3px solid ${(props) => (props.$selected ? "#667eea" : "#cbd5e0")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  color: ${(props) => (props.$selected ? "white" : "#4a5568")};
  box-shadow: ${(props) =>
    props.$selected
      ? "0 8px 20px rgba(102, 126, 234, 0.4)"
      : "0 2px 8px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;
`;

const TimelineLabel = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${(props) => (props.$selected ? "#667eea" : "#718096")};
  white-space: nowrap;
  transition: all 0.3s ease;
`;

const BookTypeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const BookTypeCard = styled.button`
  background: ${(props) =>
    props.$selected
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "white"};
  color: ${(props) => (props.$selected ? "white" : "#4a5568")};
  border: 2px solid ${(props) => (props.$selected ? "#667eea" : "#e2e8f0")};
  border-radius: 12px;
  padding: 1.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: white;
`;

const ContinueButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function InstabookApp() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedBookType, setSelectedBookType] = useState("");

  const grades = [
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ];
  const bookTypes = ["Revision Notes", "Detailed Notes"];

  const handleContinue = () => {
    if (selectedGrade && selectedBookType) {
      // navigate to profile (keeps your original behavior)
      navigate("/instabooks/profile");
      console.log(`Selected: ${selectedGrade} - ${selectedBookType}`);
    }
  };

  return (
    <Wrapper>
      <BackgroundAnimation>
        <Circle />
        <Circle />
        <Circle />
      </BackgroundAnimation>
      <Container>
        <Title>Welcome to Instabook</Title>
        <Subtitle>Select your grade and preferred note type</Subtitle>

        <TimelineSection>
          <SectionTitle>
            <GraduationCap size={24} />
            Select Your Grade
          </SectionTitle>

          <SelectWrapper>
            <LabelRow>
              {/* left aligned label to match visual hierarchy */}
              <TimelineLabel $selected={!!selectedGrade}>Grade</TimelineLabel>
            </LabelRow>
            <GradeSelect
              aria-label="Select Grade"
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
            >
              <option value="">-- Choose grade --</option>
              {grades.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </GradeSelect>
          </SelectWrapper>

          <div>
            <SectionTitle>
              <BookOpen size={24} />
              Choose Book Type
            </SectionTitle>

            <BookTypeGrid>
              {bookTypes.map((type) => (
                <BookTypeCard
                  key={type}
                  $selected={selectedBookType === type}
                  onClick={() => setSelectedBookType(type)}
                  type="button"
                  aria-pressed={selectedBookType === type}
                >
                  {selectedBookType === type && (
                    <CheckIcon>
                      <CheckCircle size={20} />
                    </CheckIcon>
                  )}
                  {type}
                </BookTypeCard>
              ))}
            </BookTypeGrid>
          </div>

          <ContinueButton
            onClick={handleContinue}
            disabled={!selectedGrade || !selectedBookType}
            type="button"
            aria-disabled={!selectedGrade || !selectedBookType}
          >
            Continue to Profile
          </ContinueButton>
        </TimelineSection>
      </Container>
    </Wrapper>
  );
}
