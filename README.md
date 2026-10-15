# ☀️ Casa Maré — Luxury Holiday Villa in Siolim, North Goa

> **“Your Goa holiday starts with the first scroll.”**

A complete, responsive holiday website for **Casa Maré**, a 3-bedroom luxury villa with a private swimming pool in Siolim, North Goa. Designed and built with custom vector illustrations, smooth connected chapter transitions, interactive pool ripples, a space explorer, holiday rhythms mood selector, and direct verified Airbnb booking integration.

---

## 🌊 The Six-Chapter Scroll Experience

1. **Chapter One: “You’ve arrived in Goa.”**
   - Headline: *“Goa mode: ON.”*
   - Illustrated arrival scene with swaying palms, friendly sun, coral swim tube, and postcard-framed pool courtyard photo.
   - Key accommodation pills: 9 guests, 3 King bedrooms, 3.5 Bathrooms, 100% Private pool.
   - Clear scroll cue: *“Your holiday starts here ↓”*.

2. **Chapter Two: “Drop your bags. You’re home.”**
   - Seamless transition into warm cream and Goan azulejo tile motif.
   - Stamped **Luggage-Tag Motif Card** framing verified villa specifications.
   - Stacked tilt-hover postcards showing the spacious living lounge and king bedrooms.

3. **Chapter Three: “Pool o’clock. All day.”**
   - Expansive lagoon teal water section with animated wave dividers.
   - Centered private plunge pool photo.
   - **Interactive swimming tube**: click or tap the floating ring to generate expanding water ripples and a joyful bounce!
   - Fullscreen photo gallery action (*“See the pool photos”*).

4. **Chapter Four: “Find your favourite corner.”**
   - Quieter visual rhythm for exploring the villa.
   - **Interactive Space Explorer Tabs** with custom vector icons (Bedrooms, Living & Dining, Kitchen, Outdoors).
   - High-resolution photography, verified amenities, and clickable sub-thumbnails.

5. **Chapter Five: “What does your Goa day look like?”**
   - **Interactive Holiday Mood Selector** (*Slow mornings*, *Pool afternoons*, *Out exploring*).
   - Clean 10-item verified amenities grid with tap-to-expand details.

6. **Chapter Six: “Stay a little longer.”**
   - Warm illustrated sunset scene (peach sky, glowing golden sun, floating teal ring).
   - Practical check-in (*After 2:00 PM*) and checkout (*Before 11:00 AM*) details.
   - Primary action: **“Check dates on Airbnb”** linking to verified property listing.
   - Accessible FAQ accordion with full keyboard support.

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation & Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser.

### Production Build
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.

---

## 🛠️ Tech Stack & Architecture

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: Modern CSS3 with custom design tokens, responsive CSS Grid / Flexbox
- **Typography**: Fredoka (Display) + DM Sans (Body) via Google Fonts
- **Artwork**: 100% Custom SVG vector illustration components (tubes, palms, sun, umbrella, luggage tags)
- **Accessibility**: ARIA landmarks, keyboard focus management, `prefers-reduced-motion` detection, floating animation pause/resume control

---

## 📝 Content Management

All property information, room details, amenities, FAQs, and Airbnb links are centralized in a single file:

```
src/content.ts
```

Edit this file to update property descriptions, guest counts, room photos, or booking links.

---

## 🔗 Official Listing

- **Property**: Casa Maré
- **Location**: Siolim, North Goa, India
- **Host**: Snigdha
- **Brand**: Coral Sky Stays
- **Airbnb Listing**: [Casa Maré on Airbnb](https://www.airbnb.co.in/rooms/1784790527129114343)
