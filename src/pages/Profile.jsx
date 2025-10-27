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
  FaTimes,
  FaSave,
} from "react-icons/fa";

// =====================
// Animations
// =====================
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalSlide = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.95); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

// =====================
// Design Tokens - Light Theme
// =====================
const ui = {
  bg: "#F0F9FF",
  bgSecondary: "#FFFFFF",
  card: "#FFFFFF",
  cardHover: "#F8FAFC",
  text: "#0F172A",
  subtext: "#64748B",
  primary: "#0EA5E9",
  primaryDark: "#0284C7",
  accent: "#06B6D4",
  accentGreen: "#10B981",
  accentPink: "#EC4899",
  border: "#E2E8F0",
  borderLight: "#CBD5E1",
  shadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
  overlay: "rgba(15, 23, 42, 0.5)",
};

// =====================
// Layout
// =====================
const Wrapper = styled.div`
  min-height: 100vh;
  padding: 32px 20px;
  background: ${(p) =>
    p.$theme === "dark"
      ? "linear-gradient(135deg, #0f172a 0%, #0b3a2a 50%, #0b3a2a 100%)"
      : "linear-gradient(135deg, #8be3f5 0%, #9fefd0 50%, #b5f8b5 100%)"};
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
    animation: ${float} 20s ease-in-out infinite;
    pointer-events: none;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${slideUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  z-index: 1;
`;

const Card = styled.div`
  background: ${ui.card};
  border: 1px solid ${ui.border};
  border-radius: 24px;
  box-shadow: ${ui.shadow};
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

// =====================
// Modal
// =====================
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${ui.overlay};
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${ui.bgSecondary};
  border-radius: 24px;
  padding: 32px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  animation: ${modalSlide} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 1001;

  @media (max-width: 640px) {
    padding: 24px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: ${ui.text};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: 1px solid ${ui.border};
  background: ${ui.card};
  color: ${ui.subtext};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${ui.primary};
    color: ${ui.primary};
    transform: rotate(90deg);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 600;
  color: ${ui.text};
  margin-bottom: 8px;
  font-size: 14px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${ui.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${ui.text};
  background: ${ui.bgSecondary};
  transition: all 0.2s ease;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${ui.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 14px 16px;
  border: 2px solid ${ui.border};
  border-radius: 12px;
  font-size: 16px;
  color: ${ui.text};
  background: ${ui.bgSecondary};
  transition: all 0.2s ease;
  cursor: pointer;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${ui.primary};
    box-shadow: 0 0 0 4px rgba(14, 165, 233, 0.1);
  }
`;

const ModalActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
`;

const Button = styled.button`
  flex: 1;
  padding: 14px 24px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  ${(props) =>
    props.primary
      ? `
    background: linear-gradient(135deg, ${ui.primary}, ${ui.accent});
    color: white;
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(14, 165, 233, 0.4);
    }
  `
      : `
    background: ${ui.card};
    color: ${ui.text};
    border: 2px solid ${ui.border};

    &:hover {
      border-color: ${ui.borderLight};
    }
  `}
`;

// =====================
// Profile Header
// =====================
const ProfileCard = styled(Card)`
  padding: 40px;
  margin-bottom: 24px;
  background: linear-gradient(135deg, ${ui.bgSecondary} 0%, #F8FAFC 100%);
  border: 1px solid ${ui.borderLight};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${ui.primary}, ${ui.accentGreen});
  }

  @media (max-width: 768px) {
    padding: 28px 20px;
  }
`;

const ProfileHeader = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 28px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 20px;
  }
`;

const AvatarSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${ui.primary}, ${ui.accentGreen});
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 40px;
  font-weight: 900;
  box-shadow: 0 8px 32px rgba(14, 165, 233, 0.3);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(135deg, ${ui.primary}, ${ui.accentGreen});
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    font-size: 32px;
  }
`;

const ProfileInfo = styled.div`
  display: grid;
  gap: 24px;
`;

const UserSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const UserDetails = styled.div`
  display: grid;
  gap: 8px;
