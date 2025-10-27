import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { BsChat, BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { teacherProfileImages } from "../../assets/exportImg";

/**
 * Instagram-style Post Card with LinkedIn-like reaction summary and a share button.
 * - Header: avatar, name, menu (…)
 * - Media: square image
 * - Actions: Like / Comment / Share (left) and Bookmark (right)
 * - Reactions bar: LinkedIn-ish compact pill with avatars + like count
 * - Caption + timestamp
 * - Share supports Web Share API when available, falls back to clipboard
 */

const Card = styled.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
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

const Username = styled.span`
  font-weight: 600;
  color: #0f172a;
`;

const Subline = styled.span`
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
  &:hover { background: rgba(15, 23, 42, 0.04); }
`;

const MediaWrap = styled.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram-like square */
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
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
  border: none;
  background: transparent;
  border-radius: 10px;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover { background: rgba(15, 23, 42, 0.05); }
  &:active { transform: scale(0.98); }
`;

const ReactionsPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 12px 6px 12px;
  padding: 8px 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
  border-radius: 999px;
  font-size: 13px;
  color: #0f172a;
`;

const MiniStack = styled.div`
  display: flex;
`;

const MiniAvatar = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  margin-left: -6px;
  &:first-child { margin-left: 0; }
`;

const Content = styled.div`
  padding: 2px 12px 14px 12px;
`;

const Caption = styled.p`
  margin: 6px 0 6px;
  font-size: 14px;
  line-height: 1.5;
  color: #0f172a;
`;

const TimeStamp = styled.time`
  font-size: 12px;
  color: #64748b;
`;

export default function InstaPostCard({
  username = "Siddharth Sir",
  userSubline = "SST Teacher",
  avatarSrc = teacherProfileImages.teacherProfilePic,
  title = "Sense of Collective Identity - Overview",
  description = "Understanding how shared culture, values, and history build national unity and belonging.",
  imgSrc = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  likedDefault = false,
  savedDefault = false,
  likeCountDefault = 12,
  commenterAvatars = [
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=32",
    "https://i.pravatar.cc/100?img=8",
  ],
  postUrl = typeof window !== "undefined" ? window.location.href : "",
  onLikeChange,
  onBookmarkChange,
  onShare,
}) {
  const [liked, setLiked] = useState(likedDefault);
  const [saved, setSaved] = useState(savedDefault);
  const [likeCount, setLikeCount] = useState(likeCountDefault);

  const ariaLabelLike = liked ? "Unlike" : "Like";
  const ariaLabelSave = saved ? "Remove bookmark" : "Bookmark";

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    setLikeCount((c) => (next ? c + 1 : Math.max(0, c - 1)));
    onLikeChange && onLikeChange(next);
  };

  const toggleSave = () => {
    const next = !saved;
    setSaved(next);
    onBookmarkChange && onBookmarkChange(next);
  };

  const shareData = useMemo(() => ({
    title,
    text: `${username} on Infographics — ${title}`,
    url: postUrl,
  }), [title, username, postUrl]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard");
      }
      onShare && onShare(shareData);
    } catch (e) {
      console.error("Share failed:", e);
    }
  };

  return (
    <Card role="article" aria-label={`${title} instagram-style post`}>
      <Header>
        <HeaderLeft>
          <Avatar src={avatarSrc} alt={`${username} avatar`} />
          <UserBlock>
            <Username>{username}</Username>
            <Subline>{userSubline}</Subline>
          </UserBlock>
        </HeaderLeft>
        <MenuBtn aria-label="Post menu" title="More">
          <BsThreeDots size={18} />
        </MenuBtn>
      </Header>

      <MediaWrap>
        <Img src={imgSrc} alt={title} />
      </MediaWrap>

      <ActionsBar>
        <ActionsLeft>
          <IconBtn onClick={toggleLike} aria-label={ariaLabelLike} title={ariaLabelLike}>
            {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
          </IconBtn>
          <IconBtn aria-label="Comment" title="Comment">
            <BsChat size={20} />
          </IconBtn>
          <IconBtn onClick={handleShare} aria-label="Share" title="Share">
            {/* Using paper-plane style for IG-like share */}
            <FiSend size={20} />
          </IconBtn>
        </ActionsLeft>
        <IconBtn onClick={toggleSave} aria-label={ariaLabelSave} title={ariaLabelSave}>
          {saved ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
        </IconBtn>
      </ActionsBar>

      {/* LinkedIn-like compact reactions summary */}
      <ReactionsPill aria-label={`${likeCount} likes`}>
        <MiniStack>
          {commenterAvatars.slice(0, 3).map((src, i) => (
            <MiniAvatar key={i} src={src} alt="reaction avatar" />
          ))}
        </MiniStack>
        <span>{likeCount} likes</span>
      </ReactionsPill>

      <Content>
        <Caption>
          <strong>{username}</strong> {description}
        </Caption>
        <TimeStamp dateTime={new Date().toISOString()}>Just now</TimeStamp>
      </Content>
    </Card>
  );
}
