import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";



const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(0); }
`;

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(180deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.12);
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.16);
  }
`;

const MediaWrap = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const Badge = styled.span`
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 600;
  color: #0f172a;
  background: rgba(255,255,255,0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 999px;
  letter-spacing: 0.2px;
  backdrop-filter: blur(6px);
`;

const ActionBar = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  display: flex;
  gap: 8px;
`;

const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0); }
`;

const Content = styled.div`
  display: grid;
  gap: 8px;
  padding: 18px 18px 20px 18px;
  color: #0f172a;
`;

const Title = styled.h3`
  margin: 0;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.25;
  letter-spacing: -0.2px;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: #334155;
`;

const Divider = styled.hr`
  margin: 8px 0 0 0;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(2,8,23,0.08), transparent);
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 18px 18px 18px;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #475569;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background: #94a3b8;
  display: inline-block;
  animation: ${float} 3.2s ease-in-out infinite;
`;

const CTA = styled.a`
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  color: #0f172a;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  padding: 8px 12px;
  border-radius: 10px;
  transition: background 160ms ease, transform 160ms ease, box-shadow 160ms ease;
  &:hover { background: #f8fafc; transform: translateY(-1px); }
`;

export default function InfographicCard({
  title = "Infographic Title",
  description = "A short, crisp line describing what this infographic is about.",
  imgSrc = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  badge = "Infographic",
  likedDefault = false,
  savedDefault = false,
  onLikeChange,
  onBookmarkChange,
}) {
  const [liked, setLiked] = useState(likedDefault);
  const [saved, setSaved] = useState(savedDefault);

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

  return (
    <Card role="article" aria-label={`${title} infographic card`}>
      <MediaWrap>
        <Img src={imgSrc} alt={title} />
        {badge && <Badge>{badge}</Badge>}
        <ActionBar>
          <IconBtn onClick={toggleLike} aria-label={liked ? "Unlike" : "Like"} title={liked ? "Unlike" : "Like"}>
            {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          </IconBtn>
          <IconBtn onClick={toggleSave} aria-label={saved ? "Remove bookmark" : "Bookmark"} title={saved ? "Remove bookmark" : "Bookmark"}>
            {saved ? <BsBookmarkFill size={18} /> : <BsBookmark size={18} />}
          </IconBtn>
        </ActionBar>
      </MediaWrap>

      <Content>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
        <Divider />
      </Content>

      <Footer>
        <Meta>
          <Dot />
          <span>Updated just now</span>
        </Meta>
        <CTA href="#" onClick={(e) => e.preventDefault()}>
          View details
        </CTA>
      </Footer>
    </Card>
  );
}