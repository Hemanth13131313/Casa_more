import { useState, useEffect, useRef, useCallback } from 'react';
import './index.css';
import './App.css';
import {
  PROPERTY,
  LUGGAGE_FACTS,
  EXPLORER_SPACES,
  MOOD_OPTIONS,
  AMENITIES,
  GALLERY_IMAGES,
  FAQS,
} from './content';

// ─── AIRBNB BOOKING URL (Verified) ────────────────────────────
const AIRBNB_URL = PROPERTY.airbnbUrl;

// ─── SVG VECTOR ILLUSTRATION SYSTEM ───────────────────────────

/** Striped Coral & Cream Swim Ring */
const CoralTube = ({
  className = '',
  style = {},
  onClick,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
}) => (
  <svg
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    onClick={onClick}
    aria-hidden="true"
    role="presentation"
  >
    {/* Drop shadow */}
    <ellipse cx="60" cy="106" rx="42" ry="10" fill="rgba(23, 58, 64, 0.16)" />
    {/* Outer tube circle */}
    <circle cx="60" cy="56" r="48" fill="#FF6B6B" stroke="#173A40" strokeWidth="3" />
    {/* Alternating cream stripes */}
    <path
      d="M60 8 A48 48 0 0 1 108 56 L88 56 A28 28 0 0 0 60 28 Z"
      fill="#FFF7E6"
      stroke="#173A40"
      strokeWidth="2.5"
    />
    <path
      d="M60 104 A48 48 0 0 1 12 56 L32 56 A28 28 0 0 0 60 84 Z"
      fill="#FFF7E6"
      stroke="#173A40"
      strokeWidth="2.5"
    />
    {/* Inner hole */}
    <circle cx="60" cy="56" r="28" fill="#BDEBFA" stroke="#173A40" strokeWidth="3" />
    {/* Inflated gloss highlight */}
    <path
      d="M36 34 Q60 18, 84 34"
      stroke="rgba(255, 255, 255, 0.6)"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Subtle 3D inner shade */}
    <circle cx="60" cy="56" r="28" fill="none" stroke="rgba(23, 58, 64, 0.15)" strokeWidth="4" />
  </svg>
);

/** Mango Yellow & Lagoon Blue Dots Swim Ring */
const YellowTube = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Drop shadow */}
    <ellipse cx="60" cy="104" rx="40" ry="9" fill="rgba(23, 58, 64, 0.14)" />
    {/* Tube outer body */}
    <circle cx="60" cy="56" r="46" fill="#FFC857" stroke="#173A40" strokeWidth="3" />
    {/* Polka dots */}
    {[0, 60, 120, 180, 240, 300].map((angle) => {
      const rad = (angle * Math.PI) / 180;
      const x = 60 + 36 * Math.cos(rad);
      const y = 56 + 36 * Math.sin(rad);
      return (
        <circle
          key={angle}
          cx={x}
          cy={y}
          r="5.5"
          fill="#087F8C"
          stroke="#173A40"
          strokeWidth="1.5"
        />
      );
    })}
    {/* Inner hole */}
    <circle cx="60" cy="56" r="26" fill="#BDEBFA" stroke="#173A40" strokeWidth="3" />
    {/* Highlight curve */}
    <path
      d="M38 32 Q60 20, 82 32"
      stroke="rgba(255, 255, 255, 0.7)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/** Lagoon Teal Tropical Swim Ring */
const TealTube = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 120 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    <ellipse cx="60" cy="104" rx="38" ry="8" fill="rgba(23, 58, 64, 0.12)" />
    <circle cx="60" cy="56" r="46" fill="#087F8C" stroke="#173A40" strokeWidth="3" />
    {/* Mini tropical hibiscus/palm prints */}
    <circle cx="40" cy="38" r="4" fill="#FF6B6B" />
    <circle cx="80" cy="40" r="4" fill="#FFC857" />
    <circle cx="78" cy="74" r="4" fill="#FF6B6B" />
    <circle cx="42" cy="74" r="4" fill="#FFC857" />
    {/* Inner hole */}
    <circle cx="60" cy="56" r="26" fill="#BDEBFA" stroke="#173A40" strokeWidth="3" />
    <path
      d="M38 32 Q60 20, 82 32"
      stroke="rgba(255, 255, 255, 0.55)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/** Friendly Illustrated Sun */
