import Layout from './Layout/Layout';
import { Route, NavLink, Routes } from 'react-router-dom';
import Cats from './Cats/Cats';
import MyCats from './MyCats/MyCats';
import '../components/AppStyle.css';
export const App = () => {
  return (
    <div className='wrapper'>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route index  element={<Cats />} />
          <Route index path="/cats" element={<Cats />} />
          <Route path="/myCats" element={<MyCats />} />
          <Route path="*" element={<p>not found</p>} />
        </Route>
      </Routes>
    </div>
      
    
  );
};
