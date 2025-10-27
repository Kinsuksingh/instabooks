import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  GraduationCap,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Calculator,
  FlaskConical,
  Atom,
  Globe,
  Languages,
  Code,
} from "lucide-react";

// ---------- Animations ----------
const float = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.4; }
`;

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

// ---------- Styled Components ----------
const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%);
  font-family: "Inter", sans-serif;
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const CursorBlink = styled.span`
  &::after {
    content: "|";
    animation: ${blink} 1s infinite;
    margin-left: 4px;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 1rem;
  }
`;

const GlassCardHover = styled(GlassCard)`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.2);
  }
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    gap: 1.5rem;
  }
`;

const HeroText = styled.h1`
  font-size: clamp(1.5rem, 6vw, 3rem);
  font-weight: 900;
  line-height: 1.2;
  padding: 0 1rem;
`;

const GradientText = styled.span`
  background: green;
  -webkit-background-clip: text;
  color: transparent;
  font-style: italic;
  font-size: 30px;
`;

const BackgroundCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  bottom: ${({ $bottom }) => $bottom};
  right: ${({ $right }) => $right};
  animation: ${pulseGlow} ${({ $duration }) => $duration}s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  opacity: 0.15;
  animation: ${float} ${({ $duration }) => $duration}s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay}s;
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const PageWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 600px;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 10rem;
  background: ${({ $gradient }) => $gradient};
  box-shadow: ${({ $shadow }) => $shadow};
  flex-shrink: 0;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const HeaderText = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  color: #1e293b;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const HeaderSubText = styled.p`
  font-size: 0.8rem;
  color: #64748b;

  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

const GradeSelect = styled.select`
  width: 100%;
  padding: 0.875rem 2.5rem 0.875rem 0.875rem;
  border-radius: 0.75rem;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 500;
  color: #1e293b;
  background: white;
  appearance: none;
  transition: all 0.2s;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  @media (min-width: 768px) {
    padding: 1rem 2.5rem 1rem 1rem;
  }
`;

const GradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SubjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Transient prop $visible avoids passing to DOM
export const ContinueButtonCard = styled.button`
  width: 100%;
  margin-top: 0.6rem;
  padding: 0.9rem 1rem;
  border: 0;
  border-radius: 0.875rem;
  font-weight: 700;
  font-size: 0.95rem;
  display: ${({ $visible }) => ($visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  color: #fff;
  box-shadow: 0 8px 24px rgba(22, 163, 74, 0.35);

  transition: transform 120ms ease, box-shadow 200ms ease, filter 120ms ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(22, 163, 74, 0.45);
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 6px 18px rgba(22, 163, 74, 0.35);
    filter: saturate(0.95);
  }
  &:focus-visible {
    outline: 3px solid rgba(34, 197, 94, 0.35);
    outline-offset: 2px;
    border-radius: 1rem;
  }
`;

