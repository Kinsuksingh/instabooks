import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiBookmark,
  FiChevronUp,
  FiFilter,
  FiHeadphones,
  FiHeart,
  FiImage,
  FiSearch,
  FiShare2,
  FiSliders,
  FiFilm,
  FiStar,
  FiX,
  FiTrendingUp,
} from "react-icons/fi";

/*
  JSX-only version (no styled-components)
  -------------------------------------------------
  - Uses plain classNames + a <style> tag scoped to this component file
  - Functionality mirrors the original: search, tags, sort, favourites, carousel, posts
*/

const css = `
  :root{
    --grad: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --grad-soft: linear-gradient(135deg, rgba(102,126,234,.08) 0%, rgba(118,75,162,.08) 100%);
  }
  .app{min-height:100vh;background:var(--grad);position:relative;overflow-x:hidden;}
  .app:before{content:'';position:absolute;inset:0 0 auto;height:400px;background:
    radial-gradient(circle at 20% 50%, rgba(120,119,198,.3), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(99,102,241,.2), transparent 50%);
    pointer-events:none;
  }
  .wrap{max-width:1200px;margin:0 auto;padding:24px 16px;position:relative;z-index:1}
  .sticky{position:sticky;top:0;margin-bottom:32px;background:rgba(255,255,255,.95);backdrop-filter:blur(20px);border-radius:24px;padding:20px;box-shadow:0 8px 32px rgba(0,0,0,.1);z-index:10;animation:sd .5s ease-out}
  @keyframes sd{from{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}
  .header-top{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px}
  .logo{font-size:24px;font-weight:800;background:var(--grad);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:flex;align-items:center;gap:8px}
  .logo:before{content:'📚';font-size:28px}
  .search{position:relative;flex:1;min-width:200px}
  .search input{width:100%;padding:12px 16px 12px 44px;border:2px solid transparent;border-radius:16px;background:rgba(102,126,234,.08);font-size:14px;transition:.3s}
  .search input:focus{outline:none;border-color:#667eea;background:#fff;box-shadow:0 4px 20px rgba(102,126,234,.2)}
  .search .icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:#667eea}
  .controls{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
  .btn-grad{display:flex;align-items:center;gap:8px;padding:10px 18px;border:none;border-radius:12px;background:var(--grad);color:#fff;font-weight:600;font-size:14px;cursor:pointer;transition:.3s;box-shadow:0 4px 15px rgba(102,126,234,.4)}
  .btn-grad:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(102,126,234,.5)}
  .switch{display:flex;align-items:center;gap:8px;font-weight:600;color:#374151}
  .switch input{appearance:none;width:48px;height:26px;background:#e5e7eb;border-radius:13px;position:relative;cursor:pointer;transition:.3s}
  .switch input:before{content:'';position:absolute;width:20px;height:20px;border-radius:50%;background:#fff;top:3px;left:3px;transition:.3s;box-shadow:0 2px 5px rgba(0,0,0,.2)}
  .switch input:checked{background:var(--grad)}
  .switch input:checked:before{left:25px}
  .tags{display:flex;align-items:center;gap:8px;flex-wrap:wrap;padding-top:16px;border-top:2px solid rgba(102,126,234,.1)}
  .chip{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:20px;font-weight:600;cursor:pointer;transition:.3s;color:#667eea;background:rgba(102,126,234,.1);border:2px solid rgba(102,126,234,.2)}
  .chip.active{color:#fff;background:var(--grad);border-color:transparent}
  .chip:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(102,126,234,.3)}
  .clear{display:flex;align-items:center;gap:6px;padding:8px 16px;border:none;background:transparent;color:#ef4444;font-weight:600;border-radius:12px}
  .clear:hover{background:rgba(239,68,68,.1)}
  .card{background:#fff;border-radius:24px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15);margin-bottom:32px;animation:fi .6s ease-out}
  @keyframes fi{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  .card-head{padding:24px;background:var(--grad-soft)}
  .label{font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#667eea;margin-bottom:8px}
  .title{font-size:28px;font-weight:800;color:#1f2937;margin:0 0 12px}
  .badges{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px}
  .badge{padding:6px 14px;border-radius:12px;background:linear-gradient(135deg, rgba(102,126,234,.15) 0%, rgba(118,75,162,.15) 100%);color:#667eea;font-weight:700;font-size:13px}
  .actions{display:flex;gap:12px;flex-wrap:wrap}
  .btn-ghost{display:flex;align-items:center;gap:8px;padding:10px 18px;border:2px solid #e5e7eb;border-radius:12px;background:#fff;color:#374151;font-weight:600;cursor:pointer;transition:.2s}
  .btn-ghost:hover{border-color:#667eea;color:#667eea;transform:translateY(-2px);box-shadow:0 4px 12px rgba(102,126,234,.2)}
  .media{position:relative;width:100%;padding-bottom:56.25%;background:#000}
  .media > *{position:absolute;inset:0}
  .media img,.media video{width:100%;height:100%;object-fit:cover}
  .media audio{width:100%}
  .audio-wrap{display:flex;align-items:center;justify-content:center;width:100%;height:100%;background:var(--grad);padding:32px}
  .caption{position:absolute;left:0;right:0;bottom:0;padding:24px;color:#fff;background:linear-gradient(to top, rgba(0,0,0,.8), transparent)}
  .caption-title{display:flex;align-items:center;gap:8px;font-weight:700}
  .mediab{display:flex;gap:6px;flex-wrap:wrap}
  .mediab span{padding:4px 12px;border-radius:8px;background:rgba(255,255,255,.2);backdrop-filter:blur(10px);font-weight:600;font-size:12px}
  .dots{display:flex;justify-content:center;gap:8px;padding:20px}
  .dot{width:8px;height:8px;border:none;border-radius:4px;background:#e5e7eb;cursor:pointer;transition:.2s}
  .dot.active{width:32px;background:var(--grad)}
  .section{font-size:14px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#fff;margin:24px 0;text-align:center}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin-bottom:48px}
  .page{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.08);transition:.3s}
  .page:hover{transform:translateY(-8px);box-shadow:0 20px 60px rgba(102,126,234,.2)}
  .page-img{position:relative;width:100%;padding-bottom:56.25%;background:var(--grad-soft);overflow:hidden}
  .page-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:.3s}
  .page-img:hover img{transform:scale(1.05)}
  .page-body{padding:20px;display:flex;align-items:center;justify-content:space-between;gap:16px}
  .page-info{display:flex;align-items:center;gap:12px;flex:1}
  .page-badge{padding:6px 14px;border-radius:10px;background:linear-gradient(135deg, rgba(102,126,234,.15) 0%, rgba(118,75,162,.15) 100%);color:#667eea;font-weight:700;font-size:13px}
  .page-cap{color:#6b7280;font-size:14px;font-weight:500}
  .fav{display:flex;align-items:center;gap:6px;padding:8px 16px;border:none;border-radius:10px;background:#f3f4f6;color:#6b7280;font-weight:600;cursor:pointer;transition:.2s}
  .fav.active{background:linear-gradient(135deg,#fbbf24 0%, #f59e0b 100%);color:#fff}
  .fav:hover{transform:scale(1.05);box-shadow:0 4px 12px rgba(0,0,0,.1)}
  .posts{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-bottom:48px}
  .post{background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,.08);transition:.3s}
  .post:hover{transform:translateY(-8px);box-shadow:0 20px 60px rgba(102,126,234,.2)}
  .post-head{padding:16px;display:flex;align-items:center;gap:12px}
  .av{width:40px;height:40px;border-radius:50%;background:var(--grad);opacity:.6;flex-shrink:0}
  .uname{font-weight:700;color:#1f2937;font-size:14px}
  .ptime{color:#9ca3af;font-size:12px}
  .ctag{padding:4px 10px;border-radius:8px;background:rgba(102,126,234,.1);color:#667eea;font-weight:700;font-size:12px}
  .post-img{position:relative;width:100%;padding-bottom:100%;background:var(--grad-soft)}
  .post-img img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .post-body{padding:16px}
  .pactions{display:flex;align-items:center;gap:16px;margin-bottom:12px}
  .iconbtn{display:flex;align-items:center;background:none;border:none;cursor:pointer;color:#374151;transition:.2s}
  .iconbtn:hover{color:#667eea;transform:scale(1.2)}
  .ptitle{font-weight:700;color:#1f2937;font-size:15px}
  blockquote{margin:8px 0;padding:12px;border-left:3px solid #667eea;background:rgba(102,126,234,.05);border-radius:8px;font-style:italic;color:#4b5563;font-size:14px}
  .likes{color:#6b7280;font-size:13px;font-weight:600}
  .fab{position:fixed;right:24px;bottom:24px;width:56px;height:56px;border-radius:50%;border:none;background:var(--grad);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(102,126,234,.4);cursor:pointer;transition:.2s;z-index:100}
  .fab:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(102,126,234,.5)}
`;

