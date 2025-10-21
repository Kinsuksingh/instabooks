import styled, { css } from "styled-components";

export const Wrap = styled.div``;

export const StoriesBarWrap = styled.div`
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
`;

export const StoriesScroller = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 16px;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const StoryButton = styled.button`
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

export const AvatarRing = styled.div`
  padding: 2px;
  border-radius: 999px;
  ${(p) =>
    p.$hasNew
      ? css`
          background: linear-gradient(
            45deg,
            #f09433 0%,
            #e6683c 25%,
            #dc2743 50%,
            #cc2366 75%,
            #bc1888 100%
          );
        `
      : css`
          background: transparent;
        `}
`;

export const AvatarInner = styled.div`
  background: #fff;
  padding: 3px;
  border-radius: 999px;
`;

export const AvatarImg = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 999px;
  user-drag: none;
  -webkit-user-drag: none;
`;

export const StoryName = styled.span`
  font-size: 12px;
  color: #1f2937;
  max-width: 64px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: black;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 16px;
  z-index: 50;
  color: #fff;
  font-size: 25px;
  border-radius: 999px;
  border: 0;
  background: transparent;
  cursor: pointer;
  transition: background 120ms ease;
  &:hover { background: rgba(255, 255, 255, 0.1); }
`;

export const StoryShell = styled.div`
  position: relative;
  width: 100%;
  height: 85%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const ProgressRow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 40;
  padding: 0px;
  display: flex;
  gap: 5px;
`;

export const Track = styled.div`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  overflow: hidden;
`;

export const Fill = styled.div`
  height: 100%;
  background: #fff;
  transition: width 100ms linear;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.25);
  border-radius: 5px;
  padding: 10px 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  color: #fff;
  width: 100%;
`;

export const HeaderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

export const HeaderText = styled.div`
  color: #fff;
  text-shadow: 0 1px 3px rgba(0,0,0,0.6);
`;

export const HeaderTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
`;

export const HeaderSub = styled.div`
  font-size: 12px;
  opacity: 0.85;
`;

export const Slides = styled.div`
  position: relative;
  flex: 1;
`;

export const SlideImg = styled.img`
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

export const TapZone = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  ${(p) =>
    p.$side === "left"
      ? css`
          left: 0;
          width: 33.3333%;
        `
      : css`
          right: 0;
          width: 66.6666%;
        `}
`;
