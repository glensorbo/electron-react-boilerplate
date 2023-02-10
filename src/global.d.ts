import { IGetMemory } from './react/interfaces/IGetMemory';

declare global {
  interface Window {
    electron: {
      getMemory: () => Promise<IGetMemory>;
    };
  }
}
