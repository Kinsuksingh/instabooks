import BookPost from "../components/feed/BookPost.jsx";

const data = [
  {
    id: 1,
    user: "read_daily",
    cover: "https://picsum.photos/seed/book1/800/800",
    title: "Atomic Habits",
    quote: "Tiny changes, remarkable results.",
    likes: 1234,
    time: "2h",
  },
  {
    id: 2,
    user: "fiction_addict",
    cover: "https://picsum.photos/seed/book2/800/800",
    title: "Dune",
    quote: "Fear is the mind-killer.",
    likes: 856,
    time: "5h",
  },
  {
    id: 3,
    user: "mystery_reader",
    cover: "https://picsum.photos/seed/book3/800/800",
    title: "Gone Girl",
    quote: "Marriage is a contract of lies.",
    likes: 532,
    time: "1d",
  },
];

export default function Feed() {
  return (
    <div className="d-flex flex-column gap-4">
      {data.map((p) => (
        <BookPost key={p.id} {...p} />
      ))}
    </div>
  );
}
