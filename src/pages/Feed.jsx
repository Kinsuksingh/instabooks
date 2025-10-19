// pages/Feed.jsx
import BookPost from "../components/feed/BookPost.jsx";
import BookHighlight from "../components/feed/BookHighlight.jsx";

const chapter = {
  bookTitle: "Atomic Habits",
  chapterTitle: "The Surprising Power of Atomic Habits",
  chapterNo: 1,
  author: "James Clear",
  cover: "https://picsum.photos/seed/book1/1280/720",
  keyIdea:
    "Tiny, consistent improvements compound into outsized results. Focus on systems, not goals.",
  tags: ["habits", "behavior", "1% better"],
  progress: 35,
  likes: 2941,
};

const data = [
  {
    id: 1,
    user: "read_daily",
    cover: "https://picsum.photos/seed/book1/800/800",
    title: "Atomic Habits — Ch 1",
    chapterNo: 1,
    quote: "Tiny changes, remarkable results.",
    likes: 1234,
    time: "2h",
    pageRange: "pp. 1–18",
  },
  {
    id: 2,
    user: "fiction_addict",
    cover: "https://picsum.photos/seed/book2/800/800",
    title: "Dune — Ch 3",
    chapterNo: 3,
    quote: "Fear is the mind-killer.",
    likes: 856,
    time: "5h",
    pageRange: "pp. 45–62",
  },
  {
    id: 3,
    user: "mystery_reader",
    cover: "https://picsum.photos/seed/book3/800/800",
    title: "Gone Girl — Ch 7",
    chapterNo: 7,
    quote: "Marriage is a contract of lies.",
    likes: 532,
    time: "1d",
    pageRange: "pp. 109–130",
  },
];

export default function Feed() {
  return (
    <>
      {/* Main highlight of particular chapter */}
      <div className="mb-4">
        <BookHighlight
          cover={chapter.cover}
          bookTitle={chapter.bookTitle}
          chapterTitle={chapter.chapterTitle}
          chapterNo={chapter.chapterNo}
          author={chapter.author}
          keyIdea={chapter.keyIdea}
          tags={chapter.tags}
          progress={chapter.progress}
          likes={chapter.likes}
          onLike={() => console.log("like highlight")}
          onBookmark={() => console.log("bookmark highlight")}
          onShare={() => console.log("share highlight")}
        />
      </div>

      {/* Feed */}
      <div className="d-flex flex-column gap-4">
        {data.map((p) => (
          <BookPost
            key={p.id}
            {...p}
            onLike={() => console.log("like", p.id)}
            onComment={() => console.log("comment", p.id)}
            onSend={() => console.log("send", p.id)}
            onSave={() => console.log("save", p.id)}
          />
        ))}
      </div>
    </>
  );
}
