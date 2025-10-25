import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaBook, FaHistory, FaClock, FaUser, FaEdit, FaStar, FaChevronRight } from 'react-icons/fa';

// Animations
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled components
const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100%;
  padding: 20px;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  animation: ${slideUp} 0.8s ease-out;
`;

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media(max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h1`
  font-size: 2em;
  color: #2d3748;
  margin: 0 0 5px 0;
  font-weight: 700;
`;

const UserEmail = styled.p`
  color: #718096;
  margin: 0 0 10px 0;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 15px;

  @media(max-width: 600px) {
    justify-content: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #667eea;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #718096;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 12px;
  background: ${props => props.active ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'rgba(255, 255, 255, 0.95)'};
  color: ${props => props.active ? 'white' : '#718096'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
  }
`;

const HistoryCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: #f7fafc;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #e6f2ff;
    transform: translateX(5px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const BookIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const HistoryInfo = styled.div`
  flex: 1;
`;

const BookTitle = styled.h3`
  margin: 0 0 5px 0;
  color: #2d3748;
  font-size: 16px;
`;

const BookMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 12px;
  color: #718096;
`;

const TimeStamp = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Progress = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ChevronIcon = styled(FaChevronRight)`
  color: #cbd5e0;
  font-size: 18px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #718096;
`;

const EmptyIcon = styled.div`
  font-size: 60px;
  margin-bottom: 15px;
  opacity: 0.5;
`;

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('history');
  useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

  // Sample user data
  const userData = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    avatar: "PS",
    booksRead: 24,
    hoursSpent: 156,
    favoriteTeacher: "Ms. Sarah"
  };

  // Sample history data
  const historyData = [
    {
      id: 1,
      title: "Advanced Mathematics",
      teacher: "Prof. Michael Chen",
      time: "2 hours ago",
      progress: 75,
      icon: "📐"
    },
    {
      id: 2,
      title: "Introduction to Physics",
      teacher: "Dr. Sarah Johnson",
      time: "Yesterday",
      progress: 45,
      icon: "⚡"
    },
    {
      id: 3,
      title: "Chemistry Fundamentals",
      teacher: "Mr. David Kumar",
      time: "2 days ago",
      progress: 90,
      icon: "🧪"
    },
    {
      id: 4,
      title: "Biology Basics",
      teacher: "Dr. Emily Brown",
      time: "1 week ago",
      progress: 100,
      icon: "🧬"
    }
  ];

  return (
    <Wrapper>
      <Container>
        <ProfileCard>
          <ProfileHeader>
            <Avatar>{userData.avatar}</Avatar>
            <ProfileInfo>
              <UserName>{userData.name}</UserName>
              <UserEmail>{userData.email}</UserEmail>
              <StatsContainer>
                <Stat>
                  <StatNumber>{userData.booksRead}</StatNumber>
                  <StatLabel>Books Read</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber>{userData.hoursSpent}</StatNumber>
                  <StatLabel>Hours</StatLabel>
                </Stat>
                <Stat>
                  <StatNumber>
                    <FaStar style={{color: '#fbbf24'}} />
                  </StatNumber>
                  <StatLabel>{userData.favoriteTeacher}</StatLabel>
                </Stat>
              </StatsContainer>
            </ProfileInfo>
            <EditButton>
              <FaEdit /> Edit Profile
            </EditButton>
          </ProfileHeader>
        </ProfileCard>

        <TabContainer>
          <Tab active={activeTab === 'history'} onClick={() => setActiveTab('history')}>
            <FaHistory /> Reading History
          </Tab>
          <Tab active={activeTab === 'favorites'} onClick={() => setActiveTab('favorites')}>
            <FaStar /> Favorites
          </Tab>
        </TabContainer>

        <HistoryCard>
          {activeTab === 'history' && historyData.length > 0 ? (
            historyData.map((item) => (
              <HistoryItem key={item.id}>
                <BookIcon>{item.icon}</BookIcon>
                <HistoryInfo>
                  <BookTitle>{item.title}</BookTitle>
                  <BookMeta>
                    <TimeStamp>
                      <FaClock /> {item.time}
                    </TimeStamp>
                    <Progress>
                      <FaBook /> {item.progress}% complete
                    </Progress>
                  </BookMeta>
                </HistoryInfo>
                <ChevronIcon />
              </HistoryItem>
            ))
          ) : (
            <EmptyState>
              <EmptyIcon>📚</EmptyIcon>
              <h3>No Reading History Yet</h3>
              <p>Start reading books to see them here!</p>
            </EmptyState>
          )}
        </HistoryCard>
      </Container>
    </Wrapper>
  );
}