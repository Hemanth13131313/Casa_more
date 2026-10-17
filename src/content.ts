/**
 * Casa Maré — Content Configuration
 * ===================================
 * Single source of truth for all verified property details.
 * Sourced from the live Airbnb listing (Room #1784790527129114343).
 */

export const PROPERTY = {
  name: 'Casa Maré',
  tagline: 'Goa mode: ON.',
  subTagline: 'Your own villa. Your own pool. Time together.',
  conceptLine: 'Your Goa holiday starts with the first scroll.',
  brand: 'Coral Sky Stays',
  host: 'Snigdha',
  location: {
    village: 'Siolim',
    region: 'North Goa',
    country: 'India',
    label: 'SIOLIM · NORTH GOA',
  },
  airbnbUrl: 'https://www.airbnb.co.in/rooms/1784790527129114343',
  capacity: {
    guests: 9,
    bedrooms: 3,
    beds: 3,
    bathrooms: 3.5,
  },
  checkin: 'After 2:00 PM',
  checkout: 'Before 11:00 AM',
  quietHours: '10:00 PM to 8:00 AM',
  overview: `Nestled in the heart of Siolim, North Goa, Casa Maré is an elegantly designed luxury 3-bedroom villa featuring a private swimming pool, brought to you by Coral Sky Stays. A peaceful retreat for those seeking comfort, privacy, and a taste of Goa’s laid-back charm — less than 10 minutes drive to the popular beaches, restaurants & bars in North Goa.`,
};

export const LUGGAGE_FACTS = [
  { id: 'capacity', icon: 'users', label: 'Max Capacity', value: 'Up to 9 guests', note: 'Family & group friendly' },
  { id: 'bedrooms', icon: 'bed', label: 'Bedrooms', value: '3 King Bedrooms', note: 'All with king beds' },
  { id: 'bathrooms', icon: 'bath', label: 'Bathrooms', value: '3.5 Bathrooms', note: '3 en-suite + powder room' },
  { id: 'pool', icon: 'pool', label: 'Swimming Pool', value: '100% Private Pool', note: 'Enclosed courtyard garden' },
  { id: 'privacy', icon: 'shield', label: 'Accommodation', value: 'Entire Villa', note: 'Complete privacy for your group' },
  { id: 'parking', icon: 'car', label: 'Parking & Power', value: 'Free Parking & EV', note: 'Dedicated on-site charger' },
];

export const EXPLORER_SPACES = [
  {
    id: 'outdoors',
    title: 'Outdoors',
    iconType: 'plant',
    headline: 'Your own private pool and tropical garden courtyard.',
    desc: 'Step right outside into a sun-dappled courtyard with your private swimming pool, tropical foliage, and shaded corners. Perfect for early morning dips or relaxed afternoon drinks.',
    badge: '100% Private Pool · Sunlit Garden · Balconies',
    image: '/images/pool/pool1.png',
    alt: 'Casa Maré private pool garden courtyard',
    subImages: [
      { src: '/images/pool/pool2.png', caption: 'Sunlit Pool Water' },
      { src: '/images/stairs/stairs1.jpg', caption: 'Courtyard Architecture' },
    ],
  },
  {
    id: 'bedrooms',
    title: 'Bedrooms',
    iconType: 'bed',
    headline: 'Three peaceful king bedrooms with en-suite baths.',
    desc: 'Each bedroom is furnished with a king-sized bed, crisp air conditioning, and its own private en-suite bathroom. Thoughtful tropical touches and soft lighting make winding down effortless.',
    badge: '3 King Beds · En-suite Bathrooms · Air Conditioned',
    image: '/images/rooms/room1/r1-1.png',
    alt: 'Casa Maré master bedroom with king bed and en-suite bathroom',
    subImages: [
      { src: '/images/rooms/room2/r2-1.png', caption: 'Bedroom Two' },
      { src: '/images/rooms/room3/r3-1.png', caption: 'Bedroom Three' },
    ],
  },
  {
    id: 'living',
    title: 'Living & Dining',
    iconType: 'armchair',
    headline: 'Bright, airy living spaces designed for slow gatherings.',
    desc: 'The open-plan lounge flows naturally into the dining area. Comfortable sofas, high ceilings, large windows letting in the Goan daylight, and quick access to the pool garden make this the heart of the home.',
    badge: 'Open-Plan · Smart TV · High-Speed Wi-Fi · AC',
    image: '/images/living/living1.png',
    alt: 'Casa Maré light-filled living area and lounge',
    subImages: [
      { src: '/images/living/living2.png', caption: 'Dining & Lounge' },
      { src: '/images/living/living4.png', caption: 'Seating Nook' },
    ],
  },
  {
    id: 'kitchen',
    title: 'Kitchen',
    iconType: 'cup',
    headline: 'A fully equipped kitchen ready whenever you are.',
    desc: 'Whether brewing morning pour-overs, slicing fresh tropical fruit, or preparing meals for the whole crew, the kitchen is fully set up with countertops, cooktop, cookware, and refrigerator.',
    badge: 'Full Refrigerator · Cooktop & Cookware · Dedicated Countertop',
    image: '/images/kitchen/kitchen1.png',
    alt: 'Casa Maré modern kitchen with sunlit countertops',
    subImages: [
      { src: '/images/kitchen/kitchen2.png', caption: 'Prep Counters' },
      { src: '/images/kitchen/kitchen3.png', caption: 'Warm Lighting' },
    ],
  },
];

