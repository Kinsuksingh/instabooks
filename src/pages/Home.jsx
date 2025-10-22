import React, { useState, useRef} from "react";
import styled from "styled-components";
import {
  BookOpen,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";




const Container = styled.div`
  min-height: 100%;              
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  display: flex;
  align-items: center;            /* <- horizontal (cross-axis) center */
  justify-content: center;        /* <- vertical (main-axis) center */
  padding: 24px;                  /* small padding for mobile */
  background: radial-gradient(
      40% 60% at 20% 10%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      40% 60% at 80% 0%,
      rgba(56, 189, 248, 0.18) 0%,
      transparent 60%
    ),
    #f8fafc;
`;




const MainContent = styled.main`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  flex: 1;
`;

const Title = styled.h1`
  color: gray-900;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  color: gray-900;
  font-size: 1rem;
  text-align: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const SelectionCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 2.5rem;
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

const TimelineSection = styled.div`
  margin-bottom: 3rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 1rem 0;
`;

const TimelineTrack = styled.div`
  position: relative;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TimelineInner = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 0 3rem;
  min-width: min-content;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      transparent,
      #e2e8f0 10%,
      #e2e8f0 90%,
      transparent
    );
    transform: translateY(-50%);
    z-index: 0;
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

function InstabookApp() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedBookType, setSelectedBookType] = useState("");
  const timelineRef = useRef(null);

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
      navigate("/instabooks/profile");
      console.log(`Selected: ${selectedGrade} - ${selectedBookType}`);
    }
  };

  return (
    <Container>
      <MainContent>
        <Title>Welcome to Instabook</Title>
        <Subtitle>Select your grade and preferred note type</Subtitle>
        <SelectionCard>
          <TimelineSection>
            <SectionTitle>
              <GraduationCap size={24} />
              Select Your Grade
            </SectionTitle>

            <TimelineContainer>
              <TimelineTrack ref={timelineRef}>
                <TimelineInner>
                  {grades.map((grade) => (
                    <TimelineItem
                      key={grade}
                      onClick={() => setSelectedGrade(grade)}
                      type="button"
                    >
                      <TimelineNode $selected={selectedGrade === grade}>
                        {grade.replace("Grade ", "")}
                      </TimelineNode>
                      <TimelineLabel $selected={selectedGrade === grade}>
                        {grade}
                      </TimelineLabel>
                    </TimelineItem>
                  ))}
                </TimelineInner>
              </TimelineTrack>
            </TimelineContainer>
          </TimelineSection>

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
          >
            Continue to Profile
          </ContinueButton>
        </SelectionCard>
      </MainContent>
    </Container>
  );
}

export default InstabookApp;
