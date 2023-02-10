import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [memory, setMemory] = useState<{
    total: number;
    free: number;
    used: number;
  }>();

  const getMemory = async () => {
    const memory = await window.electron.getMemory();
    setMemory(memory);
  };

  useEffect(() => {
    getMemory();
  }, []);

  return (
    <>
      <h1 className='font-bold text-3xl text-slate-800'>Home</h1>
      <Link to='/about' className='inline-block mt-12 text-indigo-500'>
        About
      </Link>
      <button
        onClick={getMemory}
        className='block bg-indigo-800 text-white px-4 py-2 mt-6 mb-6'
      >
        Get Memory Stats
      </button>
      {memory && (
        <ul>
          <li>Total Memory: {memory.total} GB</li>
          <li>Used Memory: {memory.used} GB</li>
          <li>Free Memory: {memory.free} GB</li>
        </ul>
      )}
    </>
  );
};
