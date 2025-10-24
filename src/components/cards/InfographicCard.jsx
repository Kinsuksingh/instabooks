import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";


const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 1000px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(180deg, #eef2ff 0%, #cfe0fc 100%);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
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


const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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


const Actions = styled.div`
  display: flex;
  gap: 10px;
`;






export default function InfographicCard({
  title = "Infographic Title",
  description = "A short, crisp line describing what this infographic is about.",
  imgSrc = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
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
      </MediaWrap>

      <Content>
        <div>
          <Title>{title}</Title>
          <Desc>{description}</Desc>
        </div>
        <Actions>
          <IconBtn
            onClick={toggleLike}
            aria-label={liked ? "Unlike" : "Like"}
            title={liked ? "Unlike" : "Like"}
          >
            {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          </IconBtn>
          <IconBtn
            onClick={toggleSave}
            aria-label={saved ? "Remove bookmark" : "Bookmark"}
            title={saved ? "Remove bookmark" : "Bookmark"}
          >
            {saved ? <BsBookmarkFill size={18} /> : <BsBookmark size={18} />}
          </IconBtn>
        </Actions>
      </Content>
    </Card>
  );
}
