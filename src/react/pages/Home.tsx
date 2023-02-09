import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1 className='font-bold text-3xl text-slate-800'>Home</h1>
      <Link to='/about' className='inline-block mt-12 text-indigo-500'>
        About
      </Link>
    </>
  );
};