/** CHANGED: CardButton is now a DIV (not a button) to avoid nesting a button inside a button */
const CardButton = styled.div`
  border-radius: 0.875rem;
  padding: 1.25rem;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border: 2px solid transparent;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  ${({ $selected }) =>
    $selected
      ? `
    background: linear-gradient(180deg, #74dec1 0%, #28A745 50%, #0E7C3F 100%);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
    transform: scale(1.01);
  `
      : `
    background: white;
    color: #334155;
    border-color: #e2e8f0;

    &:hover {
      background: linear-gradient(180deg, #E8FBF0 0%, #CFF6DF 100%);
      color: black;
      border-color: transparent;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(240, 147, 251, 0.3);
    }
  `}

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const EmptySubjectsCard = styled.div`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 2px solid lightgray;
  border-radius: 1rem;
  svg {
    margin-bottom: 1rem;
    opacity: 1.5;
  }

  p {
    font-size: 0.9rem;
    color: #64748b;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const TeacherName = styled.div`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  font-size: 0.875rem;
  opacity: 0.95;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

// Inline row for subject + right-side icons
const SubjectRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
`;

const RightIcons = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

// ---------- Main Component ----------
export default function InstalearnApp() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedBookType, setSelectedBookType] = useState("");
  const [animatedText, setAnimatedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const words = [
    "Achieve Excellence",
    "Master Every Subject",
    "Unlock Your Potential",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseDelay = 2000;

    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
        return;
      }

      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }

      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setAnimatedText(
        currentWord.substring(0, charIndex + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  });

  const grades = {
    "Grade 9": {
      subjects: {
        English: "Ms. Priya Sharma",
        Mathematics: "Mr. Rajesh Kumar",
        Science: "Ms. Anjali Mehta",
        "Social Studies": "Siddharth Sir",
        Hindi: "Ms. Kavita Reddy",
        "Computer Science": "Mr. Arvind Nair",
      },
    },
    "Grade 10": {
      subjects: {
        English: "Ms. Sunita Verma",
        Mathematics: "Mr. Rohan Patel",
        Science: "Ms. Anjali Mehta",
        "Social Studies": "Siddharth Sir",
        Hindi: "Ms. Kavita Reddy",
        "Computer Science": "Mr. Arvind Nair",
      },
    },
    "Grade 11": {
      subjects: {
        English: "Ms. Priya Sharma",
        Physics: "Mr. Nitin Agarwal",
        Chemistry: "Ms. Sneha Kapoor",
        Biology: "Siddharth Sir",
        Mathematics: "Mr. Deepak Rao",
        "Computer Science": "Mr. Arvind Nair",
      },
    },
    "Grade 12": {
      subjects: {
        English: "Ms. Sunita Verma",
        Physics: "Mr. Nitin Agarwal",
        Chemistry: "Ms. Sneha Kapoor",
        Biology: "Siddharth Sir",
        Mathematics: "Mr. Deepak Rao",
        "Computer Science": "Mr. Arvind Nair",
      },
    },
  };

  // Map each subject to an icon
  const subjectIcons = {
    English: BookOpen,
    Mathematics: Calculator,
    Science: FlaskConical,
    Physics: Atom,
    Chemistry: FlaskConical,
    Biology: Globe,
    "Social Studies": Globe,
    Hindi: Languages,
    "Computer Science": Code,
  };

  const handleContinue = () => {
    if (selectedGrade && selectedBookType) {
      navigate("/instalearn/teacher");
      console.log(`Selected: ${selectedGrade} - ${selectedBookType}`);
    }
  };

  const onCardActivate = (subject) => {
    setSelectedBookType(subject);
  };

  const onCardKeyDown = (e, subject) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardActivate(subject);
    }
  };

  const currentSubjects = selectedGrade
    ? Object.keys(grades[selectedGrade].subjects)
    : [];

  return (
    <Container>
      {/* Background Circles */}
      <BackgroundCircle
        $color="rgba(255, 255, 255, 0.15)"
        $size={500}
        $top="-10%"
        $right="-5%"
        $duration={8}
        $delay={0}
      />
      <BackgroundCircle
        $color="rgba(255, 255, 255, 0.1)"
        $size={600}
        $bottom="-15%"
        $left="-5%"
        $duration={10}
        $delay={3}
      />
      <BackgroundCircle
        $color="rgba(255, 255, 255, 0.12)"
        $size={400}
        $top="40%"
        $left="50%"
        $duration={12}
        $delay={6}
      />

      {/* Floating Icons */}
      {[...Array(8)].map((_, i) => (
        <FloatingIcon
          key={i}
          $duration={8 + i * 2}
          $delay={i * 0.8}
          style={{ left: `${10 + i * 12}%`, top: `${15 + i * 11}%` }}
        >
          {i % 3 === 0 ? (
            <BookOpen size={32} color="rgba(255,255,255,0.4)" />
          ) : i % 3 === 1 ? (
            <GraduationCap size={32} color="rgba(255,255,255,0.4)" />
          ) : (
            <Sparkles size={32} color="rgba(255,255,255,0.4)" />
          )}
        </FloatingIcon>
      ))}

      <PageWrapper>
        <CardWrapper>
          <HeroSection>
            <HeroText>
              <GradientText>
                <CursorBlink>{animatedText}</CursorBlink>
              </GradientText>
            </HeroText>
          </HeroSection>

          <GlassCardHover
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {/* Grade Selection */}
            <GradeContainer>
              <SectionHeader>
                <IconWrapper
                  $gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  $shadow="0 8px 24px rgba(102,126,234,0.3)"
                >
                  <GraduationCap size={20} color="white" />
                </IconWrapper>
                <div>
                  <HeaderText>Select Your Grade</HeaderText>
                </div>
              </SectionHeader>

              <div style={{ position: "relative" }}>
                <GradeSelect
                  value={selectedGrade}
                  onChange={(e) => {
                    setSelectedGrade(e.target.value);
                    setSelectedBookType("");
                  }}
                >
                  <option value="" disabled>
                    Select Grade
                  </option>
                  {Object.keys(grades).map((grade) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </GradeSelect>
                {selectedGrade && (
                  <CheckCircle
                    size={20}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "#10b981",
                    }}
                  />
                )}
              </div>
            </GradeContainer>

            {/* Subject Selection */}
            <GradeContainer>
              <SectionHeader>
                <IconWrapper
                  $gradient="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                  $shadow="0 8px 24px rgba(240,147,251,0.3)"
                >
                  <BookOpen size={20} color="white" />
                </IconWrapper>
                <div>
                  <HeaderText>Choose Your Subject</HeaderText>
                  <HeaderSubText>
                    Click a subject to reveal the teacher name.
                  </HeaderSubText>
                </div>
              </SectionHeader>

              {currentSubjects.length === 0 ? (
                <EmptySubjectsCard>
                  <BookOpen size={40} color="#94a3b8" />
                  <p>Please select a grade to view available subjects</p>
                </EmptySubjectsCard>
              ) : (
                <SubjectsGrid>
                  {currentSubjects.map((subject) => {
                    const teacher = grades[selectedGrade].subjects[subject];
                    const isSelected = selectedBookType === subject;
                    const Icon = subjectIcons[subject] || BookOpen;

                    return (
                      <CardButton
                        key={subject}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        $selected={isSelected}
                        onClick={() => onCardActivate(subject)}
                        onKeyDown={(e) => onCardKeyDown(e, subject)}
                      >
                        <SubjectRow>
                          <span>{subject}</span>
                          <RightIcons>
                            <Icon size={18} />
                          </RightIcons>
                        </SubjectRow>

                        {isSelected && (
                          <SubjectRow>
                            <TeacherName>{teacher}</TeacherName>
                            <RightIcons>
                              <CheckCircle className="mt-3" size={18} />
                            </RightIcons>
                          </SubjectRow>
                        )}

                        <ContinueButtonCard
                          $visible={isSelected}
                          onClick={handleContinue}
                        >
                          Continue to Profile <ArrowRight size={18} />
                        </ContinueButtonCard>
                      </CardButton>
                    );
                  })}
                </SubjectsGrid>
              )}
            </GradeContainer>
          </GlassCardHover>
        </CardWrapper>
      </PageWrapper>
    </Container>
  );
}
