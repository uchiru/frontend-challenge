// import './SavedCats.css';
// import React, { useEffect, useState } from 'react';

// function SavedCats() {

//   const [savedCats, setSavedCats] = useState([]);

//   useEffect(() => {
//     const savedCatsFromStorage = JSON.parse(localStorage.getItem('savedCats')) || [];
//     setSavedCats(savedCatsFromStorage);
//   }, []);

//   return (
//     <div className="cat-grid">
//         {savedCats.map((cat) => (
//           <div className="cat-card"  key={cat.catId}>
//             <img src={cat.url} alt="Cat"/>
//             <button className="heart-btn heart-btn_active"></button>
//           </div>
//         ))}
//     </div>
//   );
// }

// export default SavedCats;