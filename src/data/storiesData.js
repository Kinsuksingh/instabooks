import { images, testimg } from "../assets/exportImg.js";

export const storiesData = [
  {
    id: 1,
    name: "Sense of Collective Identity",
    img: images.CollectiveIdentity || "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      testimg.test,
      "https://images.unsplash.com/photo-1554189097-ffe88e998a2b?w=800&h=1400&fit=crop", // community unity
      "https://images.unsplash.com/photo-1602524811998-8b90d1d03663?w=800&h=1400&fit=crop", // national flag
      "https://images.unsplash.com/photo-1505066836043-7d9b15a1595d?w=800&h=1400&fit=crop", // cultural identity
    ],
  },
  {
    id: 2,
    name: "Understanding Diversity",
    img: images.Diversity || "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1581091226825-c6a76aa2f4c1?w=800&h=1400&fit=crop", // people group
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1400&fit=crop", // cultural expressions
      "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=800&h=1400&fit=crop", // traditions
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=1400&fit=crop",
    ],
  },
  {
    id: 3,
    name: "Nationalism in India",
    img: images.Nationalism || "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=1400&fit=crop", // independence movement
      "https://images.unsplash.com/photo-1524310393100-34cb9cd27f1e?w=800&h=1400&fit=crop", // freedom struggle
      "https://images.unsplash.com/photo-1533199829561-72f88a8f0c56?w=800&h=1400&fit=crop", // national leaders
      "https://images.unsplash.com/photo-1602451126518-9b36f1b23543?w=800&h=1400&fit=crop",
    ],
  },
  {
    id: 4,
    name: "Globalisation and the Indian Economy",
    img: images.Globalisation || "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=400&fit=crop",
    hasNew: true,
    slides: [
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=1400&fit=crop", // trade
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1400&fit=crop", // markets
      "https://images.unsplash.com/photo-1565372918675-bacb79cdd3a5?w=800&h=1400&fit=crop", // world map
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800&h=1400&fit=crop",
    ],
  },
];

// Function to append new story
export const appendStory = (newStory) => {
  const newId = storiesData.length
    ? Math.max(...storiesData.map((s) => s.id)) + 1
    : 1;

  const storyToAdd = { id: newId, ...newStory };
  storiesData.push(storyToAdd);

  return storyToAdd;
};
