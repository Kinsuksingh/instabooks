// Profile.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { BookOpen, GraduationCap, CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


const DemoGrid = styled.div`
  min-height: 100vh;
  place-items: center;
  padding: 15px;
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

/* ------- Shared UI ------- */
const Title = styled.h1`
  color: #1a202c;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin: 0 0 0.5rem;
`;
const Subtitle = styled.p`
  color: #4a5568;
  font-size: 1rem;
  text-align: center;
  margin: 0 0 2rem;
`;
const SelectionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
`;
const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
`;
const CheckIcon = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  color: white;
`;

/* ------- Teacher Cards ------- */
const TeacherCard = styled.button`
  background: ${(p) =>
    p.$selected
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "white"};
  border: 2px solid ${(p) => (p.$selected ? "#667eea" : "#e2e8f0")};
  border-radius: 16px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  text-align: left;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
  }
`;
const Avatar = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${(p) =>
    p.$selected
      ? "white"
      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  color: ${(p) => (p.$selected ? "#667eea" : "white")};
  font-weight: 700;
`;
const TeacherInfo = styled.div`
  flex: 1;
`;
const TeacherName = styled.h3`
  font-size: 1.05rem;
  font-weight: 700;
  color: ${(p) => (p.$selected ? "white" : "#1a202c")};
  margin: 0 0 0.25rem;
`;
const TeacherSubject = styled.p`
  font-size: 0.9rem;
  color: ${(p) => (p.$selected ? "rgba(255,255,255,0.9)" : "#718096")};
  margin: 0;
`;

/* ------- Library Preview ------- */
const LibrarySection = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e2e8f0;
`;
const LibraryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.9rem;
`;
const BookCard = styled.div`
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.08) 0%,
    rgba(118, 75, 162, 0.08) 100%
  );
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
`;
const BookTitle = styled.h4`
  font-size: 0.98rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0.5rem 0 0.25rem;
`;
const BookType = styled.span`
  font-size: 0.8rem;
  color: #667eea;
  font-weight: 500;
`;

/* ------- Footer Actions ------- */
const Footer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.25rem;
  flex-wrap: wrap;
`;
const GhostButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  cursor: pointer;
`;
const PrimaryButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.85rem 1.25rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;
  min-width: 170px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
  }
`;

function Profile() {
  const navigate = useNavigate();
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const teachers = [
    { id: 1, name: "Dr. Sarah Johnson", subject: "Mathematics & Physics", initial: "SJ" },
    { id: 2, name: "Prof. Michael Chen", subject: "Chemistry & Biology", initial: "MC" },
    { id: 3, name: "Ms. Emily Roberts", subject: "English & Literature", initial: "ER" },
    { id: 4, name: "Mr. David Kumar", subject: "History & Geography", initial: "DK" },
  ];

  const libraries = [
    { id: 1, title: "Algebra Fundamentals", type: "Revision Notes" },
    { id: 2, title: "Calculus Advanced", type: "Detailed Notes" },
    { id: 3, title: "Geometry Basics", type: "Revision Notes" },
    { id: 4, title: "Trigonometry Guide", type: "Detailed Notes" },
    { id: 5, title: "Statistics Overview", type: "Revision Notes" },
    { id: 6, title: "Linear Equations", type: "Detailed Notes" },
  ];

  const goToLibrary = () => {
    if (!selectedTeacher) return;
    // Pass the teacher to /library page
    navigate("/instabooks/library", { state: { teacher: selectedTeacher } });
  };

  return (
    <DemoGrid>
      <Title>Choose Your Favorite Teacher</Title>
      <Subtitle>Select a teacher to access their complete library</Subtitle>

      <SelectionCard>
        <SectionTitle>
          <GraduationCap size={22} />
          Available Teachers
        </SectionTitle>

        <GridContainer>
          {teachers.map((t) => {
            const isSel = selectedTeacher?.id === t.id;
            return (
              <TeacherCard
                key={t.id}
                type="button"
                $selected={isSel}
                onClick={() => setSelectedTeacher(t)}
              >
                {isSel && (
                  <CheckIcon>
                    <CheckCircle size={18} />
                  </CheckIcon>
                )}
                <Avatar $selected={isSel}>{t.initial}</Avatar>
                <TeacherInfo>
                  <TeacherName $selected={isSel}>{t.name}</TeacherName>
                  <TeacherSubject $selected={isSel}>{t.subject}</TeacherSubject>
                </TeacherInfo>
              </TeacherCard>
            );
          })}
        </GridContainer>

        {selectedTeacher && (
          <LibrarySection>
            <SectionTitle>
              <BookOpen size={22} />
              {selectedTeacher.name}&apos;s Library (preview)
            </SectionTitle>
            <LibraryGrid>
              {libraries.map((b) => (
                <BookCard key={b.id}>
                  <BookOpen size={28} />
                  <BookTitle>{b.title}</BookTitle>
                  <BookType>{b.type}</BookType>
                </BookCard>
              ))}
            </LibraryGrid>
          </LibrarySection>
        )}

        <Footer>
          <GhostButton type="button" onClick={() => navigate(-1)}>
            <ArrowLeft size={18} />
            Back
          </GhostButton>

          <PrimaryButton
            type="button"
            onClick={goToLibrary}
            disabled={!selectedTeacher}
            aria-disabled={!selectedTeacher}
          >
            Go to Library
          </PrimaryButton>
        </Footer>
      </SelectionCard>
    </DemoGrid>
  );
}

export default Profile;