export const MOOD_OPTIONS = [
  {
    id: 'mornings',
    label: 'Slow mornings',
    icon: 'coffee',
    headline: 'Wake up when you feel like it.',
    desc: 'Step out onto the balcony, breathe in the tropical air, and make a pot of coffee in the kitchen. No alarms, no rushing — just quiet Goa mornings with your favourite people.',
    image: '/images/kitchen/kitchen3.png',
    alt: 'Warm morning light in the kitchen with pendant lights',
    verifiedNote: 'Verified amenities: Full kitchen, balconies, air conditioning, and peaceful residential setting in Siolim.',
  },
  {
    id: 'afternoons',
    label: 'Pool afternoons',
    icon: 'pool',
    headline: 'The afternoon belongs in the water.',
    desc: 'When the Goa sun hits its peak, cool off right outside your living room. The pool is completely private to Casa Maré — no crowded decks, no shared loungers.',
    image: '/images/pool/pool2.png',
    alt: 'Sparkling sunlit private plunge pool at Casa Maré',
    verifiedNote: 'Verified amenities: 100% private swimming pool in enclosed courtyard, reserved exclusively for your stay.',
  },
  {
    id: 'exploring',
    label: 'Out exploring',
    icon: 'compass',
    headline: 'North Goa on your doorstep.',
    desc: 'Located in Siolim, Casa Maré puts you in a quiet heritage village while keeping North Goa’s celebrated cafés, beaches, and vibrant markets within reach.',
    image: '/images/living/living5.png',
    alt: 'Living area with leafy views of Goan palm foliage',
    verifiedNote: 'Verified location: Siolim, North Goa. Convenient home base with free on-site parking and EV charger.',
  },
];

export const AMENITIES = [
  { id: 'wifi', label: 'High-speed Wi-Fi', icon: 'wifi', description: 'Stay connected throughout the villa with fast, reliable Wi-Fi.' },
  { id: 'pool', label: 'Private swimming pool', icon: 'pool', description: 'Your own private pool set in an enclosed courtyard — no sharing with anyone.' },
  { id: 'ac', label: 'Air conditioning', icon: 'ac', description: 'Individual AC units in all bedrooms and common living areas for cool comfort.' },
  { id: 'parking', label: 'Free on-site parking', icon: 'parking', description: 'Dedicated on-premises parking space for your vehicle.' },
  { id: 'ev', label: 'EV charger on site', icon: 'ev', description: 'Electric vehicle charging available on property for modern travellers.' },
  { id: 'workspace', label: 'Dedicated workspace', icon: 'workspace', description: 'Comfortable desk and seating area for remote work or trip planning.' },
  { id: 'kitchen', label: 'Fully equipped kitchen', icon: 'kitchen', description: 'Complete with cooktop, refrigerator, cookware, dishes, and dining table.' },
  { id: 'washer', label: 'Washing machine', icon: 'washer', description: 'In-villa laundry facilities so you can pack lighter for long stays.' },
  { id: 'tv', label: 'Flat-screen TV', icon: 'tv', description: 'Television in the living lounge for movie nights and downtime.' },
  { id: 'balcony', label: 'Balconies & garden', icon: 'balcony', description: 'Private balconies overlooking tropical palms and the courtyard.' },
];

