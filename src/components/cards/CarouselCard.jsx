import React, { useState } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

/* Card styling */
const Card = styled.article`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #ffe6e6 0%, #ffcccc 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`;

const CarouselWrap = styled.div`
  position: relative;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`;

const SlideImg = styled.img`
  display: block;
  width: 100%;
  max-height: 520px;
  object-fit: cover;
`;

const Content = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  justify-content: space-between;
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
  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`;

const SlideCounter = styled.div`
  position: absolute;
  right: 12px;
  top: 12px;
  background: rgba(15, 23, 42, 0.06);
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 12px;
  color: #0f172a;
  backdrop-filter: blur(4px);
`;

export default function CarouselCard({
  data,
  likedDefault = false,
  savedDefault = false,
  onLikeChange,
  onBookmarkChange,
}) {
  const { title = "Infographic Title", description = "", carouselImgSrc = [] } = data || {};

  const [likedArr, setLikedArr] = useState(() =>
    carouselImgSrc.map(() => likedDefault)
  );
  const [savedArr, setSavedArr] = useState(() =>
    carouselImgSrc.map(() => savedDefault)
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const toggleLike = (index) => {
    setLikedArr((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      onLikeChange && onLikeChange(index, copy[index]);
      return copy;
    });
  };

  const toggleSave = (index) => {
    setSavedArr((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      onBookmarkChange && onBookmarkChange(index, copy[index]);
      return copy;
    });
  };

  if (!carouselImgSrc || carouselImgSrc.length === 0) return null;

  return (
    <Card>
      <CarouselWrap>
        <Carousel
  showThumbs={false}
  showIndicators={true}
  showStatus={false}
  infiniteLoop={true}      // Carousel loops continuously
  autoPlay={true}          // Auto-play normally
  interval={2500}          // Change slide every 2.5 seconds
  transitionTime={800}     // Smooth transition
  stopOnHover={true}       // ❌ Pause on hover
  swipeable={true}         // ✅ Enable swipe
  emulateTouch={true}      // ✅ Mouse drag works
  showArrows={true}        // Optional: show navigation arrows
  onChange={(index) => setCurrentIndex(index)}
>

          {carouselImgSrc.map((src, idx) => (
            <div key={idx}>
              <SlideImg src={src} alt={`${title} — slide ${idx + 1}`} />
            </div>
          ))}
        </Carousel>

        <SlideCounter>
          {currentIndex + 1}/{carouselImgSrc.length}
        </SlideCounter>
      </CarouselWrap>

      <Content>
        <Left>
          <Title>{title}</Title>
          {description && <Desc>{description}</Desc>}
        </Left>

        <Actions>
          <IconBtn
            onClick={() => toggleLike(currentIndex)}
            aria-label={likedArr[currentIndex] ? "Unlike slide" : "Like slide"}
            title={likedArr[currentIndex] ? "Unlike" : "Like"}
          >
            {likedArr[currentIndex] ? (
              <AiFillLike size={20} />
            ) : (
              <AiOutlineLike size={20} />
            )}
          </IconBtn>

          <IconBtn
            onClick={() => toggleSave(currentIndex)}
            aria-label={
              savedArr[currentIndex]
                ? "Remove bookmark from slide"
                : "Bookmark slide"
            }
            title={savedArr[currentIndex] ? "Remove bookmark" : "Bookmark"}
          >
            {savedArr[currentIndex] ? (
              <BsBookmarkFill size={18} />
            ) : (
              <BsBookmark size={18} />
            )}
          </IconBtn>
        </Actions>
      </Content>
    </Card>
  );
}
