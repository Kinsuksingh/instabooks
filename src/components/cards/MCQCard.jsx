import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.article`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr;
  width: 100%;
  max-width: 1000px;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(180deg, #f5f5f5 0%, #e0e0e0 100%);
  backdrop-filter: blur(8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.005);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 20px 24px;
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1f2937;
`;

const QuestionText = styled.p`
  font-size: 1rem;
  margin-bottom: 16px;
  color: #374151;
  line-height: 1.5;
`;

const Option = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "selected" && prop !== "correct"
})`
  display: block;
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 12px;
  border: 1px solid #ddd;
  background: ${({ selected, correct }) =>
    selected
      ? correct
        ? "linear-gradient(90deg, #a3e635, #4ade80)" // green gradient
        : "linear-gradient(90deg, #f87171, #ef4444)" // red gradient
      : "#f3f4f6"};
  color: ${({ selected }) => (selected ? "#fff" : "#111827")};
  font-weight: 500;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  box-shadow: ${({ selected }) =>
    selected ? "0 4px 12px rgba(0,0,0,0.15)" : "none"};

  &:hover {
    background: ${({ selected }) =>
      selected ? "" : "linear-gradient(90deg, #e5e7eb, #d1d5db)"};
  }
`;


const MCQCard = ({ mcq }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    if (!selectedOption) setSelectedOption(option);
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
