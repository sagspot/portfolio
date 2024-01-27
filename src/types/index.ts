export interface IPortfolio {
  _id: string;
  title: string;
  description: string;
  github?: string;
  previewUrl?: string;
  mainImage: string;
  priority?: number;
}

export type ResponseType<T> =
  | {
      success: 'true';
      data: T;
    }
  | {
      success: 'false';
      error: string;
    };
