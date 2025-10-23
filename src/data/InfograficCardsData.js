import { nutritionSlides } from "../assets/exportImg.js";

// InfograficCardsData.js
export const InfograficCardsData = [
  {
    id: 1,
    type: "infografic",
    title: "Introduction to Nutrition",
    description: "Basics of nutrition and its importance",
    imgSrc: nutritionSlides.Slide1,
  },
  {
    id: 2,
    type: "infografic",
    title: "Autotrophic Nutrition process",
    description: "Steps involved in autotrophic nutrition",
    imgSrc: nutritionSlides.Slide2,
  },
  {
    id: 3,
    type: "infografic",
    title: "Photosynthesis Overview",
    description: "Photosynthesis and its steps",
    imgSrc: nutritionSlides.Slide3,
  },
  {
    id: 4,
    type: "infografic",
    title: "Heterotrophic Nutrition",
    description: "Heterotrophic mode of nutrition",
    imgSrc: nutritionSlides.Slide4,
  },
  {
    id: 5,
    type: "infografic",
    title: "Human Digestive System",
    description: "Human digestive system overview",
    imgSrc: nutritionSlides.Slide5,
  },
  {
    id: 6,
    type: "infografic",
    title: "Digestive Organs Functions",
    description: "Functions of digestive organs",
    imgSrc: nutritionSlides.Slide6,
  },
  {
    id: 7,
    type: "infografic",
    title: "Enzymes in Digestion",
    description: "Role of enzymes in digestion",
    imgSrc: nutritionSlides.Slide7,
  },
  {
    id: 8,
    type: "infografic",
    title: "Absorption and Assimilation",
    description: "Absorption and assimilation",
    imgSrc: nutritionSlides.Slide8,
  },
  {
    id: 9,
    type: "infografic",
    title: "Egestion process",
    description: "Egestion process",
    imgSrc: nutritionSlides.Slide9,
  },
  {
    id: 10,
    type: "infografic",
    title: "Nutrition - Summary",
    description: "Summary of the Nutrition chapter",
    imgSrc: nutritionSlides.Slide10,
  },
  {
    id: 11,
  type: "question",
  title: "Nutrition Basics",
  description:
    "Which of the following is an example of heterotrophic nutrition?",
  options: [
    "Photosynthesis in plants",
    "Eating a fruit salad",
    "Making food from sunlight",
    "Autotrophic bacteria producing their own food",
  ],
  correctAnswer: "Eating a fruit salad",
  imgSrc: nutritionSlides.Slide1,
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
