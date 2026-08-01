export interface Product {
  name: string;
  category: string;
  description: string;
  href: string;
  image: string;
  tone: "warm" | "dark" | "stone";
  external: boolean;
}

export const products: Product[] = [
  {
    name: "Rezo Music",
    category: "Music for focus and rest",
    description:
      "Premium instrumental playlists shaped for quiet focus, unhurried rest, and the rhythm of everyday life.",
    href: "https://rezo.oaky.ltd/",
    image: "/assets/products/rezo-music.webp",
    tone: "warm",
    external: true,
  },
  {
    name: "Drift",
    category: "Visual music player",
    description:
      "An alternative Apple Music experience that turns the music you love into a living, flowing wall of artwork.",
    href: "/drift/",
    image: "/assets/products/drift.webp",
    tone: "dark",
    external: false,
  },
  {
    name: "ValidTill",
    category: "Expiry date tracker",
    description:
      "A considered place to keep coupons, gift cards, and vouchers visible before their value quietly disappears.",
    href: "https://validtill.oaky.ltd/",
    image: "/assets/products/validtill.webp",
    tone: "stone",
    external: true,
  },
];
