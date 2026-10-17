import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
  AREA_HIGHLIGHTS,
  PRICING_CONFIG,
  INITIAL_BOOKED_DATES,
} from './content';

// ─── AIRBNB BOOKING URL (Verified) ────────────────────────────
const AIRBNB_URL = PROPERTY.airbnbUrl;
const CURRENT_YEAR = new Date().getFullYear();

// ─── SVG VECTOR ILLUSTRATION SYSTEM ───────────────────────────

/** Coral Sky Stays Brand Logo Mark */
const CoralSkyLogo = ({
  className = '',
  style = {},
  size = 28,
  variant = 'white',
}: {
  className?: string;
  style?: React.CSSProperties;
  size?: number;
  variant?: 'white' | 'coral';
}) => (
  <img
    src={variant === 'coral' ? '/images/coral-sky-mark-coral.png' : '/images/coral-sky-mark-white.png'}
    alt="Coral Sky Stays"
    width={size}
    height={Math.round(size * (263 / 635))}
    className={className}
    style={{ objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle', ...style }}
  />
);

/** Striped Terracotta & Ivory Swim Ring */
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
    <ellipse cx="60" cy="106" rx="42" ry="10" fill="rgba(38, 27, 24, 0.16)" />
    {/* Outer tube circle: Coral Sky Terracotta */}
    <circle cx="60" cy="56" r="48" fill="#E26A51" stroke="#261B18" strokeWidth="3" />
    {/* Alternating Oyster Ivory stripes */}
    <path
      d="M60 8 A48 48 0 0 1 108 56 L88 56 A28 28 0 0 0 60 28 Z"
      fill="#FFF8F2"
      stroke="#261B18"
      strokeWidth="2.5"
    />
    <path
      d="M60 104 A48 48 0 0 1 12 56 L32 56 A28 28 0 0 0 60 84 Z"
      fill="#FFF8F2"
      stroke="#261B18"
      strokeWidth="2.5"
    />
    {/* Inner hole with Pool Turquoise reflection */}
    <circle cx="60" cy="56" r="28" fill="#76C4BA" stroke="#261B18" strokeWidth="3" />
    {/* Inflated gloss highlight */}
    <path
      d="M36 34 Q60 18, 84 34"
      stroke="rgba(255, 255, 255, 0.7)"
      strokeWidth="5"
      strokeLinecap="round"
      fill="none"
    />
    {/* Subtle 3D inner shade */}
    <circle cx="60" cy="56" r="28" fill="none" stroke="rgba(38, 27, 24, 0.15)" strokeWidth="4" />
  </svg>
);

/** Golden Ochre & Deep Coastal Teal Pattern Swim Ring */
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
    <ellipse cx="60" cy="104" rx="40" ry="9" fill="rgba(38, 27, 24, 0.14)" />
    {/* Tube outer body: Golden Sun Ochre */}
    <circle cx="60" cy="56" r="46" fill="#EFA94A" stroke="#261B18" strokeWidth="3" />
    {/* Polka dots / patterns: Deep Coastal Teal */}
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
          fill="#265D5B"
          stroke="#261B18"
          strokeWidth="1.5"
        />
      );
    })}
    {/* Inner hole: Pool Turquoise */}
    <circle cx="60" cy="56" r="26" fill="#76C4BA" stroke="#261B18" strokeWidth="3" />
    {/* Highlight curve */}
    <path
      d="M38 32 Q60 20, 82 32"
      stroke="rgba(255, 255, 255, 0.75)"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

