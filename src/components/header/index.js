import React from 'react';
import Logo from './components/logo';
import SearchBar from './components/searchBar';
import TabNav from './components/tabNav';
import ButtonNav from './components/buttonNav';

export default function Header() {
  return (
    <div className="container mx-auto grid gap-y-5">
      <div className="flex flex-row p-2 gap-4 items-center mx-2">
        <Logo />
        <SearchBar />
        <TabNav />
        <ButtonNav />
      </div>
    </div>
  );
}
