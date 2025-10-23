import React, { useState } from "react";
import styled from "styled-components";
import { InfograficCardsData, appendInfograficCard } from "../data/InfograficCardsData";
import { storiesData, appendStory } from "../data/storiesData";

// Styled Components
const PageContainer = styled.div`
  padding: 20px;
  font-family: "Inter", sans-serif;
`;

const SectionTitle = styled.h2`
  margin-bottom: 15px;
`;

// Form Styles
const Form = styled.form`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DataGatheringPage = () => {
  const [cards, setCards] = useState(InfograficCardsData);
  const [stories, setStories] = useState(storiesData);

  const [cardForm, setCardForm] = useState({
    title: "",
    description: "",
    imgSrc: "",
    type: "infografic",
    options: "",
    correctAnswer: "",
  });

  const [storyForm, setStoryForm] = useState({
    name: "",
    img: "",
    hasNew: true,
    slides: "",
  });

  // --- Handlers for Cards ---
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardForm({ ...cardForm, [name]: value });
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      type: cardForm.type,
      title: cardForm.title,
      description: cardForm.description,
      imgSrc: cardForm.imgSrc,
      ...(cardForm.type === "question" && {
        options: cardForm.options.split(",").map((opt) => opt.trim()),
        correctAnswer: cardForm.correctAnswer,
      }),
    };
    const addedCard = appendInfograficCard(newCard);
    setCards([addedCard, ...cards]);
    setCardForm({
      title: "",
      description: "",
      imgSrc: "",
      type: "infografic",
      options: "",
      correctAnswer: "",
    });
  };

  // --- Handlers for Stories ---
  const handleStoryChange = (e) => {
    const { name, value } = e.target;
    setStoryForm({ ...storyForm, [name]: value });
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();
    const newStory = {
      name: storyForm.name,
      img: storyForm.img,
      hasNew: storyForm.hasNew,
      slides: storyForm.slides.split(",").map((slide) => slide.trim()),
    };
    const addedStory = appendStory(newStory);
    setStories([addedStory, ...stories]);
    setStoryForm({
      name: "",
      img: "",
      hasNew: true,
      slides: "",
    });
  };

  return (
    <PageContainer>
      {/* --- Infographic Form --- */}
      <SectionTitle>Add New Card</SectionTitle>
      <Form onSubmit={handleCardSubmit}>
        <Input type="text" name="title" placeholder="Title" value={cardForm.title} onChange={handleCardChange} required />
        <Textarea name="description" placeholder="Description" value={cardForm.description} onChange={handleCardChange} required />
        <Input type="text" name="imgSrc" placeholder="Image URL" value={cardForm.imgSrc} onChange={handleCardChange} required />
        <Select name="type" value={cardForm.type} onChange={handleCardChange}>
          <option value="infografic">Infographic</option>
          <option value="question">Question</option>
        </Select>
        {cardForm.type === "question" && (
          <>
            <Textarea name="options" placeholder="Options (comma separated)" value={cardForm.options} onChange={handleCardChange} required />
            <Input type="text" name="correctAnswer" placeholder="Correct Answer" value={cardForm.correctAnswer} onChange={handleCardChange} required />
          </>
        )}
        <Button type="submit">Add Card</Button>
      </Form>

      {/* --- Story Form --- */}
      <SectionTitle>Add New Story</SectionTitle>
      <Form onSubmit={handleStorySubmit}>
        <Input type="text" name="name" placeholder="Story Name" value={storyForm.name} onChange={handleStoryChange} required />
        <Input type="text" name="img" placeholder="Thumbnail Image URL" value={storyForm.img} onChange={handleStoryChange} required />
        <Textarea name="slides" placeholder="Slides URLs (comma separated)" value={storyForm.slides} onChange={handleStoryChange} required />
        <Select name="hasNew" value={storyForm.hasNew} onChange={(e) => setStoryForm({ ...storyForm, hasNew: e.target.value === "true" })}>
          <option value="true">New</option>
          <option value="false">Old</option>
        </Select>
        <Button type="submit">Add Story</Button>
      </Form>
    </PageContainer>
  );
};

export default DataGatheringPage;
