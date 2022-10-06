import React from 'react';
import useRouter from '../hooks/useRouter';

const About = () => {
  const { push } = useRouter();

  const aboutRoot = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push('/');
  };

  return (
    <div>
      <div className="current-location">about</div>
      <button onClick={aboutRoot}>go main</button>
    </div>
  );
};

export default About;
