import React, { useEffect, useRef, useState} from "react";
import styled from "styled-components";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BsBookmark, BsBookmarkFill, BsArrowsFullscreen } from "react-icons/bs";

/* --- Card Styling --- */
const Card = styled.article`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(180deg, #dff6ff 0%, #bce0ff 100%);
  box-shadow: 0 10px 30px rgba(2, 6, 23, 0.12);
`;

const ViewerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 */
  background: #000;

  canvas, div[data-threepipe] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const Poster = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transition: opacity 220ms ease;
  background: ${({ $poster }) =>
    $poster ? `center/cover no-repeat url(${$poster})` : "#0b1220"};
`;


const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 18px 20px;
  color: #0f172a;
`;

const Left = styled.div`
  flex: 1 1 auto;
`;

const Title = styled.h3`
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  line-height: 1.2;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #334155;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const IconBtn = styled.button`
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
  cursor: pointer;
  transition: transform 140ms ease;

  &:hover { transform: translateY(-2px); }
  &:active { transform: translateY(0); }
`;

const ExpandBtn = styled(IconBtn)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  background: rgba(15, 23, 42, 0.6);
  color: #fff;
  border-color: rgba(255,255,255,0.22);
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(2, 6, 23, 0.6);
  backdrop-filter: blur(4px);
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 180ms ease;
  z-index: 999;
`;



