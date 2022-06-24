import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import React from "react";
import {
  BrowserRouter, 
  Route,
  Routes
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import AllCats from "./components/AllCats";
import FavCats from "./components/FavCats";

function App() {
  const cookies = new Cookies();
  const [cats, setCats] = useState(cookies ? cookies.get('cookie-cats') : []);
  useEffect( () => {cookies.set('cookie-cats', cats, {path: '/'})}, [] );
  
  const handleLikeCat = (id) => {
    const updateCats = cats.map(cat => { 
      if (cat.id !== id) {
        return cat;
      }
      console.log(cat.isLiked)
      return { ...cat, isLiked: cat.isLiked ? false : true };
    });
    setCats(updateCats);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
            <Route path='allcats' element={<AllCats handleLikeCat={handleLikeCat} cats={cats} setCats={setCats} cookies={cookies} />} />
            <Route path='favscats' element={<FavCats handleLikeCat={handleLikeCat} favCats={cats.filter(cat => cat.isLiked)} />} />
          <Route 
            path='*'
            element={
              <main className='main'>
                <h1 className="descr">
                  There's nothing here!
                </h1>
              </main>
            }
          >
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;








































// WITH REACT-COOKIE
// *******************************

// function App() {

//   const [cats, setCats] = useState([]);
//   const [cookie, setCookie] = useCookies([]);




//   useEffect(()=>setCookie('cookie-cats', cats, {path: '/'}),[])

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Header />}>
//           <Route path='allcats' element={<MainTest cats={cats} setCats={setCats} setCookie={setCookie} />} />
//           <Route path='favscats' element={<FavCats />} />
//           <Route 
//             path='*'
//             element={
//               <main className='main'>
//                 <h1 className="descr">
//                   There's nothing here!
//                 </h1>
//               </main>
//             }
//           >
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
