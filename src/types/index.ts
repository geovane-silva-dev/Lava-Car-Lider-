export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  category: "geral" | "carros" | "caminhoes" | "detalhamento";
  iconName: "sparkles" | "shield" | "truck" | "droplets" | "disc" | "car" | "wind";
  isPlaceholderSuggestion?: boolean;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  highlight?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "todos" | "carros" | "caminhoes" | "detalhamento";
  categoryLabel: string;
  imageSrc: string;
  altText: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  clientNamePlaceholder: string;
  vehicleType: string;
  quotePlaceholder: string;
  rating: number;
  datePlaceholder: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
