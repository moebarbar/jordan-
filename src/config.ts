// Site-wide configuration
export interface SiteConfig {
  language: string;
  siteName: string;
  siteDescription: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  siteName: "Jordan - The Hashemite Kingdom",
  siteDescription: "Discover Jordan's ancient wonders, from the rose-red city of Petra to the Martian landscapes of Wadi Rum. Experience timeless hospitality and unforgettable adventures.",
};

// Hero Section
export interface HeroConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-petra.jpg",
  backgroundAlt: "The magnificent Treasury of Petra carved into rose-red sandstone cliffs",
  title: "Jordan",
  subtitle: "Where Ancient Wonders Meet Timeless Hospitality",
};

// Narrative Text Section
export interface NarrativeTextConfig {
  line1: string;
  line2: string;
  line3: string;
}

export const narrativeTextConfig: NarrativeTextConfig = {
  line1: "A land carved by history",
  line2: "where Nabataean kings once ruled the spice trade routes",
  line3: "From the rose-red cliffs of Petra to the lowest point on Earth, Jordan invites you to walk through millennia of human civilization. Here, ancient traditions blend seamlessly with modern hospitality, creating an experience that touches the soul.",
};

// ZigZag Grid Section - Historical & Cultural Highlights
export interface ZigZagGridItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
}

export interface ZigZagGridConfig {
  sectionLabel: string;
  sectionTitle: string;
  items: ZigZagGridItem[];
}

export const zigZagGridConfig: ZigZagGridConfig = {
  sectionLabel: "Discover",
  sectionTitle: "The Treasures of Jordan",
  items: [
    {
      id: "petra",
      title: "Petra - The Rose-Red City",
      subtitle: "Ancient Wonder",
      description: "Carved directly into vibrant rose-red sandstone cliffs, Petra was the capital of the Nabataean Kingdom over 2,000 years ago. This UNESCO World Heritage Site, one of the New Seven Wonders of the World, reveals the ingenuity of ancient engineers who transformed a desert valley into a thriving metropolis. Walk through the narrow Siq canyon and witness the Treasury emerge before your eyes—a moment that has captivated travelers since its rediscovery in 1812.",
      image: "/little-petra.jpg",
      imageAlt: "Ancient carved stairs and architecture in Little Petra",
      reverse: false,
    },
    {
      id: "jerash",
      title: "Jerash - Pompeii of the East",
      subtitle: "Roman Grandeur",
      description: "Step back in time at Jerash, one of the best-preserved Roman provincial towns in the world. Wander along the colonnaded streets where chariots once raced, stand beneath the towering Arch of Hadrian, and imagine the crowds that filled the magnificent theaters. This ancient city showcases the grandeur of Roman civilization at its peak, with temples, plazas, and baths that have withstood the test of time.",
      image: "/jerash.jpg",
      imageAlt: "Magnificent Roman colonnaded street in Jerash",
      reverse: true,
    },
    {
      id: "hospitality",
      title: "Bedouin Hospitality",
      subtitle: "Sacred Tradition",
      description: "In Jordan, guests are considered a gift from God—a belief rooted in centuries of Bedouin tradition. Experience the warmth of true Arabian hospitality as you're welcomed into tents for sweet mint tea and authentic Arabic coffee. The ancient code of 'diyafa' demands that even strangers be treated with honor and generosity. This is not performed hospitality; it is lived, breathed, and passed down through generations.",
      image: "/bedouin-hospitality.jpg",
      imageAlt: "Traditional Bedouin hospitality with Arabic coffee ceremony",
      reverse: false,
    },
    {
      id: "cuisine",
      title: "Jordanian Cuisine",
      subtitle: "Flavors of Heritage",
      description: "Mansaf, Jordan's national dish, is more than a meal—it's a symbol of cultural identity and communal bonding. Tender lamb simmered in jameed (fermented yogurt) sits atop fragrant rice, garnished with nuts and served on a grand platter for sharing. UNESCO recognized Mansaf as Intangible Cultural Heritage in 2022. From street-side falafel to elaborate feasts, Jordanian cuisine tells the story of a land where food is love expressed through flavor.",
      image: "/mansaf.jpg",
      imageAlt: "Traditional Jordanian Mansaf dish with lamb and rice",
      reverse: true,
    },
  ],
};

