import React, { useState } from "react";
import styled from "styled-components";
import { InfograficCardsData, appendInfograficCard } from "../data/InfograficCardsData";
import { storiesData, appendStory } from "../data/storiesData";
import { FiPlus, FiImage, FiFileText, FiList } from "react-icons/fi";

// Styled Components
const PageContainer = styled.div`
  padding: 30px;
  font-family: "Inter", sans-serif;
  max-width: 600px;
  margin: auto;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #007bff;
    font-size: 20px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  resize: vertical;
  min-height: 60px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Select = styled.select`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px;
  border-radius: 8px;
  border: none;
  background-color: #007bff;
  color: white;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const DataGatheringPage = () => {
  const [cards, setCards] = useState(InfograficCardsData);
  const [stories, setStories] = useState(storiesData);
  const [formType, setFormType] = useState("card"); // card or story

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

  // --- Handlers ---
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardForm({ ...cardForm, [name]: value });
  };

  const handleStoryChange = (e) => {
    const { name, value } = e.target;
    setStoryForm({ ...storyForm, [name]: value });
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
      <SectionTitle>Data Gathering Form</SectionTitle>
      <Form onSubmit={formType === "card" ? handleCardSubmit : handleStorySubmit}>
        <Select value={formType} onChange={(e) => setFormType(e.target.value)}>
          <option value="card">Add Card</option>
          <option value="story">Add Story</option>
        </Select>

        {formType === "card" && (
          <>
            <InputGroup>
              <FiFileText />
              <Input type="text" name="title" placeholder="Card Title" value={cardForm.title} onChange={handleCardChange} required />
            </InputGroup>

            <InputGroup>
              <FiFileText />
              <Textarea name="description" placeholder="Card Description" value={cardForm.description} onChange={handleCardChange} required />
            </InputGroup>

            <InputGroup>
              <FiImage />
              <Input type="text" name="imgSrc" placeholder="Image URL" value={cardForm.imgSrc} onChange={handleCardChange} required />
            </InputGroup>

            <Select name="type" value={cardForm.type} onChange={handleCardChange}>
              <option value="infografic">Infographic</option>
              <option value="question">Question</option>
            </Select>

            {cardForm.type === "question" && (
              <>
                <InputGroup>
                  <FiList />
                  <Textarea name="options" placeholder="Options (comma separated)" value={cardForm.options} onChange={handleCardChange} required />
                </InputGroup>
                <InputGroup>
                  <FiFileText />
                  <Input type="text" name="correctAnswer" placeholder="Correct Answer" value={cardForm.correctAnswer} onChange={handleCardChange} required />
                </InputGroup>
              </>
            )}

            <Button type="submit"><FiPlus /> Add Card</Button>
          </>
        )}

        {formType === "story" && (
          <>
            <InputGroup>
              <FiFileText />
              <Input type="text" name="name" placeholder="Story Name" value={storyForm.name} onChange={handleStoryChange} required />
            </InputGroup>

            <InputGroup>
              <FiImage />
              <Input type="text" name="img" placeholder="Thumbnail Image URL" value={storyForm.img} onChange={handleStoryChange} required />
            </InputGroup>

            <InputGroup>
              <FiList />
              <Textarea name="slides" placeholder="Slides URLs (comma separated)" value={storyForm.slides} onChange={handleStoryChange} required />
            </InputGroup>

            <Select name="hasNew" value={storyForm.hasNew} onChange={(e) => setStoryForm({ ...storyForm, hasNew: e.target.value === "true" })}>
              <option value="true">New</option>
              <option value="false">Old</option>
            </Select>

            <Button type="submit"><FiPlus /> Add Story</Button>
          </>
        )}
      </Form>
    </PageContainer>
  );
};

export default DataGatheringPage;
