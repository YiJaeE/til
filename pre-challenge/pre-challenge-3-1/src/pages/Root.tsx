import React from 'react';
import useRouter from '../hooks/useRouter';

const Root = () => {
  const { push } = useRouter();

  const aboutClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    push('about');
  };

  return (
    <div>
      <div className="current-location">root</div>
      <button onClick={aboutClick}>about</button>
    </div>
  );
};

export default Root;