const SunIllustration = ({
  sunset = false,
  className = '',
  style = {},
}: {
  sunset?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 140 140"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Sun rays */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
      const rad = (deg * Math.PI) / 180;
      const x1 = 70 + 44 * Math.cos(rad);
      const y1 = 70 + 44 * Math.sin(rad);
      const x2 = 70 + 58 * Math.cos(rad);
      const y2 = 70 + 58 * Math.sin(rad);
      return (
        <line
          key={deg}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={sunset ? '#FF8C42' : '#FFC857'}
          strokeWidth="4"
          strokeLinecap="round"
        />
      );
    })}
    {/* Sun Core */}
    <circle
      cx="70"
      cy="70"
      r="36"
      fill={sunset ? 'url(#sunsetSunGrad)' : '#FFC857'}
      stroke="#173A40"
      strokeWidth="3"
    />
    {/* Cheek blush */}
    <circle cx="56" cy="74" r="5" fill={sunset ? '#E85252' : '#FF9E6B'} opacity="0.5" />
    <circle cx="84" cy="74" r="5" fill={sunset ? '#E85252' : '#FF9E6B'} opacity="0.5" />
    {/* Cute eyes & smile */}
    <circle cx="58" cy="66" r="3" fill="#173A40" />
    <circle cx="82" cy="66" r="3" fill="#173A40" />
    <path
      d="M65 74 Q70 80, 75 74"
      stroke="#173A40"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="sunsetSunGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#FFC857" />
        <stop offset="100%" stopColor="#FF6B6B" />
      </linearGradient>
    </defs>
  </svg>
);

/** Swaying Coconut Palm Tree */
const PalmIllustration = ({
  swayRight = false,
  className = '',
  style = {},
}: {
  swayRight?: boolean;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 160 240"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Trunk */}
    <path
      d={
        swayRight
          ? 'M70 235 Q78 160, 85 110 Q90 60, 95 30'
          : 'M90 235 Q82 160, 75 110 Q70 60, 65 30'
      }
      stroke="#26734D"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
    />
    {/* Palm fronds */}
    <g transform={swayRight ? 'translate(95, 30)' : 'translate(65, 30)'}>
      {/* Frond 1 */}
      <path
        d="M0 0 Q-40 -40, -75 -25 Q-50 -10, 0 0"
        fill="#26734D"
        stroke="#173A40"
        strokeWidth="2"
      />
      {/* Frond 2 */}
      <path
        d="M0 0 Q-15 -60, 15 -65 Q10 -35, 0 0"
        fill="#26734D"
        stroke="#173A40"
        strokeWidth="2"
      />
      {/* Frond 3 */}
      <path
        d="M0 0 Q45 -55, 75 -25 Q50 -5, 0 0"
        fill="#26734D"
        stroke="#173A40"
        strokeWidth="2"
      />
      {/* Frond 4 */}
      <path
        d="M0 0 Q60 -10, 75 25 Q45 20, 0 0"
        fill="#26734D"
        stroke="#173A40"
        strokeWidth="2"
      />
      {/* Frond 5 */}
      <path
        d="M0 0 Q-50 10, -70 35 Q-40 20, 0 0"
        fill="#26734D"
        stroke="#173A40"
        strokeWidth="2"
      />
      {/* Coconuts */}
      <circle cx="-6" cy="6" r="6" fill="#8B6914" stroke="#173A40" strokeWidth="1.8" />
      <circle cx="6" cy="8" r="6.5" fill="#8B6914" stroke="#173A40" strokeWidth="1.8" />
      <circle cx="1" cy="14" r="5.5" fill="#8B6914" stroke="#173A40" strokeWidth="1.8" />
    </g>
  </svg>
);

/** Travel Bag */
const TravelBag = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Handle */}
    <path
      d="M38 36 V24 C38 18, 62 18, 62 24 V36"
      stroke="#173A40"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Main body */}
    <rect
      x="16"
      y="36"
      width="68"
      height="52"
      rx="12"
      fill="#FFC857"
      stroke="#173A40"
      strokeWidth="3"
    />
    {/* Leather straps */}
    <rect x="28" y="36" width="8" height="52" fill="#E0921E" stroke="#173A40" strokeWidth="2" />
    <rect x="64" y="36" width="8" height="52" fill="#E0921E" stroke="#173A40" strokeWidth="2" />
    {/* Brass buckle */}
    <rect x="29" y="58" width="6" height="8" rx="2" fill="#FFF7E6" stroke="#173A40" strokeWidth="1.5" />
    <rect x="65" y="58" width="6" height="8" rx="2" fill="#FFF7E6" stroke="#173A40" strokeWidth="1.5" />
    {/* Luggage tag */}
    <path d="M48 36 L52 48 L44 48 Z" fill="#FF6B6B" stroke="#173A40" strokeWidth="1.5" />
  </svg>
);

/** Striped Beach Umbrella */
const StripedUmbrella = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Pole */}
    <line x1="50" y1="42" x2="50" y2="114" stroke="#173A40" strokeWidth="3.5" strokeLinecap="round" />
    {/* Canopy */}
    <path
      d="M10 44 Q50 8, 90 44 Z"
      fill="#FF6B6B"
      stroke="#173A40"
      strokeWidth="2.5"
    />
    {/* Cream stripes */}
    <path d="M30 44 Q44 20, 50 12 Q56 20, 70 44 Z" fill="#FFF7E6" stroke="#173A40" strokeWidth="2" />
    {/* Finial top */}
    <circle cx="50" cy="11" r="3" fill="#FFC857" stroke="#173A40" strokeWidth="1.5" />
  </svg>
);

