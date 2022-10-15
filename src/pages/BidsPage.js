import React from 'react';
import BidsDetail from '../components/bidsDetail';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BidsPage = () => {
  const params = useParams();

  const { bidsId } = params;

  const item = useSelector((state) =>
    state.hotBids.bids.find((x) => x.id === bidsId)
  );

  return item ? (
    <div className="container mx-auto grid gap-y-5">
      <BidsDetail data={item} />
    </div>
  ) : (
    ''
  );
};

export default BidsPage;
