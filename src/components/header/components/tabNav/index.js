import React, { useState } from 'react';

export default function TabNav() {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    { text: 'Explore' },
    { text: 'My Items' },
    { text: 'Following' },
  ];

  return (
    <div className="hidden md:flex gap-2 ">
      {tabs.map((item, index) => {
        return (
          <p
            key={index}
            onClick={() => {
              setSelectedTab(index);
            }}
            className={`cursor-pointer font-semibold ${
              index === selectedTab ? 'font-bold' : ''
            }`}
          >
            {item.text}
          </p>
        );
      })}
    </div>
  );
}
