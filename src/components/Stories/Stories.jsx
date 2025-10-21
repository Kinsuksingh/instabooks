// src/components/Stories/Stories.jsx
import React, { useRef, useState } from "react";
import StoriesOverlay from "./StoriesOverlay";
import {
  Wrap,
  StoriesBarWrap,
  StoriesScroller,
  StoryButton,
  AvatarRing,
  AvatarInner,
  AvatarImg,
  StoryName,
} from "./stories.styles";

export default function Stories({
  items,
  duration = 3000,
  onOpen,
  onClose,
  className,
}) {
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
    setData((prev) =>
      prev.map((it) => (it.id === id ? { ...it, hasNew: false } : it))
    );
    onOpen && onOpen(id);
  };

  const closeStory = () => {
    setOpenForId(null);
    onClose && onClose();
  };

  // drag-to-scroll
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

  const onPointerUp = () => {
    isDownRef.current = false;
  };

  return (
    <Wrap className={className}>
      <StoriesBarWrap>
        <StoriesScroller
          ref={scrollerRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          aria-label="Stories scroller"
        >
          {data.map((story) => (
            <StoryButton
              key={story.id}
              onClick={() => openStory(story.id)}
              aria-label={`Open story ${story.name}`}
              title={story.name}
            >
              <AvatarRing $hasNew={story.hasNew}>
                <AvatarInner>
                  <AvatarImg
                    src={story.img}
                    alt={story.name}
                    draggable={false}
                  />
                </AvatarInner>
              </AvatarRing>
              <StoryName>{story.name}</StoryName>
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