`;

const UserName = styled.h1`
  font-size: 32px;
  font-weight: 800;
  color: ${ui.text};
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const UserEmail = styled.p`
  color: ${ui.subtext};
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 2px solid ${ui.border};
  background: ${ui.bgSecondary};
  color: ${ui.text};
  border-radius: 14px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${ui.primary}, ${ui.accent});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: ${ui.primary};
    color: ${ui.primary};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(14, 165, 233, 0.2);

    &::before {
      opacity: 0.1;
    }
  }

  svg, span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    flex: 1;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Stat = styled.div`
  background: linear-gradient(135deg, #FFFFFF, #F8FAFC);
  border: 2px solid ${ui.border};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    border-color: ${ui.borderLight};
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

const StatIconWrap = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, ${ui.primary}, ${ui.accentGreen});
  color: #fff;
  font-size: 24px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);
`;

const StatContent = styled.div`
  display: grid;
  gap: 4px;
  flex: 1;
`;

const StatNumber = styled.span`
  font-weight: 800;
  font-size: 28px;
  color: ${ui.text};
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 13px;
  color: ${ui.subtext};
  font-weight: 500;
`;

const StatBadge = styled.div`
  color: #F59E0B;
  font-size: 20px;
`;

// =====================
// Tabs
// =====================
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin: 24px 0;
`;

const Tab = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 18px;
  border-radius: 16px;
  border: 2px solid ${(p) => (p.active ? ui.primary : ui.border)};
  background: ${(p) => (p.active ? `linear-gradient(135deg, ${ui.primary}, ${ui.accent})` : ui.card)};
  color: ${(p) => (p.active ? "#fff" : ui.subtext)};
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(p) => (p.active ? "0 8px 24px rgba(14, 165, 233, 0.3)" : "none")};

  svg { 
    opacity: ${(p) => (p.active ? 1 : 0.6)}; 
    font-size: 18px;
  }

  &:hover { 
    transform: translateY(-2px);
    border-color: ${ui.primary};
    color: ${(p) => (p.active ? "#fff" : ui.text)};
  }
