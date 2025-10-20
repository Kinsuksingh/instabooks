import React, { useRef, useState, useEffect, useCallback } from "react";
import styled, { css } from "styled-components";

/**
 * Stories Component (separated)
 * --------------------------------------
 * Drop-in, framework-agnostic React component built with styled-components.
 * Renders: horizontally scrollable story strip + tap-to-advance overlay viewer
 * with auto-progress indicators.
 *
 * Props:
 * - items: Array<{ id, name, img, hasNew, slides: string[] }>
 * - duration?: number (ms per slide, default 3000)
 * - onOpen?: (itemId) => void
 * - onClose?: () => void
 * - className?: string
 *
 * Usage:
 *   import Stories from "./Stories";
 *   <Stories items={ChapterHighlight} duration={3500} />
 */

// ------------------------------
// Hook: Auto-advance with progress
// ------------------------------
function useAutoAdvance({ isOpen, activeIndex, setActiveIndex, total, onClose, duration = 3000, }) {
  const startedAtRef = useRef(Date.now());
  const frameRef = useRef();
  const progressValueRef = useRef(0);

  const tick = useCallback(() => {
    const elapsed = Date.now() - startedAtRef.current;
    const progress = Math.min(1, elapsed / duration);
    progressValueRef.current = progress;

    if (progress >= 1) {
      if (activeIndex < total - 1) {
        setActiveIndex((i) => i + 1);
      } else {
        onClose();
      }
    } else {
      frameRef.current = requestAnimationFrame(tick);
    }
  }, [activeIndex, total, duration, onClose, setActiveIndex]);

  useEffect(() => {
    if (!isOpen) return;
    startedAtRef.current = Date.now();
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isOpen, activeIndex, tick]);

  const resetTimer = useCallback(() => {
    startedAtRef.current = Date.now();
  }, []);

  return { resetTimer, getProgressValue: () => progressValueRef.current };
}

// ------------------------------
// Styled Components
// ------------------------------
const Wrap = styled.div``;

const StoriesBarWrap = styled.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`;

const StoriesScroller = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar { display: none; }
`;

const StoryButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  scroll-snap-align: start;
  border: 0;
  background: transparent;
  cursor: pointer;
`;

const AvatarRing = styled.div`
  padding: 2px;
  border-radius: 999px;
  ${(p) => p.$hasNew ? css`
      background: linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
    ` : css` background: transparent; `}
`;

const AvatarInner = styled.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`;

const AvatarImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`;

const StoryName = styled.span`
  font-size: 12px;
  color: #1f2937; /* gray-800 */
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: black;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 2px;
  right: 16px;
  z-index: 50;
  color: #fff;
  font-size: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: background 120ms ease;
  &:hover { background: rgba(255, 255, 255, 0.1); }
`;

const StoryShell = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

const ProgressRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  padding: 8px;
  display: flex;
  gap: 4px;
`;

const Track = styled.div`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  background: #fff;
  transition: width 100ms linear;
`;

const Header = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 56px; /* leave space for close btn */
  z-index: 40;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 12px;
  padding: 8px 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  color: #fff;
`;

const HeaderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const HeaderText = styled.div`
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
`;

const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

const HeaderSub = styled.div`
  font-size: 12px;
  opacity: 0.85;
`;

const Slides = styled.div`
  position: relative;
  flex: 1;
`;

const SlideImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: ${(p) => (p.$active ? 1 : 0)};
  transition: opacity 200ms ease;
  user-drag: none;
  -webkit-user-drag: none;
`;

