import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTSData, fetchHBData } from './common/store';

import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/layout';
import Router from './common/Router';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTSData());
    dispatch(fetchHBData());
  }, [dispatch]);

  return (
    <Layout>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Layout>
  );
}

export default App;
