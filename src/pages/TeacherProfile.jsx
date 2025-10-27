import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BookOpen, Grid, Bookmark, X, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { teacherData } from "../data/teacherData.js";

const teacher = teacherData;

/* --------------------------- Styled Components --------------------------- */

const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
`;

const ProfileSection = styled.div`
  padding: 1rem 1.5rem;
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { padding: 2rem 3rem; }
`;

const ProfileTop = styled.div`
  display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { flex-direction: row; align-items: flex-start; }
`;

const AvatarSection = styled.div`
  display: flex; align-items: center; gap: 1.5rem;
  @media (min-width: 768px) { flex-direction: column; align-items: center; }
`;

const AvatarWrapper = styled.div` position: relative; `;

const Avatar = styled.img`
  width: 5rem; height: 5rem; border-radius: 50%; object-fit: cover; border: 2px solid #e5e7eb;
  @media (min-width: 768px) { width: 8rem; height: 8rem; }
  @media (min-width: 1024px) { width: 10rem; height: 10rem; }
`;

const LockRibbon = styled.div`
  position: absolute;
  top: -6px; left: -6px;
  background: #111827; color: #fff; font-size: 0.65rem; font-weight: 700;
  padding: 0.25rem 0.4rem; border-radius: 8px;
  display: inline-flex; align-items: center; gap: 4px;
`;

const StatsMobile = styled.div`
  display: flex; flex: 1; justify-content: space-around; text-align: center;
  @media (min-width: 768px) { display: none; }
`;

const StatsDesktop = styled.div`
  display: none; gap: 2rem; margin-bottom: 1.5rem;
  @media (min-width: 768px) { display: flex; }
