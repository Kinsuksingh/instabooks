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
  ChevronRight,
} from "lucide-react";

/* ---------- Design tokens ---------- */
const ui = {
  bgGrad: "linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)",
  glass: "rgba(255,255,255,0.94)",
  border: "rgba(255,255,255,0.9)",
  text: "#0f172a",
  subtext: "#64748b",
  primary: "#0EA5E9",
  success: "#22c55e",
  successDark: "#16a34a",
  shadow: "0 20px 60px rgba(0,0,0,0.15)",
  ring: "rgba(14,165,233,0.12)",
};

const float = keyframes`
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(30px, -30px) rotate(5deg); }
  50% { transform: translate(-20px, -50px) rotate(-5deg); }
  75% { transform: translate(40px, -20px) rotate(3deg); }
`;
const pulseGlow = keyframes`0%,100%{opacity:.2}50%{opacity:.4}`;
const blink = keyframes`0%,49%{opacity:1}50%,100%{opacity:0}`;

/* ---------- Layout ---------- */
const Container = styled.div`
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${ui.bgGrad};
  font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  padding: 1rem;
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
  filter: blur(2px);
  animation: ${pulseGlow} ${({ $duration }) => $duration}s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay}s;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const FloatingIcon = styled.div`
  position: absolute;
  opacity: 0.18;
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
  max-width: 980px;
`;

const GlassCard = styled.div`
  background: ${ui.glass};
  backdrop-filter: blur(18px);
  border: 1px solid ${ui.border};
  box-shadow: ${ui.shadow};
  border-radius: 1.25rem;
  padding: 1.5rem;
  @media (min-width: 768px) {
    border-radius: 1rem;
    padding: 2rem;
  }
`;

const Section = styled(GlassCard)`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

/* ---------- Hero ---------- */
const Hero = styled.div`
  text-align: center;
  margin-bottom: 1.25rem;
  display: grid;
  gap: 0.75rem;
  justify-items: center;
  @media (min-width: 768px) {
    margin-bottom: 2rem;
    gap: 1rem;
  }
`;
const Title = styled.h1`
  font-size: clamp(1.4rem, 5.2vw, 2.4rem);
  font-weight: 900;
  line-height: 1.15;
  color: ${ui.text};
  margin: 0;
`;
const GradientText = styled.span`
  background: linear-gradient(135deg, ${ui.primary}, ${ui.success});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2px;
`;
const CursorBlink = styled.span`
  &::after {
    content: "|";
    animation: ${blink} 1s infinite;
    margin-left: 4px;
  }
`;

/* ---------- Headers ---------- */
const SectionHeader = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;
const IconWrap = styled.div`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 999px;
  background: linear-gradient(135deg, ${ui.primary} 0%, ${ui.success} 100%);
  display: grid;
  place-items: center;
  color: white;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.25);
`;
const HeaderText = styled.div`
  display: grid;
  gap: 0.1rem;
  h2 {
    margin: 0;
    font-size: 1.1rem;
    color: #0f172a;
    font-weight: 800;
  }
  p {
    margin: 0;
    font-size: 0.85rem;
    color: ${ui.subtext};
  }
`;

/* ---------- Inputs ---------- */
const GradeSelectWrap = styled.div`
  position: relative;
`;
const GradeSelect = styled.select`
  width: 100%;
  padding: 1rem 2.75rem 1rem 1rem;
  border-radius: 0.9rem;
  border: 2px solid #e2e8f0;
  font-size: 1rem;
  font-weight: 600;
  color: ${ui.text};
  background: white;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  &:focus {
    outline: none;
    border-color: ${ui.primary};
    box-shadow: 0 0 0 6px ${ui.ring};
  }
`;

const Row = styled.div`
  display: grid;
  gap: 1.25rem;
`;

