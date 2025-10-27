import { sstSlides, videoClips } from "../assets/exportImg.js";

// InfograficCardsData.js
export const InfograficCardsData = [
  {
    id: 1,
    type: "infografic",
    title: "Sense of Collective Identity - Overview",
    description: "An overview of how shared history, culture, and values shape collective identity in society.",
    imgSrc: sstSlides.Slide1,
  },
  {
    id: 2,
    type: "carousel",
    title: "Understanding Collective Identity",
    description: "Exploring the roots and importance of collective identity in social cohesion.",
    carouselImgSrc: [
      sstSlides.Slide2,
      sstSlides.Slide3,
      sstSlides.Slide4,
      sstSlides.Slide5,
      sstSlides.Slide6,
    ],
  },
  {
    id: 3,
    type: "carousel",
    title: "Symbols and Shared Culture",
    description: "How flags, festivals, and traditions represent unity and belonging.",
    carouselImgSrc: [
      sstSlides.Slide7,
      sstSlides.Slide8,
      sstSlides.Slide9,
    ],
  },
  {
    id: 5,
    type: "vedioClip",
    title: "Collective Identity in Action",
    description: "A short video summarizing real-world examples of collective identity shaping societies.",
    vedioClipSrc: videoClips.videoClip1,
  },
];

// Function to append new data
export const appendInfograficCard = (newCard) => {
  // Generate a new unique ID
  const newId = InfograficCardsData.length
    ? Math.max(...InfograficCardsData.map((c) => c.id)) + 1
    : 1;

  const cardToAdd = { id: newId, ...newCard };
  InfograficCardsData.push(cardToAdd);

  return cardToAdd; // return the newly added card if needed
};