const CAROUSEL_MEDIA = [
  { id: "m1", type: "image", src: "https://picsum.photos/seed/life/1280/720", caption: "Chapter map", badges: ["overview"] },
  { id: "m2", type: "image", src: "https://picsum.photos/seed/stomata/1280/720", caption: "Stomata opening", badges: ["photosynthesis"] },
  { id: "m3", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4", caption: "Gas exchange demo", badges: ["respiration"] },
  { id: "m4", type: "audio", src: "https://www.w3schools.com/html/horse.mp3", caption: "60-sec recap" },
];
const CHAPTER_META = { no: 4, title: "Life Processes (Revision Highlights)", tags: ["Nutrition", "Respiration", "Transportation", "Excretion"] };
const PAGES = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  src: `https://picsum.photos/seed/page${i + 1}/1280/720`,
  caption: ["Intro", "Autotrophic nutrition", "Photosynthesis", "Heterotrophic modes", "Alimentary canal", "Practice", "Respiration types", "Alveoli", "Transport", "Excretion"][i] || `Topic ${i + 1}`,
}));
const POSTS = [
  { id: 101, user: "bio_notes", cover: "https://picsum.photos/seed/post1/800/800", title: "Alveoli surface area", chapterNo: 4, quote: "Large surface area → efficient diffusion.", likes: 423, time: "2h", pageRange: "Respiration" },
  { id: 102, user: "plant_nerd", cover: "https://picsum.photos/seed/post2/800/800", title: "Xylem vs Phloem", chapterNo: 4, quote: "Water ↑ (xylem), food ↕︎ (phloem).", likes: 318, time: "6h", pageRange: "Transportation" },
];

