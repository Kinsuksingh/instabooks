// components/feed/BookHighlight.jsx
import { Card, Badge, Button, ProgressBar, Stack } from "react-bootstrap";
import {
  FiHeart,
  FiBookmark,
  FiShare2,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function BookHighlight({
  cover,
  bookTitle,
  chapterTitle,
  chapterNo,
  author,
  tags = [],
  keyIdea,          // short 1–2 line takeaway for this chapter
  progress = 0,     // % through the book or chapter
  likes = 0,
  onLike,
  onBookmark,
  onShare,
}) {
  return (
    <Card className="border-0 overflow-hidden shadow-sm rounded-4">
      {/* 16:9 hero with overlay */}
      <div className="position-relative">
        <div className="ratio ratio-16x9">
          <img src={cover} alt={bookTitle} className="object-fit-cover w-100 h-100" />
        </div>

        {/* gradient overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.65) 100%)",
            color: "white",
          }}
        >
          <div className="d-flex justify-content-end p-2">
            <Button variant="link" className="text-white p-2">
              <FiMoreHorizontal size={22} />
            </Button>
          </div>

          <div className="p-3 p-md-4">
            <div className="mb-2 small text-white-50">{author}</div>
            <h2 className="h4 mb-1">{bookTitle}</h2>
            <div className="mb-2">
              <Badge bg="light" text="dark" className="me-2 rounded-pill">
                Ch {chapterNo}
              </Badge>
              <span className="fw-semibold">{chapterTitle}</span>
            </div>

            {keyIdea && (
              <p className="mb-3 text-white-75">{keyIdea}</p>
            )}

            <Stack direction="horizontal" gap={2} className="mb-2 flex-wrap">
              {tags.map((t) => (
                <Badge key={t} bg="dark" className="rounded-pill">{t}</Badge>
              ))}
            </Stack>

            <div className="mb-2">
              <ProgressBar now={progress} label={`${progress}%`} />
            </div>

            <div className="d-flex align-items-center gap-2">
              <Button variant="light" className="rounded-pill" onClick={onLike}>
                <FiHeart className="me-2" /> {likes}
              </Button>
              <Button variant="outline-light" className="rounded-pill" onClick={onBookmark}>
                <FiBookmark className="me-2" /> Save
              </Button>
              <Button variant="outline-light" className="rounded-pill" onClick={onShare}>
                <FiShare2 className="me-2" /> Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