// Breath Section - Wadi Rum
export interface BreathSectionConfig {
  backgroundImage: string;
  backgroundAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

export const breathSectionConfig: BreathSectionConfig = {
  backgroundImage: "/breath-desert.jpg",
  backgroundAlt: "Dramatic sunset over Wadi Rum desert with camel caravan",
  title: "Wadi Rum",
  subtitle: "Valley of the Moon",
  description: "Lawrence of Arabia called it 'vast, echoing, and God-like.' This protected desert wilderness features dramatic sandstone mountains, ancient rock inscriptions, and a silence so profound it speaks to the soul. Sleep under a canopy of stars in a Bedouin camp, ride across golden dunes at sunset, and discover why filmmakers have chosen this otherworldly landscape to represent Mars on screen.",
};

// Card Stack Section - Must-Visit Destinations
export interface CardStackItem {
  id: number;
  image: string;
  title: string;
  description: string;
  rotation: number;
}

export interface CardStackConfig {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: CardStackItem[];
}

export const cardStackConfig: CardStackConfig = {
  sectionTitle: "Unforgettable Destinations",
  sectionSubtitle: "Places That Will Transform You",
  cards: [
    {
      id: 1,
      image: "/wadi-rum.jpg",
      title: "Wadi Rum Desert",
      description: "Experience the magic of the desert on a 4x4 jeep safari, camel trek, or hot air balloon ride. Sleep in luxury bubble tents or traditional Bedouin camps under the Milky Way.",
      rotation: -2,
    },
    {
      id: 2,
      image: "/dead-sea.jpg",
      title: "The Dead Sea",
      description: "Float effortlessly in the mineral-rich waters at the lowest point on Earth. Cover yourself in therapeutic Dead Sea mud and experience nature's ultimate spa treatment.",
      rotation: 1,
    },
    {
      id: 3,
      image: "/amman-citadel.jpg",
      title: "Amman Citadel",
      description: "Explore the ancient heart of Jordan's capital, where Roman, Byzantine, and Umayyad ruins overlook the modern city. Watch the sunset paint the white city in golden hues.",
      rotation: -1,
    },
  ],
};

// Footer Section
export interface FooterContactItem {
  type: "email" | "phone";
  label: string;
  value: string;
  href: string;
}

export interface FooterSocialItem {
  platform: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  description: string;
  ctaText: string;
  contact: FooterContactItem[];
  locationLabel: string;
  address: string[];
  socialLabel: string;
  socials: FooterSocialItem[];
  logoText: string;
  copyright: string;
  links: { label: string; href: string }[];
}

export const footerConfig: FooterConfig = {
  heading: "Begin Your Jordanian Journey",
  description: "From the moment you arrive, you'll discover why travelers fall in love with Jordan. Let us help you plan an unforgettable adventure through this land of wonders.",
  ctaText: "Plan Your Visit",
  contact: [
    {
      type: "email",
      label: "visit@jordan.travel",
      value: "visit@jordan.travel",
      href: "mailto:visit@jordan.travel",
    },
    {
      type: "phone",
      label: "+962 6 460 3360",
      value: "+962 6 460 3360",
      href: "tel:+96264603360",
    },
  ],
  locationLabel: "Jordan Tourism Board",
  address: [
    "P.O. Box 830721",
    "Amman 11183, Jordan",
  ],
  socialLabel: "Follow Us",
  socials: [
    {
      platform: "instagram",
      href: "https://instagram.com/visitjordan",
    },
    {
      platform: "facebook",
      href: "https://facebook.com/visitjordan",
    },
  ],
  logoText: "JORDAN",
  copyright: "© 2025 Jordan Tourism Board. All rights reserved.",
  links: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
};
