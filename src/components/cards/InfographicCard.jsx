import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsChat, BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import { teacherProfileImages } from "../../assets/exportImg";
import { IoBulbOutline } from "react-icons/io5";

/** ---------- Card & basic styles ---------- */
const Card = styled.article`
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
  background: #fff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
`;

const HeaderLeft = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 10px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: #eef2ff;
`;

const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.15;
`;

const Title = styled.span`
  font-weight: 600;
  color: #0f172a;
`;

const Description = styled.span`
  font-size: 12px;
  color: #64748b;
`;

const MenuBtn = styled.button`
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: transparent;
  border: none;
  color: #0f172a;
  cursor: pointer;
  &:hover { background: rgba(15, 23, 42, 0.04); }
`;

const MediaWrap = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  background: linear-gradient(135deg, #eef2ff, #e0f7fa);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ActionsBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px 6px 12px;
`;

const ActionsLeft = styled.div`
  display: flex;
  gap: 12px;
`;

const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 10px;
  color: #0f172a;
  cursor: pointer;
  transition: transform 120ms ease, background 120ms ease;
  &:hover { background: rgba(15, 23, 42, 0.05); }
  &:active { transform: scale(0.98); }
`;

/** ---------- Learn Mode ---------- */
const LearnWrap = styled.div`
  padding: 14px;
  display: grid;
  gap: 16px;
  background: #f8fafc;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
`;

const Section = styled.section`
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  padding: 14px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.02);
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 8px 0;
`;

const Bullets = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: grid;
  gap: 6px;
  li {
    font-size: 13px;
    color: #0f172a;
    line-height: 1.25;
  }
`;

const Skeleton = styled.div`
  height: ${(p) => p.h || 12}px;
  background: linear-gradient(90deg,#f2f5f9 0%,#eef2f7 50%,#f2f5f9 100%);
  border-radius: 8px;
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% { opacity: .8 }
    50% { opacity: .4 }
    100% { opacity: .8 }
  }
`;

const ErrorBox = styled.div`
  font-size: 13px;
  color: #b91c1c;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const RetryBtn = styled.button`
  background: #0f172a;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
`;

/** ---------- MCQ + Carousel ---------- */
const MCQCard = styled.div`
  gap: 10px;
`;

const Q = styled.p`
  margin-bottom: 10px;
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
`;

const Options = styled.div`
  display: grid;
  gap: 8px;
`;

// Avoid passing custom prop to DOM
const OptionBtn = styled.button.withConfig({ shouldForwardProp: (p) => p !== "$state" })`
  text-align: left;
  font-size: 13px;
  background: ${({ $state }) =>
    $state === "correct" ? "rgba(34,197,94,.12)" :
    $state === "wrong"   ? "rgba(239,68,68,.12)" : "white"};
  color: #0f172a;
  border: 1px solid rgba(15,23,42,0.12);
  border-color: ${({ $state }) =>
    $state === "correct" ? "rgba(34,197,94,.5)" :
    $state === "wrong"   ? "rgba(239,68,68,.5)" : "rgba(15,23,42,0.12)"};
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  &:hover { background: ${({ $state }) => ($state === "idle" ? "rgba(15,23,42,.04)" : undefined)}; }
`;

const Small = styled.small`
  color: #64748b;
  font-size: 12px;
`;

const FooterRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

/* Carousel */
const CarouselWrap = styled.div`
  position: relative;
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 12px;
  background: #fff;
`;
const CarouselViewport = styled.div`
  overflow: hidden;
  height: auto;
`;
const CarouselTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 240ms ease;
`;
const CarouselSlide = styled.div`
  flex: 0 0 100%;
  padding: 20px;
  height: auto;
  overflow: visible;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 8px 0 10px;
`;
const Dot = styled.button.withConfig({ shouldForwardProp: (p) => p !== "$active" })`
  width: 7px;
  height: 7px;
  border-radius: 999px;
  border: none;
  background: ${({ $active }) => ($active ? "#0f172a" : "rgba(15,23,42,.25)")};
  cursor: pointer;
`;

/** ---------- Helper: image → base64 (CORS) ---------- */
async function imageUrlToBase64(url) {
  const res = await fetch(url, { mode: "cors" });
  const blob = await res.blob();
  const mime = blob.type || "image/jpeg";
  const buff = await blob.arrayBuffer();
  const bytes = new Uint8Array(buff);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
  const base64 = btoa(binary);
  return { base64, mime };
}

/** ---------- Gemini prompt ---------- */
function buildPrompt({ title, description, username }) {
  return `
You are generating STRICTLY SCOPED learning helpers from a single infographic.

Rules (follow EXACTLY):
- Output JSON with shape:
  {
    "bullets": ["...", "...", "...", "...", "..."],
    "mcqs": [
      { "question": "...", "options": ["...","...","...","..."], "correctIndex": 0, "explanation": "..." },
      ...
    ]
  }
- Exactly 5 bullets. Each bullet ≤ 18 words. No fluff. Stay within the infographic.
- Exactly 5 MCQs. Each question ≤ 18 words. Options concise & mutually exclusive (3–5 options).
- Explanations ≤ 18 words.
- If information is not present in the infographic, write "Not present" and avoid inventing facts.

Infographic context:
- Title: "${title}"
- Caption: "${description}"
- Author: "${username}"
`.trim();
}

/** ---------- Gemini browser call (2.x models, v1beta) ---------- */
async function generateWithGeminiInBrowser(params) {
  const { title, description, username, imageUrl } = params;
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  if (!API_KEY) throw new Error("Missing VITE_GEMINI_API_KEY");

  const { base64, mime } = await imageUrlToBase64(imageUrl);
  const prompt = buildPrompt({ title, description, username });

  const body = {
    contents: [
      {
        parts: [
          { text: prompt },
          { inline_data: { mime_type: mime, data: base64 } }
        ]
      }
    ],
    generationConfig: {
      temperature: 0.6,
      topK: 32,
      topP: 0.9,
      maxOutputTokens: 1200,
      response_mime_type: "application/json"
    }
  };

  const API_BASE = "https://generativelanguage.googleapis.com/v1beta";
  const MODEL_CANDIDATES = ["gemini-2.5-flash","gemini-2.0-flash"];

  let lastErr;
  for (const model of MODEL_CANDIDATES) {
    try {
      const url = `${API_BASE}/models/${model}:generateContent?key=${encodeURIComponent(API_KEY)}`;
      const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      if (!resp.ok) throw new Error(`Gemini error (${resp.status}): ${await resp.text()}`);

      const json = await resp.json();
      const text = json?.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) throw new Error("Empty response from Gemini");

      // Parse JSON (strip code fences if present)
      let parsed;
      try { parsed = JSON.parse(text); }
      catch {
        const cleaned = String(text)
          .replace(/^```json\s*/i, "")
          .replace(/^```\s*/i, "")
          .replace(/```$/i, "")
          .trim();
        parsed = JSON.parse(cleaned);
      }

      // Guards
      const bullets = Array.isArray(parsed.bullets) ? parsed.bullets.slice(0, 5) : [];
      const mcqs = Array.isArray(parsed.mcqs) ? parsed.mcqs.slice(0, 5) : [];
      if (!bullets.length || !mcqs.length) throw new Error("Malformed AI content");

      const normalized = mcqs.map((q) => ({
        question: String(q.question || "").slice(0, 140),
        options: Array.isArray(q.options) && q.options.length ? q.options.slice(0, 5) : ["Not present"],
        correctIndex: Number.isInteger(q.correctIndex) ? q.correctIndex : 0,
        explanation: q.explanation ? String(q.explanation).slice(0, 140) : undefined
      }));

      return { bullets, mcqs: normalized };
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr || new Error("Gemini request failed");
}

/** ---------- Component ---------- */
export default function InfographicCard({
  avatarSrc = teacherProfileImages.teacherProfilePic,
  title,
  description,
  imgSrc,
  username,
  postUrl,
  onLikeChange,
  onBookmarkChange,
  onShare
}) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showLearn, setShowLearn] = useState(false);

  // AI state
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState(null);
  const [aiContent, setAiContent] = useState(null);

  // Carousel state
  const [mcqIndex, setMcqIndex] = useState(0);
  const totalMcq = aiContent?.mcqs?.length || 0;
  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const goPrev = () => setMcqIndex((i) => clamp(i - 1, 0, totalMcq - 1));
  const goNext = () => setMcqIndex((i) => clamp(i + 1, 0, totalMcq - 1));

  // keep mcqIndex in bounds if content changes
  useEffect(() => {
    if (totalMcq === 0) return;
    setMcqIndex((i) => clamp(i, 0, totalMcq - 1));
  }, [totalMcq]);

  const onKeyDownCarousel = (e) => {
    if (!showLearn || !totalMcq) return;
    if (e.key === "ArrowLeft") { e.preventDefault(); goPrev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
  };

  const ariaLabelLike = liked ? "Unlike" : "Like";
  const ariaLabelSave = saved ? "Remove bookmark" : "Bookmark";

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    onLikeChange && onLikeChange(next);
  };

  const toggleSave = () => {
    const next = !saved;
    setSaved(next);
    onBookmarkChange && onBookmarkChange(next);
  };

  const shareData = useMemo(() => ({
    title,
    text: `${username} on Infographics — ${title}`,
    url: postUrl
  }), [title, username, postUrl]);

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard && shareData.url) {
        await navigator.clipboard.writeText(shareData.url);
        alert("Link copied to clipboard");
      }
      onShare && onShare(shareData);
    } catch (e) {
      console.error("Share failed:", e);
    }
  };

  const requestAI = async () => {
    setAiLoading(true);
    setAiError(null);
    try {
      const result = await generateWithGeminiInBrowser({
        title, description, username, imageUrl: imgSrc
      });
      setAiContent(result);
      setMcqIndex(0); // reset carousel to first slide
    } catch (err) {
      console.error(err);
      setAiError(err?.message || "Failed to generate content");
    } finally {
      setAiLoading(false);
    }
  };

  const toggleLearn = () => {
    const next = !showLearn;
    setShowLearn(next);
    if (next && !aiContent && !aiLoading) requestAI();
  };

  return (
    <Card role="article" aria-label={`${title} instagram-style post`}>
      <Header>
        <HeaderLeft>
          <Avatar src={avatarSrc} alt="avatar" />
          <UserBlock>
            <Title>{title}</Title>
            <Description>{description}</Description>
          </UserBlock>
        </HeaderLeft>
        <MenuBtn
          aria-label={showLearn ? "Close learn mode" : "Open learn mode"}
          title={showLearn ? "Close learn mode" : "Learn more & quiz"}
          onClick={toggleLearn}
        >
          <IoBulbOutline size={18} />
        </MenuBtn>
      </Header>

      {!showLearn ? (
        <MediaWrap>
          <Img src={imgSrc} alt={title} />
        </MediaWrap>
      ) : (
        <LearnWrap aria-live="polite" onKeyDown={onKeyDownCarousel} tabIndex={0}>
          {/* Know more */}
          <Section>
            <SectionTitle>Know more (5 quick points)</SectionTitle>
            {aiLoading ? (
              <div style={{ display: "grid", gap: 8 }}>
                <Skeleton /><Skeleton /><Skeleton /><Skeleton /><Skeleton />
              </div>
            ) : aiError ? (
              <ErrorBox>
                <span style={{ flex: 1, minWidth: 0 }}>{aiError}</span>
                <RetryBtn onClick={requestAI} aria-label="Retry generating content">Retry</RetryBtn>
              </ErrorBox>
            ) : (
              <Bullets>
                {aiContent?.bullets?.map((b, i) => <li key={i}>{b}</li>)}
              </Bullets>
            )}
          </Section>

          {/* MCQ Carousel */}
          <Section>
            <SectionTitle>Test your knowledge (5 MCQs)</SectionTitle>

            {aiLoading ? (
              <div style={{ display: "grid", gap: 10 }}>
                <Skeleton h={16} />
                <Skeleton h={36} /><Skeleton h={36} /><Skeleton h={36} /><Skeleton h={36} />
              </div>
            ) : aiError ? (
              <ErrorBox>
                <span style={{ flex: 1, minWidth: 0 }}>Can’t load questions.</span>
                <RetryBtn onClick={requestAI}>Retry</RetryBtn>
              </ErrorBox>
            ) : aiContent?.mcqs?.length ? (
              <CarouselWrap aria-roledescription="carousel" aria-label="MCQ carousel">
                <CarouselViewport>
                  <CarouselTrack style={{ transform: `translateX(-${mcqIndex * 100}%)` }}>
                    {aiContent.mcqs.map((item, idx) => (
                      <CarouselSlide
                        key={idx}
                        role="group"
                        aria-roledescription="slide"
                        aria-label={`Question ${idx + 1} of ${aiContent.mcqs.length}`}
                      >
                        <SingleMCQ mcq={item} index={idx + 1} />
                      </CarouselSlide>
                    ))}
                  </CarouselTrack>
                </CarouselViewport>
              </CarouselWrap>
            ) : null}

            {aiContent?.mcqs?.length ? (
              <Dots role="tablist" aria-label="MCQ navigation dots">
                {aiContent.mcqs.map((_, i) => (
                  <Dot
                    key={i}
                    $active={i === mcqIndex}
                    aria-label={`Go to question ${i + 1}`}
                    aria-selected={i === mcqIndex}
                    role="tab"
                    onClick={() => setMcqIndex(i)}
                    title={`Question ${i + 1}`}
                  />
                ))}
              </Dots>
            ) : null}
          </Section>

          <FooterRow>
            <Small>AI stays within the infographic; short, clear answers only.</Small>
            <button
              onClick={() => setShowLearn(false)}
              style={{
                background: "transparent",
                border: "1px solid rgba(15,23,42,.14)",
                borderRadius: 10,
                padding: "6px 10px",
                cursor: "pointer",
                fontSize: 12
              }}
              aria-label="Back to image"
              title="Back to image"
            >
              Back to image
            </button>
          </FooterRow>
        </LearnWrap>
      )}

      <ActionsBar>
        <ActionsLeft>
          <IconBtn onClick={toggleLike} aria-label={ariaLabelLike} title={ariaLabelLike}>
            {liked ? <AiFillHeart size={22} /> : <AiOutlineHeart size={22} />}
          </IconBtn>
          <IconBtn aria-label="Comment" title="Comment"><BsChat size={20} /></IconBtn>
          <IconBtn onClick={handleShare} aria-label="Share" title="Share"><FiSend size={20} /></IconBtn>
        </ActionsLeft>
        <IconBtn onClick={toggleSave} aria-label={ariaLabelSave} title={ariaLabelSave}>
          {saved ? <BsBookmarkFill size={20} /> : <BsBookmark size={20} />}
        </IconBtn>
      </ActionsBar>
    </Card>
  );
}

/** ---------- Single MCQ slide ---------- */
function SingleMCQ({ mcq, index }) {
  const [selected, setSelected] = useState(null);

  const stateFor = (i) => {
    if (selected === null) return "idle";
    if (i === mcq.correctIndex) return "correct";
    if (i === selected && selected !== mcq.correctIndex) return "wrong";
    return "idle";
  };

  return (
    <MCQCard aria-label={`Question ${index}`}>
      <Q>{index}. {mcq.question}</Q>
      <Options>
        {mcq.options.map((opt, i) => (
          <OptionBtn
            key={i}
            onClick={() => setSelected(i)}
            $state={stateFor(i)}
            aria-pressed={selected === i}
            aria-label={`Option ${i + 1}`}
          >
            {opt}
          </OptionBtn>
        ))}
      </Options>
      {selected !== null && (
        <Small>
          {selected === mcq.correctIndex ? "✅ Correct." : "❌ Not quite."}
          {mcq.explanation ? ` — ${mcq.explanation}` : ""}
        </Small>
      )}
    </MCQCard>
  );
}
