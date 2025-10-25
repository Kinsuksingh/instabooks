import React from "react";
import styled from "styled-components";
import { BookOpen, Grid, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { teacherData } from "../data/teacherData.js";

const teacher = teacherData;

// ---------- Styled Components ----------

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const HeaderTitle = styled.span`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProfileSection = styled.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: 1024px) {
    padding: 2rem 3rem;
  }
`;

const ProfileTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AvatarWrapper = styled.div`
  position: relative;
`;

const Avatar = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #e5e7eb;

  @media (min-width: 768px) {
    width: 8rem;
    height: 8rem;
  }
  @media (min-width: 1024px) {
    width: 10rem;
    height: 10rem;
  }
`;

const StatsMobile = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  text-align: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

const StatsDesktop = styled.div`
  display: none;
  gap: 2rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const Stat = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
  span {
    font-weight: 400;
    margin-left: 0.25rem;
    color: #6b7280;
  }
`;

const ProfileContent = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 1rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

const Subject = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Bio = styled.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Experience = styled.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  color: #6b7280;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ButtonPrimary = styled.button`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    padding: 0.5rem 2rem;
  }
  background: #3b82f6;
  color: #fff;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonSecondary = styled.button`
  flex: 1;
  @media (min-width: 768px) {
    flex: initial;
    padding: 0.5rem 2rem;
  }
  border: 1px solid #d1d5db;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonDropdown = styled.button`
  border: 1px solid #d1d5db;
  padding: 0.25rem 1rem;
  border-radius: 0.5rem;
`;

const BooksWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const BookList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;

const BookItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: fit-content;
  cursor: pointer;
`;

const BookCircleOuter = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);

  @media (min-width: 768px) {
    width: 5rem;
    height: 5rem;
  }
  @media (min-width: 1024px) {
    width: 6rem;
    height: 6rem;
  }
`;

const BookCircleInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 0.25rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BookTitle = styled.div`
  font-size: 0.75rem;
  color: #374151;
  text-align: center;
  margin-top: 0.25rem;
  max-width: 4.375rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    font-size: 0.875rem;
    max-width: 5.625rem;
  }
`;

const Tabs = styled.div`
  display: flex;
  border-top: 1px solid #e5e7eb;
`;

const TabButton = styled.button`
  flex: 1;
  padding: 0.75rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-top: 2px solid ${({ active }) => (active ? "#111827" : "transparent")};
  color: ${({ active }) => (active ? "#111827" : "#9ca3af")};
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

const PostItem = styled.div`
  aspect-ratio: 1 / 1;
  background: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// ---------- Component ----------

export default function TeacherProfile() {
  const navigate = useNavigate();

  const handleBookClick = (index) => {
    if (index === 0) {
      navigate("/instalearn/library");
    }
  };

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <BookOpen size={20} />
          <HeaderTitle>{teacher.username}</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <button>☰</button>
        </HeaderRight>
      </Header>

      <ProfileSection>
        <ProfileTop>
          <AvatarSection>
            <AvatarWrapper>
              <Avatar src={teacher.avatar} alt={teacher.name} />
            </AvatarWrapper>
            <StatsMobile>
              <Stat>
                {teacher.posts} <span>posts</span>
              </Stat>
              <Stat>
                {teacher.students} <span>students</span>
              </Stat>
              <Stat>
                {teacher.books} <span>books</span>
              </Stat>
            </StatsMobile>
          </AvatarSection>

          <ProfileContent>
            <StatsDesktop>
              <Stat>
                {teacher.posts} <span>posts</span>
              </Stat>
              <Stat>
                {teacher.students} <span>students</span>
              </Stat>
              <Stat>
                {teacher.books} <span>books</span>
              </Stat>
            </StatsDesktop>

            <Name>{teacher.name}</Name>
            <Subject>{teacher.subject}</Subject>
            <Bio>{teacher.bio}</Bio>
            <Experience>🎓 {teacher.experience} years experience</Experience>

            <Actions>
              <ButtonPrimary>Follow</ButtonPrimary>
              <ButtonSecondary>Message</ButtonSecondary>
              <ButtonDropdown>▼</ButtonDropdown>
            </Actions>
          </ProfileContent>
        </ProfileTop>

        <BooksWrapper>
          <BookList>
            {teacher.bookList.map((book, index) => (
              <BookItem key={index} onClick={() => handleBookClick(index)}>
                <BookCircleOuter>
                  <BookCircleInner>
                    <BookOpen size={24} />
                  </BookCircleInner>
                </BookCircleOuter>
                <BookTitle>{book.title}</BookTitle>
              </BookItem>
            ))}
          </BookList>
        </BooksWrapper>
      </ProfileSection>

      <Tabs>
        <TabButton active>
          <Grid size={20} />
        </TabButton>
        <TabButton>
          <Bookmark size={20} />
        </TabButton>
      </Tabs>

      <PostsGrid>
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <PostItem key={i}>
              <BookOpen size={24} />
            </PostItem>
          ))}
      </PostsGrid>
    </Container>
  );
}
