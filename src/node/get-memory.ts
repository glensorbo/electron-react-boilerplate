import os from 'os';

export const getMemory = () => {
  const total = Math.floor(os.totalmem() / 1000000000);
  const free = Math.floor(os.freemem() / 1000000000);
  return {
    total,
    free,
    used: total - free,
  };
};
