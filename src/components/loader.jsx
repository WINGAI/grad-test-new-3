import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <div className="loading-spinner">
      <RingLoader css={override} size={150} color={"#123abc"} loading={loading} />
    </div>
  );
};

export default LoadingSpinner;
