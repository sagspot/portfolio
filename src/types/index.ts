export interface PortfolioType {
  _id: string;
  title: string;
  img: string;
  desc: string;
  source?: string;
  url: string;
  category?: 'api' | 'website';
}

export interface TestimonialType {
  _id: string;
  name: string;
  img: string;
  desc: string;
}

export interface Portfolio {
  _id: string;
  title: string;
  description: string;
  github: string;
  previewUrl: string;
  mainImage: string;
}

export interface Testimonial {
  _id: string;
  name: string;
  text: string;
  avatar: string;
}
