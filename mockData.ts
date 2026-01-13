// Replacing Figma assets with placeholder images from Unsplash

export interface Obituary {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  age: number;
  biography: string;
  imageUrl: string;
  burialDate?: string;
  burialLocation?: string;
  city?: string;
  flowers?: boolean;
  donations?: string;
  candles?: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface CoffinOption {
  id: string;
  name: string;
  material: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface FlowerArrangement {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface Musician {
  id: string;
  name: string;
  instrument: string;
  price: number;
  imageUrl: string;
}

export interface Photographer {
  id: string;
  name: string;
  experience: string;
  price: number;
  imageUrl: string;
}

export interface Memorial {
  id: string;
  name: string;
  material: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface Urn {
  id: string;
  name: string;
  material: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface Candle {
  id: string;
  name: string;
  duration: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const obituaries: Obituary[] = [
  {
    id: "1",
    firstName: "Ante",
    lastName: "Kovačević",
    birthDate: "15.03.1945",
    deathDate: "28.11.2024",
    age: 79,
    biography: "Sa dubokim žaljenjem obavještavamo rodbinu i prijatelje da je preminuo naš voljeni suprug, otac i djed Ante Kovačević.",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    burialDate: "30.11.2024",
    burialLocation: "Gradsko groblje, parcela A-45",
    city: "Sarajevo",
    flowers: true,
    candles: 23,
  },
  {
    id: "2",
    firstName: "Marija",
    lastName: "Jurić",
    birthDate: "22.07.1938",
    deathDate: "25.11.2024",
    age: 86,
    biography: "U 86. godini preminula je naša draga majka, baka i prijateljica Marija Jurić.",
    imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    burialDate: "27.11.2024",
    burialLocation: "Gradsko groblje, parcela C-12",
    city: "Sarajevo",
    donations: "Pomens se može uputiti Fondaciji za djecu bez roditeljskog staranja",
    candles: 45,
  },
];

export const servicePackages: ServicePackage[] = [
  {
    id: "basic",
    name: "Osnovni paket",
    price: 1500,
    description: "Sve potrebno za dostojanstvenu sahranu",
    features: ["Standardni kovčeg", "Osnovna oprema", "Transport", "Osnovne usluge sahrane", "Dokumentacija"],
  },
  {
    id: "standard",
    name: "Standardni paket",
    price: 2800,
    description: "Prošireniji paket sa dodatnim uslugama",
    features: ["Kovčeg po izboru", "Kompletna oprema", "Transport i pratnja", "Kompleksne usluge sahrane", "Dokumentacija i administracija", "Vijenac", "Osmrtnica u novinama"],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium paket",
    price: 4500,
    description: "Luksuzni paket sa svim uslugama",
    features: ["Premium kovčeg", "VIP oprema i ukras", "VIP transport", "Sve usluge sahrane", "Kompleksna dokumentacija", "Premium vijenac", "Više osmrtnica", "Foto/video snimanje", "Muzička pratnja", "Postpogrebni prijem"],
  },
];

export const coffinOptions: CoffinOption[] = [
  {
    id: "oak-classic",
    name: "Hrastov kovčeg - Klasik",
    material: "Hrast",
    price: 800,
    imageUrl: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=600&fit=crop",
    description: "Jednostavan ali dostojanstven kovčeg od prirodnog hrasta",
  },
  {
    id: "pine-standard",
    name: "Bor kovčeg - Standard",
    material: "Bor",
    price: 600,
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
    description: "Ekonomičan izbor od kvalitetnog borovog drveta",
  },
];

export const flowerArrangements: FlowerArrangement[] = [
  {
    id: "white-roses",
    name: "Bijele ruže - Vijenac",
    price: 250,
    imageUrl: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop",
    description: "Elegantan vijenac od bijelih ruža",
  },
  {
    id: "mixed-wreath",
    name: "Mješoviti vijenac",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&h=600&fit=crop",
    description: "Kombinacija bijelih ljiljana i ruža",
  },
];

export const musicians: Musician[] = [
  {
    id: "1",
    name: "Emir Kadrić",
    instrument: "Violina",
    price: 300,
    imageUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Amina Husić",
    instrument: "Klavir",
    price: 350,
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&h=400&fit=crop",
  },
];

export const photographers: Photographer[] = [
  {
    id: "1",
    name: "Kemal Mesić",
    experience: "15 godina iskustva",
    price: 250,
    imageUrl: "https://images.unsplash.com/photo-1542178243-bc20204b769f?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Lejla Hadžiahmetović",
    experience: "10 godina iskustva, Video i Foto",
    price: 450,
    imageUrl: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=400&h=400&fit=crop",
  },
];

export const memorials: Memorial[] = [
  {
    id: "1",
    name: "Kamenito grobovanje",
    material: "Kamen",
    price: 1500,
    imageUrl: "https://images.unsplash.com/photo-1516321338401-a57515ebd857?w=800&h=600&fit=crop",
    description: "Klasično kamenito grobovanje sa opcijom personalizovanog nadpisa",
  },
];

export const candles: Candle[] = [
  {
    id: "1",
    name: "Bijela svjetlica",
    duration: "24 sata",
    price: 50,
    imageUrl: "https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800&h=600&fit=crop",
    description: "Klasična bijela svjetlica za 24 sata",
  },
];

export const urns: Urn[] = [
  {
    id: "1",
    name: "Keramička urna - Klasik",
    material: "Keramika",
    price: 150,
    imageUrl: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&h=600&fit=crop",
    description: "Jednostavna keramička urna sa osnovnim dizajnom",
  },
  {
    id: "2",
    name: "Drvena urna - Hrastovina",
    material: "Hrast",
    price: 250,
    imageUrl: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&h=600&fit=crop",
    description: "Ručno izrađena drvena urna od hrastovog drveta",
  },
];
