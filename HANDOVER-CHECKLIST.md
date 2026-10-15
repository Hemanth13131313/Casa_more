# Casa Maré — Handover Checklist & Creative Deliverables

## 🌴 Creative Direction: “Your Goa holiday starts with the first scroll.”

The Casa Maré website has been rebuilt from the ground up as a continuous, illustrated holiday journey. Visitors experience the warmth, sunshine, pool relaxation, and character of a Goan getaway while gradually discovering genuine villa spaces and verified accommodation facts.

---

## 🎨 The Six-Chapter Scroll Journey

| Chapter | Title & Feeling | Key Visuals & Interactions | Verified Info Delivered |
|---|---|---|---|
| **Chapter 01** | **“You’ve arrived in Goa.”**<br>*Excitement, sunshine, arrival* | • Headline: *“Goa mode: ON.”*<br>• Subtitle: *“Slow down. Splash around. Make yourself at home.”*<br>• Sky gradient, smiling vector sun, swaying palm trees, travel bag, coral swim tube.<br>• Postcard-framed real pool photo with Goa 2026 postmark.<br>• Scroll cue: *“Your holiday starts here ↓”* | • Location: Siolim, North Goa<br>• Max 9 guests<br>• 3 King bedrooms<br>• 3.5 Bathrooms<br>• 100% Private pool<br>• Direct Airbnb CTA |
| **Chapter 02** | **“Drop your bags. You’re home.”**<br>*Arrival, comfort, discovering your space* | • Soft wave transition into warm cream and subtle Goan tile motif.<br>• Stamped **Luggage-Tag Motif Card** framing the key stay facts.<br>• Stacked tilt-hover real postcards of the open lounge and master king bedroom. | • Entire villa privacy<br>• 3 King bedrooms with en-suite baths<br>• Powder room<br>• Free on-site parking & EV charger<br>• Air conditioned throughout |
| **Chapter 03** | **“Pool o’clock. All day.”**<br>*Fun, freedom, poolside relaxation* | • Expansive lagoon teal water background with wave transitions.<br>• Centered genuine pool courtyard photo in rounded pool stage.<br>• **Interactive swim ring**: tap/click to trigger expanding water ripples and a joyful bounce.<br>• Striped pool umbrella, beach towel, and secondary yellow dotted float. | • 100% private swimming pool<br>• Enclosed courtyard garden<br>• Action: *“See the pool photos”* (opens fullscreen lightbox) |
| **Chapter 04** | **“Find your favourite corner.”**<br>*Curiosity, imagining staying here* | • **Interactive Space Explorer Tabs** with custom vector icons: Bedrooms (bed), Living & dining (armchair), Kitchen (coffee cup), Outdoors (potted plant).<br>• Large genuine photos, verified room specs, and clickable sub-thumbnails.<br>• Works with mouse click, touch, and keyboard. | • King bed setups<br>• En-suite bathrooms<br>• Living lounge + Smart TV<br>• Fully equipped kitchen (cooktop, fridge, cookware)<br>• Private garden balconies |
| **Chapter 05** | **“What does your Goa day look like?”**<br>*Possibility, holiday anticipation* | • **Interactive Holiday Mood Selector**: *Slow mornings*, *Pool afternoons*, *Out exploring*.<br>• Dynamic card updates with genuine photography and verified inspiration notes.<br>• Clean **10-item Amenities Grid** with tap-to-expand details. | • Wi-Fi, AC, EV charger, free parking, workspace, full kitchen, laundry, TV, balconies<br>• Siolim village location context |
| **Chapter 06** | **“Stay a little longer.”**<br>*Warm sunset, desire to book* | • Sunset sky (peach to warm coral), glowing golden sun, floating teal ring.<br>• Headline: *“Good days look like this.”*<br>• Check-in & checkout card with host name (Snigdha) and brand (Coral Sky Stays).<br>• Primary button: *“Check dates on Airbnb”* with verified supporting copy.<br>• Accessible FAQ accordion with full keyboard support. | • Check-in: After 2:00 PM<br>• Checkout: Before 11:00 AM<br>• Verified listing policies<br>• Direct booking link |

---

## 🛠️ Technical Verification & Standards

- **Build Status**: Verified clean production build (`dist/assets/index-lB72v3o9.css`, `dist/assets/index-CSBAXNgf.js`). Zero TypeScript or lint errors.
- **Local Dev Server**: Running on `http://localhost:5173/` (HTTP 200).
- **Responsive Breakpoints**: Tested on mobile (360px, 390px), tablet (768px), laptop (1024px), and desktop (1440px).
- **Mobile Experience**:
  - Compact sticky bottom booking bar respecting `env(safe-area-inset-bottom)`.
  - Accessible mobile hamburger menu with smooth slide-down animation.
  - Generous touch targets (>44px) on all buttons and interactive tabs.
- **Accessibility & Motion**:
  - Skip-to-content link for keyboard and screen reader users.
  - Floating **“⏸ Pause Motion” / “▶ Resume Motion”** toggle button.
  - Automatically respects `prefers-reduced-motion: reduce` by disabling parallax, bobbing, swaying, and ripple loops.
  - Full keyboard control on Lightbox (`Escape`, `ArrowLeft`, `ArrowRight`) and FAQ accordion (`Enter`, `Space`).
- **No Fabricated Information**:
  - No invented prices, reviews, star ratings, or beach proximity claims.
  - Only genuine property photos from the provided assets folder (`/public/images/`).
  - Airbnb link consistently points to `https://www.airbnb.co.in/rooms/1784790527129114343`.

---

## 📋 What the Owner Needs to Supply (Pending Items)

1. **Custom Domain**: Ready to deploy to your preferred hosting (Vercel, Netlify, or Cloudflare Pages) once your domain (e.g. `casamaregoa.com`) is ready.
2. **Contact & WhatsApp Number**: When ready to accept direct inquiries, add the number in `src/content.ts`.
3. **Confirmed Travel Times**: Omitted specific journey times from the site until confirmed by the owner.
4. **Custom SVG Logo / Favicon**: Currently using a sunshine/wave emblem; can be replaced with a custom brand monogram once finalized.
