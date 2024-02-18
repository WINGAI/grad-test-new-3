import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { RingLoader } from 'react-spinners';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../shared/Footer';
import NavigationBar from '../shared/NavigationBar';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Root = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   window.onload = () => {
  //     setLoading(false);
  //   };
  // }, []);

  // const override = css`
  //   display: block;
  //   margin: 100px auto;
  //   border-color: red;
  // `;

  return (
    <div className="font-poppins" style={{ position: 'relative' }}>
      {/* {loading && (
        <div className="loading-spinner-overlay">
            <div style={{ width:'100vw', height: '60vw'}}></div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <RingLoader css={override} size={150} color={'#123abc'} loading={loading} />
          </div>
        </div>
      )} */}
      {/* {!loading && (
        <>
          <NavigationBar />
          <Outlet />
          <Footer />
          <ScrollToTopButton />
          <ScrollRestoration />
        </>
      )} */}
      <NavigationBar />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
      <ScrollRestoration />
    </div>
  );
};

export default Root;
