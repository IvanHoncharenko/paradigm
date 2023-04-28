import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Page(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <h1>Hello world</h1>
      <Outlet />
    </div>
  );
}

export default Page;