export const GALLERY_IMAGES = [
  // Pool
  { src: '/images/pool/pool1.png', alt: 'Casa Maré private pool — tropical courtyard', category: 'pool', caption: 'Private Pool Courtyard' },
  { src: '/images/pool/pool2.png', alt: 'Casa Maré pool in sunlight — courtyard view', category: 'pool', caption: 'Sunlit Private Pool' },
  // Living
  { src: '/images/living/living1.png', alt: 'Casa Maré open-plan living room', category: 'living', caption: 'Open-Plan Living Lounge' },
  { src: '/images/living/living2.png', alt: 'Casa Maré dining area and lounge', category: 'living', caption: 'Dining & Living Space' },
  { src: '/images/living/living3.png', alt: 'Casa Maré living interior details', category: 'living', caption: 'Interior Styled Details' },
  { src: '/images/living/living4.png', alt: 'Casa Maré comfortable seating area', category: 'living', caption: 'Comfortable Seating Nook' },
  { src: '/images/living/living5.png', alt: 'Casa Maré natural daylight in living room', category: 'living', caption: 'Light-Filled Living Room' },
  { src: '/images/living/living6.jpg', alt: 'Casa Maré living room with soft lighting', category: 'living', caption: 'Relaxing Living Quarters' },
  { src: '/images/living/living7.jpg', alt: 'Casa Maré living room view', category: 'living', caption: 'Lounge View' },
  // Bedrooms
  { src: '/images/rooms/room1/r1-1.png', alt: 'Bedroom one — king bed', category: 'rooms', caption: 'Bedroom One · King Bed' },
  { src: '/images/rooms/room1/r1-2.png', alt: 'Bedroom one — room styling', category: 'rooms', caption: 'Bedroom One · Styling' },
  { src: '/images/rooms/room1/r1-3.png', alt: 'Bedroom one — en-suite bathroom', category: 'rooms', caption: 'Bedroom One · En-Suite Bath' },
  { src: '/images/rooms/room2/r2-1.png', alt: 'Bedroom two — king bed', category: 'rooms', caption: 'Bedroom Two · King Bed' },
  { src: '/images/rooms/room2/r2-2.png', alt: 'Bedroom two — bedroom details', category: 'rooms', caption: 'Bedroom Two · Details' },
  { src: '/images/rooms/room2/r2-3.png', alt: 'Bedroom two — private bathroom', category: 'rooms', caption: 'Bedroom Two · Bath' },
  { src: '/images/rooms/room3/r3-1.png', alt: 'Bedroom three — king bed', category: 'rooms', caption: 'Bedroom Three · King Bed' },
  { src: '/images/rooms/room3/r3-2.png', alt: 'Bedroom three — room details', category: 'rooms', caption: 'Bedroom Three · Details' },
  { src: '/images/rooms/room3/r3-3.png', alt: 'Bedroom three — attached bathroom', category: 'rooms', caption: 'Bedroom Three · Bath' },
  // Kitchen
  { src: '/images/kitchen/kitchen1.png', alt: 'Casa Maré kitchen — modern countertops in daylight', category: 'kitchen', caption: 'Daylit Kitchen Counters' },
  { src: '/images/kitchen/kitchen2.png', alt: 'Casa Maré kitchen — coastal daylight', category: 'kitchen', caption: 'Kitchen Prep Station' },
  { src: '/images/kitchen/kitchen3.png', alt: 'Casa Maré kitchen — warm pendant lighting', category: 'kitchen', caption: 'Kitchen with Pendant Lights' },
  // Architectural
  { src: '/images/stairs/stairs1.jpg', alt: 'Casa Maré staircase and architectural curves', category: 'living', caption: 'Villa Architectural Stairs' },
  { src: '/images/stairs/stairs2.jpg', alt: 'Casa Maré interior staircase detail', category: 'living', caption: 'Interior Stairwell' },
];

