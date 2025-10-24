import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

/* --- Card Styling --- */
const Card = styled.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background: #000;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`;

const Left = styled.div`
  flex: 1 1 auto;
`;

const Title = styled.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 140ms ease;

  &:hover {
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(0);
  }
`;

export default function VideoClipCard({
  data,
  likedDefault = false,
  savedDefault = false,
  onLikeChange,
  onBookmarkChange,
}) {
  const { title, description, vedioClipSrc } = data || {};

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

  if (!vedioClipSrc) return null;

  return (
    <Card>
      <PlayerWrapper>
        <ReactPlayer
          className="react-player"
          url={vedioClipSrc}
          width="100%"
          height="100%"
          controls={true}
          playing={true} // Auto-play
          muted={true}   // Muted
          loop={true}    // Loop video
        />
      </PlayerWrapper>

      <Content>
        <Left>
          <Title>{title}</Title>
          {description && <Desc>{description}</Desc>}
        </Left>

        <Actions>
          <IconBtn
            onClick={toggleLike}
            aria-label={liked ? "Unlike video" : "Like video"}
            title={liked ? "Unlike" : "Like"}
          >
            {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
          </IconBtn>

          <IconBtn
            onClick={toggleSave}
            aria-label={saved ? "Remove bookmark" : "Bookmark video"}
            title={saved ? "Remove bookmark" : "Bookmark"}
          >
            {saved ? <BsBookmarkFill size={18} /> : <BsBookmark size={18} />}
          </IconBtn>
        </Actions>
      </Content>
    </Card>
  );
}
