import { Fragment } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = (props) => {
  return (
    <Fragment>
      <div className="bg-[#FFFFFF]">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Layout;
