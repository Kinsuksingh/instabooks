// components/feed/BookPost.jsx
import { Card, Button } from "react-bootstrap";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
} from "react-icons/fi";

export default function BookPost({
  user,
  cover,
  title,
  chapterNo,
  quote,
  pageRange,       // e.g., "pp. 23–31" (optional)
  likes = 0,
  time = "now",
  onLike,
  onComment,
  onSend,
  onSave,
}) {
  return (
    <Card className="border-0 shadow-sm rounded-4">
      {/* header */}
      <Card.Header className="bg-white d-flex align-items-center gap-2 border-0">
        <div
          className="rounded-circle bg-secondary flex-shrink-0"
          style={{ width: 36, height: 36, opacity: 0.3 }}
          aria-hidden
        />
        <div className="me-auto">
          <div className="fw-semibold">@{user}</div>
          <div className="text-muted small">{time}</div>
        </div>
        <div className="small text-muted">Ch {chapterNo}</div>
      </Card.Header>

      {/* media */}
      <div className="ratio ratio-1x1">
        <img src={cover} alt={title} className="object-fit-cover w-100 h-100" />
      </div>

      {/* actions */}
      <Card.Body className="pb-2">
        <div className="d-flex align-items-center gap-2 mb-2">
          <Button variant="link" className="p-0" onClick={onLike}>
            <FiHeart size={22} />
          </Button>
          <Button variant="link" className="p-0" onClick={onComment}>
            <FiMessageCircle size={22} />
          </Button>
          <Button variant="link" className="p-0 me-auto" onClick={onSend}>
            <FiSend size={22} />
          </Button>
          <Button variant="link" className="p-0" onClick={onSave}>
            <FiBookmark size={22} />
          </Button>
        </div>

        {/* caption */}
        <div className="mb-1">
          <span className="fw-semibold">{title}</span>{" "}
          {pageRange && <span className="text-muted small">({pageRange})</span>}
        </div>
        {quote && (
          <blockquote className="mb-2 fst-italic">“{quote}”</blockquote>
        )}
        <div className="small text-muted">{likes.toLocaleString()} likes</div>
      </Card.Body>
    </Card>
  );
}
