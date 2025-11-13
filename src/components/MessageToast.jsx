import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import dingSound from "../assets/ding.mp3";
import { themeContext } from "../context/Context";

/**
 * MessageToast (arrow-function, enhanced UI)
 * - First-interaction trigger (click/tap/key)
 * - Drag-to-dismiss, close button, auto-hide with progress bar
 * - Sound opt-in, reduced motion aware, theme aware, fully responsive
 */
const MessageToast = ({
  delay = 5000, // ms to wait after first interaction
  visibleFor = 10000, // ms the toast stays visible
  sound = true,
  soundSrc = dingSound,
  title = "Hi there! 👋",
  body = "Welcome to my portfolio — glad you’re here!",
  gifSrc = "https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif",
//   position = "bottom-right", // "bottom-right" | "bottom-left" | "top-right" | "top-left"
    position = "top-right", // "bottom-right" | "bottom-left" | "top-right" | "top-left"
  action, // optional: { label: string, onClick: () => void }
}) => {
  const { theme } = useContext(themeContext);
  const prefersReducedMotion = useReducedMotion();

  const audioRef = useRef(null);
  const delayTimerRef = useRef(null);
  const hideTimerRef = useRef(null); 

  const [hasInteracted, setHasInteracted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // forces progress bar remount

  // Theming
  const classes = useMemo(() => {
    const textColor = theme === "dark" ? "text-white" : "text-gray-900";
    const borderColor = theme === "dark" ? "border-white/20" : "border-black/10";
    const backdrop = theme === "dark" ? "bg-white/10" : "bg-white/70";
    const gradient = theme === "dark" ? "from-fuchsia-600 via-rose-600 to-amber-500" : "from-emerald-200 via-sky-200 to-amber-200";
    const ring = theme === "dark" ? "ring-white/10" : "ring-black/10";

    const pos = {
      "bottom-right": "bottom-4 right-4",
      "bottom-left": "bottom-4 left-4",
      "top-right": "top-4 right-4",
      "top-left": "top-4 left-4",
    }[position] || "bottom-4 right-4";

    return { textColor, borderColor, backdrop, gradient, ring, pos };
  }, [theme, position]);

  // First user interaction (auto-removed via { once: true })
  useEffect(() => {
    const set = () => setHasInteracted(true);
    window.addEventListener("pointerdown", set, { passive: true, once: true });
    window.addEventListener("keydown", set, { once: true });
    return () => {
      window.removeEventListener("pointerdown", set);
      window.removeEventListener("keydown", set); 
    };
  }, []);

  // Schedule show after delay 
  useEffect(() => {
    if (!hasInteracted) return;
    if (delayTimerRef.current) clearTimeout(delayTimerRef.current);

    delayTimerRef.current = setTimeout(() => {
      setVisible(true);
      setProgressKey((k) => k + 1);

      if (sound && audioRef.current) {
        try { audioRef.current.currentTime = 0; } catch {}
        const p = audioRef.current.play();
        if (p && p.catch) p.catch(() => {});
      }
    }, Math.max(0, delay));

    return () => delayTimerRef.current && clearTimeout(delayTimerRef.current);
  }, [hasInteracted, delay, sound]);

  // Auto-hide after visibleFor
  useEffect(() => {
    if (!visible) return;
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      setHasInteracted(false);
    }, Math.max(0, visibleFor));

    return () => hideTimerRef.current && clearTimeout(hideTimerRef.current);
  }, [visible, visibleFor]);

  const dismiss = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setVisible(false);
  };

  const variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        hidden: { opacity: 0, y: 60, scale: 0.96, filter: "blur(2px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, y: 60, scale: 0.95, filter: "blur(2px)" },
      };

  const dragConf = prefersReducedMotion
    ? {}
    : { drag: "x", dragConstraints: { left: 0, right: 0 }, dragElastic: 0.2 };

  return (
    <>
      {sound && <audio ref={audioRef} src={soundSrc} preload="auto" />}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.45, ease: "easeOut" }}
            role="status"
            aria-live="polite"
            onDragEnd={(e, info) => {
              // Flick or drag far enough -> dismiss
              if (Math.abs(info.offset.x) > 120 || Math.abs(info.velocity.x) > 700) {
                dismiss();
              }
            }}
            {...dragConf}
            className={`fixed ${classes.pos} z-50 flex items-center gap-3 sm:gap-4
              rounded-3xl shadow-2xl border ${classes.borderColor} ${classes.textColor}
              bg-gradient-to-br ${classes.gradient} p-[1px]
              ring-1 ${classes.ring}
            `}
          >
            {/* inner glass card */}
            <div
              className={`flex items-center gap-3 sm:gap-4 px-4 py-3 sm:px-5 sm:py-4 rounded-[calc(theme(borderRadius.3xl)-2px)] ${classes.backdrop}
                max-w-[92vw] sm:max-w-sm w-auto relative overflow-hidden`}
            >
              {/* subtle glow */}
              <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay" aria-hidden />

              {/* Avatar / GIF */}
              <img
                src={gifSrc}
                alt="Waving hand"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl border border-white/30 flex-shrink-0"
                loading="lazy"
                decoding="async"
              />

              {/* Text */}
              <div className="flex flex-col min-w-0">
                <h3 className="font-semibold text-base sm:text-lg leading-tight truncate">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm/5 opacity-100 leading-snug break-words">
                  {body}
                </p>
                {action?.label && (
                  <button
                    type="button"
                    onClick={action.onClick}
                    className="mt-2 inline-flex w-fit items-center justify-center rounded-xl px-3 py-1.5 text-xs font-medium border border-white/30 hover:bg-white/10 active:scale-[.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {action.label}
                  </button>
                )}
              </div>

              {/* Close */}
              <button
                type="button"
                onClick={dismiss}
                className="ml-1 shrink-0 inline-flex items-center justify-center rounded-xl px-2 py-1 text-xs/none border border-white/30 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                aria-label="Dismiss message"
              >
                ✕
              </button>

              {/* Progress bar */}
              {!prefersReducedMotion && (
                <motion.div
                  key={progressKey}
                  aria-hidden
                  initial={{ width: "100%" }}
                  animate={{ width: 0 }}
                  transition={{ duration: visibleFor / 1000, ease: "linear" }}
                  className="absolute bottom-0 left-0 h-1 bg-white/60"
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MessageToast;
