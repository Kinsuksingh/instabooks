import React, { useMemo, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { teacherProfileImages } from "../../assets/exportImg";

const IGCarouselTweaks = createGlobalStyle`
  /* Position control dots inside the image like Instagram */
  .carousel .control-dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0 0 0 0;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    background: rgba(255, 255, 255, 0.85);
    opacity: 1;
  }
  .carousel .control-next.control-arrow, .carousel .control-prev.control-arrow {
    display: none; /* hide arrows for IG-like swipe-only feel */
  }
  .carousel .thumbs-wrapper { display: none; }
`;

const Card = styled.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(2, 6, 23, 0.08);
`;

const MediaWrap = styled.div`
  position: relative;
  aspect-ratio: 1 / 1; /* Instagram square */
  background: #f1f5f9;
`;

const SlideImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideCounter = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 6px 10px;
  border-radius: 999px;
  font-size: 12px;
  color: #0f172a;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(6px);
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

export default function InstagramMultiImagePost({
  avatarSrc = teacherProfileImages.teacherProfilePic,
  data,
  likedDefault = false,
  savedDefault = false,
  onLikeChange,
  onBookmarkChange,
  onShare,
}) {
  const {
    title = "Infographic Title",
    description = "",
    carouselImgSrc = [],
  } = data || {};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(likedDefault);
  const [saved, setSaved] = useState(savedDefault);

  const ariaLabelLike = liked ? "Unlike post" : "Like post";
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

  const shareData = useMemo(
    () => ({
      title,
      text: `${title}`,
      url: typeof window !== "undefined" ? window.location.href : "",
    }),
    [title]
  );

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
      // ignore if user cancels
    }
  };

  if (!carouselImgSrc || carouselImgSrc.length === 0) return null;

  return (
    <Card role="article" aria-label={`${title} – Instagram multi-image post`}>
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
      <IGCarouselTweaks />

      <MediaWrap>
        <Carousel
          showThumbs={false}
          showIndicators={true}
          showStatus={false}
          showArrows={false}
          infiniteLoop={false}
          autoPlay={false} /* IG doesn't autoplay photos */
          swipeable={true}
          emulateTouch={true}
          transitionTime={350}
          selectedItem={currentIndex}
          onChange={setCurrentIndex}
          dynamicHeight={false}
        >
          {carouselImgSrc.map((src, idx) => (
            <div key={idx}>
              <SlideImg src={src} alt={`${title} — ${idx + 1}`} />
            </div>
          ))}
        </Carousel>

        <SlideCounter>
          {currentIndex + 1}/{carouselImgSrc.length}
        </SlideCounter>
      </MediaWrap>

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
