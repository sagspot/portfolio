import { Connection } from 'mongoose';

declare global {
  namespace NodeJS {
    export interface Global {
      mongoose: Connection;
    }
  }
}
