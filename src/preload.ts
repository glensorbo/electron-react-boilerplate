import { contextBridge, ipcRenderer } from 'electron';

import os from 'os';

const getMemory = () => {
  const total = Math.floor(os.totalmem() / 1000000000);
  const free = Math.floor(os.freemem() / 1000000000);
  return {
    total,
    free,
    used: total - free,
  };
};

contextBridge.exposeInMainWorld('electron', {
  getMemory: async () => ipcRenderer.invoke('get-memory', getMemory()),
});
