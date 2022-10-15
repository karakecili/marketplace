import Image from './image';
import Detail from './detail';
import { useSelector } from 'react-redux';

const BidsDetail = (props) => {
  const { data } = props;

  const user = useSelector((state) =>
    state.hotBids.bids.find((x) => x.id === data.id)
  );

  return (
    <div className="flex flex-col gap-5 md:flex-row">
      <Image image={data.image} alt={data.name} />
      <Detail
        createdAt={data.createdAt}
        name={data.name}
        price={data.price}
        fav={data.fav}
        creator={data.creator}
        details={data.details}
        user={user}
      />
    </div>
  );
};

export default BidsDetail;
