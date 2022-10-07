import React from 'react';
import useRouter from '../hooks/useRouter';

const About = () => {
  const { click } = useRouter();

  return (
    <div>
      <div className="current-location">about</div>
      <button onClick={(e) => click(e, '/')}>go main</button>
    </div>
  );
};

export default About;
