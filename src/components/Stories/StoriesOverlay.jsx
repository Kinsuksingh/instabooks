// src/components/Stories/StoriesOverlay.jsx
import React, { useState, useEffect, useCallback } from "react";
import useAutoAdvance from "./useAutoAdvance";
import {
  Overlay,
  StoryShell,
  ProgressRow,
  Track,
  Fill,
  Header,
  HeaderAvatar,
  HeaderText,
  HeaderTitle,
  HeaderSub,
  CloseBtn,
  Slides,
  SlideImg,
  TapZone,
} from "./stories.styles";
import { VscEyeClosed } from "react-icons/vsc";

export default function StoriesOverlay({
  currentItem,
  isOpen,
  slideIndex,
  setSlideIndex,
  onClose,
  duration = 3000,
}) {
  const totalSlides = currentItem?.slides?.length || 0;

  const { resetTimer, getProgressValue } = useAutoAdvance({
    isOpen,
    activeIndex: slideIndex,
    setActiveIndex: setSlideIndex,
    total: totalSlides,
    onClose,
    duration,
  });

  // Force repaint so inline width reflects ref-held progress value
  const [, setForceUpdate] = useState(0);
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
  }, [currentItem, slideIndex, totalSlides, resetTimer, onClose, setSlideIndex]);

  const goPrev = useCallback(() => {
    if (!currentItem) return;
    if (slideIndex > 0) {
      setSlideIndex((i) => i - 1);
      resetTimer();
    } else {
      onClose();
    }
  }, [currentItem, slideIndex, resetTimer, onClose, setSlideIndex]);

  // Keyboard shortcuts
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

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const getProgress = (i) => {
    if (i < slideIndex) return 1;
    if (i > slideIndex) return 0;
    return getProgressValue();
  };

  if (!isOpen || !currentItem) return null;

  return (
    <Overlay onClick={onClose} aria-label="Story overlay">
      <StoryShell onClick={(e) => e.stopPropagation()}>
        <ProgressRow>
          {currentItem.slides.map((_, i) => (
            <Track key={i} aria-label={`Progress track ${i + 1}`}>
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
          <CloseBtn aria-label="Close story" onClick={onClose}><VscEyeClosed /></CloseBtn>
        </Header>

        <Slides>
          {currentItem.slides.map((src, i) => (
            <SlideImg
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              $active={i === slideIndex}
              draggable={false}
            />
          ))}

          <TapZone $side="left" onClick={goPrev} aria-label="Previous slide" />
          <TapZone $side="right" onClick={goNext} aria-label="Next slide" />
        </Slides>
      </StoryShell>
    </Overlay>
  );
}
