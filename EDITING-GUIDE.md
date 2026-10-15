# Casa Maré Website — Owner's Editing Guide

## Where to edit the website content

All property information lives in one file:

**`casa-mare/src/content.ts`**

You never need to touch any other file to update:
- Property name, tagline, or description
- Airbnb booking URL
- Capacity (guests, bedrooms, bathrooms)
- Check-in and checkout times
- Amenities list
- Bedroom descriptions
- Gallery photo list and captions
- FAQ answers
- Area highlights

---

## How to run the website locally

1. Open a terminal in the `casa-mare` folder
2. Run: `npm run dev`
3. Open your browser at: http://localhost:5173

---

## How to update photos

Photos are stored in:

```
casa-mare/public/images/
  pool/         — swimming pool photos
  rooms/
    room1/      — Bedroom One photos
    room2/      — Bedroom Two photos
    room3/      — Bedroom Three photos
  living/       — living room and dining photos
  kitchen/      — kitchen photos
  stairs/       — staircase and architectural photos
```

To replace a photo: drop the new file into the relevant folder with the same filename. To add new photos, add the new filenames to the `GALLERY_IMAGES` array in `content.ts`.

---

## How to update the Airbnb link

In `content.ts`, update the `airbnbUrl` field:

```ts
airbnbUrl: 'https://www.airbnb.co.in/rooms/YOUR_LISTING_ID',
```

This one change updates every booking button on the site.

---

## How to build for production / deployment

```bash
npm run build
```

This creates a `dist/` folder ready to upload to any static hosting service (Netlify, Vercel, Cloudflare Pages, etc.).

---

## Colour and font changes

Design tokens are in `casa-mare/src/index.css` inside the `:root {}` block at the top.

---

## Adding contact details later

When you have a confirmed WhatsApp number or email, add it to `content.ts`:

```ts
contact: {
  whatsapp: '+91XXXXXXXXXX',
  email: 'hello@casamare.in',
}
```

Then ask your developer to wire it up to the footer and contact section.
