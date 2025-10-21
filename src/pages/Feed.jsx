import styled from "styled-components";
import Stories from "../components/cards/Stories"; // <-- new separated component
import InfographicCard from "../components/cards/InfographicCard";

// ------------------------------
// Mock data with placeholder images
// ------------------------------
const ChapterHighlight = [
  {
    id: 1,
    name: "Nutrition",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1400&fit=crop",
    ],
  },
  {
    id: 2,
    name: "Respiration",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=1400&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Transportation",
    img: "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1530213786676-41ad9f7736f6?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=1400&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Excretion",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1400&fit=crop",
    ],
  },
  {
    id: 5,
    name: "Growth",
    img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&h=1400&fit=crop",
      "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=800&h=1400&fit=crop",
    ],
  },
];

const CardData = [
  {
    id: 1,
    title: "2025 Internet Usage Snapshot",
    description: "Daily active users, average screen time, and platform mix.",
    imgSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AI Growth Report 2025",
    description: "Where AI adoption is accelerating the fastest.",
    imgSrc:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Cybersecurity Basics",
    description: "Top habits that cut risk by 80%.",
    imgSrc:
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=1600&auto=format&fit=crop",
  },
];

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
  return (
    <>
      {/* Story strip + overlay now handled by Stories */}
      <Stories items={ChapterHighlight} duration={3000} />

      {/* Your cards section */}
      <DemoGrid>
        <div className="d-flex gap-3 flex-column align-items-center mt-3">
          {CardData.map((item) => (
            <div key={item.id} style={{ width: "100%" }}>
              <InfographicCard
                title={item.title}
                description={item.description}
                imgSrc={item.imgSrc}
                badge={item.badge}
              />
            </div>
            ))}
        </div>
      </DemoGrid>
    </>
  );
}