`;

const Stat = styled.div`
  font-weight: 600; font-size: 1.125rem;
  span { font-weight: 400; margin-left: 0.25rem; color: #6b7280; }
`;

const ProfileContent = styled.div` flex: 1; `;

const Name = styled.div`
  font-weight: 600; font-size: 1rem;
  @media (min-width: 768px) { font-size: 1.125rem; }
`;

const Subject = styled.div`
  font-size: 0.875rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`;

const Bio = styled.div`
  font-size: 0.875rem; margin-top: 0.5rem;
  @media (min-width: 768px) { font-size: 1rem; }
`;

const Experience = styled.div`
  font-size: 0.875rem; margin-top: 0.5rem; color: #6b7280;
  @media (min-width: 768px) { font-size: 1rem; }
`;

const Actions = styled.div` display: flex; gap: 0.5rem; margin-bottom: 1.5rem; `;

const ButtonPrimary = styled.button`
  flex: 1; background: #3b82f6; color: #fff; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
`;

const ButtonSecondary = styled.button`
  flex: 1; border: 1px solid #d1d5db; font-weight: 600;
  padding: 0.375rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem; position: relative;
  @media (min-width: 768px) { flex: initial; padding: 0.5rem 2rem; font-size: 1rem; }
  &[data-joined="true"] {
    background: #10b9810f; border-color: #10b981; color: #065f46;
  }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const ButtonDropdown = styled.button`
  border: 1px solid #d1d5db; padding: 0.25rem 1rem; border-radius: 0.5rem;
`;

const Banner = styled.div`
  display: ${({hidden}) => hidden ? "none" : "flex"};
  align-items: center; justify-content: space-between;
  gap: 0.75rem; padding: 0.75rem 1rem; border: 1px dashed #d1d5db;
  border-radius: 12px; background: #f9fafb; color: #111827; margin-bottom: 1rem;
`;

const BannerText = styled.div`
  font-size: 0.9rem; display: flex; align-items: center; gap: 8px;
  svg { flex-shrink: 0; }
`;

const BannerBtn = styled.button`
  border: 1px solid #111827; background: #111827; color: #fff;
  border-radius: 10px; padding: 0.5rem 0.85rem; font-weight: 700; font-size: 0.875rem;
`;

const BooksWrapper = styled.div` margin-bottom: 1.5rem; `;

const BookList = styled.div`
  display: flex; gap: 1rem; overflow-x: auto; padding-bottom: 0.5rem;
`;

const BookItem = styled.div`
  display: flex; flex-direction: column; align-items: center; min-width: fit-content; cursor: pointer; position: relative;
`;

const LockedOverlay = styled.div`
  position: absolute; inset: 0; border-radius: 9999px; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.55); color: #fff; font-weight: 700; font-size: 0.75rem;
  backdrop-filter: blur(2px);
`;

const BookCircleOuter = styled.div`
  width: 4rem; height: 4rem; border-radius: 50%; padding: 0.125rem;
  background: linear-gradient(to top right, #a78bfa, #f472b6, #fb923c);
  @media (min-width: 768px) { width: 5rem; height: 5rem; }
  @media (min-width: 1024px) { width: 6rem; height: 6rem; }
  filter: ${({$locked}) => $locked ? "grayscale(0.8)" : "none"};
  opacity: ${({$locked}) => $locked ? 0.6 : 1};
`;

const BookCircleInner = styled.div`
  width: 100%; height: 100%; border-radius: 50%; padding: 0.25rem; background: #fff;
  display: flex; align-items: center; justify-content: center;
`;

const BookTitle = styled.div`
  font-size: 0.75rem; color: #374151; text-align: center; margin-top: 0.25rem;
  max-width: 4.375rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  @media (min-width: 768px) { font-size: 0.875rem; max-width: 5.625rem; }
  opacity: ${({$locked}) => $locked ? 0.6 : 1};
`;

const Tabs = styled.div` display: flex; border-top: 1px solid #e5e7eb; `;

const TabButton = styled.button`
  flex: 1; padding: 0.75rem 0; display: flex; justify-content: center; align-items: center; gap: 0.5rem;
  border-top: 2px solid ${({ active }) => (active ? "#111827" : "transparent")};
  color: ${({ active }) => (active ? "#111827" : "#9ca3af")};
`;

const PostsGrid = styled.div`
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.25rem;
  @media (min-width: 768px) { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.5rem; }
  @media (min-width: 1024px) { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  @media (min-width: 1280px) { grid-template-columns: repeat(6, minmax(0, 1fr)); }
`;

const PostItem = styled.div`
  aspect-ratio: 1 / 1; background: #f3f4f6; display: flex; justify-content: center; align-items: center; position: relative;
  filter: ${({$locked}) => $locked ? "blur(2px)" : "none"};
  overflow: hidden;
`;

const PostLock = styled.div`
  position: absolute; inset: 0; display: flex; align-items: center; justify-content: center;
  background: rgba(17,24,39,0.45); color: #fff; font-weight: 800; font-size: 0.8rem;
`;

const UnlockCTA = styled.button`
  margin: 0.75rem auto 1.25rem; display: ${({hidden}) => hidden ? "none" : "block"};
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
`;

/* ------------------------------ Modal Styles ----------------------------- */

const ModalOverlay = styled.div`
  position: fixed; inset: 0; background: rgba(17, 24, 39, 0.6);
  display: flex; align-items: center; justify-content: center; z-index: 50;
`;

const ModalContent = styled.div`
  width: min(96vw, 720px); background: #ffffff; border-radius: 16px;
  box-shadow: 0 20px 48px rgba(0,0,0,0.18); overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 1.25rem; border-bottom: 1px solid #f3f4f6;
`;

const ModalTitle = styled.h3`
  margin: 0; font-size: 1rem; font-weight: 700; color: #111827;
`;

const CloseBtn = styled.button`
  border: 1px solid #e5e7eb; background: #fff; border-radius: 8px; padding: 0.25rem;
`;

const ModalBody = styled.div`
  padding: 1rem; display: grid; gap: 1rem;
  @media (min-width: 768px) { grid-template-columns: repeat(3, 1fr); }
`;

const Plan = styled.button`
  border: 1px solid ${({$active}) => $active ? "#2563eb" : "#e5e7eb"};
  border-radius: 14px; padding: 1rem; text-align: left; background: ${({$active}) => $active ? "#eff6ff" : "#fff"};
  display: grid; gap: 0.25rem; cursor: pointer;
  &:hover { border-color: #2563eb; }
  h4 { margin: 0; font-size: 1rem; font-weight: 700; color: #111827; }
  p { margin: 0; color: #6b7280; font-size: 0.875rem; }
  strong { font-size: 1.25rem; }
`;

const ModalFooter = styled.div`
  border-top: 1px solid #f3f4f6; padding: 0.75rem 1.25rem; display: flex; gap: 0.5rem; justify-content: flex-end;
`;

const PayBtn = styled.button`
  background: #111827; color: #fff; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 700;
  &:disabled { opacity: 0.6; cursor: not-allowed; }
`;

const GhostBtn = styled.button`
  border: 1px solid #d1d5db; border-radius: 10px; padding: 0.6rem 1rem; font-weight: 600; background: #fff;
`;

/* -------------------------------- Component ------------------------------ */

export default function TeacherProfile() {
  const navigate = useNavigate();

  // UI state for pricing + join
  const [showPricing, setShowPricing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("basic");
  const [isPaying, setIsPaying] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  // teaser limits before join
  const BOOKS_VISIBLE = 3;
  const POSTS_VISIBLE = 3;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  // hydrate from localStorage so Joined state persists
  useEffect(() => {
    const joinedKey = `joined:${teacher?.id || teacher?.name || "teacher"}`;
    const val = localStorage.getItem(joinedKey);
    if (val === "true") setIsJoined(true);
  }, []);

  useEffect(() => {
    const joinedKey = `joined:${teacher?.id || teacher?.name || "teacher"}`;
    localStorage.setItem(joinedKey, isJoined ? "true" : "false");
  }, [isJoined]);

  const handleBookClick = (index) => {
    // only first item is navigable before join
    if (!isJoined && index >= BOOKS_VISIBLE) {
      setShowPricing(true);
      return;
    }
    if (index === 0) {
      navigate("/instalearn/library");
    }
  };

  const handleJoinClick = () => {
    if (isJoined) return; // already joined
    setShowPricing(true);
  };

  const handleDemoPay = async () => {
    setIsPaying(true);
    // simulate payment delay
    await new Promise((r) => setTimeout(r, 1500));
    setIsPaying(false);
    setIsJoined(true);
    setShowPricing(false);
  };

  const plans = [
    { key: "basic", name: "Basic", price: "₹0", desc: "Demo access: 3 lessons" },
    { key: "pro", name: "Pro", price: "₹99", desc: "Monthly: full library" },
    { key: "team", name: "Team", price: "₹1,99", desc: "Up to 10 students" },
  ];

  const lockedBannerHidden = isJoined;

  return (
    <Container>
      <ProfileSection>
        <ProfileTop>
          <AvatarSection>
            <AvatarWrapper>
              <Avatar src={teacher.avatar} alt={teacher.name} />
              {!isJoined && (
                <LockRibbon aria-hidden="true" title="Pro library locked">
                  <Lock size={12}/> LOCKED
                </LockRibbon>
              )}
            </AvatarWrapper>
            <StatsMobile>
              <Stat>{teacher.concepts} <span>concepts</span></Stat>
              <Stat>{teacher.students} <span>students</span></Stat>
              <Stat>{teacher.learns} <span>learns</span></Stat>
            </StatsMobile>
          </AvatarSection>

          <ProfileContent>
            <StatsDesktop>
              <Stat>{teacher.concepts} <span>concepts</span></Stat>
              <Stat>{teacher.students} <span>students</span></Stat>
              <Stat>{teacher.learns} <span>learns</span></Stat>
            </StatsDesktop>

            <Name>{teacher.name}</Name>
            <Subject>{teacher.subject}</Subject>
            <Bio>{teacher.bio}</Bio>
            <Experience>🎓 {teacher.experience} years experience</Experience>

            <Actions>
              <ButtonPrimary>Follow</ButtonPrimary>

              <ButtonSecondary
                onClick={handleJoinClick}
                disabled={isPaying}
                data-joined={isJoined}
                aria-pressed={isJoined}
                aria-label={isJoined ? "Joined" : "Join"}
                title={isJoined ? "You're in!" : "Join this teacher"}
              >
                {isJoined ? (
                  <span style={{display:"inline-flex", alignItems:"center", gap:8}}>
                    <Check size={18}/> Joined
                  </span>
                ) : isPaying ? "Processing…" : "Join"}
              </ButtonSecondary>

              <ButtonDropdown aria-label="More options">▼</ButtonDropdown>
            </Actions>

            <Banner hidden={lockedBannerHidden} role="note" aria-live="polite">
              <BannerText>
                <Lock size={18}/> Pro library locked — get full access to all concepts & posts.
              </BannerText>
              <BannerBtn onClick={() => setShowPricing(true)} aria-label="Unlock full library">
                Unlock
              </BannerBtn>
            </Banner>
          </ProfileContent>
        </ProfileTop>

        <BooksWrapper>
          <BookList>
            {teacher.bookList.map((book, index) => {
              const locked = !isJoined && index >= BOOKS_VISIBLE;
              return (
                <BookItem
                  key={index}
                  onClick={() => handleBookClick(index)}
                  aria-disabled={locked}
                  title={locked ? "Join to unlock" : `Open ${book.title}`}
                >
                  <BookCircleOuter $locked={locked}>
                    <BookCircleInner>
                      <BookOpen size={24} />
                    </BookCircleInner>
                  </BookCircleOuter>
                  <BookTitle $locked={locked}>{book.title}</BookTitle>
                  {!isJoined && locked && (
                    <LockedOverlay>
                      <Lock size={14} style={{marginRight:6}}/> Locked
                    </LockedOverlay>
                  )}
                </BookItem>
              );
            })}
          </BookList>
        </BooksWrapper>
      </ProfileSection>

      <Tabs>
        <TabButton active><Grid size={20} /></TabButton>
        <TabButton><Bookmark size={20} /></TabButton>
      </Tabs>

      <PostsGrid aria-label="Teacher posts">
        {Array(9).fill(null).map((_, i) => {
          const locked = !isJoined && i >= POSTS_VISIBLE;
          return (
            <PostItem key={i} $locked={locked} aria-hidden={false}>
              <BookOpen size={24} />
              {locked && (
                <PostLock>
                  <Lock size={16} style={{marginRight:6}}/> Join to view
                </PostLock>
              )}
            </PostItem>
          );
        })}
      </PostsGrid>

      {/* CTA under posts when not joined */}
      <UnlockCTA
        hidden={isJoined}
        onClick={() => setShowPricing(true)}
        aria-label="Unlock all posts"
      >
        Unlock entire library
      </UnlockCTA>

      {/* ----------------------------- Pricing Modal ----------------------------- */}
      {showPricing && (
        <ModalOverlay role="dialog" aria-modal="true" aria-labelledby="pricing-title">
          <ModalContent>
            <ModalHeader>
              <ModalTitle id="pricing-title">Choose your plan</ModalTitle>
              <CloseBtn onClick={() => setShowPricing(false)} aria-label="Close pricing">
                <X size={18} />
              </CloseBtn>
            </ModalHeader>

            <ModalBody>
              {plans.map((p) => (
                <Plan
                  key={p.key}
                  onClick={() => setSelectedPlan(p.key)}
                  $active={selectedPlan === p.key}
                  aria-pressed={selectedPlan === p.key}
                >
                  <h4>{p.name}</h4>
                  <strong>{p.price}</strong>
                  <p>{p.desc}</p>
                </Plan>
              ))}
            </ModalBody>

            <ModalFooter>
              <GhostBtn onClick={() => setShowPricing(false)}>Not now</GhostBtn>
              <PayBtn onClick={handleDemoPay} disabled={isPaying}>
                {isPaying ? "Processing payment…" : "Demo Pay & Join"}
              </PayBtn>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