function MediaSlide({ item }) {
  if (item.type === "video") {
    return (
      <div className="media">
        <div>
          <video src={item.src} controls preload="metadata" />
        </div>
        {(item.caption || item.badges?.length) && (
          <div className="caption">
            <div className="caption-title"><FiFilm size={20} /><span>{item.caption}</span></div>
            {item.badges?.length > 0 && (
              <div className="mediab">
                {item.badges.map((b) => (<span key={b}>{b}</span>))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
  if (item.type === "audio") {
    return (
      <div className="media">
        <div className="audio-wrap">
          <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 16, color: 'white' }}>
            <FiHeadphones size={32} />
            <audio src={item.src} controls style={{ width: '100%' }} />
          </div>
        </div>
        {item.caption && (
          <div className="caption">
            <div className="caption-title"><FiHeadphones size={20} /><span>{item.caption}</span></div>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="media">
      <div>
        <img src={item.src} alt={item.alt || item.caption || 'slide'} loading="lazy" />
      </div>
      {(item.caption || item.badges?.length) && (
        <div className="caption">
          <div className="caption-title"><FiImage size={20} /><span>{item.caption}</span></div>
          {item.badges?.length > 0 && (
            <div className="mediab">
              {item.badges.map((b) => (<span key={b}>{b}</span>))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function SimpleCarousel({ items, meta, onLike, onSave, onShare }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <div className="card">
      <div className="card-head">
        <div className="label">Chapter {meta.no}</div>
        <h2 className="title">{meta.title}</h2>
        <div className="badges">{meta.tags.map((t) => (<span className="badge" key={t}>{t}</span>))}</div>
        <div className="actions">
          <button className="btn-ghost" onClick={onLike}><FiHeart size={18}/> Like</button>
          <button className="btn-ghost" onClick={onSave}><FiBookmark size={18}/> Save</button>
          <button className="btn-ghost" onClick={onShare}><FiShare2 size={18}/> Share</button>
        </div>
      </div>
      <MediaSlide item={items[i]} />
      <div className="dots">
        {items.map((_, idx) => (
          <button key={idx} className={`dot ${idx===i? 'active':''}`} onClick={() => setI(idx)} />
        ))}
      </div>
    </div>
  );
}

export default function FeedJSX(){
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("");
  const [sortBy, setSortBy] = useState("recent"); // recent | az | fav
  const [onlyFavs, setOnlyFavs] = useState(false);
  const [favs, setFavs] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [showFAB, setShowFAB] = useState(false);
  const topRef = useRef(null);

  useEffect(()=>{const t=setTimeout(()=>setShowSkeleton(false),800);return()=>clearTimeout(t)},[]);
  useEffect(()=>{const onScroll=()=>setShowFAB(window.scrollY>300);onScroll();window.addEventListener('scroll',onScroll);return()=>window.removeEventListener('scroll',onScroll)},[]);

  const toggleFav = (id) => setFavs((p)=> p.includes(id)? p.filter(x=>x!==id): [...p,id]);
  const cycleSort = ()=> setSortBy((p)=> p==='recent'? 'az' : p==='az'? 'fav' : 'recent');
  const clearAll = ()=>{setQuery("");setActiveTag("");setOnlyFavs(false);setSortBy('recent')};

  const pages = useMemo(()=>{
    let list = [...PAGES];
    if(query){const q=query.toLowerCase().trim();list=list.filter(p=>p.caption.toLowerCase().includes(q))}
    if(activeTag){const t=activeTag.toLowerCase();list=list.filter(p=>p.caption.toLowerCase().includes(t))}
    if(onlyFavs){list=list.filter(p=>favs.includes(p.id))}
    if(sortBy==='recent'){list.sort((a,b)=>b.id-a.id)}
    else if(sortBy==='az'){list.sort((a,b)=>a.caption.localeCompare(b.caption))}
    else if(sortBy==='fav'){list.sort((a,b)=>{const af=favs.includes(a.id)?1:0;const bf=favs.includes(b.id)?1:0;return bf-af||a.caption.localeCompare(b.caption)})}
    return list;
  },[query,activeTag,onlyFavs,sortBy,favs]);

  return (
    <div className="app">
      <style>{css}</style>
      <div ref={topRef} className="wrap">
        <div className="sticky">
          <div className="header-top">
            <h1 className="logo">StudyFeed</h1>

            <div className="search">
              <FiSearch className="icon" size={18} />
              <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search pages…" />
            </div>

            <div className="controls">
              <button className="btn-grad" onClick={cycleSort} title="Change sort">
                <FiSliders/> Sort: {sortBy==='recent'? 'Recent' : sortBy==='az'? 'A–Z' : 'Favourites'}
              </button>
              <label className="switch">
                <input type="checkbox" checked={onlyFavs} onChange={(e)=>setOnlyFavs(e.target.checked)} />
                Favourites only
              </label>
            </div>
          </div>

          <div className="tags">
            {CHAPTER_META.tags.map(t=> (
              <button key={t} className={`chip ${activeTag===t? 'active':''}`} onClick={()=>setActiveTag(activeTag===t? '' : t)}>
                <FiFilter/> {t}
              </button>
            ))}
            <button className="clear" onClick={clearAll}><FiX/> Clear</button>
          </div>
        </div>

        {/* Carousel */}
        {showSkeleton ? (
          <div className="card">
            <div className="media"><div/></div>
            <div className="card-head">
              <div className="badge" style={{ width: 120 }}>&nbsp;</div>
              <div className="badge" style={{ width: 240, height: 20 }}>&nbsp;</div>
            </div>
          </div>
        ) : (
          <SimpleCarousel
            items={CAROUSEL_MEDIA}
            meta={CHAPTER_META}
            onLike={()=>{}}
            onSave={()=>{}}
            onShare={()=>{}}
          />
        )}

        {/* Pages */}
        <div className="section">Pages</div>
        <div className="grid">
          {pages.map((p)=> (
            <div className="page" key={p.id}>
              <div className="page-img"><img src={p.src} alt={p.caption} loading="lazy"/></div>
              <div className="page-body">
                <div className="page-info">
                  <span className="page-badge">Page {p.id}</span>
                  <span className="page-cap">{p.caption}</span>
                </div>
                <button className={`fav ${favs.includes(p.id)? 'active':''}`} onClick={()=>toggleFav(p.id)}>
                  <FiStar/> {favs.includes(p.id)? 'Saved' : 'Save'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Posts */}
        <div className="section">From the community</div>
        <div className="posts">
          {POSTS.map(post=> (
            <div className="post" key={post.id}>
              <div className="post-head">
                <div className="av"/>
                <div style={{ flex: 1 }}>
                  <div className="uname">@{post.user}</div>
                  <div className="ptime">{post.time} · Chapter {post.chapterNo}</div>
                </div>
                <div className="ctag">{post.pageRange}</div>
              </div>
              <div className="post-img"><img src={post.cover} alt={post.title} loading="lazy"/></div>
              <div className="post-body">
                <div className="pactions">
                  <button className="iconbtn" title="Like"><FiHeart/></button>
                  <button className="iconbtn" title="Save"><FiBookmark/></button>
                  <button className="iconbtn" title="Share"><FiShare2/></button>
                </div>
                <div className="ptitle">{post.title}</div>
                {post.quote && <blockquote>“{post.quote}”</blockquote>}
                <div className="likes"><FiTrendingUp style={{ verticalAlign:'middle' }}/> {post.likes.toLocaleString()} likes</div>
              </div>
            </div>
          ))}
        </div>

        {showFAB && (
          <button className="fab" onClick={()=>window.scrollTo({ top:0, behavior:'smooth' })} title="Back to top">
            <FiChevronUp size={22}/>
          </button>
        )}
      </div>
    </div>
  );
}
