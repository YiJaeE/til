import React from 'react';
import useRouter from '../hooks/useRouter';

const Root = () => {
  const { click } = useRouter();

  return (
    <div>
      <div className="current-location">root</div>
      <button onClick={(e) => click(e, '/about')}>about</button>
    </div>
  );
};

export default Root;
