import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <h1 className='font-bold text-3xl text-slate-800'>About</h1>
      <Link to='/' className='inline-block mt-12 text-indigo-500'>
        Home
      </Link>
    </>
  );
};
