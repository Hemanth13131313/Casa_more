# Casa Maré by Coral Sky Stays — Handover Checklist & Deliverables

## 🌴 Creative Direction: “Your Goa holiday starts with the first scroll.”

The Casa Maré website has been redesigned as a vibrant, illustrated Goa holiday journey aligned with the **Coral Sky Stays** brand aesthetic. Guests immediately experience warm sunshine, poolside fun, tropical lushness, and authentic Goa vibes while discovering genuine villa spaces, confirmed specifications, real-time pricing, and direct booking options.

---

## 🎨 Brand & Color System (Coral Sky Stays)

Matches the Coral Sky Stays brand identity (warm coral field with cream arch, waves, and palm sprig motif):

| Color Name | Hex Code | Purpose |
|---|---|---|
| **Warm Cream** | `#FFF8E9` | Base background, postcard frames, luggage tag cards |
| **Deep Teal (Ink)** | `#173E3B` | Primary body typography, pool night background, high-contrast text |
| **Coral** | `#F16D4D` | Coral Sky Stays brand identity, primary CTA buttons, swim ring, badges |
| **Sunshine Yellow** | `#F7D664` | Friendly animated sun, secondary polka-dot ring, luggage bag |
| **Pool Turquoise** | `#8AD8CE` | Water reflection, wave accents, pool details |
| **Palm Green** | `#397B58` | Tropical swaying palm fronds & foliage |
| **Sunset Peach** | `#F7B795` | Evening sunset gradients and warm accents |

---

## 📖 Chapter-by-Chapter Holiday Experience

| Chapter | Title & Mood | Visuals & Illustrations | Verified Features & Actions |
|---|---|---|---|
| **Chapter 01** | **“You’ve arrived.”**<br>*Excitement, sunshine, arrival* | • Headline: *“Goa mode: ON.”*<br>• Subtitle: *“Your own villa. Your own pool. Time together.”*<br>• Location: *Casa Maré · Siolim, North Goa*<br>• Confirmed facts: *Up to 9 guests · 3 bedrooms · Private pool*<br>• Postcard-framed pool photo with Goa 2026 stamp<br>• Cheerful sun with glow effect, swaying palms, oversized coral tube, yellow dotted float, striped umbrella, striped towel, sunglasses, coconut drink.<br>• Scroll cue: *“Scroll into holiday mode ↓”* | • Primary CTA: *“Check dates on Airbnb ↗”*<br>• Secondary CTA: *“Explore your stay ↓”*<br>• Official Airbnb link |
| **Chapter 02** | **“Drop your bags. You’re home.”**<br>*Comfort, space discovery* | • Soft wave transition into warm cream surfaces with subtle Goan tile geometry.<br>• Stamped **Villa Pass Luggage Tag** with custom SVG icons (no generic emojis).<br>• Stacked tilt-hover genuine photos of the open lounge and master king bedroom. | • Entire villa privacy<br>• 3 King bedrooms with en-suite baths<br>• 3.5 Bathrooms (powder room)<br>• Free on-site parking & EV charger<br>• Air conditioning throughout |
| **Chapter 03** | **“Pool o’clock. All day.”**<br>*Fun, freedom, relaxation* | • Deep teal pool water background with wave transitions.<br>• Genuine pool courtyard photo centered in rounded pool deck.<br>• **Interactive swim ring**: tap/click creates expanding water ripples and a playful bounce.<br>• Striped umbrella & beach towel accessories. | • 100% private pool<br>• Enclosed courtyard garden<br>• Action: *“See pool photos 📸”* (opens filtered Lightbox)<br>• Direct Airbnb booking link |
| **Chapter 04** | **“Find your favourite corner.”**<br>*Curiosity & space exploration* | • **Interactive Space Explorer**: **Pool (default)**, Bedrooms, Living & dining, Kitchen.<br>• Desktop: choices beside photograph. Mobile: choices above.<br>• Large authentic photos, verified specification badge, and clickable sub-thumbnails.<br>• Works by click, tap, and keyboard. | • King bed setups<br>• En-suite bathrooms<br>• Open-plan lounge + Smart TV<br>• Fully equipped kitchen (cooktop, fridge, cookware)<br>• Private garden balconies |
| **Chapter 05** | **“What’s your Goa mood?” & Amenities**<br>*Holiday anticipation & practical comforts* | • **Holiday Mood Selector**: *Slow mornings*, *Pool afternoons*, *Out exploring*.<br>• Dynamic card updates with genuine photography and verified inspiration notes.<br>• **10 Confirmed Amenities** with custom illustrated SVG icons (Wi-Fi, Pool, AC, Parking, EV, Workspace, Kitchen, Washer, TV, Balcony) with tap-to-expand details.<br>• **North Goa Local Guide**: Beaches, Cafés & Bistros, Markets, Heritage. | • Full kitchen access<br>• Dedicated workspace<br>• High-speed Wi-Fi<br>• Washing machine<br>• Free on-site parking & EV charger |
| **Pricing & Calendar** | **“Plan your Goa holiday dates.”**<br>*Transparency & direct booking* | • **Interactive Monthly Calendar** (October 2026 reference, month prev/next navigation).<br>• Clear visual indicator for available vs reserved/booked dates.<br>• Click-to-pick check-in and checkout dates.<br>• Quick preset buttons (*Late Oct Break*, *Nov Escape*, *Mid-Nov Holiday*).<br>• **Dynamic Price Calculator**: calculates weekday vs weekend nightly rates, extra guest fees (>6 guests), cleaning fee, security deposit, and estimated total in real time.<br>• Direct booking savings badge (*Save ~14%*). | • Direct WhatsApp inquiry modal pre-filled with chosen dates, guests, and calculated total for host Snigdha.<br>• Accepted payment modes: UPI / GPay, Net Banking, Cards, Airbnb.<br>• Easily customizable rates & dates in `content.ts`. |
| **Chapter 06** | **“Good days look like this.”**<br>*Warm sunset & confident booking* | • Sunset sky (peach to warm coral), golden sun, floating teal ring.<br>• Key stay facts: Check-in 2:00 PM, Checkout 11:00 AM, 9 Guests max, Host Snigdha, Coral Sky Stays.<br>• Primary CTA: *“Check dates on Airbnb ↗”* with verified supporting copy *“See current prices and availability on Airbnb.”*<br>• Accessible FAQ accordion with keyboard support. | • Check-in & checkout policies<br>• Cancellation & house rules via Airbnb |

