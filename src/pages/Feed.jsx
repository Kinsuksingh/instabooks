import { useEffect } from "react";
import styled from "styled-components";
import InfographicCard from "../components/cards/InfographicCard";
import MCQCard from "../components/cards/MCQCard"; // import your MCQ card
import { storiesData } from "../data/storiesData";
import Stories from "../components/Stories/Stories";
import { InfograficCardsData } from "../data/InfograficCardsData";

const DemoGrid = styled.div`
  min-height: 100vh;
  place-items: center;
  padding: 15px;
  background: radial-gradient(
      40% 60% at 20% 10%,
      rgba(99, 102, 241, 0.18) 0%,
      transparent 60%
    ),
    radial-gradient(
      40% 60% at 80% 0%,
      rgba(56, 189, 248, 0.18) 0%,
      transparent 60%
    ),
    #f8fafc;
`;

export default function Feed() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <>
      {/* Story strip + overlay now handled by Stories */}
      <Stories
        items={storiesData}
        duration={3000}
        onOpen={(id) => console.log("opened:", id)}
        onClose={() => console.log("closed")}
      />

      {/* Your cards section */}
      <DemoGrid>
        <div className="d-flex gap-3 flex-column align-items-center mt-3">
          {InfograficCardsData.map((item) => (
            <div key={item.id} style={{ width: "100%" }}>
              {item.type === "infografic" ? (
                <InfographicCard
                  title={item.title}
                  description={item.description}
                  imgSrc={item.imgSrc}
                  badge={item.badge}
                />
              ) : item.type === "question" ? (
                <MCQCard mcq={item} />
              ) : null}
            </div>
          ))}
        </div>
      </DemoGrid>
    </>
  );
}
