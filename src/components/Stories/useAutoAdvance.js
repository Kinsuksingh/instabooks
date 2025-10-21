import { useRef, useEffect, useCallback } from "react";

/**
 * Auto-advance: drives per-slide timing and progress (0..1).
 */
export default function useAutoAdvance({
  isOpen,
  activeIndex,
  setActiveIndex,
  total,
  onClose,
  duration = 3000,
}) {
  const startedAtRef = useRef(Date.now());
  const frameRef = useRef();
  const progressValueRef = useRef(0);

  const tick = useCallback(() => {
    const elapsed = Date.now() - startedAtRef.current;
    const progress = Math.min(1, elapsed / duration);
    progressValueRef.current = progress;

    if (progress >= 1) {
      if (activeIndex < total - 1) {
        setActiveIndex((i) => i + 1);
      } else {
        onClose();
      }
    } else {
      frameRef.current = requestAnimationFrame(tick);
    }
  }, [activeIndex, total, duration, onClose, setActiveIndex]);

  useEffect(() => {
    if (!isOpen) return;
    startedAtRef.current = Date.now();
    frameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameRef.current);
  }, [isOpen, activeIndex, tick]);

  const resetTimer = useCallback(() => {
    startedAtRef.current = Date.now();
  }, []);

  return { resetTimer, getProgressValue: () => progressValueRef.current };
}
