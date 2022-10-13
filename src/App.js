import './App.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTSData, fetchHBData } from './common/store';
import Header from './components/header';
import Footer from './components/footer';
import TopSellers from './components/topSellers';
import HotBids from './components/hotBids';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTSData());
    dispatch(fetchHBData());
  }, [dispatch]);

  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <TopSellers />
      <HotBids />
      <Footer />
    </div>
  );
}

export default App;