/* ---------- Subjects ---------- */
const SubjectsGrid = styled.div`
  display: grid;
  gap: 0.9rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

/* NOTE: Selected state now uses your required gradient AND switches text to BLACK */
const SubjectCard = styled.div`
  border-radius: 1rem;
  padding: 1.1rem 1.1rem 0.9rem;
  background: #fff;
  border: 2px solid #e2e8f0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: grid;
  gap: 0.55rem;
  align-content: start;
  transition: transform 0.18s, box-shadow 0.18s, border-color 0.18s,
    background 0.18s, color 0.18s;

  &:hover {
    transform: translateY(-2px);
    border-color: ${ui.primary};
    box-shadow: 0 12px 28px rgba(14, 165, 233, 0.15);
  }

  ${({ $selected }) =>
    $selected &&
    `
    background: linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%);
    color: #000;
    border-color: rgba(0,0,0,0.15);
    box-shadow: 0 12px 36px rgba(250, 227, 140, 0.35);
    transform: translateY(-1px);
  `}
`;

const SubjectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0.75rem;
  span {
    font-weight: 800;
    letter-spacing: 0.2px;
  }
  .icon {
    opacity: 0.9;
  }
`;

/* Selected section shows dashed separator; color adapts */
const TeachersWrap = styled.div`
  margin-top: 0.35rem;
  padding-top: 0.5rem;
  border-top: 1px dashed rgba(0, 0, 0, 0.12);
  ${({ $selected }) => $selected && `border-top-color: rgba(0,0,0,.35);`}
`;

const Chips = styled.div`
  display: flex;
  flex-direction:column;
  flex-wrap: wrap;
  gap: 0.4rem;
`;
const Chip = styled.button`
  border: 0;
  cursor: pointer;
  font-size: 0.78rem;
  font-weight: 800;
  padding: 0.38rem 0.6rem;
  border-radius: 0.7rem;
  background: ${({ $inSelected }) =>
    $inSelected ? "rgba(255,255,255,.9)" : "#f1f5f9"};
  color: ${({ $inSelected }) => ($inSelected ? "#0f172a" : ui.text)};
  box-shadow: ${({ $inSelected }) =>
    $inSelected ? "0 2px 6px rgba(0,0,0,.12)" : "none"};
  border: 1px solid
    ${({ $inSelected }) => ($inSelected ? "rgba(0,0,0,.12)" : "#e2e8f0")};
  transition: transform 0.12s ease, box-shadow 0.18s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
  }
  &:focus-visible {
    outline: 3px solid ${ui.ring};
    outline-offset: 2px;
  }
`;

