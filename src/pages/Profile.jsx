import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import {
  FaBook,
  FaHistory,
  FaClock,
  FaUser,
  FaEdit,
  FaStar,
  FaChevronRight,
  FaCog,
  FaMedal,
  FaBookOpen,
  FaChalkboardTeacher,
  FaHeart,
} from "react-icons/fa";

// =====================
// Animations
// =====================
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// =====================
// Design Tokens (cleaner look)
// =====================
const ui = {
  bg: "#F6F8FB",
  card: "#FFFFFF",
  text: "#1F2937",
  subtext: "#6B7280",
  primary: "#4F46E5",
  primarySoft: "#EEF2FF",
  accent: "#10B981",
  border: "#E5E7EB",
  shadow: "0 10px 30px rgba(31, 41, 55, 0.08)",
};

// =====================
// Layout
// =====================
const Wrapper = styled.div`
  --bg: ${ui.bg};
  --card: ${ui.card};
  --text: ${ui.text};
  --subtext: ${ui.subtext};
  --primary: ${ui.primary};
  --primarySoft: ${ui.primarySoft};
  --accent: ${ui.accent};
  --border: ${ui.border};
  --shadow: ${ui.shadow};

  min-height: 100vh;
  padding: 24px;
  background: radial-gradient(1200px 600px at -10% -10%, #EEF2FF 0%, transparent 50%),
              radial-gradient(1200px 600px at 110% 0%, #ECFDF5 0%, transparent 50%),
              var(--bg);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
`;

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  animation: ${slideUp} 0.6s ease-out;
`;

const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 16px;
  box-shadow: var(--shadow);
`;

// =====================
// Profile Header
// =====================
const ProfileCard = styled(Card)`
  padding: 24px;
  margin-bottom: 16px;
`;

const ProfileHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 28px;
  font-weight: 800;
`;

const ProfileInfo = styled.div`
  display: grid;
  gap: 6px;
`;

const UserName = styled.h1`
  font-size: 22px;
  color: var(--text);
  margin: 0;