const ModalSheet = styled.div`
  position: fixed;
  inset: 5vh 5vw;
  border-radius: 16px;
  background: #0b1220;
  box-shadow: 0 30px 80px rgba(0,0,0,0.4);
  overflow: hidden;
  z-index: 1000;
  display: grid;
  grid-template-rows: auto 1fr;
`;
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e5ecff;
  padding: 12px 14px;
  background: linear-gradient(180deg, #0f172a 0%, #0b1220 100%);
  border-bottom: 1px solid rgba(255,255,255,0.06);
`;
const ModalTitle = styled.div`
  font-weight: 600;
  font-size: 15px;
`;
const CloseBtn = styled(IconBtn)`
  width: 36px; height: 36px;
  background: rgba(255,255,255,0.1);
  color: #fff;
  border-color: rgba(255,255,255,0.18);
`;
const ModalBody = styled.div`
  position: relative;
  background: #000;
`;

/* ------------------------------------------------------------------ */
/*                          ThreePipe helpers                          */
/* ------------------------------------------------------------------ */

async function initThreePipe(mountEl, modelUrl, posterSetter) {
  const { ThreeViewer, addBasePlugins, AssetManagerBasicControllerPlugin } =
    await import("threepipe");

  const canvas = document.createElement("canvas");
  canvas.setAttribute("data-threepipe", "canvas");
  mountEl.innerHTML = "";
  mountEl.appendChild(canvas);

  const viewer = new ThreeViewer({
    canvas,
    msaa: true,
    rgbm: true,
    alpha: true,
    renderScale: "auto",
  });
  await addBasePlugins(viewer);

  try {
    viewer.scene.activeCamera.controls.enabled = true;
  } catch {console.log("hii")}

  if (AssetManagerBasicControllerPlugin) {
    const assetCtl = viewer.addPluginSync
      ? viewer.addPluginSync(AssetManagerBasicControllerPlugin)
      : viewer.addPlugin(AssetManagerBasicControllerPlugin);
    posterSetter(true);
    await assetCtl.addFromUrl(modelUrl);
    posterSetter(false);
  } else if (typeof viewer.load === "function") {
    posterSetter(true);
    await viewer.load(modelUrl);
    posterSetter(false);
  }

  try {
    await viewer.scene.activeCamera.fitToScene?.();
  } catch {}

  const ro = new ResizeObserver(() => viewer.resize?.());
  ro.observe(mountEl);

  return () => {
    ro.disconnect?.();
    viewer.dispose?.();
    mountEl.innerHTML = "";
  };
}

/* ------------------------------------------------------------------ */
/*                         Component: Model3DCard                      */
/* ------------------------------------------------------------------ */

export default function Model3DCard({
  data,
  likedDefault = false,
  savedDefault = false,
  onLikeChange,
  onBookmarkChange,
}) {
  const modelSrc = data?.modelSrc || data?.legacyModelSrc;
  const modalModelSrc = data?.modalModelSrc || modelSrc;
  const { title, description, poster, hdri } = data || {};

  const [liked, setLiked] = useState(likedDefault);
  const [saved, setSaved] = useState(savedDefault);
  const [modalOpen, setModalOpen] = useState(false);
  const [loadingThumb, setLoadingThumb] = useState(!!poster);
  const [loadingModal, setLoadingModal] = useState(true);

  const smallMountRef = useRef(null);
  const largeMountRef = useRef(null);
  const smallCleanupRef = useRef(null);
  const largeCleanupRef = useRef(null);

  const toggleLike = () => {
    const next = !liked;
    setLiked(next);
    onLikeChange?.(next);
  };

  const toggleSave = () => {
    const next = !saved;
    setSaved(next);
    onBookmarkChange?.(next);
  };

  useEffect(() => {
    if (!modelSrc || !smallMountRef.current) return;

    let cancelled = false;
    (async () => {
      try {
        smallCleanupRef.current = await initThreePipe(
          smallMountRef.current,
          modelSrc,
          (loading) => setLoadingThumb(loading),
          hdri
        );
        if (cancelled) smallCleanupRef.current?.();
      } catch (e) {
        console.error("ThreePipe (card) init failed:", e);
        setLoadingThumb(false);
      }
    })();

    return () => {
      cancelled = true;
      smallCleanupRef.current?.();
    };
  }, [modelSrc, hdri]);

  useEffect(() => {
    if (!modalOpen) {
      largeCleanupRef.current?.();
      largeCleanupRef.current = null;
      setLoadingModal(true);
      return;
    }
    if (!largeMountRef.current || !modalModelSrc) return;

    let cancelled = false;
    (async () => {
      try {
        largeCleanupRef.current = await initThreePipe(
          largeMountRef.current,
          modalModelSrc,
          (loading) => setLoadingModal(loading),
          hdri
        );
        if (cancelled) largeCleanupRef.current?.();
      } catch (e) {
        console.error("ThreePipe (modal) init failed:", e);
        setLoadingModal(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [modalOpen, modalModelSrc, hdri]);

  if (!modelSrc) return null;

  return (
    <>
      <Card>
        <ViewerWrapper>
          <div ref={smallMountRef} />
          <Poster $visible={loadingThumb} $poster={poster} />
          <ExpandBtn onClick={openModal} aria-label="Open 3D viewer">
            <BsArrowsFullscreen size={18} />
          </ExpandBtn>
        </ViewerWrapper>

        <Content>
          <Left>
            <Title>{title}</Title>
            {description && <Desc>{description}</Desc>}
          </Left>

          <Actions>
            <IconBtn
              onClick={toggleLike}
              aria-label={liked ? "Unlike model" : "Like model"}
              title={liked ? "Unlike" : "Like"}
            >
              {liked ? <AiFillLike size={20} /> : <AiOutlineLike size={20} />}
            </IconBtn>

            <IconBtn
              onClick={toggleSave}
              aria-label={saved ? "Remove bookmark" : "Bookmark model"}
              title={saved ? "Remove bookmark" : "Bookmark"}
            >
              {saved ? <BsBookmarkFill size={18} /> : <BsBookmark size={18} />}
            </IconBtn>
          </Actions>
        </Content>
      </Card>

      {/* Modal */}
      <ModalBackdrop $open={modalOpen} onClick={closeModal} />
      <ModalSheet role="dialog" aria-modal="true" style={{ display: modalOpen ? "grid" : "none" }}>
        <ModalHeader>
          <ModalTitle>{title || "3D Viewer"}</ModalTitle>
          <CloseBtn aria-label="Close" onClick={closeModal}>✕</CloseBtn>
        </ModalHeader>
        <ModalBody>
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <div ref={largeMountRef} style={{ position: "absolute", inset: 0 }} />
            {/* Simple loading veil */}
            {loadingModal && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  background: "linear-gradient(180deg, rgba(15,23,42,.9), rgba(2,6,23,.9))",
                  color: "#cbd5e1",
                  fontSize: 14,
                  letterSpacing: 0.2,
                }}
              >
                Loading 3D…
              </div>
            )}
          </div>
        </ModalBody>
      </ModalSheet>
    </>
  );
}
