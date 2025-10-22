import React, { useState } from "react";
import styled from "styled-components";
import { BookOpen, GraduationCap, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const SelectionCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

/** Use transient prop `$selected` so it doesn't leak to the DOM */
const OptionCard = styled.button`
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
  const navigate = useNavigate(); // ✅ hooks must be at top level

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
      // You might persist the selections via state/store/query params here if needed
      navigate("/instabooks/profile");
    }
  };

  return (
    <Container>
      <MainContent>
        <Title>Welcome to Instabook</Title>
        <Subtitle>Select your grade and preferred note type to get started</Subtitle>

        <SelectionCard>
          <SectionTitle>
            <GraduationCap size={24} />
            Select Your Grade
          </SectionTitle>

          <GridContainer>
            {grades.map((grade) => (
              <OptionCard
                key={grade}
                $selected={selectedGrade === grade}
                onClick={() => setSelectedGrade(grade)}
                type="button"
              >
                {selectedGrade === grade && (
                  <CheckIcon>
                    <CheckCircle size={20} />
                  </CheckIcon>
                )}
                {grade}
              </OptionCard>
            ))}
          </GridContainer>

          <SectionTitle>
            <BookOpen size={24} />
            Choose Book Type
          </SectionTitle>

          <GridContainer>
            {bookTypes.map((type) => (
              <OptionCard
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
              </OptionCard>
            ))}
          </GridContainer>

          <ContinueButton
            onClick={handleContinue}
            disabled={!selectedGrade || !selectedBookType}
            type="button"
            aria-disabled={!selectedGrade || !selectedBookType}
          >
            Continue to Profile
          </ContinueButton>
        </SelectionCard>
      </MainContent>
    </Container>
  );
}

export default InstabookApp;
