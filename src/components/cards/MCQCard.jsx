import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 800px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform 200ms ease, box-shadow 200ms ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.16);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 8px;
`;

const QuestionText = styled.p`
  font-size: 1rem;
  margin-bottom: 12px;
`;

const Option = styled.button`
  display: block;
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: 1px solid #ddd;
  background: ${({ selected, correct }) =>
    selected ? (correct ? "#d4edda" : "#f8d7da") : "#f9f9f9"};
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;

  &:hover {
    background: #e9ecef;
  }
`;

const MCQCard = ({ mcq }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Card>
      <Image src={mcq.imgSrc} alt={mcq.title} />
      <Content>
        <Title>{mcq.title}</Title>
        <QuestionText>{mcq.description}</QuestionText>
        {mcq.options.map((option, index) => (
          <Option
            key={index}
            selected={selectedOption === option}
            correct={option === mcq.correctAnswer}
            onClick={() => handleSelect(option)}
          >
            {option}
          </Option>
        ))}
      </Content>
    </Card>
  );
};

export default MCQCard;