/** Striped Beach Towel */
const StripedTowel = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 100 60"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    <rect x="10" y="10" width="80" height="40" rx="4" fill="#FF6B6B" stroke="#173A40" strokeWidth="2" />
    <rect x="25" y="10" width="12" height="40" fill="#FFF7E6" />
    <rect x="47" y="10" width="12" height="40" fill="#FFF7E6" />
    <rect x="69" y="10" width="12" height="40" fill="#FFF7E6" />
    {/* Fringe ends */}
    <line x1="10" y1="14" x2="6" y2="14" stroke="#173A40" strokeWidth="1.5" />
    <line x1="10" y1="24" x2="6" y2="24" stroke="#173A40" strokeWidth="1.5" />
    <line x1="10" y1="34" x2="6" y2="34" stroke="#173A40" strokeWidth="1.5" />
    <line x1="10" y1="44" x2="6" y2="44" stroke="#173A40" strokeWidth="1.5" />
  </svg>
);

// ─── EXPLORER TAB ICONS ───────────────────────────────────────
const BedIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M3 7v11M21 7v11M3 13h18M3 9h18a2 2 0 0 1 2 2v2H1v-2a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="7" cy="10" r="1.5" fill="currentColor"/>
    <circle cx="17" cy="10" r="1.5" fill="currentColor"/>
  </svg>
);

const ArmchairIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M4 11h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6zM3 14h2M19 14h2M6 19v2M18 19v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CoffeeCupIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1M3 8h15v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 2v3M10 2v3M14 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PottedPlantIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 14h10l-1.5 7h-7L7 14z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 14V6M12 6c-3-2-5 1-5 4 3 0 5-2 5-4zM12 9c3-2 5 1 5 4-3 0-5-2-5-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ─── AMENITY / LUGGAGE ICONS ─────────────────────────────────
const getLucideOrEmoji = (id: string) => {
  const map: Record<string, string> = {
    users: '👥',
    bed: '🛏️',
    bath: '🚿',
    pool: '🏊',
    shield: '🏡',
    car: '⚡',
    wifi: '📶',
    ac: '❄️',
    parking: '🅿️',
    ev: '🔌',
    workspace: '💻',
    kitchen: '🍳',
    washer: '🫧',
    tv: '📺',
    balcony: '🌿',
    coffee: '☕',
    compass: '🧭',
  };
  return map[id] || '✨';
};

// ─── WAVE SEPARATORS ──────────────────────────────────────────
const WaveTransition = ({
  fillColor,
  bg = 'transparent',
  flipped = false,
}: {
  fillColor: string;
  bg?: string;
  flipped?: boolean;
}) => (
  <div className="wave-sep" style={{ background: bg, transform: flipped ? 'scaleY(-1)' : undefined }} aria-hidden="true">
    <svg viewBox="0 0 1440 64" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0 Q360 64, 720 32 T1440 0 L1440 64 L0 64 Z"
        fill={fillColor}
      />
    </svg>
  </div>
);

// ─── SCROLL REVEAL HOOK ───────────────────────────────────────
function useScrollObserver() {
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isReduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'));
      return;
    }

    obsRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obsRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => obsRef.current?.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);
}