/* ---------- Component ---------- */
export default function InstalearnApp() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
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
      const current = words[wordIndex];

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), pauseDelay);
        return;
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((p) => (p + 1) % words.length);
        return;
      }
      setCharIndex((p) => p + (isDeleting ? -1 : 1));
      setAnimatedText(current.substring(0, charIndex + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  /* ---------- Data (multiple teachers) ---------- */
  const grades = {
    "Grade 9": {
      subjects: {
        English: ["Ms. Priya Sharma", "Mr. Vivek Sinha", "Ms. Ritu Malhotra"],
        Mathematics: ["Mr. Rajesh Kumar", "Ms. Neha Gupta", "Mr. Ankit Jain"],
        Science: ["Ms. Anjali Mehta", "Mr. Suresh Iyer", "Ms. Pooja Khanna"],
        "Social Studies": [
          "Siddharth Sir",
          "Ms. Ananya Bose",
          "Mr. Harish Nanda",
        ],
        Hindi: ["Ms. Kavita Reddy", "Mr. Manoj Tiwari", "Ms. Poonam Joshi"],
        "Computer Science": [
          "Mr. Arvind Nair",
          "Ms. Shruti Desai",
          "Mr. Kunal Shah",
        ],
      },
    },
    "Grade 10": {
      subjects: {
        English: ["Ms. Sunita Verma", "Mr. Ashish Bhatia", "Ms. Riya Kapoor"],
        Mathematics: [
          "Mr. Rohan Patel",
          "Ms. Priyanka Das",
          "Mr. Sanjay Kulkarni",
        ],
        Science: [
          "Ms. Anjali Mehta",
          "Mr. Amit Chakraborty",
          "Ms. Meera Nambiar",
        ],
        "Social Studies": [
          "Siddharth Sir",
          "Ms. Nidhi Arora",
          "Mr. Parth Ghosh",
        ],
        Hindi: ["Ms. Kavita Reddy", "Mr. Ajay Sharma", "Ms. Shalini Tripathi"],
        "Computer Science": [
          "Mr. Arvind Nair",
          "Ms. Tanvi Kulkarni",
          "Mr. Rohit Menon",
        ],
      },
    },
    "Grade 11": {
      subjects: {
        English: ["Ms. Priya Sharma", "Mr. Karan Malhotra", "Ms. Deepa Rao"],
        Physics: ["Mr. Nitin Agarwal", "Ms. Rachna Bansal", "Mr. Vivek Mishra"],
        Chemistry: ["Ms. Sneha Kapoor", "Mr. Aditya Mehta", "Ms. Nupur Jain"],
        Biology: ["Siddharth Sir", "Ms. Radhika Sen", "Mr. Mohan Pillai"],
        Mathematics: ["Mr. Deepak Rao", "Ms. Shreya Iyer", "Mr. Varun Sethi"],
        "Computer Science": [
          "Mr. Arvind Nair",
          "Ms. Naina Khatri",
          "Mr. Prateek Verma",
        ],
      },
    },
    "Grade 12": {
      subjects: {
        English: ["Ms. Sunita Verma", "Mr. Aalok Trivedi", "Ms. Garima Singh"],
        Physics: ["Mr. Nitin Agarwal", "Ms. Priti Saxena", "Mr. Keshav Reddy"],
        Chemistry: [
          "Ms. Sneha Kapoor",
          "Mr. Rohan Mukherjee",
          "Ms. Farah Qureshi",
        ],
        Biology: ["Siddharth Sir", "Ms. Neelam Vaidya", "Mr. Sameer Kulkarni"],
        Mathematics: [
          "Mr. Deepak Rao",
          "Ms. Ishita Shah",
          "Mr. Yashwant Kumar",
        ],
        "Computer Science": [
          "Mr. Arvind Nair",
          "Ms. Pallavi Menon",
          "Mr. Siddharth Jain",
        ],
      },
    },
  };

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

  const currentSubjects = selectedGrade
    ? Object.keys(grades[selectedGrade].subjects)
    : [];

  const onCardActivate = (subject) => setSelectedSubject(subject);
  const onCardKeyDown = (e, subject) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onCardActivate(subject);
    }
  };

  // NEW: clicking a teacher chip redirects immediately to teacher profile
  const onTeacherClick = (teacher) => {
    if (!selectedGrade || !selectedSubject) return;
    navigate("/instalearn/teacher", {
      state: {
        grade: selectedGrade,
        subject: selectedSubject,
        teacher,
      },
    });
  };

  return (
    <Container>
      {/* Background accents */}
      <BackgroundCircle
        $color="rgba(255,255,255,0.16)"
        $size={520}
        $top="-12%"
        $right="-6%"
        $duration={8}
        $delay={0}
      />
      <BackgroundCircle
        $color="rgba(255,255,255,0.1)"
        $size={640}
        $bottom="-16%"
        $left="-8%"
        $duration={10}
        $delay={3}
      />
      <BackgroundCircle
        $color="rgba(255,255,255,0.12)"
        $size={420}
        $top="42%"
        $left="48%"
        $duration={12}
        $delay={6}
      />

      {[...Array(7)].map((_, i) => (
        <FloatingIcon
          key={i}
          $duration={9 + i * 2}
          $delay={i * 0.7}
          style={{ left: `${10 + i * 12}%`, top: `${18 + i * 9}%` }}
        >
          {i % 2 ? (
            <GraduationCap size={30} color="rgba(255,255,255,0.5)" />
          ) : (
            <Sparkles size={30} color="rgba(255,255,255,0.5)" />
          )}
        </FloatingIcon>
      ))}

      <PageWrapper>
        <CardWrapper>
          <Hero>
            <Title>
              <GradientText>
                <CursorBlink>{animatedText}</CursorBlink>
              </GradientText>
            </Title>
          </Hero>

          <Section>
            {/* Grade */}
            <Row>
              <SectionHeader>
                <IconWrap>
                  <GraduationCap size={18} />
                </IconWrap>
                <HeaderText>
                  <h2>Select Your Grade</h2>
                  <p>Pick a class to view the available subjects</p>
                </HeaderText>
              </SectionHeader>

              <GradeSelectWrap>
                <GradeSelect
                  value={selectedGrade}
                  onChange={(e) => {
                    setSelectedGrade(e.target.value);
                    setSelectedSubject("");
                  }}
                >
                  <option value="" disabled>
                    Select Grade
                  </option>
                  {Object.keys(grades).map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </GradeSelect>
                {selectedGrade && (
                  <CheckCircle
                    size={20}
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: ui.success,
                    }}
                  />
                )}
              </GradeSelectWrap>
            </Row>

            {/* Subjects */}
            <Row>
              <SectionHeader>
                <IconWrap>
                  <BookOpen size={18} />
                </IconWrap>
                <HeaderText>
                  <h2>Choose a Subject</h2>
                  <p>Click a teacher to open their profile</p>
                </HeaderText>
              </SectionHeader>

              {!currentSubjects.length ? (
                <GlassCard
                  style={{
                    display: "flex",
                    flexDirection: "column", // ✅ corrected from 'flex-direction'
                    textAlign: "center",
                    borderStyle: "dashed",
                    alignItems: "center", // optional: centers horizontally
                    justifyContent: "center", // optional: centers vertically
                  }}
                >
                  <BookOpen size={36} color="#94a3b8" />
                  <p
                    style={{ color: ui.subtext, fontWeight: 600, marginTop: 8 }}
                  >
                    Please select a grade to view subjects.
                  </p>
                </GlassCard>
              ) : (
                <SubjectsGrid>
                  {currentSubjects.map((subject) => {
                    const Icon = subjectIcons[subject] || BookOpen;
                    const isSelected = selectedSubject === subject;
                    const list = grades[selectedGrade].subjects[subject];
                    const teachers = Array.isArray(list) ? list : [list];

                    return (
                      <SubjectCard
                        key={subject}
                        role="button"
                        tabIndex={0}
                        aria-pressed={isSelected}
                        $selected={isSelected}
                        onClick={() => onCardActivate(subject)}
                        onKeyDown={(e) => onCardKeyDown(e, subject)}
                        aria-label={`Open ${subject}`}
                      >
                        <SubjectRow>
                          <span>{subject}</span>
                          <div className="icon">
                            <Icon size={18} />
                          </div>
                        </SubjectRow>

                        <TeachersWrap $selected={isSelected}>
                          {isSelected ? (
                            <Chips>
                              {teachers.map((t) => (
                                <Chip
                                  key={t}
                                  $inSelected
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    onTeacherClick(t);
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                      e.preventDefault();
                                      e.stopPropagation();
                                      onTeacherClick(t);
                                    }
                                  }}
                                >
                                  {t}
                                </Chip>
                              ))}
                            </Chips>
                          ) : (
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 6,
                                color: "#475569",
                                fontWeight: 700,
                                fontSize: ".86rem",
                              }}
                            >
                              <span>View teachers</span>{" "}
                              <ChevronRight size={16} />
                            </div>
                          )}
                        </TeachersWrap>
                      </SubjectCard>
                    );
                  })}
                </SubjectsGrid>
              )}
            </Row>
          </Section>
        </CardWrapper>
      </PageWrapper>
    </Container>
  );
}
