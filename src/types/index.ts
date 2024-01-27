export interface PortfolioType {
  _id: string;
  title: string;
  img: string;
  desc: string;
  source?: string;
  url: string;
  category?: 'api' | 'website';
}

export interface IPortfolio {
  _id: string;
  title: string;
  description: string;
  github?: string;
  previewUrl?: string;
  mainImage: string;
}