// ─── MAIN COMPONENT ───────────────────────────────────────────
export default function App() {
  const [animPaused, setAnimPaused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Chapter 3: Pool ripple interactions
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [tubeBouncing, setTubeBouncing] = useState(false);

  // Chapter 4: Space Explorer Tab
  const [activeSpaceId, setActiveSpaceId] = useState('bedrooms');

  // Chapter 5: Mood Selector
  const [activeMoodId, setActiveMoodId] = useState('mornings');
  const [expandedAmenity, setExpandedAmenity] = useState<string | null>(null);

  // Chapter 6: FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Global Lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useScrollObserver();

  // Listen to prefers-reduced-motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) setAnimPaused(true);
  }, []);

  // Listen to navbar scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pool Ring Click Interaction (Ripples)
  const triggerPoolRipple = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };

    setRipples((prev) => [...prev.slice(-4), newRipple]);
    setTubeBouncing(true);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      setTubeBouncing(false);
    }, 1000);
  }, []);

  // Lightbox handlers
  const openLightboxAt = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((curr) => (curr !== null ? (curr + 1) % GALLERY_IMAGES.length : null));
  }, []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((curr) =>
      curr !== null ? (curr - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null
    );
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextLightbox, prevLightbox]);

  // Active space & mood lookup
  const currentSpace = EXPLORER_SPACES.find((s) => s.id === activeSpaceId) || EXPLORER_SPACES[0];
  const currentMood = MOOD_OPTIONS.find((m) => m.id === activeMoodId) || MOOD_OPTIONS[0];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* ─── NAVIGATION BAR ────────────────────────────────────────── */}
      <nav
        className={`site-nav ${scrolled ? 'scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="nav-container">
          <a href="#chapter-one" className="nav-brand" aria-label="Casa Maré, return to top">
            <div className="nav-logo-mark" aria-hidden="true">
              <span style={{ fontSize: 18 }}>☀️</span>
            </div>
            <div>
              <span className="nav-title">{PROPERTY.name}</span>
              <span className="nav-tagline">{PROPERTY.location.label}</span>
            </div>
          </a>

          <div className="nav-menu" role="menubar">
            <a href="#chapter-two" className="nav-link" role="menuitem">
              The Villa
            </a>
            <a href="#chapter-three" className="nav-link" role="menuitem">
              Private Pool
            </a>
            <a href="#chapter-four" className="nav-link" role="menuitem">
              Rooms & Spaces
            </a>
            <a href="#chapter-five" className="nav-link" role="menuitem">
              Goa Moments
            </a>
            <a href="#chapter-six" className="nav-link" role="menuitem">
              Book Stay
            </a>
          </div>

          <div className="nav-cta-wrap">
            <a
              href={AIRBNB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label="Check dates on Airbnb (opens in new tab)"
            >
              Check dates on Airbnb ↗
            </a>

            <button
              className={`nav-burger ${mobileMenuOpen ? 'open' : ''}`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        id="mobile-nav"
        className={`mobile-nav-panel ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <a
          href="#chapter-one"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          🌴 Welcome
        </a>
        <a
          href="#chapter-two"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          🧳 The Villa & Layout
        </a>
        <a
          href="#chapter-three"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          🏊 Private Pool
        </a>
        <a
          href="#chapter-four"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          🏡 Explore Rooms
        </a>
        <a
          href="#chapter-five"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✨ Goa Days & Amenities
        </a>
        <a
          href="#chapter-six"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          🌅 Book Your Stay
        </a>
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', marginTop: 8 }}
          onClick={() => setMobileMenuOpen(false)}
        >
          Check dates on Airbnb ↗
        </a>
      </div>

      <main id="main-content">
        {/* ==========================================================
            CHAPTER ONE: "You've arrived in Goa."
            ========================================================== */}
        <section
          id="chapter-one"
          className="chapter chapter-one"
          aria-labelledby="ch1-heading"
        >
          <div className="container">
            <div className="chapter-one-grid">
              {/* Left Column: Headlines & Essential Facts */}
              <div className="reveal">
                <div className="chapter-badge chapter-badge-sky">
                  📍 {PROPERTY.location.label} · ENTIRE VILLA
                </div>

                <h1 id="ch1-heading" className="ch1-headline">
                  {PROPERTY.tagline}
                </h1>

                <p className="ch1-subtitle">{PROPERTY.subTagline}</p>

                {/* Key accommodation facts */}
                <div className="ch1-meta-pills" role="list" aria-label="Key property facts">
                  <div className="ch1-pill" role="listitem">
                    <span>👥</span> Up to 9 guests
                  </div>
                  <div className="ch1-pill" role="listitem">
                    <span>🛏️</span> 3 King bedrooms
                  </div>
                  <div className="ch1-pill" role="listitem">
                    <span>🚿</span> 3.5 Bathrooms
                  </div>
                  <div className="ch1-pill" role="listitem">
                    <span>🏊</span> 100% Private pool
                  </div>
                </div>

                {/* Call to action */}
                <div className="ch1-cta-row">
                  <a
                    href={AIRBNB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-coral"
                  >
                    Check dates on Airbnb ↗
                  </a>

                  <a href="#chapter-two" className="btn btn-outline-ink">
                    Explore the villa ↓
                  </a>
                </div>
              </div>

              {/* Right Column: Illustrated Arrival Composition */}
              <div className="ch1-scene reveal">
                {/* Sun */}
                <div
                  className="ch1-sun-wrap"
                  style={{
                    animation: !animPaused ? 'sunGlow 4s ease-in-out infinite' : 'none',
                  }}
                >
                  <SunIllustration />
                </div>

                {/* Framing Palm Trees */}
                <div
                  className="ch1-palm-left"
                  style={{
                    animation: !animPaused ? 'sway 4.5s ease-in-out infinite' : 'none',
                  }}
                >
                  <PalmIllustration />
                </div>
                <div
                  className="ch1-palm-right"
                  style={{
                    animation: !animPaused ? 'swayRight 4.8s ease-in-out infinite 0.5s' : 'none',
                  }}
                >
                  <PalmIllustration swayRight />
                </div>

                {/* Real Property Photo in Postcard Frame */}
                <div className="postcard-photo" style={{ maxWidth: 440, width: '100%', zIndex: 2 }}>
                  <img
                    src="/images/pool/pool1.png"
                    alt="Casa Maré villa and private pool courtyard in Siolim, Goa"
                    className="postcard-photo-img"
                    width="440"
                    height="330"
                    loading="eager"
                  />
                  <div className="postcard-label">
                    <span>📍</span> Casa Maré · Siolim, North Goa
                  </div>
                  <div className="postcard-stamp">
                    GOA
                    <br />
                    2026
                  </div>
                </div>

                {/* Bobbing Coral Swimming Tube */}
                <div
                  className="ch1-tube-float"
                  style={{
                    animation: !animPaused ? 'bob 3.2s ease-in-out infinite' : 'none',
                  }}
                >
                  <CoralTube />
                </div>

                {/* Travel Bag Illustration */}
                <div className="ch1-bag-wrap">
                  <TravelBag />
                </div>
              </div>
            </div>

            {/* Scroll Cue */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="#chapter-two" className="scroll-cue" aria-label="Scroll down to chapter two">
                <span>Your holiday starts here</span>
                <div className="scroll-arrow" aria-hidden="true">
                  ↓
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Transition into Chapter 2 */}
        <WaveTransition fillColor="#FFF7E6" bg="#FFF7E6" />

        {/* ==========================================================
            CHAPTER TWO: "Drop your bags. You're home."
            ========================================================== */}
        <section
          id="chapter-two"
          className="chapter chapter-two tile-bg"
          aria-labelledby="ch2-heading"
        >
          <div className="container">
            <div className="ch2-intro-grid">
              {/* Left Column: Text & Luggage Tag Facts */}
              <div className="ch2-text reveal">
                <div className="chapter-badge chapter-badge-cream">
                  CHAPTER 02 · ARRIVAL & COMFORT
                </div>

                <h2 id="ch2-heading">Drop your bags. You’re home.</h2>

                <p className="ch2-lead">{PROPERTY.overview}</p>

                {/* Luggage Tag Motif */}
                <div className="luggage-tag-container" role="region" aria-label="Villa specifications">
                  <div className="luggage-tag-header">
                    <div className="luggage-tag-hole" aria-hidden="true" />
                    <div>
                      <div className="luggage-tag-title">Casa Maré Villa Pass</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>
                        Siolim, North Goa · Coral Sky Stays
                      </div>
                    </div>
                  </div>

                  <div className="luggage-tag-grid">
                    {LUGGAGE_FACTS.map((fact) => (
                      <div key={fact.id} className="luggage-tag-item">
                        <div className="luggage-item-icon" aria-hidden="true">
                          {getLucideOrEmoji(fact.icon)}
                        </div>
                        <div>
                          <div className="luggage-item-val">{fact.value}</div>
                          <div className="luggage-item-label">{fact.note}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Stacked Postcards with Real Photos */}
              <div className="ch2-photos-stack reveal">
                {/* Photo 1: Living Lounge */}
                <div className="postcard-photo ch2-photo-top">
                  <img
                    src="/images/living/living1.png"
                    alt="Spacious airy living room with stylish Goan touches"
                    className="postcard-photo-img"
                    width="440"
                    height="330"
                    loading="lazy"
                  />
                  <div className="postcard-label">
                    <span>🛋️</span> Wide open living spaces for slow afternoons
                  </div>
                </div>

                {/* Photo 2: Bedroom */}
                <div className="postcard-photo ch2-photo-bottom">
                  <img
                    src="/images/rooms/room1/r1-1.png"
                    alt="Bedroom one featuring king bed and en-suite bath"
                    className="postcard-photo-img"
                    width="440"
                    height="330"
                    loading="lazy"
                  />
                  <div className="postcard-label">
                    <span>🛏️</span> 3 King bedrooms, all with private en-suite baths
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition into Chapter 3 (Water) */}
        <WaveTransition fillColor="#087F8C" bg="#FFF7E6" />

        {/* ==========================================================
            CHAPTER THREE: "Pool o'clock. All day."
            ========================================================== */}
        <section
          id="chapter-three"
          className="chapter chapter-three"
          aria-labelledby="ch3-heading"
        >
          <div className="ch3-water-pattern" />

          <div className="container">
            <div className="ch3-header reveal">
              <div className="chapter-badge chapter-badge-teal">
                CHAPTER 03 · THE PRIVATE POOL
              </div>

              <h2 id="ch3-heading">Pool o’clock. All day.</h2>

              <p>
                No shared loungers. No closing times. Step right outside your living room into an
                enclosed courtyard with your own private swimming pool, framed by tropical greens.
              </p>

              <div className="ch3-tap-hint">
                <span>🫧 Tap the floating ring for ripples!</span>
              </div>
            </div>

            {/* Interactive Pool Centerpiece */}
            <div className="ch3-pool-stage reveal" onClick={triggerPoolRipple}>
              <div className="ch3-pool-photo-box">
                <img
                  src="/images/pool/pool2.png"
                  alt="Clear private swimming pool with courtyard sunlight at Casa Maré"
                  className="ch3-pool-img"
                  width="960"
                  height="540"
                  loading="lazy"
                />

                {/* Animated Ripples on Click */}
                {ripples.map((ripple) => (
                  <span
                    key={ripple.id}
                    className="ripple-circle"
                    style={{
                      left: ripple.x - 30,
                      top: ripple.y - 30,
                      width: 60,
                      height: 60,
                    }}
                  />
                ))}

                {/* Primary Interactive Ring */}
                <div
                  className={`ch3-tube-interactive ${tubeBouncing ? 'bouncing' : ''}`}
                  style={{
                    animation: !animPaused ? 'bob 3s ease-in-out infinite' : 'none',
                  }}
                  title="Click to splash!"
                >
                  <CoralTube />
                </div>

                {/* Secondary Bobbing Ring */}
                <div
                  className="ch3-tube-secondary"
                  style={{
                    animation: !animPaused ? 'bobSlow 3.8s ease-in-out infinite 0.7s' : 'none',
                  }}
                >
                  <YellowTube />
                </div>

                {/* Poolside Umbrella Deco */}
                <div className="ch3-umbrella-deco">
                  <StripedUmbrella />
                </div>

                {/* Poolside Towel Deco */}
                <div className="ch3-towel-deco">
                  <StripedTowel />
                </div>
              </div>
            </div>

            {/* Pool actions */}
            <div className="ch3-actions reveal">
              <button
                className="btn btn-yellow"
                onClick={() => openLightboxAt(0)}
                aria-label="See pool photos in fullscreen"
              >
                See the pool photos 📸
              </button>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-white"
              >
                Check dates on Airbnb ↗
              </a>
            </div>
          </div>
        </section>

        {/* Transition back to Warm Cream */}
        <WaveTransition fillColor="#FFF7E6" bg="#087F8C" />

        {/* ==========================================================
            CHAPTER FOUR: "Find your favourite corner."
            ========================================================== */}
        <section
          id="chapter-four"
          className="chapter chapter-four"
          aria-labelledby="ch4-heading"
        >
          <div className="container">
            <div className="ch4-header reveal">
              <div className="chapter-badge chapter-badge-cream">
                CHAPTER 04 · SPACES & LIVING
              </div>

              <h2 id="ch4-heading">Find your favourite corner.</h2>

              <p>
                Each space in Casa Maré is designed for slow vacation mornings and breezy evenings.
                Click below to explore each area of the villa.
              </p>
            </div>

            {/* Space Explorer Selector Tabs */}
            <div
              className="explorer-tabs-bar reveal"
              role="tablist"
              aria-label="Villa spaces explorer"
            >
              {EXPLORER_SPACES.map((space) => {
                const isActive = space.id === activeSpaceId;
                return (
                  <button
                    key={space.id}
                    id={`tab-${space.id}`}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${space.id}`}
                    className={`explorer-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveSpaceId(space.id)}
                  >
                    <span className="explorer-tab-icon" aria-hidden="true">
                      {space.iconType === 'bed' && <BedIcon />}
                      {space.iconType === 'armchair' && <ArmchairIcon />}
                      {space.iconType === 'cup' && <CoffeeCupIcon />}
                      {space.iconType === 'plant' && <PottedPlantIcon />}
                    </span>
                    <span>{space.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Space Showcase Card */}
            <div
              id={`panel-${currentSpace.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentSpace.id}`}
              className="explorer-stage reveal"
            >
              {/* Media showcase */}
              <div className="explorer-media-col">
                <div
                  className="explorer-main-photo"
                  onClick={() => {
                    const idx = GALLERY_IMAGES.findIndex((img) => img.src === currentSpace.image);
                    openLightboxAt(idx !== -1 ? idx : 0);
                  }}
                  style={{ cursor: 'pointer' }}
                  title="Click to view fullscreen photo"
                >
                  <img
                    src={currentSpace.image}
                    alt={currentSpace.alt}
                    width="600"
                    height="450"
                    loading="lazy"
                  />
                </div>

                {/* Sub-thumbnails */}
                <div className="explorer-sub-thumbs">
                  {currentSpace.subImages.map((sub, i) => (
                    <button
                      key={i}
                      className="explorer-thumb-btn"
                      onClick={() => {
                        const idx = GALLERY_IMAGES.findIndex((img) => img.src === sub.src);
                        openLightboxAt(idx !== -1 ? idx : 0);
                      }}
                      aria-label={`View ${sub.caption} photo`}
                    >
                      <img src={sub.src} alt={sub.caption} loading="lazy" />
                      <div className="explorer-thumb-caption">{sub.caption}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content description */}
              <div className="explorer-content-col">
                <div className="explorer-badge">{currentSpace.badge}</div>
                <h3>{currentSpace.headline}</h3>
                <p className="explorer-desc">{currentSpace.desc}</p>

                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => openLightboxAt(0)}
                  >
                    Browse all villa photos ({GALLERY_IMAGES.length})
                  </button>
                  <a
                    href={AIRBNB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-ink"
                  >
                    Check dates on Airbnb ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition into Chapter 5 */}
        <WaveTransition fillColor="#FFFFFF" bg="#FFF7E6" />

        {/* ==========================================================
            CHAPTER FIVE: "What does your Goa day look like?"
            ========================================================== */}
        <section
          id="chapter-five"
          className="chapter chapter-five"
          aria-labelledby="ch5-heading"
        >
          <div className="container">
            <div className="ch5-header reveal">
              <div className="chapter-badge chapter-badge-cream">
                CHAPTER 05 · HOLIDAY RHYTHMS
              </div>

              <h2 id="ch5-heading">What does your Goa day look like?</h2>

              <p>
                From lazy morning coffees on the balcony to midnight swims and coastal discoveries.
                Choose your mood below for a preview of the rhythm here.
              </p>
            </div>

            {/* Interactive Mood Selector Buttons */}
            <div className="mood-buttons-bar reveal" role="tablist" aria-label="Holiday mood selector">
              {MOOD_OPTIONS.map((mood) => {
                const isActive = mood.id === activeMoodId;
                return (
                  <button
                    key={mood.id}
                    role="tab"
                    aria-selected={isActive}
                    className={`mood-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveMoodId(mood.id)}
                  >
                    <span>{getLucideOrEmoji(mood.icon)}</span>
                    <span>{mood.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mood Card Preview */}
            <div className="mood-card reveal">
              <div className="mood-card-img-wrap">
                <img
                  src={currentMood.image}
                  alt={currentMood.alt}
                  className="mood-card-img"
                  width="440"
                  height="330"
                  loading="lazy"
                />
              </div>

              <div className="mood-card-text">
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--coral)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
                  INSPIRATION
                </div>
                <h3>{currentMood.headline}</h3>
                <p className="mood-card-desc">{currentMood.desc}</p>
                <div className="mood-verified-note">{currentMood.verifiedNote}</div>
              </div>
            </div>

            {/* Clean Scannable Amenities Section */}
            <div className="amenities-wrap reveal">
              <div className="amenities-title">
                <h3>The little things, taken care of.</h3>
                <p style={{ color: 'var(--ink-muted)', fontSize: 14 }}>
                  Confirmed amenities included with your stay at Casa Maré. Tap any item to read details.
                </p>
              </div>

              <div className="amenities-grid-clean" role="list">
                {AMENITIES.map((amenity) => {
                  const isExpanded = expandedAmenity === amenity.id;
                  return (
                    <div
                      key={amenity.id}
                      role="listitem"
                      tabIndex={0}
                      className={`amenity-card-clean ${isExpanded ? 'expanded' : ''}`}
                      onClick={() => setExpandedAmenity(isExpanded ? null : amenity.id)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setExpandedAmenity(isExpanded ? null : amenity.id);
                        }
                      }}
                      aria-expanded={isExpanded}
                      aria-label={`${amenity.label}: click for details`}
                    >
                      <div className="amenity-icon-bubble" aria-hidden="true">
                        {getLucideOrEmoji(amenity.icon)}
                      </div>
                      <div className="amenity-name">{amenity.label}</div>
                      <div className="amenity-full-desc" aria-hidden={!isExpanded}>
                        {amenity.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Transition into Chapter 6 (Sunset) */}
        <WaveTransition fillColor="#FFF7E6" bg="#FFFFFF" />

        {/* ==========================================================
            CHAPTER SIX: "Stay a little longer."
            ========================================================== */}
        <section
          id="chapter-six"
          className="chapter chapter-six"
          aria-labelledby="ch6-heading"
        >
          <div className="container">
            {/* Illustrated Sunset Artwork */}
            <div className="ch6-sunset-art reveal" style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  left: '8%',
                  top: '15px',
                  width: '74px',
                  height: '74px',
                  opacity: 0.92,
                  animation: !animPaused ? 'bob 3.6s ease-in-out infinite' : 'none',
                  zIndex: 2,
                }}
                aria-hidden="true"
              >
                <TealTube />
              </div>

              <SunIllustration sunset className="ch6-sun-graphic" />

              <div className="chapter-badge chapter-badge-sunset">
                CHAPTER 06 · YOUR GOA HOLIDAY
              </div>

              <h2 id="ch6-heading" className="ch6-heading">
                Good days look like this.
              </h2>

              <p className="ch6-subtext">
                Three king bedrooms, a private pool, and the slow charm of Siolim. Make Casa Maré the
                place your favourite Goa memories start.
              </p>
            </div>

            {/* Practical Booking Invitation Card */}
            <div className="ch6-card-cta reveal">
              <div className="ch6-facts-bar">
                <div className="ch6-fact-item">
                  <div className="ch6-fact-val">2:00 PM</div>
                  <div className="ch6-fact-lbl">Check-in after</div>
                </div>
                <div className="ch6-fact-item">
                  <div className="ch6-fact-val">11:00 AM</div>
                  <div className="ch6-fact-lbl">Checkout before</div>
                </div>
                <div className="ch6-fact-item">
                  <div className="ch6-fact-val">9 Guests</div>
                  <div className="ch6-fact-lbl">Max Capacity</div>
                </div>
                <div className="ch6-fact-item">
                  <div className="ch6-fact-val">Snigdha</div>
                  <div className="ch6-fact-lbl">Your Host</div>
                </div>
              </div>

              <div style={{ marginBottom: varSpaceSm }}>
                <a
                  href={AIRBNB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-coral"
                  style={{ fontSize: 17, padding: '16px 36px' }}
                >
                  Check dates on Airbnb ↗
                </a>
              </div>

              <p className="ch6-airbnb-note">
                See current prices and availability on Airbnb.
              </p>
            </div>

            {/* Frequently Asked Questions */}
            <div className="ch6-faq-container reveal">
              <div className="ch6-faq-header">
                <h3 style={{ fontSize: 26, marginBottom: 8 }}>Helpful stay details</h3>
                <p style={{ color: 'var(--ink-light)', fontSize: 14 }}>
                  Verified property policies and answers to common questions.
                </p>
              </div>

              <div role="list" aria-label="Frequently asked questions">
                {FAQS.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`faq-item-clean ${isOpen ? 'open' : ''}`}
                      role="listitem"
                    >
                      <button
                        className="faq-question-btn"
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-pane-${idx}`}
                        id={`faq-btn-${idx}`}
                      >
                        <span>{faq.q}</span>
                        <span className="faq-icon-arrow" aria-hidden="true">
                          ↓
                        </span>
                      </button>

                      <div
                        id={`faq-answer-pane-${idx}`}
                        className="faq-answer-pane"
                        role="region"
                        aria-labelledby={`faq-btn-${idx}`}
                      >
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ──────────────────────────────────────────────── */}
      <footer className="site-footer" role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-title">{PROPERTY.name}</div>
              <p className="footer-brand-desc">
                An elegantly designed 3-bedroom luxury villa with private pool in Siolim, North Goa.
                Brought to you by {PROPERTY.brand}.
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: 'var(--yellow)' }}>
                📍 Siolim · North Goa · India
              </div>
            </div>

            <div>
              <div className="footer-col-title">The Holiday</div>
              <nav className="footer-links-list" aria-label="Footer quick links">
                <a href="#chapter-one" className="footer-link">
                  Welcome to Goa
                </a>
                <a href="#chapter-two" className="footer-link">
                  Villa Overview
                </a>
                <a href="#chapter-three" className="footer-link">
                  Private Pool Courtyard
                </a>
                <a href="#chapter-four" className="footer-link">
                  Rooms & Spaces
                </a>
                <a href="#chapter-five" className="footer-link">
                  Holiday Rhythms
                </a>
                <a href="#chapter-six" className="footer-link">
                  Book on Airbnb
                </a>
              </nav>
            </div>

            <div>
              <div className="footer-col-title">Booking & Host</div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 16 }}>
                Host: {PROPERTY.host}
                <br />
                Brand: {PROPERTY.brand}
                <br />
                All rates & live calendars managed on Airbnb.
              </p>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-yellow btn-sm"
              >
                View Airbnb Listing ↗
              </a>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              © {new Date().getFullYear()} Casa Maré · {PROPERTY.brand}. All rights reserved.
            </div>
            <div>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-airbnb-badge"
              >
                Official Airbnb Property ↗
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── STICKY MOBILE BOOKING BAR ─────────────────────────────── */}
      <aside className="mobile-bar" aria-label="Quick mobile booking action">
        <div className="mobile-bar-info">
          <div className="mobile-bar-name">{PROPERTY.name}</div>
          <div className="mobile-bar-meta">Up to 9 guests · 3 King Beds · Pool</div>
        </div>
        <a
          href={AIRBNB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-coral btn-sm"
        >
          Check dates ↗
        </a>
      </aside>

      {/* ─── PAUSE/RESUME ANIMATION ACCESSIBILITY CONTROL ──────────── */}
      <button
        className="pause-btn"
        onClick={() => setAnimPaused((prev) => !prev)}
        aria-label={animPaused ? 'Resume page animations' : 'Pause page animations'}
        title={animPaused ? 'Resume animations' : 'Pause animations'}
      >
        {animPaused ? '▶ Resume Motion' : '⏸ Pause Motion'}
      </button>

      {/* ─── LIGHTBOX MODAL ────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${GALLERY_IMAGES[lightboxIndex]?.caption}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          <div className="lb-box">
            <button
              className="lb-close"
              onClick={closeLightbox}
              aria-label="Close photo viewer"
            >
              ✕
            </button>

            <img
              src={GALLERY_IMAGES[lightboxIndex]?.src}
              alt={GALLERY_IMAGES[lightboxIndex]?.alt}
              className="lb-img"
            />

            <div className="lb-nav">
              <button
                className="lb-btn"
                onClick={prevLightbox}
                aria-label="Previous photo"
              >
                ←
              </button>
              <div className="lb-caption">
                {GALLERY_IMAGES[lightboxIndex]?.caption}
              </div>
              <button
                className="lb-btn"
                onClick={nextLightbox}
                aria-label="Next photo"
              >
                →
              </button>
            </div>

            <div className="lb-count">
              {lightboxIndex + 1} of {GALLERY_IMAGES.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const varSpaceSm = '8px';
