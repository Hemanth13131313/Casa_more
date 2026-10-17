# Casa Maré by Coral Sky Stays — Owner's Editing Guide

Welcome! Your website is built so that you can easily update rates, blocked calendar dates, property details, and photos without having to edit complex code.

---

## 1. Where to Edit All Content & Rates

All property information, pricing, calendar blocked dates, and texts are located in:

📁 **`casa-mare/src/content.ts`**

You only need to edit this one file to change:
- **Pricing & Rates** (weekday nightly rate, weekend rate, extra guest charge, cleaning fee)
- **Calendar Blocked Dates** (dates that appear as 'Reserved' on the interactive calendar)
- **Host & WhatsApp Contact Information**
- **Property Specs** (guests, bedrooms, bathrooms)
- **Amenities List & Descriptions**
- **Space Explorer Descriptions**
- **Gallery Images & Captions**
- **FAQ Answers & Policies**

---

## 2. How to Change Pricing

Inside `casa-mare/src/content.ts`, find the `PRICING_CONFIG` section:

```ts
export const PRICING_CONFIG = {
  currency: '₹',
  baseNightlyRate: 18500,        // Weekday price per night (Sun–Thu)
  weekendNightlyRate: 22000,     // Weekend price per night (Fri–Sat)
  extraGuestThreshold: 6,        // Standard capacity before extra fees
  extraGuestFee: 1500,           // Per night per guest above 6 (up to 9)
  cleaningFee: 2500,             // One-time cleaning & sanitization fee
  refundableDeposit: 10000,      // Refundable security deposit
  minimumStayNights: 2,          // Minimum nights for reservation
  whatsappInquiryNumber: '919876543210', // Host WhatsApp for direct booking inquiries
};
```

Simply update the numbers and save the file. The website's calendar pricing calculator will immediately update in real time.

---

## 3. How to Update Blocked / Reserved Dates on the Calendar

Inside `casa-mare/src/content.ts`, find the `INITIAL_BOOKED_DATES` array:

```ts
export const INITIAL_BOOKED_DATES = [
  '2026-10-24',
  '2026-10-25',
  '2026-10-26',
  '2026-11-05',
  '2026-11-06',
  '2026-11-07',
  '2026-11-14',
  '2026-11-15',
  '2026-12-24',
  // Add new booked dates here in YYYY-MM-DD format
];
```

Any date listed here will automatically appear as **Reserved / Booked** (with strike-through styling) on the calendar, preventing guests from picking conflicting dates.

---

## 4. How to Update Photos

High-resolution photographs are located in:

```
casa-mare/public/images/
  pool/         — Swimming pool photos (pool1.png, pool2.png)
  rooms/
    room1/      — Bedroom One photos
    room2/      — Bedroom Two photos
    room3/      — Bedroom Three photos
  living/       — Living room & dining photos
  kitchen/      — Kitchen photos
  stairs/       — Staircase & courtyard architectural photos
  coral-sky-logo.jpg — Official Coral Sky Stays brand logo
```

- To swap a photo: replace the file in the folder with the same name.
- To add a new photo: copy your photo into the relevant folder, then add its entry to `GALLERY_IMAGES` in `content.ts`.

---

## 5. How to Update the Airbnb Link

In `content.ts`:

```ts
airbnbUrl: 'https://www.airbnb.co.in/rooms/1784790527129114343',
```

Updating this single line updates all buttons across the header, hero, pool chapter, spaces explorer, pricing calculator, closing chapter, and sticky mobile booking bar.

---

## 6. How to Run & Preview Locally

1. Open your terminal in the `casa-mare` folder
2. Run:
   ```bash
   npm run dev
   ```
3. Open your browser to: **http://localhost:5173/**

---

## 7. How to Build for Production Deployment

```bash
npm run build
```

This compiles a fast static bundle into the `dist/` directory, ready to deploy to Netlify, Vercel, Cloudflare Pages, or AWS S3.