---

## 🛠️ Verification & Quality Checks

- **Zero Errors / Clean Build**: `npm run build` compiled client bundle in ~600ms with zero errors.
- **Clean Lint**: `npm run lint` passed with 0 warnings and 0 errors across all files.
- **Local Dev Server**: Live and verified on `http://localhost:5173/` (HTTP 200).
- **Responsive Layout**: Tested across mobile (360px–414px), tablet (768px), and desktop (1200px+).
- **Mobile Experience**:
  - Sticky bottom mobile booking bar with quick facts and direct CTA.
  - Slide-out mobile navigation drawer with Coral Sky Stays branding.
  - Large touch targets (>44px) across all interactive elements.
- **Motion & Accessibility**:
  - Skip-to-content link.
  - Floating **“⏸ Pause Motion” / “▶ Resume Motion”** control.
  - Automatically respects `prefers-reduced-motion: reduce`.
  - Accessible Lightbox modal with category filters (`All`, `Pool`, `Living`, `Bedrooms`, `Kitchen`), keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), and accessible close button.
- **Authentic Photography**: Uses exclusively genuine photographs from `C:\Users\heman\Downloads\Edited` copied into `public/images/`. No stock watermarks or altered rooms.

---

## 📋 Short List of Remaining Owner-Supplied Information

1. **Host WhatsApp Phone Number**:
   - Currently set to placeholder `919876543210` in `PRICING_CONFIG.whatsappInquiryNumber` inside `src/content.ts`. Update this with Snigdha's direct WhatsApp number to receive booking messages.
2. **Current Calendar Booked Dates**:
   - Add current season bookings into `INITIAL_BOOKED_DATES` in `src/content.ts` so they show as reserved on the interactive calendar.
3. **Seasonal Rates Confirmation**:
   - Verify default rates in `PRICING_CONFIG` (currently set to ₹18,500 weekday, ₹22,000 weekend, ₹2,500 cleaning, ₹10,000 refundable deposit).
4. **Custom Domain (When Ready)**:
   - Provide your domain (e.g. `casamarestays.com` or `coralskystays.com`) to link to your hosting provider.
