import React, { useMemo, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { BsChat, BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { teacherProfileImages } from "../../assets/exportImg";



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




export default function InstaPostCard({avatarSrc = teacherProfileImages.teacherProfilePic, title, description, imgSrc, username, postUrl, onLikeChange, onBookmarkChange, onShare}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  const ariaLabelLike = liked ? "Unlike" : "Like";
  const ariaLabelSave = saved ? "Remove bookmark" : "Bookmark";

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
          <Avatar src={avatarSrc} alt={`avatar`} />
          <UserBlock>
            <Title>{title}</Title>
            <Description>{description}</Description>
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
    </Card>
  );
}