const TapZone = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  ${(p) => p.$side === "left" ? css` left: 0; width: 33.3333%; ` : css` right: 0; width: 66.6666%; `}
`;

function StoriesOverlay({ currentItem, isOpen, slideIndex, setSlideIndex, onClose, duration = 3000, }) {
  const totalSlides = currentItem?.slides?.length || 0;
  const { resetTimer, getProgressValue } = useAutoAdvance({ isOpen, activeIndex: slideIndex, setActiveIndex: setSlideIndex, total: totalSlides, onClose, duration });

  // repaint for progress animation
  const [_, setForceUpdate] = useState(0);
  useEffect(() => {
    let frame;
    if (isOpen) {
      const animate = () => {
        setForceUpdate((v) => v + 1);
        frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    }
    return () => cancelAnimationFrame(frame);
  }, [isOpen]);

  const goNext = useCallback(() => {
    if (!currentItem) return;
    if (slideIndex < totalSlides - 1) {
      setSlideIndex((i) => i + 1);
      resetTimer();
    } else {
      onClose();
    }
  }, [currentItem, slideIndex, totalSlides, resetTimer, onClose]);

  const goPrev = useCallback(() => {
    if (!currentItem) return;
    if (slideIndex > 0) {
      setSlideIndex((i) => i - 1);
      resetTimer();
    } else {
      onClose();
    }
  }, [currentItem, slideIndex, resetTimer, onClose]);

  useEffect(() => {
    const onKey = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, goNext, goPrev, onClose]);

  useEffect(() => {
    // lock body scroll when open
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const getProgress = (i) => {
    if (i < slideIndex) return 1;
    if (i > slideIndex) return 0;
    return getProgressValue();
  };

  if (!isOpen || !currentItem) return null;

  return (
    <Overlay>
      <StoryShell>
        <ProgressRow>
          {currentItem.slides.map((_, i) => (
            <Track key={i}>
              <Fill style={{ width: `${getProgress(i) * 100}%` }} />
            </Track>
          ))}
        </ProgressRow>

        <Header>
          <HeaderAvatar src={currentItem.img} alt={currentItem.name} />
          <HeaderText>
            <HeaderTitle>{currentItem.name}</HeaderTitle>
            <HeaderSub>Chapter highlight</HeaderSub>
          </HeaderText>
          <CloseBtn onClick={onClose}>×</CloseBtn>
        </Header>

        <Slides>
          {currentItem.slides.map((src, i) => (
            <SlideImg key={i} src={src} alt={`Slide ${i + 1}`} $active={i === slideIndex} draggable={false} />
          ))}
          <TapZone $side="left" onClick={goPrev} />
          <TapZone $side="right" onClick={goNext} />
        </Slides>
      </StoryShell>
    </Overlay>
  );
}

export default function Stories({ items, duration = 3000, onOpen, onClose, className, }) {
  const scrollerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const startLeftRef = useRef(0);

  const [data, setData] = useState(items || []);
  const [openForId, setOpenForId] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const currentItem = data.find((x) => x.id === openForId) || null;
  const isOpen = Boolean(openForId);

  const openStory = (id) => {
    setSlideIndex(0);
    setOpenForId(id);
    setData((prev) => prev.map((it) => (it.id === id ? { ...it, hasNew: false } : it)));
    onOpen && onOpen(id);
  };

  const closeStory = () => {
    setOpenForId(null);
    onClose && onClose();
  };

  // drag-to-scroll for story strip
  const onPointerDown = (e) => {
    isDownRef.current = true;
    startXRef.current = e.clientX;
    startLeftRef.current = scrollerRef.current?.scrollLeft || 0;
    e.target.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!isDownRef.current || !scrollerRef.current) return;
    const dx = e.clientX - startXRef.current;
    scrollerRef.current.scrollLeft = startLeftRef.current - dx;
  };

  const onPointerUp = () => { isDownRef.current = false; };

  return (
    <Wrap className={className}>
      <StoriesBarWrap>
        <StoriesScroller
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          {data.map((story) => (
            <StoryButton key={story.id} onClick={() => openStory(story.id)}>
              <AvatarRing $hasNew={story.hasNew}>
                <AvatarInner>
                  <AvatarImg src={story.img} alt={story.name} draggable={false} />
                </AvatarInner>
              </AvatarRing>
              <StoryName title={story.name}>{story.name}</StoryName>
            </StoryButton>
          ))}
        </StoriesScroller>
      </StoriesBarWrap>

      <StoriesOverlay
        currentItem={currentItem}
        isOpen={isOpen}
        slideIndex={slideIndex}
        setSlideIndex={setSlideIndex}
        onClose={closeStory}
        duration={duration}
      />
    </Wrap>
  );
}