`;

// =====================
// History List
// =====================
const HistoryCard = styled(Card)`
  padding: 24px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const HistoryItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 16px;
  align-items: center;
  padding: 20px;
  border-radius: 16px;
  border: 2px solid ${ui.border};
  background: ${ui.bgSecondary};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, ${ui.primary}, ${ui.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover { 
    background: ${ui.cardHover};
    border-color: ${ui.primary};
    transform: translateX(8px);
    box-shadow: 0 8px 24px rgba(14, 165, 233, 0.15);

    &::before {
      opacity: 1;
    }
  }

  & + & { 
    margin-top: 12px; 
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const BookIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 14px;
  background: linear-gradient(135deg, ${ui.primary}, ${ui.accentGreen});
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 28px;
  box-shadow: 0 8px 16px rgba(14, 165, 233, 0.25);

  @media (max-width: 640px) {
    width: 56px;
    height: 56px;
    font-size: 24px;
  }
`;

const HistoryInfo = styled.div`
  display: grid;
  gap: 10px;
`;

const BookTitle = styled.h3`
  margin: 0;
  color: ${ui.text};
  font-size: 18px;
  font-weight: 700;
`;

const BookMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
  font-size: 13px;
  color: ${ui.subtext};
`;

const MetaChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
`;

const ProgressBarWrap = styled.div`
  width: 100%;
  max-width: 200px;
  height: 8px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
  border: 1px solid ${ui.border};
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const ProgressBar = styled.div`
  height: 100%;
  width: ${(p) => Math.min(Math.max(p.value, 0), 100)}%;
  background: linear-gradient(90deg, ${ui.primary}, ${ui.accentGreen});
  border-radius: 999px;
  transition: width 0.5s ease;
  box-shadow: 0 0 10px rgba(14, 165, 233, 0.4);
`;

const ChevronIcon = styled(FaChevronRight)`
  color: ${ui.subtext};
  font-size: 20px;
  transition: all 0.3s ease;

  ${HistoryItem}:hover & {
    color: ${ui.primary};
    transform: translateX(4px);
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

// =====================
// Empty State
// =====================
const EmptyState = styled.div`
  text-align: center;
  padding: 64px 20px;
  color: ${ui.subtext};
`;

const EmptyIcon = styled.div`
  font-size: 72px;
  margin-bottom: 16px;
  opacity: 0.3;
  animation: ${float} 3s ease-in-out infinite;
`;

const EmptyTitle = styled.h3`
  color: ${ui.text};
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 8px 0;
`;

const EmptyText = styled.p`
  margin: 0;
  font-size: 15px;
`;

// =====================
// Favorites Grid
// =====================
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`;

const FavCard = styled(Card)`
  padding: 24px;
  display: grid;
  gap: 16px;
  background: ${ui.bgSecondary};
  border: 2px solid ${ui.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${ui.primary}, ${ui.accentGreen});
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${ui.primary};
    box-shadow: 0 20px 40px rgba(14, 165, 233, 0.2);

    &::before {
      opacity: 1;
    }
  }
`;

const FavTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${ui.text};
  display: inline-flex;
  align-items: center;
  gap: 10px;

  svg {
    color: ${ui.primary};
  }
`;

const FavMeta = styled.div`
  font-size: 13px;
  color: ${ui.subtext};
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 500;
`;

const FavActions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const SoftBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px 16px;
  border-radius: 12px;
  border: 2px solid ${ui.border};
  background: ${ui.card};
  color: ${ui.text};
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;

  &:hover { 
    border-color: ${ui.primary}; 
    color: ${ui.primary}; 
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(14, 165, 233, 0.15);
  }
`;

// =====================
// Component
// =====================
export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("history");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  
  const [userData, setUserData] = useState({
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    avatar: "PS",
    booksRead: 24,
    hoursSpent: 156,
    favoriteTeacher: "Ms. Sarah",
  });

  const [editForm, setEditForm] = useState({ ...userData });
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState("all");

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "auto" }); }, []);

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

  const handleEditSave = () => {
    setUserData({ ...editForm });
    setShowEditModal(false);
  };

  const handleEditChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  const handleRowKey = (e, onClick) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <Wrapper $theme={theme}>
      <Container>
        <ProfileCard>
          <ProfileHeader>
            <AvatarSection>
              <Avatar aria-label="User avatar"><FaUser size={32} /></Avatar>
            </AvatarSection>

            <ProfileInfo>
              <UserSection>
                <UserDetails>
                  <UserName>{userData.name}</UserName>
                  <UserEmail>{userData.email}</UserEmail>
                </UserDetails>

                <Actions>
                  <IconButton type="button" aria-label="Edit profile" onClick={() => { setEditForm(userData); setShowEditModal(true); }}>
                    <FaEdit /> <span>Edit</span>
                  </IconButton>
                  <IconButton type="button" aria-label="Settings" onClick={() => setShowSettingsModal(true)}>
                    <FaCog /> <span>Settings</span>
                  </IconButton>
                </Actions>
              </UserSection>

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
            </ProfileInfo>
          </ProfileHeader>
        </ProfileCard>

        <Tabs>
          <Tab active={activeTab === "history"} onClick={() => setActiveTab("history")} aria-pressed={activeTab === "history"}>
            <FaHistory /> Reading History
          </Tab>
          <Tab active={activeTab === "favorites"} onClick={() => setActiveTab("favorites")} aria-pressed={activeTab === "favorites"}>
            <FaStar /> Favorites
          </Tab>
        </Tabs>

        {activeTab === "history" ? (
          <HistoryCard>
            {historyData.length > 0 ? (
              historyData.map((item) => (
                <HistoryItem
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => handleRowKey(e, () => {})}
                  onClick={() => {}}
                  aria-label={`Open ${item.title}`}
                >
                  <BookIcon aria-hidden="true">{item.icon}</BookIcon>
                  <HistoryInfo>
                    <BookTitle>{item.title}</BookTitle>
                    <BookMeta>
                      <MetaChip><FaChalkboardTeacher /> {item.teacher}</MetaChip>
                      <MetaChip><FaClock /> {item.time}</MetaChip>
                      <MetaChip><FaBook /> {item.progress}% complete</MetaChip>
                    </BookMeta>
                    <ProgressBarWrap aria-hidden="true">
                      <ProgressBar value={item.progress} />
                    </ProgressBarWrap>
                  </HistoryInfo>
                  <ChevronIcon />
                </HistoryItem>
              ))
            ) : (
              <EmptyState>
                <EmptyIcon>
                  <FaBookOpen />
                </EmptyIcon>
                <EmptyTitle>No history yet</EmptyTitle>
                <EmptyText>Start reading to see your progress here.</EmptyText>
              </EmptyState>
            )}
          </HistoryCard>
        ) : (
          <HistoryCard>
            {favorites.length > 0 ? (
              <Grid>
                {favorites.map((fav) => (
                  <FavCard key={fav.id}>
                    <FavTitle><FaBookOpen /> {fav.title}</FavTitle>
                    <FavMeta>
                      <span>By {fav.by}</span>
                      <span>•</span>
                      <span>{fav.reads} reads</span>
                    </FavMeta>
                    <FavActions>
                      <SoftBtn type="button"><FaBook /> Open</SoftBtn>
                      <SoftBtn type="button"><FaStar /> Unfavourite</SoftBtn>
                    </FavActions>
                  </FavCard>
                ))}
              </Grid>
            ) : (
              <EmptyState>
                <EmptyIcon>
                  <FaStar />
                </EmptyIcon>
                <EmptyTitle>No favorites yet</EmptyTitle>
                <EmptyText>Tap the star on a lesson to save it here.</EmptyText>
              </EmptyState>
            )}
          </HistoryCard>
        )}
      </Container>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <>
          <ModalOverlay onClick={() => setShowEditModal(false)} />
          <ModalContent role="dialog" aria-modal="true" aria-labelledby="editProfileTitle">
            <ModalHeader>
              <ModalTitle id="editProfileTitle"><FaEdit /> Edit Profile</ModalTitle>
              <CloseButton type="button" onClick={() => setShowEditModal(false)} aria-label="Close edit profile">
                <FaTimes />
              </CloseButton>
            </ModalHeader>

            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={editForm.name}
                onChange={(e) => handleEditChange("name", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={editForm.email}
                onChange={(e) => handleEditChange("email", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="avatar">Avatar Initials</Label>
              <Input
                id="avatar"
                value={editForm.avatar}
                onChange={(e) => handleEditChange("avatar", e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="booksRead">Books Read</Label>
              <Input
                id="booksRead"
                type="number"
                min={0}
                value={editForm.booksRead}
                onChange={(e) => handleEditChange("booksRead", Number(e.target.value))}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="hoursSpent">Study Hours</Label>
              <Input
                id="hoursSpent"
                type="number"
                min={0}
                value={editForm.hoursSpent}
                onChange={(e) => handleEditChange("hoursSpent", Number(e.target.value))}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="favTeacher">Favourite Teacher</Label>
              <Input
                id="favTeacher"
                value={editForm.favoriteTeacher}
                onChange={(e) => handleEditChange("favoriteTeacher", e.target.value)}
              />
            </FormGroup>

            <ModalActions>
              <Button type="button" onClick={() => setShowEditModal(false)}>
                <FaTimes /> Cancel
              </Button>
              <Button type="button" primary onClick={handleEditSave}>
                <FaSave /> Save
              </Button>
            </ModalActions>
          </ModalContent>
        </>
      )}

      {/* Settings Modal */}
      {showSettingsModal && (
        <>
          <ModalOverlay onClick={() => setShowSettingsModal(false)} />
          <ModalContent role="dialog" aria-modal="true" aria-labelledby="settingsTitle">
            <ModalHeader>
              <ModalTitle id="settingsTitle"><FaCog /> Settings</ModalTitle>
              <CloseButton type="button" onClick={() => setShowSettingsModal(false)} aria-label="Close settings">
                <FaTimes />
              </CloseButton>
            </ModalHeader>

            <FormGroup>
              <Label htmlFor="theme">Theme</Label>
              <Select
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label htmlFor="notifications">Notifications</Label>
              <Select
                id="notifications"
                value={notifications}
                onChange={(e) => setNotifications(e.target.value)}
              >
                <option value="all">All activity</option>
                <option value="mentions">Mentions only</option>
                <option value="none">None</option>
              </Select>
            </FormGroup>

            <ModalActions>
              <Button type="button" onClick={() => setShowSettingsModal(false)}>
                <FaTimes /> Close
              </Button>
              <Button type="button" primary onClick={() => setShowSettingsModal(false)}>
                <FaSave /> Apply
              </Button>
            </ModalActions>
          </ModalContent>
        </>
      )}
    </Wrapper>
  );
}
