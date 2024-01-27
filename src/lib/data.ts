import { IPortfolio, ResponseType } from '@/types';
import { QueryParams, SanityClient, createClient } from 'next-sanity';
import { tags } from './constants';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;
const apiVersion = process.env.SANITY_API_VERSION;

const DEFAULT_PARAMS = {} as QueryParams;
const DEFAULT_TAGS = [] as string[];

export default class Sanity {
  private client: SanityClient;

  constructor() {
    this.client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: process.env.SANITY_TOKEN,
      perspective: 'published',
    });
  }

  private async fetch<QueryResponse>({
    query,
    params = DEFAULT_PARAMS,
    tags = DEFAULT_TAGS,
  }: {
    query: string;
    params?: QueryParams;
    tags: string[];
  }): Promise<QueryResponse> {
    return this.client.fetch<QueryResponse>(query, params, {
      cache: 'force-cache',
      next: {
        tags,
      },
    });
  }

  async getAbout(): Promise<ResponseType<string>> {
    try {
      const about = await this.fetch<{ content: string }>({
        query: `*[_type == 'about'] | order(_createdAt desc){
            content
        }[0]`,
        tags: [tags.about],
      });
      return { success: 'true', data: about.content };
    } catch (error) {
      console.error(error);
      return {
        success: 'false',
        error: error instanceof Error ? error.message : 'Something went wrong',
      };
    }
  }

  async getResume(): Promise<ResponseType<string>> {
    try {
      const resume = await this.fetch<{ resume: string }>({
        query: `*[_type == 'resume'] | order(_createdAt desc) {
                "resume":resume.asset->url
              }[0]`,
        tags: [tags.resume],
      });
      return { success: 'true', data: resume.resume };
    } catch (error) {
      console.error(error);
      return {
        success: 'false',
        error: error instanceof Error ? error.message : 'Something went wrong',
      };
    }
  }

  async getProjects(): Promise<ResponseType<IPortfolio[]>> {
    try {
      const projects = await this.fetch<IPortfolio[]>({
        query: `*[_type == "project"]{
                    _id,
                    priority,
                    title,
                    description,
                    github,
                    previewUrl,
                    "mainImage": mainImage.asset->url
                }`,
        tags: [tags.portfolio],
      });

      const sortedProjects = projects.sort((a, b) => {
        if (a.priority && b.priority) {
          return a.priority - b.priority;
        } else if (a.priority) {
          return -1;
        } else if (b.priority) {
          return 1;
        } else {
          return 0;
        }
      });

      return { success: 'true', data: sortedProjects };
    } catch (error) {
      console.error(error);
      return {
        success: 'false',
        error: error instanceof Error ? error.message : 'Something went wrong',
      };
    }
  }
}
