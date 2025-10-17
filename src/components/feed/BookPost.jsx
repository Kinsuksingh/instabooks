import { Card, Image } from "react-bootstrap";
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from "react-icons/fi";
import { useState } from "react";

export default function BookPost({ user, cover, title, quote, likes, time }) {
  const [liked, setLiked] = useState(false);

  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-white d-flex align-items-center gap-2">
        <Image
          src={`https://api.dicebear.com/9.x/initials/svg?seed=${user}`}
          roundedCircle
          width={32}
          height={32}
        />
        <strong>{user}</strong>
      </Card.Header>

      <Image
        src={cover}
        alt={title}
        style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover" }}
      />

      <Card.Body>
        <div className="d-flex align-items-center gap-3 fs-5 mb-2">
          <span role="button" onClick={() => setLiked((v) => !v)}>
            {liked ? "❤️" : <FiHeart />}
          </span>
          <FiMessageCircle />
          <FiSend />
          <div className="ms-auto">
            <FiBookmark />
          </div>
        </div>
        <div className="fw-semibold">
          {(liked ? likes + 1 : likes).toLocaleString()} likes
        </div>
        <div className="mt-1">
          <span className="fw-semibold me-2">{title}</span>
          <span className="text-muted">“{quote}”</span>
        </div>
        <div className="text-uppercase text-muted mt-1" style={{ fontSize: 12 }}>
          {time} ago
        </div>
      </Card.Body>
    </Card>
  );
}