`;

const UserEmail = styled.p`
  color: var(--subtext);
  margin: 0;
  font-size: 14px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  border-radius: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.2s ease;

  &:hover { 
    border-color: var(--primary);
    color: var(--primary);
    transform: translateY(-1px);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 14px;
`;

const Stat = styled.div`
  background: var(--primarySoft);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 12px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
`;

const StatIconWrap = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: #fff;
  border: 1px solid var(--border);
`;

const StatContent = styled.div`
  display: grid;
  line-height: 1.1;
`;

const StatNumber = styled.span`
  font-weight: 800;
  color: var(--text);
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: var(--subtext);
`;

const StatBadge = styled.div`
  color: #F59E0B;
`;

// =====================
// Tabs
// =====================
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin: 16px 0;
`;

const Tab = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: ${(p) => (p.active ? ui.primary : "#fff")};
  color: ${(p) => (p.active ? "#fff" : ui.subtext)};
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow);

  svg { opacity: ${(p) => (p.active ? 1 : 0.7)}; }

  &:hover { transform: translateY(-1px); }
`;

// =====================
// History List
// =====================
const HistoryCard = styled(Card)`
  padding: 16px;
  animation: ${fadeIn} 0.35s ease-out;
`;

const HistoryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 12px;
  align-items: center;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: #fff;
  transition: all 0.2s ease;
  &:hover { background: #FAFAFF; transform: translateX(2px); }
  & + & { margin-top: 10px; }
`;

const BookIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: linear-gradient(180deg, var(--primary), #7C3AED);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 20px;
`;

const HistoryInfo = styled.div`
  display: grid;
  gap: 6px;
`;

const BookTitle = styled.h3`
  margin: 0;
  color: var(--text);
  font-size: 16px;
`;

const BookMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  color: var(--subtext);
`;

const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const ProgressBarWrap = styled.div`
  width: 140px;
  height: 8px;
  background: #F3F4F6;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid var(--border);
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${(p) => Math.min(Math.max(p.value, 0), 100)}%;
  background: linear-gradient(90deg, var(--primary), #22C55E);
`;

const ChevronIcon = styled(FaChevronRight)`
  color: #D1D5DB;
  font-size: 18px;
`;

// =====================
// Empty State
// =====================
const EmptyState = styled.div`
  text-align: center;
  padding: 48px 12px;
  color: var(--subtext);
`;

const EmptyIcon = styled.div`
  font-size: 56px;
  margin-bottom: 10px;
  opacity: 0.5;
`;

// =====================
// Favorites Grid (clean cards)
// =====================
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(220px, 1fr) );
  gap: 12px;
`;

const FavCard = styled(Card)`
  padding: 14px;
  display: grid;
  gap: 10px;
`;

const FavTitle = styled.div`
  font-weight: 700;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const FavMeta = styled.div`
  font-size: 12px;
  color: var(--subtext);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const FavActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SoftBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: #fff;
  color: var(--text);
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  transition: all 0.2s ease;
  &:hover { border-color: var(--primary); color: var(--primary); }
`;

// =====================
// Component
// =====================
export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("history");
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }, []);

  // Sample user data (SST themed)
  const userData = {
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    avatar: "PS",
    booksRead: 24,
    hoursSpent: 156,
    favoriteTeacher: "Ms. Sarah",
  };

  // Sample history data (SST subjects)
  const historyData = [
    { id: 1, title: "Sense of Collective Identity", teacher: "Mr. Arjun Mehta", time: "2 hours ago", progress: 75, icon: <FaChalkboardTeacher /> },
    { id: 2, title: "Understanding Diversity", teacher: "Ms. Nisha Rao", time: "Yesterday", progress: 45, icon: <FaBook /> },
    { id: 3, title: "Nationalism in India", teacher: "Dr. Kavita Iyer", time: "2 days ago", progress: 90, icon: <FaHistory /> },
    { id: 4, title: "Democracy & Rights", teacher: "Prof. R. Menon", time: "1 week ago", progress: 100, icon: <FaMedal /> },
  ];

  const favorites = [
    { id: "f1", title: "Globalisation & Indian Economy", by: "Siddharth Sir", reads: 12 },
    { id: "f2", title: "Federalism Basics", by: "Anita Ma'am", reads: 9 },
    { id: "f3", title: "Judiciary: Structure", by: "R. Sharma", reads: 14 },
    { id: "f4", title: "Gender, Religion & Caste", by: "S. Verma", reads: 7 },
  ];

  return (
    <Wrapper>
      <Container>
        {/* Profile */}
        <ProfileCard>
          <ProfileHeader>
            <Avatar aria-label="User avatar"><FaUser size={24} /></Avatar>

            <div>
              <ProfileInfo>
                <UserName>{userData.name}</UserName>
                <UserEmail>{userData.email}</UserEmail>
              </ProfileInfo>

              <Stats>
                <Stat>
                  <StatIconWrap aria-hidden="true"><FaBook /></StatIconWrap>
                  <StatContent>
                    <StatNumber>{userData.booksRead}</StatNumber>
                    <StatLabel>Books Read</StatLabel>
                  </StatContent>
                  <StatBadge title="Lifetime reads"><FaMedal /></StatBadge>
                </Stat>

                <Stat>
                  <StatIconWrap aria-hidden="true"><FaClock /></StatIconWrap>
                  <StatContent>
                    <StatNumber>{userData.hoursSpent}</StatNumber>
                    <StatLabel>Study Hours</StatLabel>
                  </StatContent>
                  <StatBadge title="Consistent!"><FaStar /></StatBadge>
                </Stat>

                <Stat>
                  <StatIconWrap aria-hidden="true"><FaChalkboardTeacher /></StatIconWrap>
                  <StatContent>
                    <StatNumber>{userData.favoriteTeacher}</StatNumber>
                    <StatLabel>Favourite Teacher</StatLabel>
                  </StatContent>
                  <StatBadge><FaHeart /></StatBadge>
                </Stat>
              </Stats>
            </div>

            <Actions>
              <IconButton aria-label="Edit profile"><FaEdit /> Edit</IconButton>
              <IconButton aria-label="Settings"><FaCog /> Settings</IconButton>
            </Actions>
          </ProfileHeader>
        </ProfileCard>

        {/* Tabs */}
        <Tabs>
          <Tab active={activeTab === "history"} onClick={() => setActiveTab("history")} aria-pressed={activeTab === "history"}>
            <FaHistory /> Reading History
          </Tab>
          <Tab active={activeTab === "favorites"} onClick={() => setActiveTab("favorites")} aria-pressed={activeTab === "favorites"}>
            <FaStar /> Favorites
          </Tab>
        </Tabs>

        {/* Content */}
        {activeTab === "history" ? (
          <HistoryCard>
            {historyData.length > 0 ? (
              historyData.map((item) => (
                <HistoryItem key={item.id} role="button" tabIndex={0}>
                  <BookIcon aria-hidden="true">{item.icon}</BookIcon>
                  <HistoryInfo>
                    <BookTitle>{item.title}</BookTitle>
                    <BookMeta>
                      <MetaChip><FaChalkboardTeacher /> {item.teacher}</MetaChip>
                      <MetaChip><FaClock /> {item.time}</MetaChip>
                      <MetaChip><FaBook /> {item.progress}% complete</MetaChip>
                    </BookMeta>
                    <ProgressBarWrap aria-label={`Progress ${item.progress}%`}>
                      <ProgressBar value={item.progress} />
                    </ProgressBarWrap>
                  </HistoryInfo>
                  <ChevronIcon />
                </HistoryItem>
              ))
            ) : (
              <EmptyState>
                <EmptyIcon><FaBookOpen /></EmptyIcon>
                <h3>No Reading History Yet</h3>
                <p>Start exploring SST chapters to see them here.</p>
              </EmptyState>
            )}
          </HistoryCard>
        ) : (
          <HistoryCard>
            {favorites.length > 0 ? (
              <Grid>
                {favorites.map((f) => (
                  <FavCard key={f.id}>
                    <FavTitle><FaBook /> {f.title}</FavTitle>
                    <FavMeta><FaChalkboardTeacher /> {f.by} • <FaHistory /> {f.reads} reads</FavMeta>
                    <FavActions>
                      <SoftBtn aria-label="Open"><FaChevronRight /> Open</SoftBtn>
                      <SoftBtn aria-label="Unfavorite"><FaHeart /> Unfavorite</SoftBtn>
                    </FavActions>
                  </FavCard>
                ))}
              </Grid>
            ) : (
              <EmptyState>
                <EmptyIcon><FaStar /></EmptyIcon>
                <h3>No Favorites Yet</h3>
                <p>Tap the <FaStar style={{verticalAlign: 'middle'}} /> on any chapter to save it here.</p>
              </EmptyState>
            )}
          </HistoryCard>
        )}
      </Container>
    </Wrapper>
  );
}