/** Lagoon Pool Turquoise Swim Ring */
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
    <ellipse cx="60" cy="104" rx="38" ry="8" fill="rgba(38, 27, 24, 0.12)" />
    <circle cx="60" cy="56" r="46" fill="#76C4BA" stroke="#261B18" strokeWidth="3" />
    {/* Tropical accents: Coral Sky & Sun Ochre */}
    <circle cx="40" cy="38" r="4" fill="#E26A51" />
    <circle cx="80" cy="40" r="4" fill="#EFA94A" />
    <circle cx="78" cy="74" r="4" fill="#E26A51" />
    <circle cx="42" cy="74" r="4" fill="#EFA94A" />
    {/* Inner hole: Warm Ivory */}
    <circle cx="60" cy="56" r="26" fill="#FFF8F2" stroke="#261B18" strokeWidth="3" />
    <path
      d="M38 32 Q60 20, 82 32"
      stroke="rgba(255, 255, 255, 0.7)"
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
          stroke={sunset ? '#E26A51' : '#EFA94A'}
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
      fill={sunset ? 'url(#sunsetSunGrad)' : '#EFA94A'}
      stroke="#261B18"
      strokeWidth="3"
    />
    {/* Cheek blush */}
    <circle cx="56" cy="74" r="5" fill={sunset ? '#C7543C' : '#F5BAA2'} opacity="0.8" />
    <circle cx="84" cy="74" r="5" fill={sunset ? '#C7543C' : '#F5BAA2'} opacity="0.8" />
    {/* Cute eyes & smile */}
    <circle cx="58" cy="66" r="3" fill="#261B18" />
    <circle cx="82" cy="66" r="3" fill="#261B18" />
    <path
      d="M65 74 Q70 80, 75 74"
      stroke="#261B18"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <defs>
      <linearGradient id="sunsetSunGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#EFA94A" />
        <stop offset="100%" stopColor="#E26A51" />
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
    {/* Trunk: Tropical Botanical Green */}
    <path
      d={
        swayRight
          ? 'M70 235 Q78 160, 85 110 Q90 60, 95 30'
          : 'M90 235 Q82 160, 75 110 Q70 60, 65 30'
      }
      stroke="#446F55"
      strokeWidth="11"
      strokeLinecap="round"
      fill="none"
    />
    {/* Palm fronds: Botanical Green */}
    <g transform={swayRight ? 'translate(95, 30)' : 'translate(65, 30)'}>
      {/* Frond 1 */}
      <path
        d="M0 0 Q-40 -40, -75 -25 Q-50 -10, 0 0"
        fill="#446F55"
        stroke="#261B18"
        strokeWidth="2"
      />
      {/* Frond 2 */}
      <path
        d="M0 0 Q-15 -60, 15 -65 Q10 -35, 0 0"
        fill="#446F55"
        stroke="#261B18"
        strokeWidth="2"
      />
      {/* Frond 3 */}
      <path
        d="M0 0 Q45 -55, 75 -25 Q50 -5, 0 0"
        fill="#446F55"
        stroke="#261B18"
        strokeWidth="2"
      />
      {/* Frond 4 */}
      <path
        d="M0 0 Q60 -10, 75 25 Q45 20, 0 0"
        fill="#446F55"
        stroke="#261B18"
        strokeWidth="2"
      />
      {/* Frond 5 */}
      <path
        d="M0 0 Q-50 10, -70 35 Q-40 20, 0 0"
        fill="#446F55"
        stroke="#261B18"
        strokeWidth="2"
      />
      {/* Coconuts */}
      <circle cx="-6" cy="6" r="6" fill="#5C3E26" stroke="#261B18" strokeWidth="1.8" />
      <circle cx="6" cy="8" r="6.5" fill="#5C3E26" stroke="#261B18" strokeWidth="1.8" />
      <circle cx="1" cy="14" r="5.5" fill="#5C3E26" stroke="#261B18" strokeWidth="1.8" />
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
      stroke="#261B18"
      strokeWidth="3.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Main body: Golden Sun Ochre */}
    <rect
      x="16"
      y="36"
      width="68"
      height="52"
      rx="12"
      fill="#EFA94A"
      stroke="#261B18"
      strokeWidth="3"
    />
    {/* Leather straps: Coral Sky Terracotta */}
    <rect x="28" y="36" width="8" height="52" fill="#E26A51" stroke="#261B18" strokeWidth="2" />
    <rect x="64" y="36" width="8" height="52" fill="#E26A51" stroke="#261B18" strokeWidth="2" />
    {/* Ivory buckle */}
    <rect x="29" y="58" width="6" height="8" rx="2" fill="#FFF8F2" stroke="#261B18" strokeWidth="1.5" />
    <rect x="65" y="58" width="6" height="8" rx="2" fill="#FFF8F2" stroke="#261B18" strokeWidth="1.5" />
    {/* Luggage tag */}
    <path d="M48 36 L52 48 L44 48 Z" fill="#E26A51" stroke="#261B18" strokeWidth="1.5" />
  </svg>
);

/** Striped Ivory & Coral Sky Beach Umbrella */
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
    <line x1="50" y1="42" x2="50" y2="114" stroke="#261B18" strokeWidth="3.5" strokeLinecap="round" />
    {/* Canopy: Coral Sky Terracotta */}
    <path
      d="M10 44 Q50 8, 90 44 Z"
      fill="#E26A51"
      stroke="#261B18"
      strokeWidth="2.5"
    />
    {/* Ivory stripes */}
    <path d="M30 44 Q44 20, 50 12 Q56 20, 70 44 Z" fill="#FFF8F2" stroke="#261B18" strokeWidth="2" />
    {/* Finial top: Golden Ochre */}
    <circle cx="50" cy="11" r="3" fill="#EFA94A" stroke="#261B18" strokeWidth="1.5" />
  </svg>
);

/** Striped Coral Sky Beach Towel */
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
    <rect x="10" y="10" width="80" height="40" rx="4" fill="#E26A51" stroke="#261B18" strokeWidth="2" />
    <rect x="25" y="10" width="12" height="40" fill="#FFF8F2" />
    <rect x="47" y="10" width="12" height="40" fill="#FFF8F2" />
    <rect x="69" y="10" width="12" height="40" fill="#FFF8F2" />
    {/* Fringe ends */}
    <line x1="10" y1="14" x2="6" y2="14" stroke="#261B18" strokeWidth="1.5" />
    <line x1="10" y1="24" x2="6" y2="24" stroke="#261B18" strokeWidth="1.5" />
    <line x1="10" y1="34" x2="6" y2="34" stroke="#261B18" strokeWidth="1.5" />
    <line x1="10" y1="44" x2="6" y2="44" stroke="#261B18" strokeWidth="1.5" />
  </svg>
);

