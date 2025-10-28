import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsThreeDots, BsChat } from "react-icons/bs";
import { teacherProfileImages } from "../../assets/exportImg";
import { FiSend } from "react-icons/fi";

/* --- Card Styling --- */
const Card = styled.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`;

// const PlayerWrapper = styled.div`
//   position: relative;
//   padding-top: 56.25%; /* 16:9 Aspect Ratio */
//   background: #000;

//   video {
//     position: absolute;
//     inset: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//   }
// `;


const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 100%; /* Default: square for mobile */
  background: #000;

  @media (min-width: 768px) {
    padding-top: 56.25%; /* Switch to 16:9 on larger screens */
  }

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;






const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
`;

const ActionsLeft = styled.div`
  display: flex;
  gap: 12px;
`;

const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover {
    background: rgba(15, 23, 42, 0.06);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`;

const HeaderLeft = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`;

const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

const Title = styled.span`
  font-weight: 600;
  color: #0f172a;
`;

const Description = styled.span`
  font-size: 12px;
  color: #64748b;
`;

const MenuBtn = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover {
    background: rgba(15, 23, 42, 0.04);
  }
`;

export default function VideoClipCard({
  avatarSrc = teacherProfileImages.teacherProfilePic,
  data,
  likedDefault = false,
  savedDefault = false,
  onLikeChange,
  onBookmarkChange,
  onShare, // optional
}) {
  // Accept either "videoClipSrc" (preferred) or legacy "vedioClipSrc"
  const src = data?.videoClipSrc || data?.vedioClipSrc;
  const { title, description, poster } = data || {};

  const [liked, setLiked] = useState(likedDefault);
  const [saved, setSaved] = useState(savedDefault);

  const ariaLabelLike = liked ? "Unlike post" : "Like post";
  const ariaLabelSave = saved ? "Remove bookmark" : "Bookmark";

  const videoRef = useRef(null);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    onLikeChange && onLikeChange(next);
  };

  const toggleSave = () => {
    const next = !saved;
    setSaved(next);
    onBookmarkChange && onBookmarkChange(next);
  };

  const handleShare = async () => {
    const shareData = {
      title: title || "Check this video",
      text: description || "",
      url:
        (typeof window !== "undefined" && window.location?.href) ||
        (data?.url ?? ""),
    };

    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(shareData);
      } else if (typeof navigator !== "undefined" && navigator.clipboard && shareData.url) {
        await navigator.clipboard.writeText(shareData.url);
        // Prefer non-blocking UX; you can swap for a toast in your app
        alert("Link copied to clipboard");
      }
      onShare && onShare(shareData);
    } catch (e) {
      // ignore if user cancels; log others
      console.log(e)
    }
  };

  // Best-effort auto-play for browsers that gate autoplay
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const tryPlay = async () => {
      try {
        await el.play();
      } catch {
        // If autoplay is blocked, controls remain visible for user to start.
      }
    };
    tryPlay();
  }, [src]);

  if (!src) return null;

  return (
    <Card aria-label="Video post">
      <Header>
        <HeaderLeft>
          <Avatar src={avatarSrc} alt="Author avatar" />
          <UserBlock>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </UserBlock>
        </HeaderLeft>
        <MenuBtn aria-label="Post menu" title="More options">
          <BsThreeDots size={18} />
        </MenuBtn>
      </Header>

      <PlayerWrapper>
        <video
          ref={videoRef}
          src={src}
          controls
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={title || "Video clip"}
        />
      </PlayerWrapper>

      <ActionsBar>
        <ActionsLeft>
          <IconBtn
            onClick={toggleLike}
            aria-label={ariaLabelLike}
            title={ariaLabelLike}
          >
            {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
          </IconBtn>

          <IconBtn aria-label="Comment" title="Comment">
            <BsChat size={20} />
          </IconBtn>

          <IconBtn onClick={handleShare} aria-label="Share" title="Share">
            <FiSend size={20} />
          </IconBtn>
        </ActionsLeft>

        <IconBtn
          onClick={toggleSave}
          aria-label={ariaLabelSave}
          title={ariaLabelSave}
        >
          {saved ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
        </IconBtn>
      </ActionsBar>
    </Card>
  );
}
