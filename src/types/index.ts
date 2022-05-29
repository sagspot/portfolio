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