/** Tropical Coconut Drink */
const CoconutDrink = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 80 80"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Straw: Coral Sky Terracotta */}
    <path d="M48 20 L58 6 L64 10" stroke="#E26A51" strokeWidth="3" strokeLinecap="round" fill="none" />
    {/* Coconut body */}
    <path
      d="M20 40 C 20 62, 60 62, 60 40 C 60 38, 20 38, 20 40 Z"
      fill="#5C3E26"
      stroke="#261B18"
      strokeWidth="2.5"
    />
    {/* Inner coconut water top */}
    <ellipse cx="40" cy="38" rx="19" ry="6" fill="#FFF8F2" stroke="#261B18" strokeWidth="1.8" />
    {/* Lime slice: Pool Turquoise & Botanical Green */}
    <circle cx="28" cy="32" r="7" fill="#76C4BA" stroke="#261B18" strokeWidth="1.5" />
    <circle cx="28" cy="32" r="4.5" fill="#446F55" />
  </svg>
);

/** Coastal Teal Sunglasses */
const Sunglasses = ({
  className = '',
  style = {},
}: {
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    viewBox="0 0 90 40"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
    role="presentation"
  >
    {/* Left Frame: Coastal Teal */}
    <rect x="8" y="8" width="32" height="22" rx="9" fill="#265D5B" stroke="#261B18" strokeWidth="2" />
    {/* Right Frame: Coastal Teal */}
    <rect x="50" y="8" width="32" height="22" rx="9" fill="#265D5B" stroke="#261B18" strokeWidth="2" />
    {/* Bridge */}
    <path d="M40 16 Q 45 13, 50 16" stroke="#261B18" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Left Lens Reflection: Pool Turquoise */}
    <ellipse cx="20" cy="18" rx="9" ry="6" fill="#76C4BA" opacity="0.8" />
    {/* Right Lens Reflection: Pool Turquoise */}
    <ellipse cx="62" cy="18" rx="9" ry="6" fill="#76C4BA" opacity="0.8" />
  </svg>
);

// ─── CUSTOM VECTOR ICONS (No generic emojis) ───────────────────
const SvgIcon = ({ name, size = 20, color = 'currentColor' }: { name: string; size?: number; color?: string }) => {
  switch (name) {
    case 'users':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case 'bed':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>
        </svg>
      );
    case 'bath':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1Z"/><path d="M6 12V5a2 2 0 0 1 2-2h3v2"/><circle cx="15" cy="5" r="1"/>
        </svg>
      );
    case 'pool':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
        </svg>
      );
    case 'shield':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      );
    case 'car':
    case 'parking':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 16V8h4a2 2 0 0 1 0 4H9"/>
        </svg>
      );
    case 'wifi':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>
      );
    case 'ac':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="8" rx="2"/><path d="M6 16v3M10 16v3M14 16v3M18 16v3"/>
        </svg>
      );
    case 'ev':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      );
    case 'workspace':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      );
    case 'kitchen':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 19h16v-7a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v7Z"/><circle cx="9" cy="14" r="1.5"/><circle cx="15" cy="14" r="1.5"/>
        </svg>
      );
    case 'washer':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="2" width="18" height="20" rx="3"/><circle cx="12" cy="13" r="5"/><circle cx="12" cy="6" r="1"/>
        </svg>
      );
    case 'tv':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="7" width="20" height="13" rx="2"/><polyline points="17 2 12 7 7 2"/>
        </svg>
      );
    case 'balcony':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 10h18v10H3z"/><path d="M7 10v10M11 10v10M15 10v10M19 10v10"/><path d="M4 4h16"/>
        </svg>
      );
    case 'coffee':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h15v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>
        </svg>
      );
    case 'compass':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      );
    case 'beach':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="4" r="2"/><path d="M12 9v13"/><path d="M5 9c2-2 12-2 14 0"/><path d="M2 19c3-1 6-1 10 0 4 1 7 1 10 0"/>
        </svg>
      );
    case 'cafe':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><path d="M6 2v3M10 2v3M14 2v3"/>
        </svg>
      );
    case 'market':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
        </svg>
      );
    case 'heritage':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      );
    case 'calendar':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      );
    case 'check':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      );
    case 'armchair':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 11V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4M4 11h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6zM3 14h2M19 14h2M6 19v2M18 19v2"/>
        </svg>
      );
    case 'cup':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1M3 8h15v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 2v3M10 2v3M14 2v3"/>
        </svg>
      );
    case 'plant':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M7 14h10l-1.5 7h-7L7 14z"/><path d="M12 14V6M12 6c-3-2-5 1-5 4 3 0 5-2 5-4zM12 9c3-2 5 1 5 4-3 0-5-2-5-4z"/>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      );
  }
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
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => obsRef.current?.observe(el));
    return () => obsRef.current?.disconnect();
  }, []);
}