export const FAQS = [
  {
    q: 'How many guests can stay at Casa Maré?',
    a: 'Casa Maré comfortably accommodates up to 9 guests across three king bedrooms, with generous shared living and dining spaces.',
  },
  {
    q: 'What is the bedroom and bathroom layout?',
    a: 'The villa features 3 king bedrooms, each with its own private en-suite bathroom. There is also an additional half-bathroom (powder room) in the common area.',
  },
  {
    q: 'Is the swimming pool completely private?',
    a: 'Yes, 100% private. The pool is enclosed within the villa’s own private garden courtyard. Only your booking party has access.',
  },
  {
    q: 'Can guests use the kitchen to cook?',
    a: 'Yes! The villa has a fully equipped kitchen with cooktop, refrigerator, cookware, dishes, and counter space for preparing drinks and meals.',
  },
  {
    q: 'Is there parking and an EV charger on site?',
    a: 'Yes. Free dedicated parking is provided on the premises, including an electric vehicle (EV) charger.',
  },
  {
    q: 'What are the check-in and checkout times?',
    a: 'Check-in is after 2:00 PM and checkout is before 11:00 AM. Exact arrangements can be coordinated with your host, Snigdha.',
  },
  {
    q: 'Are there quiet hours?',
    a: 'Yes, quiet hours are from 10:00 PM to 8:00 AM to preserve the peaceful ambiance of our residential Siolim neighbourhood.',
  },
  {
    q: 'How do I check pricing, availability, and house rules?',
    a: 'Live calendar availability, seasonal rates, cancellation policies, and house rules are maintained on the official Airbnb listing. Click "Check dates on Airbnb" to view accurate live rates.',
  },
];

export const AREA_HIGHLIGHTS = [
  { category: 'Beaches', description: 'Morjim Beach (15 mins), Anjuna & Vagator Beaches (20 mins), Ashwem Beach (25 mins).', icon: 'beach' },
  { category: 'Cafés & Bistros', description: 'Rabbit Hole & Hoops Coffee (3 mins), Kefi Cafe & Bistro (6 mins), Mimousu (9 mins), Gunpowder & Bawri (16 mins).', icon: 'cafe' },
  { category: 'Bars & Sunset Spots', description: 'Thalassa & Soro Pub (9 mins), Kiki By The Sea (12 mins), Purple Martini & Antares (19–20 mins).', icon: 'market' },
  { category: 'Airports & Transit', description: 'MOPA Airport (30 mins), Thivim Railway (25 mins), Dabolim Airport (60 mins), Chapora Fort (21 mins).', icon: 'heritage' },
];

/**
 * Pricing & Calendar Configuration
 * Edit these values anytime to update rates, cleaning fees, and blocked dates.
 */
export const PRICING_CONFIG = {
  currency: '₹',
  baseNightlyRate: 18500, // Standard weekday rate per night for entire 3-BHK luxury villa
  weekendNightlyRate: 22000, // Friday & Saturday rate per night
  extraGuestThreshold: 6, // Base capacity included in standard rate
  extraGuestFee: 1500, // Fee per guest per night beyond 6 (up to max 9)
  cleaningFee: 2500, // One-time cleaning & sanitization fee
  serviceFeePercent: 0, // Direct booking savings (0% vs ~14% on third-party portals)
  refundableDeposit: 10000, // Fully refundable security deposit
  minimumStayNights: 2, // Minimum nights required
  checkInTime: '2:00 PM',
  checkOutTime: '11:00 AM',
  whatsappInquiryNumber: '919876543210', // Contact phone for direct inquiry
};

/**
 * Calendar Reserved / Blocked Dates (format: YYYY-MM-DD)
 * Owner can update this list to reflect bookings.
 */
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
  '2026-12-25',
  '2026-12-26',
  '2026-12-27',
  '2026-12-28',
  '2026-12-29',
  '2026-12-30',
  '2026-12-31',
  '2027-01-01',
  '2027-01-02',
];

