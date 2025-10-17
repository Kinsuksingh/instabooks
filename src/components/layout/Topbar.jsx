import { Navbar, Container, Image } from "react-bootstrap";

export default function Topbar() {
  // Temporary story data — each one represents a concept
  const stories = [
    { id: 1, title: "Nutrition", img: "https://picsum.photos/seed/nutrition/80" },
    { id: 2, title: "Respiration", img: "https://picsum.photos/seed/respiration/80" },
    { id: 3, title: "Transportation", img: "https://picsum.photos/seed/transport/80" },
    { id: 4, title: "Excretion", img: "https://picsum.photos/seed/excretion/80" },
    { id: 5, title: "Nutrition", img: "https://picsum.photos/seed/nutrition/80" },
    { id: 6, title: "Respiration", img: "https://picsum.photos/seed/respiration/80" },
    { id: 7, title: "Transportation", img: "https://picsum.photos/seed/transport/80" },
    { id: 8, title: "Excretion", img: "https://picsum.photos/seed/excretion/80" },
  ];

  // When a story is clicked
  const handleStoryClick = (concept) => {
    console.log(`Concept clicked: ${concept}`);
  };

  return (
    <div className="topbar-wrapper">
      {/* Top navbar (like Instagram header) */}
      <Navbar bg="white" className="shadow-sm sticky-top d-lg-none">
        <Container className="justify-content-center">
          <Navbar.Brand className="fw-bold fs-4">📚 InstaBooks</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Stories scroll area */}
      <div className="stories-container d-flex gap-3 px-3 py-2 overflow-auto bg-white border-bottom">
        {stories.map((s) => (
          <div
            key={s.id}
            className="story text-center"
            onClick={() => handleStoryClick(s.title)}
          >
            <div className="story-circle mx-auto">
              <Image
                src={s.img}
                alt={s.title}
                roundedCircle
                className="story-image"
              />
            </div>
            <small className="story-label d-block mt-1 text-truncate">{s.title}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