// ─── MAIN APPLICATION COMPONENT ───────────────────────────────
export default function App() {
  const [animPaused, setAnimPaused] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Chapter 3: Pool ripple interactions
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const [tubeBouncing, setTubeBouncing] = useState(false);

  // Chapter 4: Space Explorer Tab — Default is 'outdoors' (pool)
  const [activeSpaceId, setActiveSpaceId] = useState('outdoors');

  // Chapter 5: Mood Selector
  const [activeMoodId, setActiveMoodId] = useState('mornings');
  const [expandedAmenity, setExpandedAmenity] = useState<string | null>(null);

  // Calendar & Pricing Interactive State
  // Use October 2026 as reference base
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(9); // 0-indexed: 9 = October
  const [checkIn, setCheckIn] = useState<string | null>('2026-10-28');
  const [checkOut, setCheckOut] = useState<string | null>('2026-10-31');
  const [guests, setGuests] = useState<number>(4);

  // Direct Inquiry WhatsApp modal
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');

  // Chapter 6: FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Global Lightbox
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [lightboxFilter, setLightboxFilter] = useState<string>('all');

  useScrollObserver();

  // Prefers-reduced-motion listener
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setAnimPaused(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Navbar background change on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Pool Ring Click Interaction (Animated Ripples)
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

  // Filtered gallery images for Lightbox
  const filteredGallery = useMemo(() => {
    if (lightboxFilter === 'all') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === lightboxFilter);
  }, [lightboxFilter]);

  // Lightbox handlers
  const openLightboxAt = useCallback((index: number, category: string = 'all') => {
    setLightboxFilter(category);
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((curr) => (curr !== null ? (curr + 1) % filteredGallery.length : null));
  }, [filteredGallery.length]);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((curr) =>
      curr !== null ? (curr - 1 + filteredGallery.length) % filteredGallery.length : null
    );
  }, [filteredGallery.length]);

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

  // ─── CALENDAR COMPUTATIONS ────────────────────────────────────
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  // Generate days in current viewing month
  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1).getDay(); // 0 = Sunday
    const totalDays = new Date(viewYear, viewMonth + 1, 0).getDate();
    const days: { dateStr: string; dayNum: number; isBooked: boolean; isWeekend: boolean }[] = [];

    for (let i = 1; i <= totalDays; i++) {
      const mStr = String(viewMonth + 1).padStart(2, '0');
      const dStr = String(i).padStart(2, '0');
      const dateStr = `${viewYear}-${mStr}-${dStr}`;
      const dayOfWeek = new Date(viewYear, viewMonth, i).getDay();
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Friday & Saturday
      const isBooked = INITIAL_BOOKED_DATES.includes(dateStr);
      days.push({ dateStr, dayNum: i, isBooked, isWeekend });
    }

    return { firstDay, days };
  }, [viewYear, viewMonth]);

  // Handle clicking on a calendar day
  const handleDateClick = (dateStr: string, isBooked: boolean) => {
    if (isBooked) return;

    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(dateStr);
      setCheckOut(null);
    } else if (checkIn && !checkOut) {
      if (dateStr <= checkIn) {
        setCheckIn(dateStr);
        setCheckOut(null);
      } else {
        // Check if any date between checkIn and dateStr is booked
        let hasBookedInRange = false;
        const start = new Date(checkIn);
        const end = new Date(dateStr);
        for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
          const ds = d.toISOString().split('T')[0];
          if (INITIAL_BOOKED_DATES.includes(ds)) {
            hasBookedInRange = true;
            break;
          }
        }
        if (hasBookedInRange) {
          setCheckIn(dateStr);
          setCheckOut(null);
        } else {
          setCheckOut(dateStr);
        }
      }
    }
  };

  // Pricing calculations
  const priceDetails = useMemo(() => {
    if (!checkIn || !checkOut) {
      return {
        nights: 3,
        weekdayNights: 2,
        weekendNights: 1,
        accommodationCost: PRICING_CONFIG.baseNightlyRate * 2 + PRICING_CONFIG.weekendNightlyRate,
        extraGuestCost: 0,
        cleaningFee: PRICING_CONFIG.cleaningFee,
        securityDeposit: PRICING_CONFIG.refundableDeposit,
        total: PRICING_CONFIG.baseNightlyRate * 2 + PRICING_CONFIG.weekendNightlyRate + PRICING_CONFIG.cleaningFee + PRICING_CONFIG.refundableDeposit,
        savings: 8500,
      };
    }

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    let weekdayNights = 0;
    let weekendNights = 0;

    for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
      const day = d.getDay();
      if (day === 5 || day === 6) {
        weekendNights++;
      } else {
        weekdayNights++;
      }
    }

    const totalNights = weekdayNights + weekendNights;
    const accommodationCost =
      weekdayNights * PRICING_CONFIG.baseNightlyRate +
      weekendNights * PRICING_CONFIG.weekendNightlyRate;

    const extraGuests = Math.max(0, guests - PRICING_CONFIG.extraGuestThreshold);
    const extraGuestCost = extraGuests * PRICING_CONFIG.extraGuestFee * totalNights;
    const cleaningFee = PRICING_CONFIG.cleaningFee;
    const securityDeposit = PRICING_CONFIG.refundableDeposit;
    const total = accommodationCost + extraGuestCost + cleaningFee + securityDeposit;
    const savings = Math.round(total * 0.14); // Average 14% platform service fee saved

    return {
      nights: totalNights,
      weekdayNights,
      weekendNights,
      accommodationCost,
      extraGuestCost,
      cleaningFee,
      securityDeposit,
      total,
      savings,
    };
  }, [checkIn, checkOut, guests]);

  // Formatted date string for WhatsApp
  const generateWhatsAppMessage = () => {
    const text = `Hello Snigdha & Coral Sky Stays! 🌴
I would like to inquire about booking Casa Maré Villa in Siolim, Goa.

📅 Check-in: ${checkIn || 'To be decided'}
📅 Check-out: ${checkOut || 'To be decided'}
🌙 Nights: ${priceDetails.nights}
👥 Guests: ${guests}
💰 Estimated Total: ₹${priceDetails.total.toLocaleString('en-IN')}

Name: ${guestName || 'Guest'}
Phone: ${guestPhone || 'Provided on chat'}

Please confirm availability and sharing payment details (UPI/Bank Transfer). Thank you!`;

    return `https://wa.me/${PRICING_CONFIG.whatsappInquiryNumber}?text=${encodeURIComponent(text)}`;
  };

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
              <CoralSkyLogo size={22} />
            </div>
            <div>
              <span className="nav-title">{PROPERTY.name}</span>
              <span className="nav-tagline">CORAL SKY STAYS · SIOLIM, GOA</span>
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
              Goa Moods
            </a>
            <a href="#chapter-pricing" className="nav-link" role="menuitem">
              Dates & Pricing
            </a>
            <a href="#chapter-six" className="nav-link" role="menuitem">
              Stay Details
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
          Welcome
        </a>
        <a
          href="#chapter-two"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          The Villa & Layout
        </a>
        <a
          href="#chapter-three"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Private Pool
        </a>
        <a
          href="#chapter-four"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Explore Rooms
        </a>
        <a
          href="#chapter-five"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Goa Days & Amenities
        </a>
        <a
          href="#chapter-pricing"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Calendar & Pricing
        </a>
        <a
          href="#chapter-six"
          className="mobile-nav-link"
          onClick={() => setMobileMenuOpen(false)}
        >
          Book Your Stay
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
            CHAPTER ONE: "Goa mode: ON." (Arrival Scene)
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
                  📍 Casa Maré · Siolim, North Goa
                </div>

                <h1 id="ch1-heading" className="ch1-headline">
                  Goa mode: ON.
                </h1>

                <p className="ch1-subtitle">
                  Your own villa. Your own pool. Time together.
                </p>

                {/* Confirmed accommodation facts */}
                <div className="ch1-meta-pills" role="list" aria-label="Key property facts">
                  <div className="ch1-pill" role="listitem">
                    <SvgIcon name="users" size={16} color="var(--coral)" />
                    <span>Up to 9 guests</span>
                  </div>
                  <div className="ch1-pill" role="listitem">
                    <SvgIcon name="bed" size={16} color="var(--coral)" />
                    <span>3 bedrooms</span>
                  </div>
                  <div className="ch1-pill" role="listitem">
                    <SvgIcon name="pool" size={16} color="var(--coral)" />
                    <span>Private pool</span>
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
                    Explore your stay ↓
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
                    alt="Casa Maré private pool courtyard in Siolim, North Goa"
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

                {/* Second Yellow Patterned Ring */}
                <div
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '10px',
                    width: '74px',
                    height: '74px',
                    zIndex: 3,
                    animation: !animPaused ? 'bobSlow 4.2s ease-in-out infinite 0.6s' : 'none',
                  }}
                >
                  <YellowTube />
                </div>

                {/* Striped Umbrella & Beach Towel Accents */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '30%',
                    width: '70px',
                    height: '90px',
                    zIndex: 1,
                    pointerEvents: 'none',
                  }}
                >
                  <StripedUmbrella />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '-18px',
                    left: '12%',
                    width: '76px',
                    height: '46px',
                    zIndex: 3,
                    pointerEvents: 'none',
                  }}
                >
                  <StripedTowel />
                </div>

                {/* Tropical Coconut Drink & Sunglasses */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '18%',
                    width: '54px',
                    height: '54px',
                    zIndex: 4,
                  }}
                >
                  <CoconutDrink />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    right: '32%',
                    width: '64px',
                    height: '32px',
                    zIndex: 4,
                  }}
                >
                  <Sunglasses />
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
                <span>Scroll into holiday mode ↓</span>
                <div className="scroll-arrow" aria-hidden="true">
                  ↓
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Transition into Chapter 2 */}
        <WaveTransition fillColor="#FFF8F2" bg="#FFF8F2" />

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
                  YOUR PRIVATE VILLA
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
                          <SvgIcon name={fact.icon} size={18} color="var(--coral)" />
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
        <WaveTransition fillColor="#1C4D4A" bg="#FFF8F2" />

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
                THE PRIVATE POOL
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
                onClick={() => {
                  setLightboxFilter('pool');
                  openLightboxAt(0);
                }}
                aria-label="See pool photos in fullscreen"
              >
                See pool photos 📸
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
        <WaveTransition fillColor="#FFF8F2" bg="#183E3C" />

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
                SPACES & LIVING
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
                      <SvgIcon name={space.iconType} size={18} color="currentColor" />
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
                    onClick={() => {
                      setLightboxFilter('all');
                      openLightboxAt(0);
                    }}
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
        <WaveTransition fillColor="#FFFFFF" bg="#FFF8F2" />

        {/* ==========================================================
            CHAPTER FIVE: "What’s your Goa mood?" & Amenities
            ========================================================== */}
        <section
          id="chapter-five"
          className="chapter chapter-five"
          aria-labelledby="ch5-heading"
        >
          <div className="container">
            <div className="ch5-header reveal">
              <div className="chapter-badge chapter-badge-cream">
                HOLIDAY RHYTHMS & AMENITIES
              </div>

              <h2 id="ch5-heading">What’s your Goa mood?</h2>

              <p>
                From lazy morning coffees on the balcony to midday pool dips and coastal discoveries.
                Choose your rhythm below for a preview of the stay.
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
                    <SvgIcon name={mood.icon} size={18} color="currentColor" />
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
                  HOLIDAY INSPIRATION
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
                        <SvgIcon name={amenity.icon} size={22} color="var(--coral)" />
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

            {/* Local Siolim & North Goa Highlights */}
            <div style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-2xl)', borderTop: '1px solid rgba(23,62,59,0.08)' }} className="reveal">
              <div className="amenities-title">
                <h3>North Goa on your doorstep.</h3>
                <p style={{ color: 'var(--ink-muted)', fontSize: 14 }}>
                  Peaceful heritage village charm in Siolim with coastal hotspots within easy reach.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-md)' }}>
                {AREA_HIGHLIGHTS.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'var(--cream)',
                      padding: '20px',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid rgba(23,62,59,0.08)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <SvgIcon name={item.icon} size={16} color="var(--coral)" />
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--ink)' }}>
                        {item.category}
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: 'var(--ink-light)', lineHeight: 1.6 }}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Transition into Calendar & Pricing Section */}
        <WaveTransition fillColor="#FFF8F2" bg="#FFFFFF" />

        {/* ==========================================================
            CALENDAR & PRICING SECTION: Dates, Pricing & Direct Reserve
            ========================================================== */}
        <section
          id="chapter-pricing"
          className="chapter chapter-pricing"
          aria-labelledby="pricing-heading"
        >
          <div className="container">
            <div className="pricing-header reveal">
              <div className="chapter-badge chapter-badge-sky">
                DATES & TRANSPARENT PRICING
              </div>
              <h2 id="pricing-heading">Plan your Goa holiday dates.</h2>
              <p>
                Select your preferred dates below to view real-time estimates, weekend rates, and
                instant booking options. No hidden surcharges.
              </p>
            </div>

            <div className="pricing-layout-grid reveal">
              {/* Left Column: Interactive Monthly Calendar */}
              <div className="cal-card">
                <div className="cal-nav-bar">
                  <div className="cal-month-title">
                    {monthNames[viewMonth]} {viewYear}
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <button
                      className="cal-nav-btn"
                      onClick={handlePrevMonth}
                      aria-label="Previous month"
                    >
                      ‹
                    </button>
                    <button
                      className="cal-nav-btn"
                      onClick={handleNextMonth}
                      aria-label="Next month"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className="cal-weekdays">
                  <div>Su</div>
                  <div>Mo</div>
                  <div>Tu</div>
                  <div>We</div>
                  <div>Th</div>
                  <div>Fr</div>
                  <div>Sa</div>
                </div>

                <div className="cal-days-grid">
                  {/* Empty cells before month start */}
                  {Array.from({ length: calendarDays.firstDay }).map((_, idx) => (
                    <div key={`empty-${idx}`} className="cal-day-cell empty" />
                  ))}

                  {/* Month days */}
                  {calendarDays.days.map((d) => {
                    const isStart = checkIn === d.dateStr;
                    const isEnd = checkOut === d.dateStr;
                    const inRange = Boolean(checkIn && checkOut && d.dateStr > checkIn && d.dateStr < checkOut);
                    const isBooked = d.isBooked;

                    let classes = 'cal-day-cell';
                    if (isBooked) classes += ' booked';
                    if (isStart) classes += ' selected-start';
                    if (isEnd) classes += ' selected-end';
                    if (inRange) classes += ' in-range';

                    return (
                      <button
                        key={d.dateStr}
                        className={classes}
                        onClick={() => handleDateClick(d.dateStr, isBooked)}
                        disabled={isBooked}
                        aria-label={`${d.dayNum} ${monthNames[viewMonth]} ${viewYear}${isBooked ? ' (Reserved)' : ''}`}
                      >
                        <span>{d.dayNum}</span>
                        {!isBooked && (
                          <span className="cal-day-price">
                            {d.isWeekend ? '₹22k' : '₹18.5k'}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="cal-legend">
                  <div className="cal-legend-item">
                    <span className="cal-legend-dot" style={{ background: 'var(--coral)' }} />
                    <span>Selected Dates</span>
                  </div>
                  <div className="cal-legend-item">
                    <span className="cal-legend-dot" style={{ background: 'rgba(23,62,59,0.1)' }} />
                    <span>Reserved</span>
                  </div>
                  <div className="cal-legend-item">
                    <span className="cal-legend-dot" style={{ background: 'var(--cream)', border: '1px solid var(--teal)' }} />
                    <span>Available</span>
                  </div>
                </div>

                {/* Preset quick buttons */}
                <div style={{ marginTop: 'var(--space-md)' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ink-muted)', textTransform: 'uppercase', marginBottom: 6 }}>
                    Quick Date Presets:
                  </div>
                  <div className="cal-presets">
                    <button
                      className="cal-preset-btn"
                      onClick={() => {
                        setCheckIn('2026-10-28');
                        setCheckOut('2026-10-31');
                      }}
                    >
                      Late Oct Break (3 nights)
                    </button>
                    <button
                      className="cal-preset-btn"
                      onClick={() => {
                        setCheckIn('2026-11-01');
                        setCheckOut('2026-11-04');
                      }}
                    >
                      Nov Escape (3 nights)
                    </button>
                    <button
                      className="cal-preset-btn"
                      onClick={() => {
                        setCheckIn('2026-11-08');
                        setCheckOut('2026-11-13');
                      }}
                    >
                      Mid-Nov Holiday (5 nights)
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Pricing Breakdown & Booking Options */}
              <div className="price-card">
                <div className="price-card-header">
                  <div className="price-card-rate">
                    <span className="price-big-number">
                      ₹{PRICING_CONFIG.baseNightlyRate.toLocaleString('en-IN')}
                    </span>
                    <span className="price-period">/ night (entire 3BHK villa)</span>
                  </div>
                  <div className="direct-savings-badge">
                    <SvgIcon name="check" size={12} color="#587653" />
                    <span>Save ~14% booking via Coral Sky Stays</span>
                  </div>
                </div>

                <div className="pricing-controls">
                  {/* Selected Dates Display */}
                  <div className="dates-pill-box">
                    <div className="dates-pill-item">
                      <span className="dates-pill-lbl">Check-in</span>
                      <span className="dates-pill-val">{checkIn || 'Pick date'}</span>
                    </div>
                    <div className="dates-arrow">→</div>
                    <div className="dates-pill-item">
                      <span className="dates-pill-lbl">Checkout</span>
                      <span className="dates-pill-val">{checkOut || 'Pick date'}</span>
                    </div>
                  </div>

                  {/* Guest count selector */}
                  <div className="pricing-control-row">
                    <div>
                      <div className="pricing-control-label">Guests</div>
                      <div className="pricing-control-sub">Up to 9 guests max</div>
                    </div>
                    <div className="guest-counter">
                      <button
                        className="guest-counter-btn"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        disabled={guests <= 1}
                        aria-label="Decrease guests"
                      >
                        –
                      </button>
                      <span className="guest-count-val">{guests}</span>
                      <button
                        className="guest-counter-btn"
                        onClick={() => setGuests((g) => Math.min(PROPERTY.capacity.guests, g + 1))}
                        disabled={guests >= PROPERTY.capacity.guests}
                        aria-label="Increase guests"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown Line Items */}
                <div className="price-breakdown-list">
                  <div className="price-line-item">
                    <span>
                      Stay ({priceDetails.nights} {priceDetails.nights === 1 ? 'night' : 'nights'} · {priceDetails.weekdayNights} weekday, {priceDetails.weekendNights} weekend)
                    </span>
                    <span>₹{priceDetails.accommodationCost.toLocaleString('en-IN')}</span>
                  </div>

                  {priceDetails.extraGuestCost > 0 && (
                    <div className="price-line-item">
                      <span>Extra guests ({guests - PRICING_CONFIG.extraGuestThreshold} × ₹{PRICING_CONFIG.extraGuestFee})</span>
                      <span>₹{priceDetails.extraGuestCost.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="price-line-item">
                    <span>One-time cleaning & sanitization fee</span>
                    <span>₹{priceDetails.cleaningFee.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="price-line-item">
                    <span>Refundable security deposit</span>
                    <span>₹{priceDetails.securityDeposit.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="price-line-item highlight">
                    <span>Estimated direct booking savings</span>
                    <span>– ₹{priceDetails.savings.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="price-total-row">
                  <span className="price-total-label">Estimated Total</span>
                  <span className="price-total-value">
                    ₹{priceDetails.total.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="price-cta-stack">
                  <a
                    href={AIRBNB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-coral"
                    style={{ width: '100%' }}
                  >
                    Check dates on Airbnb ↗
                  </a>

                  <button
                    className="btn btn-yellow"
                    style={{ width: '100%' }}
                    onClick={() => setInquiryModalOpen(true)}
                  >
                    Inquire direct with Coral Sky Stays 💬
                  </button>
                </div>

                <div className="payment-methods-strip">
                  <span>Accepted modes:</span>
                  <span className="payment-tag">UPI / GPay</span>
                  <span className="payment-tag">Net Banking</span>
                  <span className="payment-tag">Cards</span>
                  <span className="payment-tag">Airbnb</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transition into Chapter 6 */}
        <WaveTransition fillColor="#FFF8F2" bg="#FFF8F2" />

        {/* ==========================================================
            CHAPTER SIX: "Good days look like this." (Sunset & Closing)
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
                YOUR GOA HOLIDAY
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

              <div style={{ marginBottom: '8px' }}>
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
              <img
                src="/images/coral-sky-full-white.png"
                alt="Coral Sky Stays"
                className="footer-brand-logo-img"
              />
              <div className="footer-brand-title">{PROPERTY.name}</div>
              <p className="footer-brand-desc">
                An elegantly designed 3-bedroom luxury villa with private pool in Siolim, North Goa.
                Curated and hosted by {PROPERTY.brand}.
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: 'var(--coral)' }}>
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
                  Holiday Moods
                </a>
                <a href="#chapter-pricing" className="footer-link">
                  Dates & Pricing
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
                Live calendar and verified guest reviews on Airbnb.
              </p>
              <a
                href={AIRBNB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-coral btn-sm"
              >
                View Airbnb Listing ↗
              </a>
            </div>
          </div>

          <div className="footer-bottom-bar">
            <div>
              © {CURRENT_YEAR} Casa Maré · {PROPERTY.brand}. All rights reserved.
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

      {/* ─── DIRECT INQUIRY MODAL (WHATSAPP / UPI) ──────────────────── */}
      {inquiryModalOpen && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Direct booking inquiry"
          onClick={(e) => {
            if (e.target === e.currentTarget) setInquiryModalOpen(false);
          }}
        >
          <div
            style={{
              background: 'var(--white)',
              borderRadius: 'var(--radius-2xl)',
              padding: '32px',
              maxWidth: '480px',
              width: '92%',
              position: 'relative',
              boxShadow: 'var(--shadow-xl)',
            }}
          >
            <button
              onClick={() => setInquiryModalOpen(false)}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--cream)',
                fontSize: 18,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--coral)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CoralSkyLogo size={22} />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--ink)' }}>
                  Direct Booking Inquiry
                </div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>
                  Coral Sky Stays · Casa Maré
                </div>
              </div>
            </div>

            <div style={{ background: 'var(--cream)', padding: '14px', borderRadius: 'var(--radius-md)', marginBottom: '16px', fontSize: 13, color: 'var(--ink-light)', lineHeight: 1.5 }}>
              <div>📅 <strong>Dates:</strong> {checkIn || 'Not picked'} to {checkOut || 'Not picked'} ({priceDetails.nights} nights)</div>
              <div>👥 <strong>Guests:</strong> {guests}</div>
              <div>💰 <strong>Estimated Total:</strong> ₹{priceDetails.total.toLocaleString('en-IN')}</div>
              <div style={{ color: 'var(--green)', fontWeight: 600, marginTop: 4 }}>
                ✓ Save ~14% third-party service fees
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(23,62,59,0.2)',
                    fontSize: 14,
                    background: 'var(--white)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 4 }}>
                  Contact Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid rgba(23,62,59,0.2)',
                    fontSize: 14,
                    background: 'var(--white)',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            <a
              href={generateWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-coral"
              style={{ width: '100%', marginBottom: 10 }}
            >
              Send WhatsApp Inquiry to Host 💬
            </a>

            <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-muted)' }}>
              Snigdha will confirm dates, payment instructions (UPI / Bank transfer) and check-in details.
            </div>
          </div>
        </div>
      )}

      {/* ─── LIGHTBOX MODAL ────────────────────────────────────────── */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          className="lb-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${filteredGallery[lightboxIndex]?.caption}`}
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

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
              {['all', 'pool', 'living', 'rooms', 'kitchen'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setLightboxFilter(cat);
                    setLightboxIndex(0);
                  }}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: 12,
                    fontWeight: 700,
                    background: lightboxFilter === cat ? 'var(--coral)' : 'rgba(255,255,255,0.15)',
                    color: 'var(--white)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {cat === 'rooms' ? 'Bedrooms' : cat === 'all' ? `All (${GALLERY_IMAGES.length})` : cat}
                </button>
              ))}
            </div>

            <img
              src={filteredGallery[lightboxIndex]?.src}
              alt={filteredGallery[lightboxIndex]?.alt}
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
                {filteredGallery[lightboxIndex]?.caption}
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
              {lightboxIndex + 1} of {filteredGallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
