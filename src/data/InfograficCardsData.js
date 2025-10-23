// InfograficCardsData.js
export const InfograficCardsData = [
  {
    id: 1,
    type: "infografic",
    title: "2025 Internet Usage Snapshot",
    description: "Daily active users, average screen time, and platform mix.",
    imgSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    type: "infografic",
    title: "AI Growth Report 2025",
    description: "Where AI adoption is accelerating the fastest.",
    imgSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    type: "infografic",
    title: "Cybersecurity Basics",
    description: "Top habits that cut risk by 80%.",
    imgSrc:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    type: "question",
    title: "Cybersecurity Basics",
    description:
      "Which of the following habits can significantly reduce your cybersecurity risk by up to 80%?",
    options: [
      "Using strong, unique passwords for each account",
      "Clicking on unknown links in emails",
      "Sharing passwords with colleagues",
      "Ignoring software updates",
    ],
    correctAnswer: "Using strong, unique passwords for each account",
    imgSrc:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop",
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
